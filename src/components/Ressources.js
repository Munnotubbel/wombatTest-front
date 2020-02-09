import React from 'react'
import RessourceType from "./RessourceType"
import ProgressBar from "./ProgressBar"

const Ressources = () => {
    return (
      
        <div className="ressources" >
            
            <div><RessourceType type={"Net"} consumption={"0,15kb/190,17kb"} staked={"0.2000"} />
            <ProgressBar  percent={30} />
            
            </div>


            <div><RessourceType type={"Cpu"} consumption={"0,12ms/103,01ms"} staked={"0.8000"} />
            <ProgressBar  percent={45} /></div>


            <div style={{marginBottom: "10%"}}><RessourceType type={"Ram"} consumption={"3,63kb/5,34kb"} staked={""} />
            <ProgressBar  percent={89} /></div>


         


        </div>
       
    )
}

export default Ressources;
