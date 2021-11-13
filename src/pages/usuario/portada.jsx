import React from 'react';
import Imagen1 from '../../images/imagen1.png';
import Imagen2 from '../../images/imagen2.png';
import Imagen3 from '../../images/imagen3.png';

const Portada = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 ps-4 d-flex justify-content-center align-items-center order-2 order-md-1">
                        <div>
                            <h1>
                                ¿Quiénes somos?
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a dolorem labore officiis odit. Nulla aspernatur, impedit explicabo, nam ipsum necessitatibus nemo culpa quisquam dignissimos id animi, neque at pariatur?
                            </p>
                            <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#modalContacto">Contáctenos</button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center order-1 order-md-2">
                        <img alt='' src={Imagen1} className="radius-50 img-80 py-3" />
                    </div>
                </div>
                <hr className="m-5" />
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <img alt='' src={Imagen2} className="radius-50 img-80 py-3" />
                    </div>
                    <div className="col-md-6 pe-4 d-flex justify-content-center align-items-center">
                        <div>
                            <h1>
                                Servicios
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a dolorem labore officiis odit. Nulla aspernatur, impedit explicabo, nam ipsum necessitatibus nemo culpa quisquam dignissimos id animi, neque at pariatur?
                            </p>
                            <button className="btn btn-info">Más información</button>
                        </div>
                    </div>
                </div>
                <hr className="m-5" />
                <div className="row">
                    <div className="col-md-6 ps-4 d-flex justify-content-center align-items-center order-2 order-md-1">
                        <div>
                            <h1>
                                Nuestro equipo
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a dolorem labore officiis odit. Nulla aspernatur, impedit explicabo, nam ipsum necessitatibus nemo culpa quisquam dignissimos id animi, neque at pariatur?
                            </p>
                            <button className="btn btn-info" data-bs-toggle="modal" data-bs-target="#modalEquipo">Conócenos</button>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center order-1 order-md-2">
                        <img alt='' src={Imagen3} className="radius-50 img-80 py-3" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portada
