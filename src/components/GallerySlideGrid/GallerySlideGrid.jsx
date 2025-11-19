import React from 'react'
import { map } from 'lodash'

export function GallerySlideGrid(props) {
    const { images } = props;
    return (
        <>
            {/* Carrusel en móvil */}
            <div id="carouselExample" class="carousel slide d-md-none">
                <div class="carousel-inner">
                    {map(images, (image) => (
                        <div key={image.id} class="carousel-item active">
                            <img src={image.imgSrc} class="d-block w-100" alt={image.imgAlt} />
                        </div>
                    ))}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            {/* Grid en pantallas md+ */}
            <div className="gallery-container d-sm-none d-md-flex ">
                {images.map((img, i) => (
                    <img className='active' key={i} src={img.imgSrc} />
                ))}
            </div>
        </>
    )
}
