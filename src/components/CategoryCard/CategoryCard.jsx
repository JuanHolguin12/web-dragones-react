import React from 'react'
import { ENV } from '../../utils/constants';

export function CategoryCard(props) {
  const { category } = props;
  const message = `Hola, estoy interesado en la categoría ${category.name}. ¿Podrían proporcionarme más información? ⛹️‍♂️🔥🐲`.normalize('NFC');
  return (
    <article className='category-card'>
      <img src={category.imgSrc} alt="Imagen de la categoría" />
      <h3>{category.name}</h3>
      <p>{category.description}</p>
      <a className='btn' target='_blank' href={`https://wa.me/${ENV.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}>Más Información</a>
    </article>
  )
}
