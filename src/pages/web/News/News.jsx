import React from 'react'
import { Link, useLocation } from "react-router-dom";

export function News() {
    const location = useLocation();
    const news = location.state?.news;


    return (
        <main className='new-page-section pt-5'>
            <h2 className='text-center'>{news.title}</h2>
            <section className='container-news d-flex padding-sections'>
                <aside>
                    <p>{news.description}</p>
                </aside>
                <aside>
                    <img src={news.imgSrc} />
                </aside>
            </section>
            <div className='back'>
                <Link className='btn-fill' to={'/'}>Volver al Inicio</Link>
            </div>
        </main>
    )
}
