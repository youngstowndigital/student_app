import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const EditStudent = (props) => {
    const [formData, setFormData] = useState({ name: '', email: '', rollno: '' });
    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const { name, email, rollno } = formData;

    useEffect(() => {
        axios.get('http://localhost:4000/students/edit-student/' + props.match.params.id)
        .then(res => {
            setFormData({
                name: res.data.name,
                email: res.data.email,
                rollno: res.data.rollno
            });
        })
        .catch((error) => {
            console.log(error);
        });
    });

    const onSubmit = (e) => {
        e.preventDefault()
        const studentObject = {
            name: name,
            email: email,
            rollno: rollno
        };
        axios.put('http://localhost:4000/students/update-student/' + props.match.params.id, studentObject)
            .then((res) => {
            console.log(res.data)
            console.log('Student successfully updated')
            }).catch((error) => {
            console.log(error)
            })
    }

    return (
        <div className="form-wrapper">
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={onChange} />
                </Form.Group>
                <Form.Group controlId="Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={onChange} />
                </Form.Group>
                <Form.Group controlId="Name">
                    <Form.Label>Roll No</Form.Label>
                    <Form.Control type="text" value={rollno} onChange={onChange} />
                </Form.Group>
                <Button variant="danger" size="lg" block="block" type="submit">
                    Update Student
                </Button>
            </Form>
        </div>
    )
}

export default EditStudent;
