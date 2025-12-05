import React from 'react'
import { logoJPG } from '../../../assets'
import { Link } from 'react-router-dom'


export function FIB() {
    return (
        <main>
            <section class="main-section-img">
                <header class="header-section">
                    <h1>Festival Internacional de Baloncesto Dragones</h1>
                    <p>El evento más grande del año en el área norte del Valle de Aburrá. Donde equipos de diferentes
                        regiones de Colombia y otros países se reúnen por la pasión al baloncesto y llevarse el primer
                        lugar en esta competencia de alto nivel</p>
                    <div class="button-container">
                        <a class="btn-fill">Inscribir Equipo</a>
                        <Link to={'/estadisticas'} class="btn-outline">
                            <i class="fa-regular fa-chart-bar"></i>
                            <span className='ms-2'>Estadisticas</span>
                        </Link>
                    </div>
                </header>
                <figure class="image-section">
                    <img src={logoJPG} alt="Imagen Festival Internacional del Club Dragones de Baloncesto" />
                </figure>
            </section>
            <section class="info-section padding-sections">
                <div class="sub-header">
                    <h2>Festival 2025</h2>
                    <p>Días de competencia de baloncesto de alto nivel con equipos nacionales e internacionales, con grandes
                        premios individuales y de equipos</p>
                </div>
                <div class="values-container d-flex flex-column flex-md-row align-items-center">
                    <div class="card-icons">
                        <i class="fa-regular fa-calendar-days icon"></i>
                        <h3>Fechas</h3>
                        <p>1-16 de Diciembre 2025</p>
                    </div>
                    <div class="card-icons">
                        <i class="fa-solid fa-map-pin icon"></i>
                        <h3>Ubicación</h3>
                        <p>Bello-Antioquia <br /> Colombia</p>
                    </div>
                    <div class="card-icons">
                        <i class="fa-solid fa-basketball icon"></i>
                        <h3>Equipos</h3>
                        <p>+100 Equipos</p>
                    </div>
                    <div class="card-icons">
                        <i class="fa-solid fa-person icon"></i>
                        <h3>Categorias</h3>
                        <p>U8, U10, U12,<br />U14, U16, U18</p>
                    </div>
                </div>
            </section>
            <section>
                <header class="sub-header padding-sections">
                    <h2>Estadisticas De Anotadores Festival Internacional</h2>
                    <p>Sigue tus estadisticas indivuaduales y esfuerzate en cada partido para ser el ganador del premio</p>
                </header>
                <div class="category-cards-container d-flex flex-wrap justify-content-center padding-sections">
                    <Link to={"/estadisticas"} class="category-card">
                        <h3>U16</h3>
                    </Link>
                    <a href="#" class="category-card">
                        <h3>U18</h3>
                    </a>
                </div>
            </section>
            <section>
                <div class="sub-header padding-sections">
                    <h2>Premios y Reconocimietos</h2>
                    <p>Estos son los premios y reconociminetos que serán otrogados en nuestro torneo</p>
                </div>
                <div class="rewards-container d-flex flex-wrap justify-content-center gap-4">
                    <div class="card-icons rewards">
                        <i class="fa-solid fa-ranking-star icon"></i>
                        <h3>Trofeos y Medallas</h3>
                        <p>Se darán trofeos y medallas a los equipos campones y subcampeones en las categorias U16 y U18</p>
                    </div>
                    <div class="card-icons rewards">
                        <i class="fa-solid fa-trophy icon"></i>
                        <h3>Premios Individuales</h3>
                        <p>Trofeos para los <span class="text-bold">mayores</span> encestadores generales, encestadores de 3
                            puntos, asistencias, rebotes defensivos y rebotes ofensivos</p>
                    </div>
                    <div class="card-icons rewards">
                        <i class="fa-solid fa-medal icon"></i>
                        <h3>Medallas de Participación</h3>
                        <p>Medallas a nuestros pequeños deportistas por participar en nuestro festival, desde las categorias
                            U12 hasta los más pequeños</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
