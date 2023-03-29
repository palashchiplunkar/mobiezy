import React from 'react'
import "../css/header.css"

const Header = (props) => {
    return (
        <div className="upper-header" style={{height:props.height}}>        
            <h2 className='upper-header-label'>{props.text}</h2>
        </div>
    )
}

export default Header
