import React from "react"

function Button(props) {
    

    return (
        <button id={props.id} className="Button">{props.value}</button>
    );
}

export default Button;