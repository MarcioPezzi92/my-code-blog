import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import { marked } from 'marked'

interface User {
  name: string
  bio: string
  company: string
  followers: string
}

interface Publication {
  id: number
  title: string
  body: string
  bodyAsHTML: string
  user: User
  created_at: string
}

interface PublicationsContextType {
  publications: Publication[]
  fetchAllPublications?: (user: string, repository: string) => Promise<void>
}

interface ProviderProps {
  children: ReactNode
}

const USER = 'marciopezzi92'
const REPOSITORY = 'my-code-blog'

function cleanMarkedText(text: string) {
  const markedText = marked.parse(text)
  const cleanString = markedText.replace(/(<([^>]+)>)/gi, '')
  return cleanString.replace(/&quot;/g, '"')
}

export const PublicationsContext = createContext({} as PublicationsContextType)

export function PublicationsProvider({ children }: ProviderProps) {
  const [publications, setPublications] = useState<Publication[]>([])

  const fetchAllPublications = useCallback(
    async (user: string, repository: string) => {
      try {
        const res = await api.get(`repos/${user}/${repository}/issues`)

        for (const item of res.data) {
          const data = cleanMarkedText(item.body)
          if (data) item.bodyAsHTML = data
          else item.bodyAsHTML = 'Falha ao tentar converter o texto!'
        }

        setPublications(res.data)
      } catch (error) {
        console.error(error)
      }
    },
    [],
  )

  useEffect(() => {
    fetchAllPublications(USER, REPOSITORY)
  }, [fetchAllPublications])

  return (
    <PublicationsContext.Provider value={{ publications }}>
      {children}
    </PublicationsContext.Provider>
  )
}
