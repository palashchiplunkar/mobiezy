import React from 'react'
import "../css/header.css"
// props of the component are passed as an argument to the function with header text and height of the header
const Header = (props) => {
    return (
        <div className="upper-header" style={{height:props.height}}>        
            <h2 className='upper-header-label'>{props.text}</h2>
        </div>
    )
}

export default Header
