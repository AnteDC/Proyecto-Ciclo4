import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateUsuario from "./components/create-usuario.component";
import EditUsuario from "./components/edit-usuario.component";
import UsuarioList from "./components/usuario-list.component";

function App() {
  return (<Router>
    <div classNombre="App">
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
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;