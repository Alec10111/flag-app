import React, { useState } from "react";
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
                <div className="modeSelection" style={{ display: "flex", justifyContent: "center" }}>
                <button
                  onClick={handleFMode}
                  name="GF"
                  // type="button"
                  value={1}
                  className="anchor"
                  // className={
                  //   1 === btnCtrl
                  //     ? "btn btn-outline-info pressed"
                  //     : "btn btn-outline-info"
                  // }
                >
                  Guess Flag
                </button>
                <button
                  onClick={handleFMode}
                  name="GC"
                  value={2}
                  type="button"
                  // className={
                  //   2 == btnCtrl
                  //     ? "btn btn-outline-info pressed"
                  //     : "btn btn-outline-info"
                  // }
                >
                  Guess Country
                </button>
                </div>
                <hr />
                <div className="countrySelection" style={{ display: "grid"}}> 
                <button
                  onClick={handleMode}
                  name="EU"
                  type="button"
                  value={2}
                  // className={
                  //   2 == btn2Ctrl
                  //     ? "btn btn-outline-info pressed"
                  //     : "btn btn-outline-info"
                  // }
                >
                  Europe
                </button>
                <button
                  onClick={handleMode}
                  name="AS"
                  type="button"
                  value={3}
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
                  name="AF"
                  type="button"
                  value={4}
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
                  name="OC"
                  type="button"
                  value={5}
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
                  name="NA"
                  type="button"
                  value={6}
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
                  name="SA"
                  type="button"
                  value={7}
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
                  name="WW"
                  type="button"
                  value={1}
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
