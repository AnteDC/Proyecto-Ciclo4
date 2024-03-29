import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditServicio extends Component {

  constructor(props) {
    super(props)

    this.onChangeServicioName = this.onChangeServicioName.bind(this);
    this.onChangeServicioEmail = this.onChangeServicioEmail.bind(this);
    this.onChangeServicioRollno = this.onChangeServicioRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      email: '',
      rollno: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/Servicios/edit-Servicio/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          rollno: res.data.rollno
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeServicioName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeServicioEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeServicioRollno(e) {
    this.setState({ rollno: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const ServicioObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno
    };

    axios.put('http://localhost:4000/Servicios/update-Servicio/' + this.props.match.params.id, ServicioObject)
      .then((res) => {
        console.log(res.data)
        console.log('Servicio successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Servicio List 
    this.props.history.push('/Servicio-list')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeServicioName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeServicioEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeServicioRollno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Servicio
        </Button>
      </Form>
    </div>);
  }
}
