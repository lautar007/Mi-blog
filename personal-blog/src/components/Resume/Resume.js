import React from "react";
import { Link } from "react-router-dom";
import './Resume.css';

export default function Resume(){

  const fecha = new Date();

    return (
        <div>
            <div className="fondo3">
              <h1 className="proyects">Resume</h1>
            </div>
          <object
          data={require('./CVP-ENGLISHv2.pdf')}
          type="application/pdf"
          width= '100%'
          height= '500px'
          />

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