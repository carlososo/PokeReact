import { types } from "../../types/types";

const initialState = {
  results: [],
  previous: null,
  next: null,
  limit: 30,
  pokemonSelected: {},
}

export const pokeReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.getPokemons:
      return {
        ...state,
        ...action.payload,
      }
      case types.setPokemonSelected:{
        return {
          ...state,
          pokemonSelected: action.payload
        }
      }
    default:
      return state;
  }

}