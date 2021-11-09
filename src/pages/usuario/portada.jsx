import Imagen1 from "../../images/imagen1.png";
import Imagen2 from "../../images/imagen2.png";
import Imagen3 from "../../images/imagen3.png";
import Logo from "../../images/icono.png";
import { NavLink } from "react-router-dom";

function Portada() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
                <div className="container-fluid py-1 px-5 ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <NavLink className="navbar-brand" to="/Portada">
                            <div className="d-flex align-items-center">
                                <img src={Logo} height="30" className="pe-2" />
                                <h4 className="m-0"><b>Pet Home Service</b></h4>
                            </div>
                        </NavLink>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2">
                                <NavLink className="nav-link active" aria-current="page" to="/Portada">Inicio</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink className="nav-link" to="/Servicios">Servicios</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink className="nav-link" to="/Inicio">Ofertas</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink className="nav-link" to="/Inicio">Noticias</NavLink>
                            </li>
                            <li className="nav-item px-2">
                                <NavLink className="nav-link" to="/Servicios">Contáctenos</NavLink>
                            </li>
                        </ul>
                        <NavLink className="btn btn-info ms-2" to="/Inicio">Ingresar</NavLink>
                    </div>
                </div>
            </nav>
            <div class="container my-5">
                <div class="row">
                    <div class="col-md-6 ps-4 d-flex justify-content-center align-items-center order-2 order-md-1">
                        <div>
                            <h1>
                                ¿Quiénes somos?
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a dolorem labore officiis odit. Nulla aspernatur, impedit explicabo, nam ipsum necessitatibus nemo culpa quisquam dignissimos id animi, neque at pariatur?
                            </p>
                            <button class="btn btn-info">Contáctenos</button>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center align-items-center order-1 order-md-2">
                        <img src={Imagen1} class="radius-50 img-80 py-3" />
                    </div>
                </div>
                <hr class="m-5" />
                <div class="row">
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <img src={Imagen2} class="radius-50 img-80 py-3" />
                    </div>
                    <div class="col-md-6 pe-4 d-flex justify-content-center align-items-center">
                        <div>
                            <h1>
                                Servicios
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a dolorem labore officiis odit. Nulla aspernatur, impedit explicabo, nam ipsum necessitatibus nemo culpa quisquam dignissimos id animi, neque at pariatur?
                            </p>
                            <button class="btn btn-info">Más información</button>
                        </div>
                    </div>
                </div>
                <hr class="m-5" />
                <div class="row">
                    <div class="col-md-6 ps-4 d-flex justify-content-center align-items-center order-2 order-md-1">
                        <div>
                            <h1>
                                Nuestro equipo
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a dolorem labore officiis odit. Nulla aspernatur, impedit explicabo, nam ipsum necessitatibus nemo culpa quisquam dignissimos id animi, neque at pariatur?
                            </p>
                            <button class="btn btn-info">Conócenos</button>
                        </div>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center align-items-center order-1 order-md-2">
                        <img src={Imagen3} class="radius-50 img-80 py-3" />
                    </div>
                </div>
                <hr class="m-5" />
            </div></>
    );
}
export default Portada;