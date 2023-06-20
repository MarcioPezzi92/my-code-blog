import { marked } from 'marked'

export function formatPublicationDescription(markdown: string) {
  const htmlString = marked.parse(markdown, { mangle: false, headerIds: false })
  const stringWithoutTags = htmlString
    .replace(/(<([^>]+)>)/gi, '')
    .replace(/&quot;/g, '"')
  return stringWithoutTags.slice(0, 232) + '...'
}
