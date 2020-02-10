import React,{useContext} from 'react'
import { DataContext } from "../context/DataContext";
const Header = () => {
    
    
    const dataCon = useContext(DataContext);
    
    return (
        <div className="headtitle">  
                {dataCon.isLoading===true ? <h1>loading</h1>:
             <h1>{dataCon.accountName!==null ? dataCon.accountName : "nobody" }</h1>}
        </div>
    )
}

export default Header;
