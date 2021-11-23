import React from "react";
import Logo from "../images/icono.png";
import { NavLink } from "react-router-dom";
import ModalLogin from "./modales/Login";
import ModalContacto from "./modales/Contactenos";
import ModalEquipo from "./modales/Equipo";
import ModalOfertas from "./modales/Ofertas";

const NavbarUser = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sombra">
        <div className="container-fluid py-1 px-5 ">
          <NavLink className="navbar-brand" to="/">
            <div className="d-flex align-items-center">
              <img alt="" src={Logo} height="30" className="pe-2" />
              <h4 className="m-0">
                <b>Pet Home Service</b>
              </h4>
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <NavLink className="nav-link" to="/servicios">
                  Servicios
                </NavLink>
              </li>
              <li className="nav-item px-2">
                <div className="nav-link cursor">
                  <ModalOfertas />
                </div>
              </li>
              <li className="nav-item px-2">
                <div className="nav-link cursor">
                  <ModalEquipo />
                </div>
              </li>
              <li className="nav-item px-2">
                <div className="nav-link cursor">
                  <ModalContacto />
                </div>
              </li>
            </ul>
            <div className="ms-2">
              <ModalLogin />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarUser;
