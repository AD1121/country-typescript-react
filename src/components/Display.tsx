import CFuture from './CFuture'
import CPast from './CPast'
import Input from './Input'
import './style.css'

export default function Display(){
  return (
    <>
      <div className="container">
        <div className ="search-container">
          <Input></Input>
        </div>
        <CPast></CPast>
        <CFuture></CFuture>
      </div>
    </>
  )
}