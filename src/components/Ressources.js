import React, { useContext } from "react";
import RessourceType from "./RessourceType";
import ProgressBar from "./ProgressBar";
import { DataContext } from "../context/DataContext";

const Ressources = () => {
  const dataCon = useContext(DataContext);

  function calcPercent(number1, number2) {
    const percent = Math.round((number1 / number2) * 100);

    if (percent >= 100) {
      return 100;
    } else if (percent >= 0) {
      return percent;
    } else {
      return 0;
    }
  }

  return (
    <div className="ressources">
      <div>
        <RessourceType
          type={"Net"}
          consumption={`${dataCon.net_use}kb / ${dataCon.net_max}kb`}
          staked={dataCon.net_weight}
          withIcon={true}
        />
        <ProgressBar percent={calcPercent(dataCon.net_use, dataCon.net_max)} />
      </div>

      <div>
        <RessourceType
          type={"Cpu"}
          consumption={`${dataCon.cpu_use}kb / ${dataCon.cpu_max}kb`}
          staked={dataCon.cpu_weight}
          withIcon={true}
        />
        <ProgressBar percent={calcPercent(dataCon.cpu_use, dataCon.cpu_max)} />
      </div>

      <div style={{ marginBottom: "60px" }}>
        <RessourceType
          type={"Ram"}
          consumption={`${dataCon.ram_use}kb / ${dataCon.ram_max}kb`}
          staked={""}
        />
        <ProgressBar percent={calcPercent(dataCon.ram_use, dataCon.ram_max)} />
      </div>
    </div>
  );
};

export default Ressources;
