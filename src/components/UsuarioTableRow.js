import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class UsuarioTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteUsuario = this.deleteUsuario.bind(this);
    }

    deleteUsuario() {
        axios.delete('http://localhost:4000/Usuarios/delete-Usuario/' + this.props.obj._id)
            .then((res) => {
                console.log('Usuario successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.nombre}</td>
                <td>{this.props.obj.rol}</td>
                <td>{this.props.obj.login}</td>
                <td>{this.props.obj.contacto}</td>
                <td>
                    <Link className="edit-link" to={"/edit-Usuario/" + this.props.obj._id}>
                        Editar
                    </Link>
                    | 
                    <Button className="ms-2" onClick={this.deleteUsuario} size="sm" variant="danger">Eliminar</Button>
                </td>
            </tr>
        );
    }
}