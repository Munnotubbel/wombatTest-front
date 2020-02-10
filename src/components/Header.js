import React,{useContext} from 'react'
import { DataContext } from "../context/DataContext";
const Header = () => {
    
    
    const dataCon = useContext(DataContext);
    console.log(dataCon)
    return (
        <div className="headtitle">  
             <h1>{dataCon.accountName!==null ? dataCon.accountName : "nobody" }</h1>
        </div>
    )
}

export default Header;
