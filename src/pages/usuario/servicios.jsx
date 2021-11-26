import React from "react";
import NavbarUser from "../../components/NavbarUser";
import FooterUser from "../../components/FooterUser";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Servicios = () => {
  return (
    <div>
      <NavbarUser />
      <div className="container cuerpo">
        <h1 className="py-3">Servicios</h1>
        <Row xs={1} md={2} className="g-4 mb-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card className="sombra">
                <Card.Header>Categoría del servicio</Card.Header>
                <Card.Body>
                  <Card.Title>Nombre del servicio</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Precio del servicio ($)
                  </Card.Subtitle>
                  <Card.Text>Descripción del servicio</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <FooterUser />
    </div>
  );
};

export default Servicios;
