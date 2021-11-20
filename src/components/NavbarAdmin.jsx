import React from 'react';
import Logo from '../images/icono.png';
import { NavLink } from "react-router-dom";
import ModalLogin from './modales/Login';
import ModalContacto from './modales/Contactenos';
import ModalEquipo from './modales/Equipo';
import ModalOfertas from './modales/Ofertas';

const NavbarAdmin = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sombra">
                <div className="container-fluid py-1 px-5 ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <NavLink className="navbar-brand" to="/">
                            <div className="d-flex align-items-center">
                                <img alt='' src={Logo} height="30" className="pe-2" />
                                <h4 className="m-0"><b>Pet Home Service</b></h4>
                            </div>
                        </NavLink>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                <NavLink className="nav-link active" aria-current="page" to="/">Servicios</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink className="nav-link" to="/servicios">Usuarios</NavLink>
                            </li>
                        </ul>
                        <div className="ms-2">
                            <button className="btn btn-danger">Salir</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarAdmin