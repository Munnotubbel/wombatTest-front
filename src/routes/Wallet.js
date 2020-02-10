import React, { useContext } from "react";
import Ressources from "../components/Ressources";
import { DataContext } from "../context/DataContext";
import TradeButtons from "../components/TradeButtons";
import EosLoader from "../components/EosLoader"
const Wallet = () => {
  const eosIcon =
    "https://res.cloudinary.com/munnotubbel/image/upload/v1581182752/wombat/5a52232c2f93c7a8d5137fdd_izhtxc.png";

  const dataCon = useContext(DataContext);
  const exchangeValue = dataCon.ballance * dataCon.exchangeValue;
  return (
    <div className="wallet">
      {dataCon.isLoading === true ? (
        <div className="ammount">
          <EosLoader/>
       
        
        </div>
      ) : (
        <div className="ammount">
          <div id="eos">
            <h1>{dataCon.ballance}</h1>
            <img alt="EOS-ICON" src={eosIcon} />
          </div>
          <div id="dollar">
            <h2>{`= ${
              isNaN(exchangeValue) ? "-" : exchangeValue.toFixed(2)
            }$`}</h2>
          </div>
        </div>
      )}

      <TradeButtons />
      <div className="resourceinfo">
        <div id="ressources_title">
          <h4>Ressources</h4>

          <div>
            <h5>Staked</h5>
            <div className="stakedinfo">
              <p>{dataCon.staked}</p>
              <img className="coinIcon" alt="EOS-ICON" src={eosIcon} />
            </div>
          </div>
        </div>
        <Ressources />
      </div>
    </div>
  );
};

export default Wallet;
