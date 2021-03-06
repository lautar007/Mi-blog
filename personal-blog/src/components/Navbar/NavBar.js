import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';


export default function Navbar (){

const url = window.location.href;
console.log(url)

    return(
        <div className="navBar">
            <Link to= '/'>
            <img className="logo" alt="logo" src="https://i.pinimg.com/564x/f8/21/70/f82170862ad4e34a54e8ce63d26ec972.jpg"></img>
            </Link>
            <div className="presentacion">
                <h3 className="nombre">Lautaro Nuñez</h3>
                <p className="nombre">Página Oficial</p>
            </div>
            <div className="botonera">
                <Link to= '/about'>
                   <button className="boton2"> About Me </button>
                </Link>
                <button className="boton1" onClick={(e)=>{
                   url === 'http://localhost:3000/' ? window.scroll({top: 710, left:0, behavior:'smooth'})
                :
                window.location = 'http://localhost:3000/';
                }}> Projects </button>
                <Link to = '/resume'>
                <button className="boton2"> Resume </button>
                </Link>
            </div>
        </div>
    )
}