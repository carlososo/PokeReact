import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { PokeContext } from "../context/PokeContext"
import { getSelectedPokemon } from "../../helpers/axiosHelper"
import "../styles/pokeCard.css"
import "../styles/onlyColors.css"
import { PokeStats } from "../components/PokeStats"
import { PokeType } from "../components/PokeType"

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
    <div className="grid grid-cols-1 mt-24 h-full">
      <div className="flex justify-center">
        <div className="bg-indigo-300 rounded-md relative w-1/2 p-5">
          <div className="
            rounded-full  border-2
          border-indigo-400 w-56 h-56 
            absolute custom-margin 
          bg-slate-50 border-solid
          ">
            <img 
              src={selectedPokemon.sprites?.front_default} 
              alt={selectedPokemon.name} 
              className="w-48 h-48 rounded-full  mx-auto my-auto"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{selectedPokemon.name}</h1>
          </div>
          <div className="flex flex-col items-center justify-center mt-5">
            <h1 className="text-2xl font-bold text-white mb-5">Types</h1>
            <div className="flex flex-row items-center justify-center">
              {selectedPokemon.types?.map((type, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <PokeType type={type.type} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-5">
            <h1 className="text-2xl font-bold text-white mb-5">Abilities</h1>
            <div className="flex flex-row items-center justify-center">
              {selectedPokemon.abilities?.map((ability, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <span className={`text-sm mr-2 type font-bold` }>
                    {ability.ability.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-5">
            <h1 className="text-2xl font-bold text-white mb-5">Stats</h1>
            <div className=" w-full">
              {selectedPokemon.stats?.map((stat, index) => (
                <PokeStats key={index} stat={stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}