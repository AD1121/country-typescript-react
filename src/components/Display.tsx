import CFuture from './CFuture'
import CPast from './CPast'
import Input from './Input'
import {Country} from './country'
import './style.css'

export default function Display(){

  const title = 'Länder jag har rest till'

  const pastArray = [
    new Country('Kina', true),
    new Country('Vietnam', true),
    new Country('Norge', true),
    new Country('Spanien', true)
  ]

  const futureArray = [
    new Country('USA', true),
    new Country('Kambodya', true),
    new Country('Kambodya', true),
    new Country('Danmark', true)
  ]
  return (
    <>
      <div className="container">
        <div className ="search-container">
          <Input></Input>
        </div>
        <CPast pastArray={pastArray} title={title}></CPast>
        <CFuture></CFuture>
      </div>
    </>
  )
}