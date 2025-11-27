import React from 'react'
import { logoJPG } from '../../assets'
import { Link } from 'react-router-dom'

export function Newscard(props) {
    const { news } = props
    const decoded = decodeURIComponent(news.title);

    const slug = decoded
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, "")
        .trim()
        .replace(/\s+/g, "-");

    return (
        <article className="news-article">
            <p className="news-date">01/01/2025</p>
            <Link to={`/news/${slug}`} state={{ news }}>
                <h3>{news.title}</h3>
            </Link>
            <img src={logoJPG} alt="Imagen del nuevo entrenador" />
            <p>{news.description}</p>
        </article>
    )
}
