import { PokeItem } from "./PokeItem"


export const PokeList = ({ results }) => {
  return (
    <div 
    className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
      {
        results ?
        (results.map( result =>(
          <PokeItem result={result} key={result.name}/>
        )))
        :
        (<p>Cargando...</p>)
      }
    </div>
  )
}
