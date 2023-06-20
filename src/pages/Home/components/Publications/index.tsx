import { useContext } from 'react'
import {
  PublicationCard,
  PublicationsContainer,
  PublicationsHeader,
  PublicationsList,
  SearchBar,
} from './styles'
import { PublicationsContext } from '../../../../contexts/PublicationsContext'

// date-fns lib
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Publications() {
  const { publications } = useContext(PublicationsContext)

  return (
    <PublicationsContainer style={{ marginTop: '3rem' }}>
      <PublicationsHeader>
        <h2>Publicações</h2>
        <span>{publications.length} publicações</span>
      </PublicationsHeader>

      <SearchBar placeholder="Buscar conteúdo" />

      <PublicationsList>
        {publications.map((publication) => {
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
        })}
      </PublicationsList>
    </PublicationsContainer>
  )
}
