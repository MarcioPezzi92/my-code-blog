import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import { marked } from 'marked'
import { AxiosResponse } from 'axios'

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
  fetchPublications: (
    user: string,
    repository: string,
    query?: string,
  ) => Promise<void>
  searchPublications: (query: string) => void
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

  const fetchPublications = useCallback(
    async (user: string, repository: string, query?: string) => {
      let res: AxiosResponse<Publication[], any>

      try {
        if (query) {
          console.log('query', query)
          res = await api.get('search/issues', {
            params: {
              q: `${query}%20repo:${USER}/${REPOSITORY}`,
            },
          })
          console.log('res', res)
        } else {
          res = await api.get(`repos/${user}/${repository}/issues`)
        }

        if (res.data.length) {
          for (const item of res.data) {
            const data = cleanMarkedText(item.body)
            if (data) item.bodyAsHTML = data
            else item.bodyAsHTML = 'Falha ao tentar converter o texto!'
          }
          setPublications(res.data)
        } else {
          setPublications([])
        }
      } catch (error) {
        console.error(error)
      }
    },
    [],
  )

  const searchPublications = async (query: string) => {
    await fetchPublications(USER, REPOSITORY, query)
  }

  useEffect(() => {
    fetchPublications(USER, REPOSITORY)
  }, [fetchPublications])

  return (
    <PublicationsContext.Provider
      value={{ publications, fetchPublications, searchPublications }}
    >
      {children}
    </PublicationsContext.Provider>
  )
}
