import React from "react";

function Entries(props){
    return ( 
        <div>
            <div className="outerFieldBox">
                <div className="topBox">
                    <p>{props.name}</p>
                </div>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Entries;