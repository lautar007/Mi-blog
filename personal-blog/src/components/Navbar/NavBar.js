import React from "react";
import './NavBar.css';


export default function Navbar (){
    return(
        <div className="navBar">
            <div className="presentacion">
                <h3 className="nombre">Lautaro Nuñez</h3>
                <p className="nombre">Página Oficial</p>
            </div>
            <div className="botonera">
                <button className="boton1"> About Me </button>
                <button className="boton1"> Projects </button>
                <button className="boton1"> Resume </button>
            </div>
        </div>
    )
}