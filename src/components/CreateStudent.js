import React, { useState } from "react";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateStudent = () => {
    const [formData, setFormData] = useState({ name: '', email: '', rollno: '' });

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/students/create-student', formData)
            .then(res => console.log(res.data));

        setFormData({ name: '', email: '', rollno: '' });
    }

    return (
        <div className="form-wrapper">
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" onChange={onChange} type="text"/>
                </Form.Group>
                <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" onChange={onChange} type="email"/>
                </Form.Group>
                <Form.Group controlId="Name">
                    <Form.Label>Roll No</Form.Label>
                    <Form.Control name="rollno" onChange={onChange} type="text"/>
                </Form.Group>
                <Button variant="danger" size="lg" block="block" type="submit">
                    Create Student
                </Button>
            </Form>
        </div>
    )
}

export default CreateStudent;
