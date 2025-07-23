import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Formulario = () => {
    return (
        <Form className='mx-5 mt-5'>
            <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ej: Juan" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formApellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ej: Pérez" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDNI">
        <Form.Label>DNI</Form.Label>
        <Form.Control type="text" placeholder="Ej: 12345678" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ej: juanperez@gmail.com" />
        <div className='mt-3 d-flex justify-content-end align-items-end'>
            <Button variant="primary" type="submit">Enviar</Button>
        </div>
      </Form.Group>
    </Form>
    );
};

export default Formulario;