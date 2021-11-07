import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateServicio extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeServicioCategoria = this.onChangeServicioCategoria.bind(this);
    this.onChangeServicioDescripcion = this.onChangeServicioDescripcion.bind(this);
    this.onChangeServicioNombre = this.onChangeServicioNombre.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      categoria: '',
      descripcion: '',
      nombre: ''
    }
  }

  onChangeServicioCategoria(e) {
    this.setState({ categoria: e.target.value })
  }

  onChangeServicioDescripcion(e) {
    this.setState({ descripcion: e.target.value })
  }

  onChangeServicioNombre(e) {
    this.setState({ nombre: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const ServicioObject = {
      categoria: this.state.categoria,
      descripcion: this.state.descripcion,
      nombre: this.state.nombre
    };

    axios.post('http://localhost:4000/Servicios/create-servicio', ServicioObject)
      .then(res => console.log(res.data));

    this.setState({
      categoria: '',
      descripcion: '',
      nombre: '',
      precio: '',
      prestador: ''
    });
  }

  render() {
    return (<div classCategoria="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Categoria">
          <Form.Label>Categoria</Form.Label>
          <Form.Control type="text" value={this.state.categoria} onChange={this.onChangeServicioCategoria} />
        </Form.Group>

        <Form.Group controlId="Descripcion">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control type="descripcion" value={this.state.descripcion} onChange={this.onChangeServicioDescripcion} />
        </Form.Group>

        <Form.Group controlId="Categoria">
          <Form.Label>Nombre del Servicio</Form.Label>
          <Form.Control type="text" value={this.state.nombre} onChange={this.onChangeServicioNombre} />
        </Form.Group>

        <Form.Group controlId="Nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="nombre" value={this.state.nombre} onChange={this.onChangeServicioNombre} />
        </Form.Group>

        <Form.Group controlId="Prestador">
          <Form.Label>Prestador</Form.Label>
          <Form.Control type="prestador" value={this.state.prestador} onChange={this.onChangeServicioPrestador} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Servicio
        </Button>
      </Form>
    </div>);
  }
}
