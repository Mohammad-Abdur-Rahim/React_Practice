
import './App.css'

function App() {

  return (
    <>
      
      <h1 className='newcolor'>React Website Project .......</h1>
     <AddComponent></AddComponent>

    </>
  )
}
function AddComponent(){
  const add ={
    color:'yellow',
    border: '1px solid red',
    padding:'90px'
  }
  return <h1 style={add}>Add Somthging React Project </h1>
}

export default App
