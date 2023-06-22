import { Navigation, PublicationHeaderContainer } from './styles'
import ExternalLinkIcon from '../../../../assets/icons/arrow-up-right-from-square-solid.svg'
import GithubIcon from '../../../../assets/icons/github-brands.svg'
import ChevronLeft from '../../../../assets/icons/chevron-left-solid.svg'
import CommentSolid from '../../../../assets/icons/comment-solid.svg'
import CalendarIcon from '../../../../assets/icons/calendar-day-solid.svg'
import { Link } from 'react-router-dom'
interface PublicationHeaderProps {
  url: string
  title: string
  publisherNickname: string
  elapsedTime: string
  comments: number
}

export function PublicationHeader({
  url,
  title,
  publisherNickname,
  elapsedTime,
  comments,
}: PublicationHeaderProps) {
  return (
    <PublicationHeaderContainer>
      <Navigation>
        <Link to="/">
          <img src={ChevronLeft} alt="Ícone de seta para a esquerda" />
          VOLTAR
        </Link>
        <Link to={url}>
          VER NO GITHUB
          <img src={ExternalLinkIcon} alt="Ícone: link externo" />
        </Link>
      </Navigation>
      <h1>{title}</h1>
      <div className="footer">
        <div>
          <img src={GithubIcon} alt="Ícone do Github" />
          {publisherNickname}
        </div>
        <div>
          <img src={CalendarIcon} alt="Ícone de calendário" />
          <span>{elapsedTime}</span>
        </div>
        <div>
          <img src={CommentSolid} alt="ícone para comentário" />
          {comments}
        </div>
      </div>
    </PublicationHeaderContainer>
  )
}
