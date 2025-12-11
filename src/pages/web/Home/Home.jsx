import React from 'react'
import { logoJPG, Noticia1, Noticia2, Noticia3 } from '../../../assets'
import { G1, G2, G3, G4, G5, G6, G7, G8 } from '../../../assets/JPG/Gallery'
import { map } from 'lodash'
import { Newscard, CategoryCard, GallerySlideGrid } from "../../../components"
import { Link } from 'react-router-dom'
import { ENV } from '../../../utils'


export function Home() {
  let message = "Quiero ser parte de la familia dragones. ¿Podrían proporcionarme más información? ⛹️‍♂️🔥🐲".normalize('NFC');
  return (
    <main>
      <section class="main-section-img">
        <header class="header-section">
          <h1>Club Dragones de Baloncesto</h1>
          <p>En Dragones vivimos el baloncesto con el corazón, formando deportistas que creen en su talento y trabajan cada día para ser mejores. Cada entrenamiento, cada esfuerzo y cada victoria nos une como una gran familia que respira este deporte.</p>
          <p>Únete a la familia Dragones y vive el baloncesto como nunca antes.
            Aquí encontrarás crecimiento, disciplina, amistades para toda la vida y un ambiente donde tu potencial siempre será valorado. ¡Ven y sé parte de una historia construida con entrega y sueños que nunca dejan de crecer!</p>
          <div class="button-container flex-md-row">
            <Link to={`https://wa.me/${ENV.SOCIAL_MEDIA.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`} target='_blank' className="btn-fill">Inscribirte</Link>
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
            dragones</p>
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
  {
    id: 1, date: "08/12/2025", title: "¡Disfruta de nuestro torneo Internacional de final de año!", imgSrc: Noticia1, imgAlt: "Flayer del torneo, Festival internacional de baloncesto, del 13 al 16 de diciembre",
    description: "Queremos invitar a todos los equipos de baloncesto a participar en nuestro Festival Deportivo Dragones 2024, el evento más esperado y representativo del año.Este gran encuentro se llevará a cabo del 13 al 16 de diciembre, días en los que viviremos la pasión, la competencia y el crecimiento deportivo que caracterizan a nuestro club.Te invitamos a ser parte del festival más importante y más competitivo del Club Dragones de Baloncesto, un espacio diseñado para que jugadores, entrenadores y familias disfruten una experiencia inolvidable.Tendremos partidos emocionantes, premiaciones especiales, actividades recreativas y el mejor ambiente deportivo.¡No te quedes por fuera!Únete, compite y vive con nosotros cuatro días llenos de energía, talento y espíritu deportivo.¡Nos vemos en la cancha!"
  },
  {
    id: 2, date: "28/11/2025", title: "🎉 ¡Apertura oficial de matrículas en el Club Dragones de Baloncesto! 🐉🏀", imgSrc: Noticia2, imgAlt: "Apertura de incripciones al club Dragones de baloncesto",
    description: "Invitamos a todos los deportistas, desde principiantes hasta jugadores avanzados, a unirse a nuestra gran familia deportiva.\nEsta es tu oportunidad de formar parte del club más destacado y competitivo de la región, donde entrenamos con disciplina, pasión y un enfoque integral en el crecimiento de cada atleta.\nDurante el proceso de matrícula podrás acceder a:\n-Entrenamientos estructurados por niveles y categorías\n-Entrenadores certificados y especializados\n-Espacios de formación técnica, táctica y física\n-Participación en torneos, festivales y encuentros deportivos\n-Actividades recreativas y eventos del club\nYa sea que quieras iniciar tu camino en el baloncesto o potenciar tu rendimiento, Dragones es el lugar perfecto para crecer, aprender y competir.\n📅 Cupos limitados\nAsegura tu lugar y comienza la temporada con nosotros.\n🔥 ¡Enciende tu pasión por el baloncesto y matricúlate hoy!"
  },
  {
    id: 3, date: "07/11/2025", title: "Gran Participación de Dragones en el Torneo de Arbeláez, Cundinamarca", imgSrc: Noticia3, imgAlt: "Imagen de las chicas de U16 femenino, campeonas en el torneo de Arbeláez, Cundinamarca",
    description: "Este fin de semana nuestro club vivió una experiencia inolvidable en Arbeláez, Cundinamarca, donde participamos en un torneo lleno de emoción, talento y un alto nivel competitivo. Cada una de nuestras categorías demostró el fruto del trabajo constante, la disciplina y el compromiso que venimos construyendo día a día.\nLos jugadores dejaron en la cancha no solo su esfuerzo físico, sino también su pasión por el baloncesto y el espíritu que caracteriza a nuestro club. Cada partido fue una oportunidad para crecer, para aprender y para mostrar la evolución deportiva que están alcanzando nuestros equipos.\nLos resultados obtenidos nos llenan de orgullo, no solo por los lugares alcanzados, sino por la entrega, la unión y la mentalidad competitiva que cada equipo demostró durante todo el torneo. Seguimos avanzando con la mirada puesta en seguir formando deportistas íntegros, fuertes y comprometidos con su propio proceso.\nAgradecemos a los padres de familia, entrenadores y acompañantes que hicieron parte de este viaje. Su apoyo es fundamental para que nuestros jugadores sigan creciendo y conquistando nuevos escenarios deportivos.\n🏀 Resultados del Torneo – Arbeláez, Cundinamarca\n🏆 U16 Femenino – Campeonas\n🥈 U16 Masculino – Subcampeones\n🥉 U14 Femenino – Tercer puesto\n💥 U12 – Cuarto puesto"
  },
]

const category_list = [
  { id: 1, name: "Categoría Infantil", imgSrc: logoJPG, imgAlt: "Imagen de la categoría infantil", description: "Para niños y niñas de 6 a 12 años. Enfocado en el desarrollo de habilidades básicas y trabajo en equipo." },
  { id: 2, name: "Categoría Juvenil", imgSrc: logoJPG, imgAlt: "Imagen de la categoría juvenil", description: "Para adolescentes de 13 a 18 años. Entrenamientos intensivos y preparación para competencias." },
  { id: 3, name: "Categoría Adultos", imgSrc: logoJPG, imgAlt: "Imagen de la categoría adultos", description: "Para mayores de 18 años. Competencias locales y nacionales, con entrenadores profesionales." },
]

const gallery_images = [
  { id: 1, imgSrc: G1, imgAlt: "Imagen del viaje a Bogotá" },
  { id: 2, imgSrc: G2, imgAlt: "Imagen del entrenamiento" },
  { id: 3, imgSrc: G3, imgAlt: "Imagen del partido" },
  { id: 4, imgSrc: G4, imgAlt: "Imagen de la celebración" },
  { id: 5, imgSrc: G5, imgAlt: "Imagen de la premiación" },
  { id: 6, imgSrc: G6, imgAlt: "Imagen del equipo" },
  { id: 7, imgSrc: G7, imgAlt: "Imagen del torneo" },
  { id: 8, imgSrc: G8, imgAlt: "Imagen del Festival Internacional" },
]