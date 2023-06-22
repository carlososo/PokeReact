import { useContext, useState } from "react"
import { PokeContext } from "../context/PokeContext"
import { useForm } from "../../hooks/useForm"
import { PokeList } from "../components/PokeList"


export const PokemonSearch = () => {

  const { allPokemons } = useContext( PokeContext)

  const [filteredPokemons, setFilteredPokemons] = useState([])

  const { onInputChange, onResetForm, floating_pokemon} =useForm({floating_pokemon:''})


  const handleSubmit = (e) => {
    e.preventDefault()
    const pokemons = allPokemons.filter( pokemon => pokemon.name.includes(floating_pokemon))
    setFilteredPokemons(pokemons)
    onResetForm()
  }

  return (
    <div className="flex flex-col w-full h-full container mx-16 mt-14">
      <form
        onSubmit={handleSubmit}
      >
        <div className="relative z-0 w-full mb-6 group">
          <input 
            type="text" 
            name="floating_pokemon" 
            id="floating_pokemon" 
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-600 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " 
            required 
            autoComplete="off"
            onChange={onInputChange}
            value={floating_pokemon}
            />
          <label htmlFor="floating_pokemon" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Pokemon</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
      </form>
      {
        filteredPokemons.length === 0 ? (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <h2 className="text-2xl font-bold text-gray-800">No se encontraron resultados</h2>
          </div>
        ):
        <PokeList results={filteredPokemons}/>

      }
    </div>
  )
}
