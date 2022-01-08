import React from "react";
import './About.css';

export default function About (){
    console.log(window.location.href)

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
            <div className = "cont-bio">
                <div className="cont-text">
                    <h1>Español</h1>
                    <h4>Nací en Corrientes Capital, Argentina. Estudié la carrera de cine y televisión en la Universidad Nacional de Córdoba</h4>
                    <h4>Me gradué de Técnico productor audiovisual en el 2019</h4>
                    <h4>En el 2020 me dediqué ha hacer animaciones y estudiar coctelería, llegando a trabajar como bartender la primera mitad del 2021</h4>
                    <h4>Con la intención de darle un nuevo sentido a mi trabajo, ingresé en un bootcamp de programación y aprendí algunas tecnologías que me permitieron explorar nuevas ideas y desafíos.</h4>
                    <h4>Tengo un buen conocimiento de inglés. Me se comunicar de manera entendible y practico mi vocabulario traduciendo libros al castellano.</h4>
                    <h4>Me apasiona el cine y la música. Me gustan la animación para adultos y me entusiasma realizar trabajos en estos campos, aunque no sean tan rentables.</h4>
                    <h4>Por último, También soy escritor. Tengo dos libros escritos y muchos cuentos desperdigados. Algunos han ganado premios. Siempre intento darme un tiempo para continuar con mis escrituras y si lees esto, seguramente estoy en algún nuevo relato.</h4>
                </div>
                <div className="cont-text">
                    <h1>English</h1>
                    <h4>I was born in Corrientes Capital, Argentina. I studied film and television at the National University of Córdoba</h4>
                    <h4>I graduated as an Audiovisual Producer Technician in 2019</h4>
                    <h4>In 2020 I dedicated myself to making animations and studying cocktails, getting to work as a bartender in the first half of 2021</h4>
                    <h4>With the intention of giving new meaning to my work, I entered a coding bootcamp and learned some technologies that allowed me to explore new ideas and challenges.</h4>
                    <h4>I have a good knowledge of English. I communicate in an understandable way and I practice my vocabulary by translating books into Spanish. </h4>
                    <h4>I am passionate about cinema and music. I like animation for adults and I am excited to do jobs in these fields, even if they are not so profitable.</h4>
                    <h4>Finally, I am also a writer. I have two books written and many stories scattered. Some have won awards. I always try to give myself some time to continue with my writings and if you read this, surely I am in some new story.</h4>
                </div>
            </div>
        </div>
    )
}