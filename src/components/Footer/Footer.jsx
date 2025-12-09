import React from 'react'
import { Link } from 'react-router-dom'
import { ENV } from '../../utils'

export function Footer() {
    let message = "Quiero ser parte de la familia dragones. ¿Podrían proporcionarme más información? ⛹️‍♂️🔥🐲".normalize('NFC');
    return (
        <footer class="footer-container">
            <div class="footer-content d-md-flex">
                <div class="footer-section">
                    <div class="footer-logo">
                        <h3>Dragones</h3>
                    </div>
                    <p>Club de baloncesto comprometido con la excelencia deportiva y el desarrollo de jóvenes talentos.</p>
                    <div class="footer-social">
                        <Link target='_blank' to={`https://wa.me/${ENV.SOCIAL_MEDIA.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}><i class="fa-brands fa-whatsapp icon-social"></i></Link>
                        <Link target='_blank' to={ENV.SOCIAL_MEDIA.FACEBOOK}><i class="fa-brands fa-facebook-f icon-social"></i></Link>
                        <Link target='_blank' to={ENV.SOCIAL_MEDIA.INSTAGRAM}><i class="fa-brands fa-instagram icon-social"></i></Link>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Enlaces Rápidos</h3>
                    <nav class="footer-nav">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/sobre_nosotros">Sobre Nosotros</Link></li>
                        <li><Link to="/festival_internacional">Festival Internacional</Link></li>
                    </nav>
                </div>
                <div class="footer-section">
                    <h3>Nuestras Categorías</h3>
                    <p>U18</p>
                    <p>U16</p>
                    <p>U14</p>
                    <p>U12</p>
                    <p>U10</p>
                    <p>U8</p>
                </div>
                <div class="footer-section">
                    <h3>Contacto</h3>
                    <Link target='_balnk' to={'https://maps.app.goo.gl/xUn5MoFQv4wWo1YCA'}>Av. 42a #49 20, Hermosa Provincia, Bello, Antioquia</Link>
                    <p>+57{ENV.SOCIAL_MEDIA.WHATSAPP_NUMBER}</p>
                    <Link target='_blank' to={'mailto:dragonesclub@gmail.com'}>dragonesclub@gmail.com</Link>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Club Dragones de Baloncesto. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}
