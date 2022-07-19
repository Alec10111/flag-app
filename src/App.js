import React, { useEffect, useState } from "react";
import { HashRouter as Router, Switch, Link, Route } from "react-router-dom";
import GuessFlagPage from "./pageComponents/GuessFlagPage";
import ScorePage from "./pageComponents/ScorePage";
import GuessCountryPage from "./pageComponents/GuessCountryPage";
import "./App.css";
import SelectModePage from "./pageComponents/SelectModePage";
import LearnPage from "./pageComponents/LearnPage";
import NavBar from "./components/NavBar";
// var modeContext = React.createContext(null);

function App() {
  useEffect(()=>{
    console.log("reload")
  })
  const [mode, setMode] = useState("WW");
  const [fmode, setFmode] = useState("GC");

  const [btnCtrl, setBtnCtrl] = useState(-1);
  const [btn2Ctrl, setBtn2Ctrl] = useState(-1);

  function handleMode(event) {
    //event.className = "btn btn-outline-info pressed";
    setBtn2Ctrl(event.target.name);
    setMode(event.target.value);
    //setPressed(prev => !prev);
  }

  function handleFMode(event) {
    setBtnCtrl(event.target.name);
    setFmode(event.target.value);
    console.log(btnCtrl)
    //setPressed(prev => !prev);
  }

  return (
    <div className="container"
      style={{
        display: "grid",
        justifyContent: "center",
        // height: "100vh",
        maxWidth: "500px"
      }}
    >
      <Router>
          <h1 style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>Flag Guesser</h1>
          <hr/>
          <NavBar/>
          <hr/>

          <Switch>
            <Route exact path="/">
              <div style={{ display: "grid", justifyContent: "center" }}>
              <div class="btn-group" style={{ display: "flex", justifyContent: "center" }} role="group" aria-label="Basic radio toggle button group">
                <input value="GF" onClick={handleFMode} type="radio" className="btn-check" name="selectMode" id="guessFlag" autocomplete="off"/>
                <label  className="btn-neu btn-outline-primary remove-active" for="guessFlag">Guess Flag</label>

                <input value="GC" onClick={handleFMode} type="radio" className="btn-check" name="selectMode" id="selectMode" autocomplete="off"/>
                <label  className="btn-neu btn-outline-primary" for="selectMode">Guess Country</label>
              </div>
            
                {/* <div class="btn-group" role="group" style={{ display: "flex", justifyContent: "center" }}>
                <label value="GF" onClick={handleFMode} className="btn btn-outline-primary" for="guessFlag">
                Guess Flag</label>
                  <input
                    className="btn-check"
                    id="guessFlag"
                    onClick={handleFMode}
                    name="selectMode"
                    type="radio"
                    value="GF"
                    // autocomplete="off"

                    // className={
                    //   1 === btnCtrl
                    //     ? "pressed"
                    //     : ""
                    // }
                  />
                 
                 <label className="btn btn-outline-primary" for="guessCountry">
                 Guess Country
                    </label>
                  <input
                    id="guessCountry"
                    onClick={handleFMode}
                    value="GC"
                    name="selectMode"
                    type="radio"
                    className="btn-check"
                    // autocomplete="off"
                    // className={
                    //   2 == btnCtrl
                    //     ? "pressed"
                    //     : ""
                    // }
                  />
                </div> */}
                <hr />
                <div className="countrySelection" style={{ display: "grid"}}> 
                <button
                  onClick={handleMode}
                  value="EU"
                  type="button"
                  name={2}
                  // className={
                  //   2 == btn2Ctrl
                  //     ? "pressed"
                  //     : ""
                  // }
                >
                  Europe
                </button>
                <button
                  onClick={handleMode}
                  value="AS"
                  type="button"
                  name={3}
                  // className={
                  //   3 == btn2Ctrl
                  //     ? "btn btn-outline-info pressed"
                  //     : "btn btn-outline-info"
                  // }
                >
                  Asia
                </button>
                <button
                  onClick={handleMode}
                  value="AF"
                  type="button"
                  name={4}
                  // className={
                  //   4 == btn2Ctrl
                  //     ? "btn btn-outline-info pressed"
                  //     : "btn btn-outline-info"
                  // }
                >
                  Africa
                </button>
                <button
                  onClick={handleMode}
                  value="OC"
                  type="button"
                  name={5}
                  // className={
                  //   5 == btn2Ctrl
                  //     ? "btn btn-outline-info pressed"
                  //     : "btn btn-outline-info"
                  // }
                >
                  Oceania
                </button>
                <button
                  onClick={handleMode}
                  value="NA"
                  type="button"
                  name={6}
                  // className={
                  //   6 == btn2Ctrl
                  //     ? "btn btn-outline-info pressed"
                  //     : "btn btn-outline-info"
                  // }
                >
                  North America
                </button>
                <button
                  onClick={handleMode}
                  value="SA"
                  type="button"
                  name={7}
                  // className={
                  //   7 == btn2Ctrl
                  //     ? "btn btn-outline-info pressed"
                  //     : "btn btn-outline-info"
                  // }
                >
                  South America
                </button>
                <button
                  onClick={handleMode}
                  value="WW"
                  type="button"
                  name={1}
                  // className={
                  //   1 == btn2Ctrl
                  //     ? "btn btn-outline-info pressed"
                  //     : "btn btn-outline-info"
                  // }
                >
                  Worldwide
                </button>
                </div>
                <hr/>
                </div>
                <div className="playButtonSection" style={{ display: "flex", justifyContent: "center" }}>
                <Link className="btn-neu" to={"/play/" + fmode + "/" + mode} type="button">
                  Play
                </Link>
                </div>
             
            </Route>
            <Route path={"/play/GC/" + mode}>
              <GuessCountryPage gameMode={mode} round={1} />
            </Route>
            <Route path={"/play/GF/" + mode}>
              <GuessFlagPage gameMode={mode} round={1} />
            </Route>
            <Route path="/scores">
              <ScorePage />
            </Route>
            <Route path="/learn">
              <LearnPage />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
