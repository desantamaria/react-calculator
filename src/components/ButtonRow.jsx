import React, { Children } from "react"

function ButtonRow({children}) {
    return (
        <div className="Button-row">{children}</div>
    );
}

export default ButtonRow;