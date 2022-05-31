import { Link } from "react-router-dom";
import React, { useState } from "react";

function SelectModePage(props) {
  //   var contextData = React.useContext(modeContext);
  const [mode, setMode] = useState("WW");
  const [fmode, setFmode] = useState("GC");

  const [btnCtrl, setBtnCtrl] = useState(-1);
  const [btn2Ctrl, setBtn2Ctrl] = useState(-1);

  function handleMode(event) {
    //event.className = "btn btn-outline-info pressed";
    setBtn2Ctrl(event.target.value);
    setMode(event.target.name);
    //setPressed(prev => !prev);
  }

  function handleFMode(event) {
    setBtnCtrl(event.target.value);
    setFmode(event.target.name);
    //setPressed(prev => !prev);
  }
  return (
    <div className="col">
      <h2>Select mode</h2>
      <hr />
      <div className="row p-3">
        <div className="col">
          <button
            onClick={props.setF}
            name="GF"
            type="button"
            value={1}
            className={
              1 === btnCtrl
                ? "btn btn-outline-info pressed"
                : "btn btn-outline-info"
            }
          >
            Guess Flag
          </button>
        </div>
        <div className="col">
          <button
            onClick={props.setF}
            name="GC"
            value={2}
            type="button"
            className={
              2 === btnCtrl
                ? "btn btn-outline-info pressed"
                : "btn btn-outline-info"
            }
          >
            Guess Country
          </button>
        </div>
      </div>
      <hr />
      <div className="row p-3">
        <div className="col">
          <button
            onClick={props.setM}
            name="WW"
            type="button"
            value={1}
            className={
              1 === btn2Ctrl
                ? "btn btn-outline-info pressed"
                : "btn btn-outline-info"
            }
          >
            Worldwide
          </button>
          <div className="col mt-3">
            <Link
              to={"/play/" + props.fmode + "/" + props.mode}
              className="btn btn-outline-info"
            >
              Play
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <button
              onClick={props.setM}
              name="EU"
              type="button"
              value={2}
              className={
                2 === btn2Ctrl
                  ? "btn btn-outline-info pressed"
                  : "btn btn-outline-info"
              }
            >
              Europe
            </button>
            <button
              onClick={props.setM}
              name="AS"
              type="button"
              value={3}
              className={
                3 === btn2Ctrl
                  ? "btn btn-outline-info pressed"
                  : "btn btn-outline-info"
              }
            >
              Asia
            </button>
            <button
              onClick={props.setM}
              name="AF"
              type="button"
              value={4}
              className={
                4 === btn2Ctrl
                  ? "btn btn-outline-info pressed"
                  : "btn btn-outline-info"
              }
            >
              Africa
            </button>
            <button
              onClick={props.setM}
              name="OC"
              type="button"
              value={5}
              className={
                5 === btn2Ctrl
                  ? "btn btn-outline-info pressed"
                  : "btn btn-outline-info"
              }
            >
              Oceania
            </button>
            <button
              onClick={props.setM}
              name="NA"
              type="button"
              value={6}
              className={
                6 === btn2Ctrl
                  ? "btn btn-outline-info pressed"
                  : "btn btn-outline-info"
              }
            >
              North America
            </button>
            <button
              onClick={props.setM}
              name="SA"
              type="button"
              value={7}
              className={
                7 === btn2Ctrl
                  ? "btn btn-outline-info pressed"
                  : "btn btn-outline-info"
              }
            >
              South America
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectModePage;
