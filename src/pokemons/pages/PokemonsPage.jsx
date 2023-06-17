import { useContext } from "react"
import { PokeContext } from "../context/PokeContext"
import { PokeList } from "../components/PokeList"
import { Pagination } from "../components/Pagination"

export const PokemonsPage = () => {
  const { results } = useContext(PokeContext)

  return (
    <>
      <PokeList results={results}/>
      <Pagination/>
    </>
    
  )
}
