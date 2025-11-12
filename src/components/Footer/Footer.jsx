import React from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <footer class="footer-container">
            <div class="footer-content d-md-flex">
                <div class="footer-section">
                    <div class="footer-logo">
                        <h3>Dragones</h3>
                    </div>
                    <p>Club de baloncesto comprometido con la excelencia deportiva y el desarrollo de jóvenes talentos.</p>
                    <div class="footer-social">
                        <a href="#"><i class="fa-brands fa-whatsapp icon-social"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook-f icon-social"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram icon-social"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube icon-social"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3>Enlaces Rápidos</h3>
                    <nav class="footer-nav">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/sobre_nosotros">Sobre Nosotros</Link></li>
                        <li><Link to="/festival_internacional">Festival Internacional</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
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
                    <p>Calle 50 #50-50, Bello-Antioquia</p>
                    <p>+57XXXXXXXXXX</p>
                    <p>info.dragones@gmail.com</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Club Dragones de Baloncesto. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}
