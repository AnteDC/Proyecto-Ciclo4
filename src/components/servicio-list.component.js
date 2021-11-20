import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import ServicioTableRow from "./ServicioTableRow";
import NavbarAdmin from "./NavbarAdmin";

export default class ServicioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Servicios: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/Servicios/")
      .then((res) => {
        this.setState({
          Servicios: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.Servicios.map((res, i) => {
      return <ServicioTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <NavbarAdmin />
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="py-3">Servicios</h1>
            <div className="btn btn-info">Modal crear</div>
          </div>
          <div className="">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Categoria</th>
                  <th>Descripcion</th>
                  <th>Nombre del Servicio</th>
                  <th>Precio del Servicio</th>
                  <th>Prestador del Servicio</th>
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
