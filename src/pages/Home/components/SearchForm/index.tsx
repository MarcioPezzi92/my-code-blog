import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { PublicationsHeader, SearchBar, SearchFormContainer } from './styles'
import { useContext } from 'react'
import { PublicationsContext } from '../../../../contexts/PublicationsContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormType = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { publications, fetchPublications } = useContext(PublicationsContext)
  const { register, handleSubmit } = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearch(data: SearchFormType) {
    await fetchPublications(data.query)
  }

  return (
    <SearchFormContainer>
      <PublicationsHeader>
        <h2>Publicações</h2>
        <span>{publications.length} publicações</span>
      </PublicationsHeader>

      <form onSubmit={handleSubmit(handleSearch)}>
        <SearchBar placeholder="Buscar conteúdo" {...register('query')} />
        <button type="submit" hidden></button>
      </form>
    </SearchFormContainer>
  )
}
