import React from 'react'

const ProgressBar = (props) => {
    return (
        <div className="progressbar">
            <div className="percent"><div>{props.percent} %</div></div>
            <div className="barOuter"><div style={{width:`${props.percent}%`, backgroundColor:"white", borderColor:"black", borderWidth:"2px", height:"16px", borderStyle:"solid"}}></div></div>
        </div>
    )
}

export default ProgressBar;
