import React from 'react'

const RessourceType = (props) => {
    return (
        <div className="ressource_type">
            <div id="type">{props.type}</div>
            <div id="consumption">{props.consumption}</div>
            <div id="staked">{props.staked}</div>
        </div>
    )
}

export default RessourceType;
