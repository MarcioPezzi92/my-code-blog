import { useContext } from 'react'
import { PublicationCard, PublicationsList } from './styles'
import { PublicationsContext } from '../../../../contexts/PublicationsContext'

// date-fns lib
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom'
import { formatPublicationDescription } from '../../../../lib/formatter'

export function Publications() {
  const { publications } = useContext(PublicationsContext)

  const publicationsRender = publications.map((publication) => {
    const createdAt = new Date(publication.created_at)
    const formatedDate = formatDistanceToNow(createdAt, {
      locale: ptBR,
      addSuffix: true,
    })

    const publicationDescription = formatPublicationDescription(
      publication.body,
    )

    return (
      <Link to={`publication${publication.number}`} key={publication.number}>
        <PublicationCard>
          <div>
            <h3>{publication.title}</h3>
            <span>{formatedDate}</span>
          </div>
          <p>{publicationDescription}</p>
        </PublicationCard>
      </Link>
    )
  })

  return (
    <PublicationsList>
      {publications ? (
        publicationsRender
      ) : (
        <p>Erro ou publicações não encontradas...</p>
      )}
    </PublicationsList>
  )
}
