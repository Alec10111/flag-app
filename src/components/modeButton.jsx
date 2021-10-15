import { useState } from "react";
function modeButton(props){
    return <button onClick={props.click} style={props.press ? {background:"#51C4D3", color: "white"} : null } name={props.mode} type="button" className="btn btn-outline-info">
   { props.text}
  </button>

}

export default modeButton;