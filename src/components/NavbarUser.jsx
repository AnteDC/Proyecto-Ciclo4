import React from 'react';
import Logo from '../images/icono.png';
import { NavLink } from "react-router-dom";
import ModalLogin from './modales/Login';

const NavbarUser = () => {
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
                                <NavLink className="nav-link active" aria-current="page" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink className="nav-link" to="/">Servicios</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="#modalOfertas" data-bs-toggle="modal" data-bs-target="#modalOfertas">Ofertas</a>
                            </li>
                            {/* <li className="nav-item px-2">
                                <NavLink className="nav-link" to="/Portada">Noticias</NavLink>
                            </li> */}
                            <li className="nav-item px-2">
                                <a className="nav-link" href="#modalContacto" data-bs-toggle="modal" data-bs-target="#modalContacto">Contáctenos</a>
                            </li>
                        </ul>
                        <div className="ms-2">
                            <ModalLogin />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Modal ofertas */}
            <div className="modal fade" id="modalOfertas" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-light">
                            <div className="modal-title d-flex align-items-center">
                                <img alt='' src={Logo} height="30" className="pe-2" />
                                <h4 className="m-0"><b>Ofertas</b></h4>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eum quidem iste possimus accusamus minus corporis eos, illo voluptate rem laborum dolore voluptates! Tenetur dolorem fuga, et ad accusamus ullam!
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-info" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal login */}
            <div className="modal fade" id="modalLogin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-light">
                            <div className="modal-title d-flex align-items-center">
                                <img alt='' src={Logo} height="30" className="pe-2" />
                                <h4 className="m-0"><b>Ingresar</b></h4>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mt-2 mb-3 d-flex justify-content-center">
                                    <input type="text" id="login" class="bg-light fadeIn second text-center py-2" name="login" placeholder="Usuario" />
                                </div>
                                <div className="mb-2 d-flex justify-content-center">
                                    <input type="password" id="password" class="bg-light fadeIn third text-center py-2" name="login" placeholder="Contraseña" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success">Ingresar</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal contacto */}
            <div className="modal fade" id="modalContacto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bg-light">
                            <div className="modal-title d-flex align-items-center">
                                <img alt='' src={Logo} height="30" className="pe-2" />
                                <h4 className="m-0"><b>Contáctenos</b></h4>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eum quidem iste possimus accusamus minus corporis eos, illo voluptate rem laborum dolore voluptates! Tenetur dolorem fuga, et ad accusamus ullam!
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-info" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modal equipo */}
            <div className="modal fade" id="modalEquipo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header bg-light">
                            <div className="modal-title d-flex align-items-center">
                                <img alt='' src={Logo} height="30" className="pe-2" />
                                <h4 className="m-0"><b>Nuestro equipo</b></h4>
                            </div>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eum quidem iste possimus accusamus minus corporis eos, illo voluptate rem laborum dolore voluptates! Tenetur dolorem fuga, et ad accusamus ullam!
                            </p>
                            <hr />
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eum quidem iste possimus accusamus minus corporis eos, illo voluptate rem laborum dolore voluptates! Tenetur dolorem fuga, et ad accusamus ullam!
                            </p>
                            <hr />
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eum quidem iste possimus accusamus minus corporis eos, illo voluptate rem laborum dolore voluptates! Tenetur dolorem fuga, et ad accusamus ullam!
                            </p>
                            <hr />
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eum quidem iste possimus accusamus minus corporis eos, illo voluptate rem laborum dolore voluptates! Tenetur dolorem fuga, et ad accusamus ullam!
                            </p>
                            <hr />
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam eum quidem iste possimus accusamus minus corporis eos, illo voluptate rem laborum dolore voluptates! Tenetur dolorem fuga, et ad accusamus ullam!
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-info" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarUser
