/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Article } from './components/Article'
import { PublicationHeader } from './components/Header'
import { api } from '../../lib/axios'
import { formatDate } from '../../lib/formatter'

interface Publication {
  title: string
  publisherNickname: string
  updatedAt: Date
  url: string
  comments: number
  body: string
}

const USER = 'marciopezzi92'
const REPOSITORY = 'my-code-blog'

export function PublicationPage() {
  const { publicationNumber } = useParams()
  const [publication, setPublication] = useState({} as Publication)

  async function getPublicationByNumber(publicationNumber: number) {
    try {
      const res = await api.get(
        `/repos/${USER}/${REPOSITORY}/issues/${publicationNumber}`,
      )
      if (res.status === 200) {
        const { title, body, comments, updated_at, html_url, user } = res.data
        setPublication({
          title,
          body,
          comments,
          updatedAt: new Date(updated_at),
          url: html_url,
          publisherNickname: user.login,
        })

        console.log(res)
      } else {
        throw new Error('Erro na requisição à API - STATUS: ' + res.status)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPublicationByNumber(Number(publicationNumber))
  }, [publicationNumber])

  const { body, comments, publisherNickname, title, updatedAt, url } =
    publication

  const elapsedTime: string = formatDate(updatedAt)

  console.log(elapsedTime)

  return (
    <div>
      <PublicationHeader
        url={url}
        title={title}
        publisherNickname={publisherNickname}
        elapsedTime={elapsedTime}
        comments={comments}
      />
      <Article body={body} />
    </div>
  )
}
