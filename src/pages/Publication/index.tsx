import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const USER = 'marciopezzi92'
const REPOSITORY = 'my-code-blog'

export function PublicationPage() {
  const { publicationNumber } = useParams()
  const [publication, setPublication] = useState()

  console.log('publicationNumber', publicationNumber)

  async function getPublicationByNumber(publicationNumber: number) {
    try {
      const res = await api.get(
        `/repos/${USER}/${REPOSITORY}/issues/${publicationNumber}`,
      )
      console.log(res)
      setPublication(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPublicationByNumber(Number(publicationNumber))
  }, [])

  return (
    <>
      <div>aqui</div>
    </>
  )
}
