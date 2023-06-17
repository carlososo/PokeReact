import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { PokeContext } from "../context/PokeContext"
import axios from "axios"

export const PokemonById = () => {
  
  const location = useLocation()

  const { pokemonSelected } = useContext(PokeContext)
  
  const [selectedPokemon, setSelectedPokemon] = useState({})

  useEffect(() => {
    if(Object.keys(pokemonSelected).length > 0){
      setSelectedPokemon(pokemonSelected)
    }else{
      const getPokemon = async () => {
        const { data } = await axios.get('https://pokeapi.co/api/v2'+location.pathname)
        console.log(data)
        setSelectedPokemon(data)
      }
      getPokemon()
    }
  }, [])
  return (
    <div>
      {
        JSON.stringify(selectedPokemon)
      }
    </div>
  )
}
