import { memo } from "react";

const CallBackChild = ({childCount,handleSum}) =>{

    console.log('child Render...');
    
    return (
        <>
          <h6>==================Child componnent =============</h6>  
          <h4>Child Count : {childCount}</h4>
          <button onClick={handleSum}> Click....</button>
        </>
    )
}

export default memo(CallBackChild);