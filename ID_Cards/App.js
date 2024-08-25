import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';
import './App.css';
import { Main } from './Components/Main';
import Data from './Components/User.json';

function App() {
  // const[count,setCount]=useState(0);
  // const inccount =() =>{
  //   setCount(count+1); //(0+1)
  // }
  return (
    <>
    <Main items={Data}/>
    {/* <h1>Count:{count}</h1>
   <Demo inc={inccount}/> */}
    </>
  );
}

export default App;