import React from "react";
import "./user.css"

const User = (props) =>{
    return(
        <div className="user">
            <h3>{props.name}</h3>
        </div>
    )
}

export default User