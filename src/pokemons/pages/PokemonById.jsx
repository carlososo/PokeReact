import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { PokeContext } from "../context/PokeContext"
import { getSelectedPokemon } from "../../helpers/axiosHelper"
import "../styles/pokeCard.css"

export const PokemonById = () => {
  
  const location = useLocation()

  const { pokemonSelected, setPokemnon } = useContext(PokeContext)
  
  const [selectedPokemon, setSelectedPokemon] = useState({})

  useEffect(() => {
    if(Object.keys(pokemonSelected).length > 0){
      setSelectedPokemon(pokemonSelected)
    }else{
      const getPokemon = async () => {
        const { data } = await getSelectedPokemon(location.pathname)
        setPokemnon(data)
      }
      getPokemon()
    }
  }, [pokemonSelected])

  return (
    <div className="grid grid-cols-1 mt-24">
      <div className="flex justify-center">
        <div className="bg-cyan-400 rounded-md relative w-1/2 p-5">
          <div className="
            rounded-full  border-2
          border-green-400 w-56 h-56 
            absolute custom-margin 
          bg-slate-50 border-solid
          ">
            <img 
              src={selectedPokemon.sprites?.other.dream_world.front_default} 
              alt={selectedPokemon.name} 
              className="w-48 h-48 rounded-full  mx-auto my-auto"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{selectedPokemon.name}</h1>
          </div>
          <code>
            <pre>
              {JSON.stringify(selectedPokemon, null, 2)}
            </pre>
          </code>
        </div>
      </div>
    </div>
  )
}