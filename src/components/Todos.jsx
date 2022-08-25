import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
    return (
        <div className='container mt-5'>
            <h3 className='text-center'>Todos List</h3>
            {props.todos.length === 0 ? <h3>No Todos to display</h3> :
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })}

        </div>
    )
}
