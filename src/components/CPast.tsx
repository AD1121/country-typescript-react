import { useState } from "react"
import { Country } from "./country"

interface ICPast {
  pastArray : Country[]
  title: string
}

export default function CPast ( {pastArray,title}: ICPast){

  const [visible, setVisible] = useState(false)

  return (
    <>
      <ul>
        <p onClick={() => setVisible(!visible)}> {title}:</p>
        {pastArray.map(c => <li> {c.name} </li>)}
       </ul>
    </>
  )
}