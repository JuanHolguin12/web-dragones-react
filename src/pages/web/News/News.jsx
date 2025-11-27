import React from 'react'
import { useLocation } from "react-router-dom";

export function News() {
    const location = useLocation();
    const news = location.state?.news;
    console.log(news);
    

    return (
        <section className='new-page-section'>
            <h2>{news.title}</h2>
            <aside>
                <p>{news.description}</p>
            </aside>
            <aside>
                <img src={news.imgSrc} />
            </aside>

        </section>
    )
}
