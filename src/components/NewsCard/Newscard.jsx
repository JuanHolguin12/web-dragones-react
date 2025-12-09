import React from 'react'
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
            <p className="news-date">{news.date}</p>
            <Link to={`/news/${slug}`} state={{ news }}>
                <h3>{news.title}</h3>
            </Link>
            <img src={news.imgSrc} alt="Imagen del nuevo entrenador" />
            <div className='description'>
                <p>{news.description}</p>
            </div>
        </article>
    )
}
