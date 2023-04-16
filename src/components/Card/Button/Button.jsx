import React from "react";
import './button.css'

const Button = ({text,color}) =>{

    return(
        <button style={{backgroundColor: color}}>{text}</button>
    )
}

export default Button