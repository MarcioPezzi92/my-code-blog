import { useContext } from 'react'
import { PublicationCard, PublicationsList } from './styles'
import { PublicationsContext } from '../../../../contexts/PublicationsContext'
import { Link } from 'react-router-dom'
import {
  formatDate,
  formatPublicationDescription,
} from '../../../../lib/formatter'

export function Publications() {
  const { publications } = useContext(PublicationsContext)

  const publicationsRender = publications.map((publication) => {
    const createdAt = new Date(publication.created_at)
    const elapsedTime: string = formatDate(createdAt)

    const publicationDescription = formatPublicationDescription(
      publication.body,
    )

    return (
      <Link to={`publication/${publication.number}`} key={publication.number}>
        <PublicationCard>
          <div>
            <h3>{publication.title}</h3>
            <span>{elapsedTime}</span>
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
