import { useState } from 'react'
import CFuture from './CFuture'
import CPast from './CPast'
import Input from './Input'
import {Country} from './country'
import './style.css'

const pastArray = [
  new Country('Kina', true),
  new Country('Vietnam', true),
  new Country('Norge', true),
  new Country('Spanien', true)
]

const futureArray = [
  new Country('USA', true),
  new Country('Kambodya', true),
  new Country('Kenya', true),
  new Country('Danmark', true)
]

export default function Display(){
const [past, setPast] = useState(pastArray)
const [future, setFuture] = useState(futureArray)

  const title = 'Länder jag har rest till'

  return (
    <>
      <div className="container">
        <div className ="search-container">
          <Input></Input>
        </div>
        <CPast pastArray={past} title={title}></CPast>
        <CFuture futureArray={future}></CFuture>
      </div>
    </>
  )
}