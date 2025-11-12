import React from 'react'
import { logoJPG } from '../../assets'

export function Newscard(props) {
    const { news } = props
    return (
        <article class="news-article">
            <p class="news-date">01/01/2025</p>
            <a href="./pages/noticia.html">
                <h3>{news.title}</h3>
            </a>
            <img src={logoJPG} alt="Imagen del nuevo entrenador" />
            <p>Nos complace anunciar la incorporación de un nuevo entrenador con una vasta experiencia en el
                baloncesto profesional.</p>
        </article>
    )
}
