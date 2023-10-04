import React, { Children } from "react"

function ButtonWrapper({children}) {
    return (
        <div className="Button-wrapper">{children}</div>
    );
}

export default ButtonWrapper;