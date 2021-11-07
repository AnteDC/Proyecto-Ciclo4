import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import ServicioTableRow from './ServicioTableRow';


export default class ServicioList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Servicios: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/Servicios/')
      .then(res => {
        this.setState({
          Servicios: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.Servicios.map((res, i) => {
      return <ServicioTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
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