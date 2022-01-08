import React from "react";
import './About.css';

export default function About (){

    return(
        <div className="fondo2">
            <div className="cont-sobre">
                <div className="cont-retrato">
                    <img className="retrato" src="https://i.pinimg.com/564x/47/a6/8b/47a68b9482e80fe26a93fda1ca4c3f4c.jpg"></img>
                    <div className="label">
                       <h1>Lautaro Nuñez</h1>
                       <h3>Más acerca de mí.</h3>
                       <h4>More about me.</h4>
                    </div>
                </div>
                <img className="dibujo" src="https://i.pinimg.com/564x/c5/0f/cc/c50fccdc63b4e71c5df6dfbb99aa1552.jpg"></img>
            </div>
        </div>
    )
}