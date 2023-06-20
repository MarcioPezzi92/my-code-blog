import { useContext } from 'react'
import {
  PublicationCard,
  PublicationsContainer,
  PublicationsHeader,
  PublicationsList,
  SearchBar,
} from './styles'
import { PublicationsContext } from '../../../../contexts/PublicationsContext'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// date-fns lib
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormType = z.infer<typeof searchFormSchema>

export function Publications() {
  const { publications, searchPublications } = useContext(PublicationsContext)

  const { register, handleSubmit } = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearch(data: SearchFormType) {
    await searchPublications(data.query)
  }

  const publicationsRender = publications ? (
    publications.map((publication) => {
      const createdAt = new Date(publication.created_at)
      const formatedDate = formatDistanceToNow(createdAt, {
        locale: ptBR,
        addSuffix: true,
      })

      const bodyAsHTML = publication.bodyAsHTML.slice(0, 232) + '...'

      return (
        <a href="" key={publication.id}>
          <PublicationCard>
            <div>
              <h3>{publication.title}</h3>
              <span>{formatedDate}</span>
            </div>
            <p>{bodyAsHTML}</p>
          </PublicationCard>
        </a>
      )
    })
  ) : (
    <span>Não encontrado</span>
  )

  return (
    <PublicationsContainer style={{ marginTop: '3rem' }}>
      <PublicationsHeader>
        <h2>Publicações</h2>
        <span>{publications.length} publicações</span>
      </PublicationsHeader>

      <form onSubmit={handleSubmit(handleSearch)}>
        <SearchBar placeholder="Buscar conteúdo" {...register('query')} />
        <button type="submit" hidden></button>
      </form>

      <PublicationsList>{publicationsRender}</PublicationsList>
    </PublicationsContainer>
  )
}
