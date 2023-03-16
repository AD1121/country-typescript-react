import { useState } from "react"
import { Country } from "./country"

interface ICFuture {
  futureArray: Country[]
}

export default function CFuture ({futureArray} : ICFuture){

const [visible, setVisible] = useState(false)

  return (
    <>
      <ul>
        <p onClick={() => setVisible(!visible)}>Länder jag vill resa till:</p>
        {visible && futureArray.map(c => <li> {c.name} </li>)}
      </ul>
    </>
  )
}