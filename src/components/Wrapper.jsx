import React, { Children } from "react"

function Wrapper({children}) {
    return (
        <div className="Wrapper">{children}</div>
    );
}

export default Wrapper;