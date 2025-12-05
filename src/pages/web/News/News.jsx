import React from 'react'
import { useLocation } from "react-router-dom";

export function News() {
    const location = useLocation();
    const news = location.state?.news;
    console.log(news);


    return (
        <main className='new-page-section pt-5'>
            <h2 className='text-center'>{news.title}</h2>
            <section className='d-flex padding-sections'>
                <aside>
                    <p>{news.description}</p>
                </aside>
                <aside>
                    <img src={news.imgSrc} />
                </aside>
            </section>

        </main>
    )
}
