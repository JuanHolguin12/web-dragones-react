import React from 'react'
import { logoJPG } from '../../../assets'

export function AboutUs() {

    return (
        <main>
            <section class="main-section">
                <header class="header-section-noimg">
                    <h1>Sobre Nosotros</h1>
                    <p>Conoce la historia, valores y pasión que nos han dado a conocer como uno de los mejores clubes de
                        baloncesto en el área metropolitana
                    </p>
                </header>
            </section>
            <section class="history-section padding-sections d-lg-flex">
                <div class="history-text flex-column">
                    <h2>Nuestra Historia</h2>
                    <p>Nuestra historia comienza en el año 1998, en la tradicional cancha de Rosalpi, ubicada en Bello–Antioquia. Allí, entre tableros desgastados y balones que botaban con ecos de ilusión, dos ex-jugadores de baloncesto decidieron convertir su pasión en un proyecto de vida. Inspirados por el deseo de llevar este maravilloso deporte a los niños del barrio, dieron origen a un club que, sin saberlo, marcaría la vida de cientos de jóvenes durante las décadas siguientes.
                    </p>
                    <p>
                        Con el paso del tiempo, el club fue creciendo no solo en número de jugadores, sino también en sueños, valores y experiencias. A lo largo de más de dos décadas hemos visto cómo niños que dieron sus primeros pasos en la cancha se transformaron en destacados deportistas, líderes y personas ejemplares. Cada entrenamiento, cada partido y cada torneo ha sido una oportunidad para enseñar disciplina, trabajo en equipo, respeto y perseverancia, valores que hoy identifican a todos los que han vestido nuestra camiseta.
                    </p>
                    <p>
                        Gracias al compromiso de entrenadores, familias y jugadores, hemos consolidado un proceso formativo sólido, reconocido por su calidad humana y deportiva. Hoy en día, nuestro club compite a nivel nacional en torneos de alto rendimiento y continúa forjando talentos que han logrado llegar a selecciones municipales, departamentales e incluso integrar la Selección Antioquia, dejando en alto el nombre de nuestra institución.
                    </p>
                    <p>Lo que comenzó como un sueño de dos amantes del baloncesto, hoy es una comunidad apasionada, un espacio de desarrollo y un hogar deportivo para nuevas generaciones. Seguimos trabajando para inspirar a más jóvenes, impulsar sus habilidades y demostrar que, con esfuerzo y corazón, la cancha puede convertirse en el lugar donde nacen los grandes sueños.</p>
                </div>
                <img src={logoJPG} alt="Imagen de los inicios del Club" />
            </section>
            <section data-aos="fade-right">
                <div class="sub-header">
                    <h2>Nuestros Valores</h2>
                    <p>Conoce los valores que impulsamos y nos identifican como Club</p>
                </div>
                <div class="values-container d-flex flex-column justify-content-center flex-md-row">
                    <div class="card-icons">
                        <span class="material-symbols-outlined icon-value">
                            trophy
                        </span>
                        <h3>Excelencia</h3>
                        <p>Amor por el baloncesto y dedicación en cada entrenamiento y partido.</p>
                    </div>
                    <div class="card-icons">
                        <span class="material-symbols-outlined icon-value">
                            group
                        </span>
                        <h3>Trabajo en Equipo</h3>
                        <p>Creemos en la fuerza del colectivo y en que juntos podemos lograr grandes cosas.</p>
                    </div>
                    <div class="card-icons">
                        <span class="material-symbols-outlined icon-value">
                            target
                        </span>
                        <h3>Disciplina</h3>
                        <p>La constancia y dedicación son fundamentales para alcanzar nuestros objetivos.</p>
                    </div>
                    <div class="card-icons">
                        <span class="material-symbols-outlined icon-value">
                            favorite
                        </span>
                        <h3>Pasión</h3>
                        <p>El amor por el baloncesto es lo que nos impulsa a dar lo mejor de nosotros cada día.</p>
                    </div>
                </div>
            </section>
            <section class="team-section" data-aos="fade-right" data-aos-duration="700">
                <div class="sub-header">
                    <h2>Nuestro Equipo</h2>
                    <p>Las personas que lideran nuestro club hacia el éxito</p>
                </div>
                <div class="team-container">
                    <div class="team-card">
                        <img src={logoJPG} alt="Foto de Juan Pérez - CEO del Club" />
                        <h3>Juan Fernando Jaramillo</h3>
                        <p>CEO</p>
                    </div>
                    <div class="team-card">
                        <img src={logoJPG} alt="Foto de Juan Pérez - Entrenador Principal del Club" />
                        <h3>Juan David Chancí</h3>
                        <p>Entrenador U18 Fem y Masc</p>
                    </div>
                    <div class="team-card">
                        <img src={logoJPG} alt="Foto de Juan Pérez - Entrenador de la categoria U16" />
                        <h3>Andrés Pérez</h3>
                        <p>Entrenador U16</p>
                    </div>
                    <div class="team-card">
                        <img src={logoJPG} alt="Foto de Juan Pérez - Entrenador de la categoria U16" />
                        <h3>Duvan Agudelo</h3>
                        <p>Entrenador U16</p>
                    </div>
                    <div class="team-card">
                        <img src={logoJPG} alt="Foto de Juan Pérez - Entrenador de la categoria U16" />
                        <h3>Eliana Jaramillo</h3>
                        <p>Tesorera</p>
                    </div>
                    <div class="team-card">
                        <img src={logoJPG} alt="Foto de Juan Pérez - Entrenador de la categoria U16" />
                        <h3>Juan Pérez</h3>
                        <p>Entrenador U16</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
