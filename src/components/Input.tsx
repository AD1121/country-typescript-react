import { useState } from "react"

interface IInput {
  addCountry: (name: string) => void
}

export default function Input ({addCountry} : IInput){

  const [name, setName] = useState('')

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <>
    <input 
      type="text" 
      placeholder="Lägg till..." 
      onChange={handleChange}
    />
      <button onClick={() => addCountry(name)}>OK</button>
      <div className ="checkbox">
        <input type="checkbox" />
        Vill resa
      </div>
      <div className="checkbox">
        <input type="checkbox" />
        Har rest
      </div>
    </>
  )
}