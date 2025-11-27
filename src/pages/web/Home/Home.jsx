import React from 'react'
import { logoJPG } from '../../../assets'
import { map } from 'lodash'
import { Newscard, CategoryCard, GallerySlideGrid } from "../../../components"


export function Home() {
  return (
    <main>

      <section class="main-section-img">
        <header class="header-section">
          <h1>Club Dragones de Baloncesto</h1>
          <p>Pasión, dedicación y excelencia en cada jugada. Únete a la familia Dragones y vive el baloncesto
            como nunca antes.</p>
          <div class="button-container flex-md-row">
            <a class="btn-fill" href='https://wa.me/573195888599?text=Hola,%20quiero%20más%20información'>Inscribete Ahora</a>
            <a class="btn-outline" href='#categories'>Ver Categorías</a>
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
            <Newscard key={news.id} news={news} />
          ))}
        </div>
      </section>

      {/* Categorias entrenamientos */}
      <section id='categories' class="categories-section padding-sections" data-aos="fade-up">
        <div class="sub-header">
          <h2>Categorías de Entrenamiento</h2>
          <p>Elige la categoría que mejor se adapte a tus necesidades y nivel de
            habilidad.</p>
        </div>
        <div class="categories-container d-flex flex-column flex-md-row" data-aos="fade-up">
          {map(category_list, (category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
      {/* Galeria Dragones */}
      <section id='galeria' class="gallery-section sub-header padding-sections">
        <h2>Galería Dragones</h2>
        <p>Momentos vividos por nuestros Dragones</p>
        <GallerySlideGrid images={gallery_images} />
      </section>
    </main>
  )
}

const news_list = [
  { id: 1, date: "01/01/2025", title: "¡Nuestro equipo ha ganado el último torneo!", imgSrc: logoJPG, imgAlt: "Imagen del torneo", description: "Estamos muy orgullosos de nuestros jugadores y entrenadores por su dedicación y esfuerzo que nos llevaron a la victoria." },
  { id: 2, date: "01/01/2025", title: "Nuevo Entrenador Anunciado", imgSrc: logoJPG, imgAlt: "Imagen del nuevo entrenador", description: "Nos complace anunciar la incorporación de un nuevo entrenador con una vasta experiencia en el baloncesto profesional." },
  { id: 3, date: "01/01/2025", title: "Inauguración de la Nueva Cancha", imgSrc: logoJPG, imgAlt: "Imagen de la nueva cancha", description: "El próximo mes inauguraremos nuestra nueva cancha de baloncesto con un evento especial. ¡No te lo pierdas!" },
]

const category_list = [
  { id: 1, name: "Categoría Infantil", imgSrc: logoJPG, imgAlt: "Imagen de la categoría infantil", description: "Para niños y niñas de 6 a 12 años. Enfocado en el desarrollo de habilidades básicas y trabajo en equipo." },
  { id: 2, name: "Categoría Juvenil", imgSrc: logoJPG, imgAlt: "Imagen de la categoría juvenil", description: "Para adolescentes de 13 a 18 años. Entrenamientos intensivos y preparación para competencias." },
  { id: 3, name: "Categoría Adultos", imgSrc: logoJPG, imgAlt: "Imagen de la categoría adultos", description: "Para mayores de 18 años. Competencias locales y nacionales, con entrenadores profesionales." },
]

const gallery_images = [
  { id: 1, imgSrc: logoJPG, imgAlt: "Imagen del viaje a Bogotá" },
  { id: 2, imgSrc: logoJPG, imgAlt: "Imagen del entrenamiento" },
  { id: 3, imgSrc: logoJPG, imgAlt: "Imagen del partido" },
  { id: 4, imgSrc: logoJPG, imgAlt: "Imagen de la celebración" },
  { id: 5, imgSrc: logoJPG, imgAlt: "Imagen de la premiación" },
  { id: 6, imgSrc: logoJPG, imgAlt: "Imagen del equipo" },
  { id: 7, imgSrc: logoJPG, imgAlt: "Imagen del torneo" },
  { id: 8, imgSrc: logoJPG, imgAlt: "Imagen del Festival Internacional" },
]