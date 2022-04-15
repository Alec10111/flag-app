import React, { useState } from "react";
import { HashRouter as Router, Switch, Link, Route } from "react-router-dom";
import GuessFlagPage from "./components/GuessFlagPage";
import ScorePage from "./components/ScorePage";
import GuessCountryPage from "./components/GuessCountryPage";
//import "./App.css";
import SelectModePage from "./components/SelectModePage";
import Learn from "./components/Learn";
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
    // <modeContext.Provider value={}>
    <Router>
      <div className="container">
        <div className="row-md-2">
          <h1>Flag Guesser</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-3">
            <nav>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/scores">ScoreBoard</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/learn">Learn</Link>
                  </li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route exact path="/">
              
                {/* <SelectModePage /> */}
                <div className="col">
      <h2 className="text-3xl font-bold underline">Select mode</h2>
      <hr />
      <div className="row p-3">
        <div className="col">
          <button
            onClick={handleFMode}
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
            onClick={handleFMode}
            name="GC"
            value={2}
            type="button"
            className={
              2 == btnCtrl
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
            onClick={handleMode}
            name="WW"
            type="button"
            value={1}
            className={
              1 == btn2Ctrl
                ? "btn btn-outline-info pressed"
                : "btn btn-outline-info"
            }
          >
            Worldwide
          </button>
          <div className="col mt-3">
            <Link
              to={"/play/" + fmode + "/" + mode}
              className="btn btn-outline-info"
            >
              Play
            </Link>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <button
              onClick={handleMode}
              name="EU"
              type="button"
              value={2}
              className={
                2 == btn2Ctrl
                  ? "btn btn-outline-info pressed"
                  : "btn btn-outline-info"
              }
            >
              Europe
            </button>
            <button
              onClick={handleMode}
              name="AS"
              type="button"
              value={3}
              className={
                3 == btn2Ctrl
                  ? "btn btn-outline-info pressed"
                  : "btn btn-outline-info"
              }
            >
              Asia
            </button>
            <button
              onClick={handleMode}
              name="AF"
              type="button"
              value={4}
              className={
                4 == btn2Ctrl
                  ? "btn btn-outline-info pressed"
                  : "btn btn-outline-info"
              }
            >
              Africa
            </button>
            <button
              onClick={handleMode}
              name="OC"
              type="button"
              value={5}
              className={
                5 == btn2Ctrl
                  ? "btn btn-outline-info pressed"
                  : "btn btn-outline-info"
              }
            >
              Oceania
            </button>
            <button
              onClick={handleMode}
              name="NA"
              type="button"
              value={6}
              className={
                6 == btn2Ctrl
                  ? "btn btn-outline-info pressed"
                  : "btn btn-outline-info"
              }
            >
              North America
            </button>
            <button
              onClick={handleMode}
              name="SA"
              type="button"
              value={7}
              className={
                7 == btn2Ctrl
                  ? "btn btn-outline-info pressed"
                  : "btn btn-outline-info"
              }
            >
              South America
            </button>
          </div>
          {/* </Collapse> */}
        </div>
      </div>
    </div>
              
            </Route>
            <Route path={"/play/GC/" + mode}>
              <div className="col ml-3">
                <GuessCountryPage gameMode={mode} round={1} />
              </div>
            </Route>
            <Route path={"/play/GF/" + mode}>
              <div className="col ml-3">
                <GuessFlagPage gameMode={mode} round={1} />
              </div>
            </Route>
            <Route path="/scores">
              <ScorePage />
            </Route>
            <Route path="/learn">
              <Learn />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    // </modeContext.Provider>
  );
}

export default App;
