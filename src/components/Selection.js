import React, { useState } from "react";
const Selection=(applyColor)=>{
    const {nextBackground}=applyColor;
    const [a,seta]=useState({background:''});
 

  
    return(
        <>
         <div className="fix-box" style={{background:a.background}} onClick={()=>{
           applyColor.applyColor(seta);
         }}>
            
             
            </div>
        </>
    )


}
export default Selection;