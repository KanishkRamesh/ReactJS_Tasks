import React, { Component } from "react";

import Img from "./Image/P1.png";
import Img1 from "./Image/watch.png";
const Task1 = () => {
  return (
    <>
      {/* <h1>Class Components</h1> */}
      <div class="main">
        <h6 class="head">CONGRATULATIONS</h6>
        <div class="card">
          {/* <img src={Img} className="imgclass"/> */}
            <img src={Img} class="imgclass" alt="..." />        
            <h5 class="cardtitle">KANISHK R</h5>
            <p class="card-text">
              KG COLLEGE OF ARTS AND SCIENCE , COIMBATORE
            </p>
            <img src={Img1} class="imgclass" alt="..." />      
        </div>
      </div>
    </>
  );
};
export default Task1;