import './style.css'

export default function Display(){
  return (
    <>
    <div className="container">
      <div className ="search-container">
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
</div>
<ul>
 <p>Länder jag har rest till:</p>
 <li>- Norge</li>
 <li>- Kina</li>
 <li>- Vietnam</li>
 <li>- Spanien</li>
 </ul>
 <ul>
 <p>Länder jag vill resa till:</p>
 <li>- USA</li>
 <li>- Kambodya</li>
 <li>- Kenya</li>
 <li>- Danmark</li>
</ul>
</div>
    </>
  )
}