import React,{useContext} from 'react'
import Ressources from "../components/Ressources"
import { DataContext } from "../context/DataContext";
import TradeButtons from "../components/TradeButtons"
const Wallet = () => {
    const dataCon = useContext(DataContext);
    
    return (
        <div className="wallet">
            

            <div className="ammount">
        <div id="eos"><h1>{dataCon.ballance}</h1><img alt="EOS-ICON" src="https://res.cloudinary.com/munnotubbel/image/upload/v1581182752/wombat/5a52232c2f93c7a8d5137fdd_izhtxc.png"/></div>
    <div id="dollar"><h2>{`= ${(dataCon.ballance*dataCon.exchangeValue).toFixed(2)}$`}</h2></div>
      </div>

      <TradeButtons/>
      <div className="resourceinfo">
      <div id="ressources_title">
        <h4>Ressources</h4>
        
        <div>
          <h5>Staked</h5>
          <p>{dataCon.staked}</p>

        </div>
        
        
        </div>
        <Ressources />
      </div>



        </div>
    )
}

export default Wallet;
