import React, { useEffect } from 'react'

import { logo } from '../../assets'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ENV } from '../../utils'

export function Navbar() {
    let message = "Quiero ser parte de la familia dragones. ¿Podrían proporcionarme más información? ⛹️‍♂️🔥🐲".normalize('NFC');
    const { pathname } = useLocation();
    useEffect(() => {
        const navCollapse = document.getElementById('navbarTogglerDemo02');

        // Si existe el collapse, se cierra
        if (navCollapse && window.bootstrap) {
            const bsCollapse = window.bootstrap.Collapse.getInstance(navCollapse)
                || new window.bootstrap.Collapse(navCollapse, { toggle: false });

            bsCollapse.hide();
        }
    }, [pathname]);  // 👈 Se ejecuta cada vez que cambias de ruta
    return (
        <header class="header-container">
            <nav class="navbar navbar-expand-lg" aria-label="Menú de Navegación Principal">
                <div class="container-fluid">
                    <div class="logo">
                        <Link to="/">
                            <img src={logo} alt="Club Dragones de Baloncesto" />
                        </Link>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav mb-2 mb-lg-0  justify-content-end">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page" >Inicio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/sobre_nosotros" className="nav-link" aria-current="page">Sobre Nosotros</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" aria-disabled="true" to="/festival_internacional">Festival Internacional</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" aria-disabled="true" to="/programacion">Programacion FIB 2025</NavLink>
                            </li>
                            <li className="nav-item">
                                <Link to={`https://wa.me/${ENV.SOCIAL_MEDIA.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`} target='_blank' className="nav-link btn">Inscribirte</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
