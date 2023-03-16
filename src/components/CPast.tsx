import { Country } from "./country"

interface IProps {
  pastArray : Country[]
  title: string
}

export default function CPast ( {pastArray,title}: IProps){
  return (
    <>
      <ul>
        <p> {title}:</p>
        {pastArray.map(c => <li> {c.name} </li>)}
       </ul>
    </>
  )
}