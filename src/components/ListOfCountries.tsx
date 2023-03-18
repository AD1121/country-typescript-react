import { useState } from "react"
import { Country } from "./country"

interface ILisOfCountries {
  name: string
  id: number
  changeVisited: (id: number) => void
}

export default function LisOfCountries ({name, id, changeVisited}: ILisOfCountries){
  return (
    <>
      <ul>
         <li onClick={() => changeVisited(id)}>{name}</li>
       </ul>
    </>
  )
}