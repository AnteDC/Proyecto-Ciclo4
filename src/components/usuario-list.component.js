import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import UsuarioTableRow from './UsuarioTableRow';


export default class UsuarioList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Usuarios: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/Usuarios/')
      .then(res => {
        this.setState({
          Usuarios: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.Usuarios.map((res, i) => {
      return <UsuarioTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div classNombre="table-wrapper">
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
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}