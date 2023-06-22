import "../styles/typeColors.css";

export const PokeType = ({type}) => {
  return (
    <span className={`text-sm mr-2 mb-5 type font-bold ${type.name}` }></span>
  )
}