import { Link } from 'react-router-dom'
import pokemon from '../assets/pokemon.png'

export const NavBar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/">
            <img src={pokemon} alt="pokemon" className="w-30 h-10 mr-2"/>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Opciones</title>
              <path d="M0 0h20v20H0z" fill="none"/>
              <path
                d="M0 4h20v1.5H0zM0 9h20v1.5H0zM0 14h20v1.5H0z"/>
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow"/>
          <div>
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Inicio
            </Link>
            <Link to="search" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Buscar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
