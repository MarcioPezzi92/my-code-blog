import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface Publication {
  number: number
  title: string
  body: string
  created_at: string
}

interface GetPublicationsResponse {
  items: Publication[]
}

interface PublicationsContextType {
  publications: Publication[]
  fetchPublications: (query?: string) => Promise<void>
}

interface ProviderProps {
  children: ReactNode
}

const USER = 'marciopezzi92'
const REPOSITORY = 'my-code-blog'

export const PublicationsContext = createContext({} as PublicationsContextType)

export function PublicationsProvider({ children }: ProviderProps) {
  const [publications, setPublications] = useState<Publication[]>([])

  const fetchPublications = useCallback(async (query?: string) => {
    try {
      const { data } = await api.get<GetPublicationsResponse>('search/issues', {
        params: {
          q: query
            ? `${query} repo:${USER}/${REPOSITORY}`
            : `is:issue repo:${USER}/${REPOSITORY}`,
        },
      })

      if (data.items.length) {
        setPublications(data.items)
      } else {
        setPublications([])
      }
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    fetchPublications()
  }, [fetchPublications])

  return (
    <PublicationsContext.Provider
      value={{
        publications,
        fetchPublications,
      }}
    >
      {children}
    </PublicationsContext.Provider>
  )
}
