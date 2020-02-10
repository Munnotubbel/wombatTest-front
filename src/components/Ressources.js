import React,{useContext} from 'react'
import RessourceType from "./RessourceType"
import ProgressBar from "./ProgressBar"
import { DataContext } from "../context/DataContext";

const Ressources = () => {

    const dataCon = useContext(DataContext);
  

    return (
      
        <div className="ressources" >
            
            <div><RessourceType type={"Net"} consumption={`${dataCon.net_use}kb / ${dataCon.net_max}kb`} staked={dataCon.net_weight} />
            <ProgressBar  percent={Math.round((dataCon.net_use/dataCon.net_max)*100)} />
            
            </div>


            <div><RessourceType type={"Cpu"} consumption={`${dataCon.cpu_use}kb / ${dataCon.cpu_max}kb`} staked={dataCon.cpu_weight} />
            <ProgressBar  percent={Math.round((dataCon.cpu_use/dataCon.cpu_max)*100)>100 ? 100 : Math.round((dataCon.cpu_use/dataCon.cpu_max)*100) } /></div>


            <div style={{marginBottom: "60px"}}><RessourceType type={"Ram"} consumption={`${dataCon.ram_use}kb / ${dataCon.ram_max}kb`} staked={""} />
            <ProgressBar  percent={Math.round((dataCon.ram_use/dataCon.ram_max)*100) } /></div>


         


        </div>
       
    )
}

export default Ressources;
