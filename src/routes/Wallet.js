import React from 'react'
import Ressources from "../components/Ressources"

const Wallet = () => {
    return (
        <div className="wallet">
            

            <div className="ammount">
        <div id="eos"><h1>900.2521</h1><img alt="EOS-ICON" src="https://res.cloudinary.com/munnotubbel/image/upload/v1581182752/wombat/5a52232c2f93c7a8d5137fdd_izhtxc.png"/></div>
        <div id="dollar"><h2>= 39.60$</h2></div>
      </div>
      <div className="resourceinfo">
      <div id="ressources_title">
        <h4>Ressources</h4>
        
        <div>
          <h5>Staked</h5>
          <p>1.0000</p>

        </div>
        
        
        </div>
        <Ressources />
      </div>



        </div>
    )
}

export default Wallet;
