import React from "react"

function Button(props) {

    const getLabel = () => {
        if('x' == props.label) 
            props.handleClick('*');
        else
            props.handleClick(props.label);
    };

    return (
        <button id={props.id} className="Button" onClick={getLabel}>{props.label}</button>
    );
}

export default Button;