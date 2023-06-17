import axios from "axios";
import { useContext, useMemo, useState } from "react";
import "../styles/typeColors.css";
import { useNavigate } from "react-router-dom";
import { PokeContext } from "../context/PokeContext";


export const PokeItem = ({ result }) => {
  const { setPokemnon } = useContext(PokeContext)
  const { url } = result
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const getPokemon = async () => {
    setLoading(true)
    const { data } = await axios.get(url)
    setPokemon(data)
    setLoading(false)
  }

  const navigateToPokemon = () => {
    setPokemnon(pokemon)
    navigate(`/pokemon/${name}`)
  }

  useMemo(() => {
    if(result){
      getPokemon()
    }
  }, [result])


  
  const { name, types, sprites } = pokemon

  return (
    <div 
      className="
        flex flex-col 
        items-center justify-center 
        w-64 h-64 p-4 m-4 
        bg-gray-200
        rounded-lg shadow-lg
        cursor-pointer
        "
        
        onClick={() => navigateToPokemon(`${name}`)}
        >
      { loading ? 
        (
        <div className="flex flex-col items-center justify-center w-48 h-48">
          <div className="w-48 h-48 animate-pulse bg-gray-400 rounded-lg"></div>
        </div>
        )  
      :
      (
        <>
          <div className="flex flex-col items-center justify-center w-48 h-48">
            <img src={sprites?.front_default} alt={name} className="w-48 h-48" />
          </div>
          <div className="flex flex-col items-center justify-center w-48 h-48">
            <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
            <div className="flex flex-row items-center justify-center w-48 h-48">
              {types?.map(({ type }, index) => (
                  <span key={index} className={`text-sm mr-2 type font-bold ${type.name}` }></span>
                
              ))}
            </div>
          </div> 
        </>
      )
      
      }
    </div>

    
  )
}

//tailwind like buttons rounded 