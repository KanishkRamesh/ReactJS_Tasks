import React from 'react'
import Maincss from '../Main.module.css';


export function Main(props) {
  return (
    <>
    <div className={Maincss.head}><h1>IDENTITY CARD'S WITH PORTFOLIO</h1>
    <div className={Maincss.container} >
        {
            
    //  <h1>Collecting Data's</h1> 
     props.items.map((val,index)=>(
        <div  className={Maincss.content} key={index}>
            <img src={val.image} height={"300px"}/>
            <h1>{val.name}</h1>
            <h2>Rollno : {val.rollno}</h2>
            <h2>Class : {val.class}</h2>
            <a href={val.link} target="_blank" rel="noopener noreferrer">
        <button className={Maincss.btn}>View Resume</button>
      </a>
        </div>
     ))
    }
    </div>
    </div>
    </>
  );
}