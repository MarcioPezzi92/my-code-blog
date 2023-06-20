import { Navigation, PublicationHeaderContainer } from './styles'
import ExternalLinkIcon from '../../../../assets/icons/arrow-up-right-from-square-solid.svg'
import GithubIcon from '../../../../assets/icons/github-brands.svg'
import ChevronLeft from '../../../../assets/icons/chevron-left-solid.svg'
import CommentSolid from '../../../../assets/icons/comment-solid.svg'
import CalendarIcon from '../../../../assets/icons/calendar-day-solid.svg'
import { useContext, useEffect } from 'react'
import { PublicationsContext } from '../../../../contexts/PublicationsContext'
import { Link, useParams } from 'react-router-dom'

export function PublicationHeader() {
  const { number } = useParams()
  const { selectedPublication, getPublicationByNumber } =
    useContext(PublicationsContext)

  useEffect(() => {
    getPublicationByNumber(Number(number))
  }, [number, getPublicationByNumber])

  if (selectedPublication) {
    return (
      <PublicationHeaderContainer>
        <Navigation>
          <Link to="/">
            <img src={ChevronLeft} alt="Ícone de seta para a esquerda" />
            VOLTAR
          </Link>
          <Link to="#">
            VER NO GITHUB
            <img src={ExternalLinkIcon} alt="Ícone: link externo" />
          </Link>
        </Navigation>
        <h1>{selectedPublication.title}</h1>
        <div className="footer">
          <div>
            <img src={GithubIcon} alt="Ícone do Github" />
            <span>nickname</span>
          </div>
          <div>
            <img src={CalendarIcon} alt="Ícone de calendário" />
            <span>tempo decorrido</span>
          </div>
          <div>
            <img src={CommentSolid} alt="ícone para comentário" />
            <span>comentários</span>
          </div>
        </div>
      </PublicationHeaderContainer>
    )
  } else {
    return <div>NADA ENCONTRADO</div>
  }
}
