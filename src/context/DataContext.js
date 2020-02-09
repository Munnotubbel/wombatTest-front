 
import React, { createContext,useEffect } from "react";

export const DataContext = createContext();

const DataContextProvider =(props)=> {

    useEffect(() => {
        getAccount();
        console.log("!!!!!!!")
      }, []);

    function getAccount(){
console.log("in function")
        
        fetch(`https://api.eosdetroit.io:443/v1/chain/get_account`, {
          mode: "no-cors",
            method: "POST",
            
            headers: {
               'Content-type': 'application/json' },
           body:{ "account_name": "munnotubbel1"}
          },
           
          )
            .then(response => {
              return response.json()
              
            }).then(res=>
                console.log(res)
                )
            .catch(err => console.log("err", err));
        };
    

    return (
        <DataContext.Provider
          value={{
           
            
          }}
        >
          {props.children}
        </DataContext.Provider>
      );

}

export default DataContextProvider;