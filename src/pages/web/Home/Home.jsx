import React from 'react'
import { logoJPG } from '../../../assets'
import { map } from 'lodash'
import { Newscard } from "../../../components"


export function Home() {
  return (
    <main>

      <section class="main-section-img">
        <header class="header-section">
          <h1>Club Dragones de Baloncesto</h1>
          <p>Pasión, dedicación y excelencia en cada jugada. Únete a la familia Dragones y vive el baloncesto
            como nunca antes.</p>
          <div class="button-container flex-md-row">
            <a class="btn-fill">Inscribete Ahora</a>
            <a class="btn-outline">Ver Categorías</a>
          </div>
        </header>
        <div class="image-section">
          <img src={logoJPG} alt="Imagen del Club Dragones de Baloncesto" />
        </div>
      </section>

      {/* Seccion de noticias */}
      <section class="news-section padding-sections" data-aos="fade-up">
        <div class="sub-header">
          <h2>Noticias Recientes</h2>
          <p>Esta sección contiene novedades y eventos recientes del Club
            dargones</p>
        </div>
        <div class="news-container" data-aos="fade-up">
          {map(news_list, (news) => (
            <Newscard key={news._id} news={news} />
          ))}
        </div>
      </section>

      {/* Galeria Dragones */}
      <section class="gallery-section sub-header padding-sections">
        <h2>Galería Dragones</h2>
        <p>Momentos vividos por nuestros Dragones</p>
        <div class="gallery-container">
          <img src={logoJPG} alt="Imagen del viaje a Bogotá" />
          <img src={logoJPG} alt="Imagen del entrenamiento" />
          <img src={logoJPG} alt="Imagen del partido" />
          <img src={logoJPG} alt="Imagen de la celebración" />
          <img src={logoJPG} alt="Imagen de la premiación" />
          <img src={logoJPG} alt="Imagen del equipo" />
          <img src={logoJPG} alt="Imagen del torneo" />
          <img src={logoJPG} alt="Imagen del Festival Internacional" />
        </div>
      </section>

    </main>
  )
}

const news_list = [
  { id: 1, date: "01/01/2025", title: "¡Nuestro equipo ha ganado el último torneo!", imgSrc: logoJPG, imgAlt: "Imagen del torneo", description: "Estamos muy orgullosos de nuestros jugadores y entrenadores por su dedicación y esfuerzo que nos llevaron a la victoria." },
  { id: 2, date: "01/01/2025", title: "Nuevo Entrenador Anunciado", imgSrc: logoJPG, imgAlt: "Imagen del nuevo entrenador", description: "Nos complace anunciar la incorporación de un nuevo entrenador con una vasta experiencia en el baloncesto profesional." },
  { id: 3, date: "01/01/2025", title: "Inauguración de la Nueva Cancha", imgSrc: logoJPG, imgAlt: "Imagen de la nueva cancha", description: "El próximo mes inauguraremos nuestra nueva cancha de baloncesto con un evento especial. ¡No te lo pierdas!" },
]