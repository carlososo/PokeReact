import { Navigate, Route, Routes } from "react-router-dom";
import { PokemonsPage, PokemonById } from "../pages";
import { PokemonSearch } from "../pages/PokemonSearch";
import { NavBar } from "../../components/NavBar";

export const PokeRouter = () => {
  return (
    <>
      <NavBar/>
      <div className="container mx-auto">
        <Routes>
          <Route path="pokemon/:PokeId" element={<PokemonById/>} />
          <Route path="search" element={<PokemonSearch/>} />
          <Route path="/" element={<PokemonsPage/>} />
          
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </>
  )
}
