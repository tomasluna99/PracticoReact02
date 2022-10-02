//Ejercicio 4 y 5 guiandonos a base de las clases
import React from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import ListaTarea from "./ListaTarea";
import Swal from "sweetalert2";

const FormularioTarea = () => {
const tareasLocalStorage = JSON.parse(localStorage.getItem("keyListaTareas")) || [];

    const [tarea, setTarea] = useState("");
    const [listaTareas, setListaTareas] = useState(tareasLocalStorage);

    useEffect(() => {
        
        localStorage.setItem("keyListaTareas", JSON.stringify(listaTareas));
    }, [listaTareas]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let tareita = tarea.toLowerCase().trim();
        let listita = listaTareas.includes(tarea);
};

    const borrarTarea = (nombreTarea) => {
        
        setListaTareas("");
    };

    return (
        <>
            <p className="container text-center lead">Ingresa tus tareas</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="tareas">
                    <Form.Control type="text" placeholder="Agregar tarea" onChange={(e) => setTarea(e.target.value)} value={tarea} />
                </Form.Group>
            </Form>
            <ListaTarea listaTareas={listaTareas} borrarTarea={borrarTarea} />
        </>
    );
};

export default FormularioTarea;
