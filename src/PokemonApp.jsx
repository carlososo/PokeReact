import { PokeProvider } from "./pokemons/context/PokeProvider"
import { PokeRouter } from "./pokemons/routes/PokeRouter"

export const PokemonApp = () => {

  return (
    <PokeProvider>
      <PokeRouter/>
    </PokeProvider>
  )
}


