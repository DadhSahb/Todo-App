import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AddTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or discription can't be empty!");
    }
    else {
      props.addTodo(title, desc)
      setTitle("");
      setDesc("");
    }
  }
  return (
    <Form onSubmit={submit} className='container my-3'>
      <h3>Add Todo</h3>
      <Form.Group className="mb-3">
        <Form.Label>Add Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Discription" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </Form.Group>
      <Button variant="success btn-sm" type="submit">
        Submit
      </Button>
    </Form>
  )
}
