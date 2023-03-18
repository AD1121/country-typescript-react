import { useState } from 'react'
import CFuture from './CFuture'
import CPast from './CPast'
import Input from './Input'
import {Country} from './country'
import './style.css'
import LisOfCountries from './ListOfCountries'

const pastArray = [
  new Country(1,'Kina', true),
  new Country(2,'Vietnam', true),
  new Country(3,'Norge', true),
  new Country(4,'Spanien', true)
]

const futureArray = [
  new Country(5,'USA', false),
  new Country(6,'Kambodya', false),
  new Country(7,'Kenya', false),
  new Country(8,'Danmark', false)
]

export default function Display(){
const [past, setPast] = useState(pastArray)
const [future, setFuture] = useState(futureArray)

  const title = 'Länder jag har rest till'

  const addCountry = (name: string) => {
    
  const newArray = [...future, {id: 10, name: name, visited: false}]
  setFuture(newArray)
  }

  const changeVisited = (id: number) => {
    // Location of the country
    const updateArray = future.map(country => {
      if(id === country.id) {
        return {...country, visited: !country.visited }
      } return country
    })
    setFuture(updateArray)
    console.log(updateArray);
    
  }

  const cPast = past.map((c) => <LisOfCountries key={c.id} name={c.name} id={c.id} changeVisited={changeVisited}></LisOfCountries>)

  const cFuture = future.map((c) => <LisOfCountries key={c.id} name={c.name} id={c.id} changeVisited={changeVisited}></LisOfCountries>)

  return (
    <>
      <div className="container">
        <div className ="search-container">
          <Input addCountry={addCountry}></Input>
        </div>
        <p>Länder jag har rest till:</p>
        {cPast}
        <p>Länder jag vill resa till:</p>
        {cFuture}
      </div>
    </>
  )
}