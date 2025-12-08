import React from 'react'

import { logo } from '../../assets'
import { Link, NavLink } from 'react-router-dom'

export function Navbar() {
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
                                <a className="nav-link btn">Inscribirte</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
