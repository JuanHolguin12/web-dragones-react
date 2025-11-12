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
            <section class="history-section padding-sections d-md-flex">
                <div class="history-text flex-column">
                    <h2>Nuestra Historia</h2>
                    <p>Nuestra Historia inicia en el año 1998 en la cancha de Rosalpi de Bello-Antioquia, empezó con dos
                        ex-jugadores de baloncesto que soñaron con crear un club y llevar este gran deporte a los niños del
                        barrio.
                    </p>
                    <p>
                        Durante 2 decadas, hemos crecido formando niños como grandes deportistas y personas.
                    </p>
                    <p>
                        Hoy en día nuestro Club compite a nivel nacional en torneos de alto nivel y formando grandes
                        deportistas que hacen parte de la selección Antioquia
                    </p>
                </div>
                <img src={logoJPG} alt="Imagen de los inicios del Club" />
            </section>
            <section data-aos="fade-right">
                <div class="sub-header">
                    <h2>Nuestros Valores</h2>
                    <p>Conoce los valores que impulsamos y nos identifican como Club</p>
                </div>
                <div class="values-container d-flex flex-column justify-content-center align-items-center flex-md-row">
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
                <div class="team-container d-flex flex-column  align-items-center flex-md-row">
                    <div class="team-card">
                        <img src={logoJPG} alt="Foto de Juan Pérez - CEO del Club" />
                        <h3>Juan Pérez</h3>
                        <p>CEO</p>
                    </div>
                    <div class="team-card">
                        <img src={logoJPG} alt="Foto de Juan Pérez - Entrenador Principal del Club" />
                        <h3>Juan Pérez</h3>
                        <p>Entrenador Principal</p>
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
