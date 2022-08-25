import React from 'react'

export default function TodoItem(props) {
    return (
        <div className='container'>
            <h4>{props.todo.title}</h4>
            <p>{props.todo.desc}</p>
            <button className='btn btn-sm btn-danger' onClick={() => props.onDelete(props.todo)}>Delete</button>
            <hr />
        </div>
    )
}
