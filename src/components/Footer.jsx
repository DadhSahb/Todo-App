import React from 'react'

export default function Footer() {
    let footerStyle = {
        position: "relative",
        top: "33vh",
        width: "100%",

    }
    return (
        <div className='bg-dark text-light py-3' style={footerStyle}>
            <p className='text-center'>Copyright &copy; MyTodoList.com</p>
        </div>
    )
}
