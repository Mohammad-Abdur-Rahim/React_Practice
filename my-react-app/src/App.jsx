
import './App.css'

function App() {

  return (
    <>
      
      <h1 className='newcolor'>React Website Project .......</h1>
    <Device name="Desktop" price="90000" ></Device>
    <Device name="Mobile" price="40000" ></Device>
    <Device name="Tablet" price="20000" ></Device>
    <Device name="Watch" price="10000" ></Device>

    </>
  )
}
 function Device({name, price}) {
  return (
    <h2>Device is : {name} And Price : {price} </h2>
  )
 }
export default App
