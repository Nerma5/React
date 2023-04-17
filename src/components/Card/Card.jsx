import React from "react";
import './card.css'
import Button from "./Button/Button";
import { FaGithub, FaJs, FaLinkedin, FaSlack} from 'react-icons/fa';


const Card = ({name,login,web,repo,icons,color1,color2}) =>{
    return(
            <div  className="card">
				<img />
				<div className="caption">
					<h2>{name}</h2>
                    <br />
					<div className="email">{login}@email.com</div>
                    <br />
					<div>
                        <b>{icons} {web} :</b>
                        <p>{repo}</p>
                    </div>

                    <br />

					<footer>
                        <Button text="Follow" color={color1}/>
                        <Button text="View profile" color={color2}/>
					</footer>
				</div>
			</div>



    )
}

export default Card