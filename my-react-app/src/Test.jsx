export default function Test({test1,isDone}){

if(isDone===true){
return <h2>{test1} is : Finishied </h2>
}else{

 return    <h2>{test1} is : Work On </h2>
}
  
}