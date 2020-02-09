import React from 'react'

const NavIcon = (props) => {
    return (
        <div className="navicon">
            <img src={props.iconurl} />
            <p>{props.routename}</p>
        </div>
    )
}

export default NavIcon;
