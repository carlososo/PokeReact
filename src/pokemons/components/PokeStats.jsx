import { useEffect, useState } from "react"


export const PokeStats = ({stat}) => {

  const [parsedStat, setParsedStat ] = useState(0)
  
  useEffect(() => {
    const statBase = stat?.base_stat
    const maxStat = 255
    const percent = (statBase * 100) / maxStat
    setParsedStat(percent)
  }, [stat])
  

  return (
    <>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-blue-700 dark:text-white">{stat.stat.name}</span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">{stat.base_stat}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-5">
        {/* <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${stat.base_stat *100 / 255}%`}}></div> */}
        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${parsedStat}%`}}></div>
      </div>
    </>
  )
}
