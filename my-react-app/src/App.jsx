
import './App.css'
import Test from './Test'
import MapRen from './MapRen'

function App() {
  const nameList =['Md','Abdur','rakib','sakib','joshim']

  return (
    <>
      
      <h1 className='newcolor'>React Website Project .......</h1>
      <Test test1='React' isDone={true}></Test>
      <Test test1='Node JS ' isDone={false}></Test>
      <MapRen name='Md'></MapRen>
      {
        nameList.map(nameList=><MapRen name={nameList}></MapRen>)
      }

    </>
  )
}

export default App
