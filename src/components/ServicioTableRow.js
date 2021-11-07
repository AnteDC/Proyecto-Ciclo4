import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class ServicioTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteServicio = this.deleteServicio.bind(this);
    }

    deleteServicio() {
        axios.delete('http://localhost:4000/Servicios/delete-Servicio/' + this.props.obj._id)
            .then((res) => {
                console.log('Servicio successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.categoria}</td>
                <td>{this.props.obj.descripcion}</td>
                <td>{this.props.obj.nombre}</td>
                <td>
                    <Link className="edit-link" to={"/edit-Servicio/" + this.props.obj._id}>
                        Edit
                    </Link>
                    <Button onClick={this.deleteServicio} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}