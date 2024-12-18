import React from "react";

function Second(props) {
    if(props.status) {
        return <h1>Status:Active</h1>
    } else {
        return <h1>Status: Inactive</h1>
    }
}

export default Second;