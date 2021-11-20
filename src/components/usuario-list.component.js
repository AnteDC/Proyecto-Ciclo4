import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import UsuarioTableRow from "./UsuarioTableRow";
import NavbarAdmin from "./NavbarAdmin";

export default class UsuarioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Usuarios: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/Usuarios/")
      .then((res) => {
        this.setState({
          Usuarios: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.Usuarios.map((res, i) => {
      return <UsuarioTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <NavbarAdmin />
        <div className="container">
        <div className="d-flex justify-content-between align-items-center">
            <h1 className="py-3">Usuarios</h1>
            <div className="btn btn-info">Modal crear</div>
          </div>
          <div className="">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Rol</th>
                  <th>Login</th>
                  <th>Contacto</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{this.DataTable()}</tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
