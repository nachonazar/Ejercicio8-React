import React from "react";
import { Form, Button, FormText } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Formulario = () => {

  const enviarForm = (data) => {
    alert("datos enviados")
    console.log(data)
    reset();
  }
  
  const datosIncompletos = (errors) => {
    alert("Completar todos los datos")
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <Form onSubmit={handleSubmit(enviarForm, datosIncompletos)} className="mx-5 mt-5">
      <Form.Group className="mb-3" controlId="formNombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Juan"
          {...register("inputNombre", {
            required: "El nombre es obligatorio",
            minLength: {
              value: 2,
              message: "El nombre debe tener al menos 2 caracteres",
            },
            maxLength: {
              value: 30,
              message: "El nombre debe tener como máximo 30 caracteres",
            },
            pattern: {
              value: /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/,
              message: "El nombre solo puede contener letras y espacios",
            },
          })}
        />
        {errors.inputNombre && (
          <Form.Text className="text-danger mx-3">
            {errors.inputNombre.message}
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formApellido">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Pérez"
          {...register("inputApellido", {
            required: "El apellido es obligatorio",
            minLength: {
              value: 2,
              message: "El apellido debe tener al menos 2 caracteres",
            },
            maxLength: {
              value: 30,
              message: "El apellido debe tener como máximo 30 caracteres",
            },
            pattern: {
              value: /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/,
              message: "El apellido solo puede contener letras y espacios",
            },
          })}
        />
        {errors.inputApellido && (
          <Form.Text className="text-danger mx-3">
            {errors.inputApellido.message}
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formDNI">
        <Form.Label>DNI</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: 12345678"
          {...register("inputDNI", {
            required: "El DNI es obligatorio",
            pattern: {
              value: /^[0-9]{7,8}$/,
              message: "El DNI debe contener solo números (7 u 8 dígitos)",
            },
          })}
        />
        {errors.inputDNI && (
          <FormText className="text-danger mx-3">
            {errors.inputDNI.message}
          </FormText>
        )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ej: juanperez@gmail.com"
          {...register("inputEmail", {
            required: "El email es obligatorio",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Debe ingresar un email válido",
            },
          })}
        />
        {errors.inputEmail && <FormText className="text-danger mx-3">{errors.inputEmail.message}</FormText>}
        <div className="mt-3 d-flex justify-content-end align-items-end">
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </div>
      </Form.Group>
    </Form>
  );
};

export default Formulario;
