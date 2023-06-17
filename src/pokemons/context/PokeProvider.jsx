import { useEffect, useReducer } from "react";
import { pokeReducer } from "./PokeReducer";
import { PokeContext } from "./PokeContext";
import { getMorePokemons, getPokemons } from "../../helpers/axiosHelper";
import { types } from "../../types/types";

const initialState = {
  results: [],
  previous: null,
  next: null,
  limit: 20,
  pokemonSelected: {},
}


export const PokeProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(pokeReducer, initialState );
  const limit = 20
  useEffect(() => {
    getPokemonsAsync()
  
  }, [])

  const getPokemonsAsync = async () => {
    const { data } = await getPokemons(limit)
    const { previous, next, results, count } = data
    dispatch({
      type: types.getPokemons,
      payload: {
        next,
        previous,
        results,
        count, 
        limit
      }
    })
  }

  const getMorePokemonsAsync = async ( url ) =>{
    const { data } = await getMorePokemons( url )
    const { previous, next, results, count } = data
    dispatch({
      type: types.getPokemons,
      payload: {
        next,
        previous,
        results,
        count, 
        limit,
      }
    })
  }

  const setPokemnon = ( pokemon ) => {
    dispatch({
      type: types.setPokemonSelected,
      payload: pokemon
    })
  }
  

  return (
    <PokeContext.Provider value={{ 
      ...authState ,
      getMorePokemonsAsync,
      setPokemnon
    }}>
      {children}
    </PokeContext.Provider>
  )
}