import React from "react";
import './Landing.css';
import Typed from 'typed.js';
import { Link } from "react-router-dom";
import Eventy from "../Eventy/Eventy";


export default function Landing(){

const fecha = new Date();
console.log(fecha.toLocaleDateString())

const el = React.useRef(null);
  // Create reference to store the Typed instance itself
const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
    	strings: ['BackEnd Developer',
        'FrontEnd Developer',
        '<strong>FullStack Developer</strong>.',
      ],
      typeSpeed: 100,
      backSpeed: 50,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])

    return(
      <div className="fondo">
        <div className="Landing">
            <div className="target">
               <h1 className="titulo">Lautaro Nuñez</h1>
               <div className="titulo2">
                 <span style={{ whiteSpace: 'pre' }} ref={el} />
               </div>
               <div className="cont-about">
                 <h1>Acerca de mí - About me:</h1>
                 <h3>Tengo 26 años, soy de Argentina. Hace un tiempo comencé a interesarme por el mundo de la programación. Encaro cada proyecto de forma metódica y me gustan los diseños eficientes y atractivos para el usuario. Te invito a que conozcas más sobre mis trabajos!</h3>
                 <h4>I'm a 26 years old argentinian. A while ago I start to get into the world of development. I took  every proyect methodically and I like efficient desings, attractive to the users. I invite you to know more about my jobs!</h4>
               </div>
            </div>
            <div>
              <img src="https://i.pinimg.com/564x/cc/61/c5/cc61c56a04700b04b7a867a0afd72021.jpg"></img>
            </div>
        </div>
        <h1 className="proyects">Proyectos</h1>
        <div className="proyect-grid">

          <div className="proyect-1">
            <img className="images" src="https://i.pinimg.com/564x/dc/b7/14/dcb71438dcac88b5ab2a2b7e410bd17f.jpg"></img>
            <h3 className="proyect-text">|Académica| FullStack Developer - Countries App</h3>
            <p className="proyect-text">- Proyecto individual de creación de una Sinlge Page Application para la creación de actividades turísticas y la posibilidad de adjudicarlos a diferentes países.</p>
            <div className="links">
              <a className="visit" href="https://pi-countries-henry.vercel.app/">Visitar</a>
              <Link to='/countries'>
              <button className="detail">Detalle / Detail</button>
              </Link>
            </div>  
          </div>
          
          <div className="proyect-1">
            <img className="images" src="https://i.pinimg.com/564x/cc/63/d3/cc63d3aea1eccf6a83908cf6db799ae3.jpg"></img>
            <h3 className="proyect-text">|Académico| Fullstack developer - Eventy</h3>
            <p className="proyect-text">Proyecto grupal sobre una red social para la creación y promoción de eventos sociales y deportivos.</p>
            <div className="links">
              <a className="visit" href="https://eventy-main.vercel.app/">Visitar</a>
              <Link to='/eventy'>
              <button className="detail">Detalle / Detail</button>
              </Link>
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