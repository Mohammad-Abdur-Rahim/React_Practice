
import './App.css'


function App() {
  function handler(){
    alert('Clicked');
  }


  return (
    <>
      
      <h1 className='newcolor'>React Website Project .......</h1>
      <button onClick={handler}>Click me</button>
     

    </>
  )
}

export default App
