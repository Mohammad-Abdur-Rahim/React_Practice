
import './App.css'


function App() {
  const handler=()=>{
    alert('Clicked');
  }
  const add=(num)=>{
    alert(5 + num);
  }


  return (
    <>
      
      <h1 className='newcolor'>React Website Project .......</h1>
      <button onClick={handler}>Click me</button>
      <button onClick={()=>add(3)}>Add</button>
     

    </>
  )
}

export default App
