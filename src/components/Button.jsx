import React from "react"

function Button(props) {

    const getLabel = () => {
        switch (props.label) {
            case 'x':
                props.handleClick('*');
                break;
            case '^':
                props.handleClick('**');
                break;
            default:
                props.handleClick(props.label);
                break;
        }
    };

    return (
        <button id={props.id} className="Button" onClick={getLabel}>{props.label}</button>
    );
}

export default Button;