export default function Input (){
  return (
    <>
    <input type="text" placeholder="Lägg till..." />
      <button>OK</button>
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