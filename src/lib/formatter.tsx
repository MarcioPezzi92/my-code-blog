import ReactMarkdown from 'react-markdown'
import ReactDomServer from 'react-dom/server'
import { formatDistanceToNow, isDate } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function formatArticle(markdown: string) {
  return <ReactMarkdown>{markdown}</ReactMarkdown>
}

export function formatPublicationDescription(markdown: string) {
  const htmlElement = <ReactMarkdown>{markdown}</ReactMarkdown>
  const htmlString = ReactDomServer.renderToString(htmlElement)
  const stringWithoutTags = htmlString
    .replace(/(<([^>]+)>)/gi, '')
    .replace(/&quot;/g, '"')
  return stringWithoutTags.slice(0, 232) + '...'
}

export function formatDate(date: Date): string {
  if (isDate(date))
    return formatDistanceToNow(date, { locale: ptBR, addSuffix: true })
  return ''
}
