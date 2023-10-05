import React from "react"

function OutputScreen(props) {
    return (
        <div className="Output-screen">
            {props.result}
        </div>
    );
}

export default OutputScreen;