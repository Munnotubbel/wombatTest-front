import React from 'react'

const RessourceType = (props) => {
    const eosIcon="https://res.cloudinary.com/munnotubbel/image/upload/v1581182752/wombat/5a52232c2f93c7a8d5137fdd_izhtxc.png"
    return (
        <div className="ressource_type">
            <div id="type">{props.type}</div>
            <div id="consumption">{props.consumption}</div>
          
            <div className="stakedinfo"><p>{props.staked}</p>{props.withIcon===true ?<img className="coinIcon" alt="EOS-ICON" src={eosIcon}/>:null}</div>
        </div>
    )
}

export default RessourceType;
