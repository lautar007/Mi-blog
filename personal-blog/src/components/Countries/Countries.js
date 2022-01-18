import React from "react";
import { Link } from "react-router-dom";
import './Countries.css'

export default function Countries (){

    const fecha = new Date();

    return(
        <div>
        <div className = 'fondo'>
            <h1 className= "proyects">FullStack Developer - Countries App</h1>
            <div className="images">
                <img className="screenshot" src="https://i.pinimg.com/564x/dc/b7/14/dcb71438dcac88b5ab2a2b7e410bd17f.jpg"></img>
                <img className="screenshot" src="https://i.pinimg.com/564x/55/e4/b2/55e4b2c3646831d3cb653e5a270a62f9.jpg"></img>
                <img className='screenshot' src="https://i.pinimg.com/564x/6f/b9/33/6fb93365cf6d512398535678cc693be0.jpg"></img>
            </div>
            <div className="detalle">
                <h4>- Proyecto individual de creación de una Sinlge Page Application para la creación de actividades turísticas y la posibilidad de adjudicarlos a diferentes países.</h4>
                <p>Se desarrolló una Data Base usando la tecnología de PostgreSQL.
                   Se trabajó con una API externa como fuente de información.
                   Para crear la app se usó: Lenguaje JavaScript, NodeJS, Express, Sequelize, React-Redux y CSS puro.</p>
                <h4>Algunas funcionalidades:</h4>
                <p>-Posibilidad de visualizar los países en orden alfabético y por cantidad de población.</p>
                <p>-Posibilidad de visualizar los países por continente y por actividad turística.</p>
                <p>-Posibilidad de buscar un país mediante una barra de búsqueda.</p>
                <p>-Posibilidad de crear una actividad con su dificultad, duración y temporada, y asignarla a uno o más países.</p>
                <p>-Posibilidad de visualizar los datos específicos de cada país y sus actividades asignadas.</p>
                <h4>El proyecto tuvo una duración de 3 semanas.</h4>
                <div className="botonera1">
                    <a className="visita" href="https://pi-countries-henry.vercel.app/">Visitar</a>
                    <a className="visita" href="https://github.com/lautar007/PI-countries">Repositorio</a>
                </div>
            </div>
            </div>
            <div className="pie">
                <div>
                    <div className="ig">
                        <img className="icon" src="https://i.pinimg.com/564x/9b/92/44/9b9244c5bfb46b16a210c4d9fd41598a.jpg"></img>
                        <a className="href" href="https://www.instagram.com/lautar0_07/">@lautar0_07</a>
                    </div>
                    <div className="ig">
                        <img className="icon" src="https://i.pinimg.com/564x/2b/e7/ce/2be7cee4fe404b8fa86d31d139fab757.jpg"></img>
                        <a className="href" href="https://www.linkedin.com/in/lautaro-nu%C3%B1ez-117a3b18b/">Lautaro Nuñez</a>
                    </div>
                    <div className="ig">
                        <img className="icon" src="https://i.pinimg.com/564x/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.jpg"></img>
                        <a className="href" href="https://github.com/lautar007">Lautaro Nuñez</a>
                    </div>
                </div>
                <div className="fecha">
                    <p>{fecha.toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    )
}