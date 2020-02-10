import React,{useEffect, useContext} from "react";
import { DataContext } from "../context/DataContext";

const ProgressBar = props => {
   const dataCon = useContext(DataContext);
   useEffect(() => {
    move()
  }, [dataCon.isLoading===true]);


   var i = 0;
   function move() {
    var elem = document.getElementById(props.slug);
     if (props.percent>0){
     if (i == 0) {
       i = 1;
       var elem = document.getElementById(props.slug);
       var width = 0;
       var id = setInterval(frame, 20);
       function frame() {
         if (width >= props.percent) {
           clearInterval(id);
           i = 0;
         } else {
           width++;
           elem.style.width = width + "%";
         }
       }
     }}
     else{elem.style.width = props.percent+"%"}
   }


  return (
    <div className="progressbar">
      <div className="percent">
        <div>{isNaN(props.percent)? "-" : props.percent} %</div>
      </div>
      <div className="barOuter">
        <div id={props.slug} 
          style={{
            width:"0%",
            backgroundColor: "white",
            borderColor: "black",
            borderWidth: "2px",
            height: "16px",
            borderStyle: "solid"
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
