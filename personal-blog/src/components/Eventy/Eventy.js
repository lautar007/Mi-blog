import React from "react";
import { Link } from "react-router-dom";

export default function Eventy (){

    const fecha = new Date();

    return(
        <div>
            <div className = 'fondo'>
            <h1 className= "proyects">FullStack Developer - Eventy</h1>
            <div className="images">
                <img className="screenshot" src="https://i.pinimg.com/564x/cc/63/d3/cc63d3aea1eccf6a83908cf6db799ae3.jpg"></img>
                <img className="screenshot" src="https://i.pinimg.com/564x/a5/a8/e9/a5a8e993394375206e26e1f994cac68e.jpg"></img>
                <img className='screenshot' src="https://i.pinimg.com/564x/91/9a/b6/919ab60430aeecabb1c12a03084c97d3.jpg"></img>
            </div>
            <div className="detalle">
                <h4>- Group project to create a social network for the creation and promotion of social and sporting events and the possibility of finding nearby events.</h4>
                <p>A Data Base was developed using MongoDB technology.
The Mercado Pago payment gateway was implemented to handle the purchase and sale of tickets to events.
The Google Maps mapping system was integrated to have the location of the events as well as the user in real time.
Disqus was integrated into the detail of the events so that the user can comment on them.
Also, a Discord server was created to find other people with common interests.
To create the app, the following were used: JavaScript language, NodeJS, Express, Sequelize, React-Redux and pure CSS.</p>
                <h4>Some functionalities:</h4>
                <p>-Categorization of events according to their class: party, meeting, concert; or for sports.</p>
                <p>-Possibility of locating events on a map and finding events near my current location.</p>
                <p>-Possibility of creating free or paid events for promotion and ticket sales.</p>
                <p>-Possibility to follow other users to get a notification if a new event uploads.</p>
                <p>-Possibility of viewing the specific data of each event, its location, date, images and who is organizing it.</p>
                <h4>The project lasted 3 weeks.</h4>
                <div className="botonera1">
                    <a className="visita" href="https://eventy-main.vercel.app/">Visitar</a>
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