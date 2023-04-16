import React from "react";
import './card.css'
import User from "./User/User";
import Button from "./Button/Button";
import Login from "./Login/Login";

const Card = ({name,login,web,repo}) =>{
    return(
            <div  className="card">
				<img />
				<div className="caption">
					<h2>{name}</h2>
                    <br />
					<div className="email">{login}@email.com</div>
                    <br />
					<div className="data">
                        <b>{web} :</b>
                        <p>{repo}</p>
                    </div>
                    <br />

					<footer>
                        <Button text="Follow" color="rgb(390,150,390)"/>
                        <Button text="View profile" color="rgb(255,255,100)"/>
					</footer>
				</div>
			</div>



    )
}

export default Card