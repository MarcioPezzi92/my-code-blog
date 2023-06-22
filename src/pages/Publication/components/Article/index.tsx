import hljs from 'highlight.js/lib/common'
import { formatArticle } from '../../../../lib/formatter'
import { ArticleContainer } from './styles'
import { useEffect } from 'react'

interface ArticleProps {
  body: string
}

export function Article({ body }: ArticleProps) {
  const jsxElement = formatArticle(body)

  useEffect(() => {
    hljs.safeMode()
    hljs.highlightAll()
  })

  return <ArticleContainer>{jsxElement}</ArticleContainer>
}
