import React from "react";
import { Link } from "react-router-dom";
import port from "./image/p2.png";

export function Menu(){
    return(
        <>
        <header className="tp1">
            <div class="logo" id="top">
                <img src={port} alt=""/>
            </div>
            <table>
                
                <th> <Link to='/'><h3 className="nav1">Home</h3></Link> </th>
                
                <th> <Link to='/About'><h3 className="nav1">About</h3></Link> </th>
                <th> <Link to='/Skills'><h3 className="nav1">Skills</h3></Link> </th>
                <th> <Link to='/Projects'><h3 className="nav1">Projects</h3></Link> </th>
                <th> <Link to='/Contact'><h3 className="nav1">Contact</h3></Link> </th>
            </table>
            
        </header>
        </>
    )
}