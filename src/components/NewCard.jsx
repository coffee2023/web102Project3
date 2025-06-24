import React from "react";

const NewCard = (props) =>{

    return (
        <div className = {"NewCard " + props.color}>
            <h1> {props.text} </h1> 

        </div>
    )
}
export default NewCard;