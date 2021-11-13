import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./estilos_victor.css";
import NavbarUser from "./components/NavbarUser";
import Portada from "./pages/usuario/portada";
import FooterUser from "./components/FooterUser";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateUsuario from "./components/create-usuario.component";
import EditUsuario from "./components/edit-usuario.component";
import UsuarioList from "./components/usuario-list.component";


import CreateServicio from "./components/create-servicio.component";
import EditServicio from "./components/edit-servicio.component";
import ServicioList from "./components/servicio-list.component";

function App() {
  return (<Router>
    <div classNombre="App">
      <NavbarUser />
      <Portada />
      <FooterUser />
      
      <header classNombre="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-usuario"} classNombre="nav-link">
                PET HOME SERVICE App
              </Link>
            </Navbar.Brand>


            <Nav classNombre="justify-content-end">
              <Nav>
                <Link to={"/create-servicio"} classNombre="nav-link">
                  Create Servicio
                </Link>
              </Nav>  |

              <Nav>
                <Link to={"/servicio-list"} classNombre="nav-link">
                  Servicio List
                </Link>  |
              </Nav>
            
              <Nav>
                <Link to={"/create-usuario"} classNombre="nav-link">
                  Create Usuario
                </Link>
              </Nav>  |

              {/* <Nav>
                <Link to={"/edit-usuario/:id"} classNombre="nav-link">
                  Edit Usuario
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/usuario-list"} classNombre="nav-link">
                  Usuario List
                </Link>  |
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div classNombre="wrapper">
              <Switch>
                <Route exact path='/' component={CreateUsuario} />
                <Route path="/create-usuario" component={CreateUsuario} />
                <Route path="/edit-usuario/:id" component={EditUsuario} />
                <Route path="/usuario-list" component={UsuarioList} />


                <Route exact path='/' component={CreateServicio} />
                <Route path="/create-servicio" component={CreateServicio} />
                <Route path="/edit-servicio/:id" component={EditServicio} />
                <Route path="/servicio-list" component={ServicioList} />

              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>)
  ;
}

export default App;