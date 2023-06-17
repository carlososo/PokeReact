import { useContext, useEffect, useState } from "react"
import { PokeContext } from "../context/PokeContext"


export const Pagination = () => {
  const { count, limit, next, previous, getMorePokemonsAsync } = useContext(PokeContext)
  const [{from, to}, setNavigate] = useState({from:0, to:limit})

  useEffect(() => {
    next &&
    setNavigate({
      from: parseInt(next.split('offset=')[1].split('&')[0]) - limit,
      to: parseInt(next.split('offset=')[1].split('&')[0]) ,
    })
    window.scrollTo(0, 0)
  },[next])
  

  return (    
  <div className="flex flex-col items-center">

    <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing <span className="font-semibold text-gray-900">{ from }</span> to <span className="font-semibold text-gray-900 ">{ to }</span> of <span className="font-semibold text-gray-900">{ count }</span> Entries
    </span>

    <div className="inline-flex mt-2 xs:mt-0">
        <button
          disabled={ !previous } 
          className={`
            px-4 py-2 
            text-sm font-medium text-white 
            bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white
            ${ !previous && 'opacity-50 cursor-not-allowed' }
          `}
            onClick={ () => getMorePokemonsAsync( previous ) }
          >
            Prev
        </button>
        <button className="
          px-4 py-2 
          text-sm font-medium text-white 
          bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={ () => getMorePokemonsAsync( next ) }
          >
            Next
        </button>
    </div>
  </div>

  )
}
