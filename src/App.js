import { useState } from "react";
import { HashRouter as Router, Switch, Link, Route } from "react-router-dom";
import GuessFlagPage from "./components/GuessFlagPage";
import ScorePage from "./components/ScorePage";
import GuessCountryPage from "./components/GuessCountryPage";
import "./App.css";
import modeButton from "./components/modeButton";
import { Collapse } from "react-collapse";

function App() {
  const [mode, setMode] = useState("WW");
  const [fmode, setFmode] = useState("GC");

  const [open, setOpen] = useState(false);

  function handleMode(event) {
    //event.className = "btn btn-outline-info pressed";
    setMode(event.target.name);
    //setPressed(prev => !prev);
  }

  function handleFMode(event) {
    setFmode(event.target.name);
    //setPressed(prev => !prev);
  }

  return (
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
                <li className="list-group-item">Learn</li>
              </ul>
            </nav>
          </div>
          <Switch>
            <Route exact path="/">
              <div className="col">
                <h2>Select mode</h2>
                <hr />
                <div className="row p-3">
                  <div className="col">
                    <button
                      onClick={handleFMode}
                      name="GF"
                      type="button"
                      className="btn btn-outline-info"
                    >
                      Guess Flag
                    </button>
                  </div>
                  <div className="col">
                    <button
                      onClick={handleFMode}
                      name="GC"
                      type="button"
                      className="btn btn-outline-info"
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
                      className="btn btn-outline-info"
                    >
                      Worldwide
                    </button>
                    <div className="col mt-3">
                      <Link
                        to={"/play/" + fmode + "/" + mode}
                        className="btn btn-info"
                      >
                        Play
                      </Link>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      {/* <a
                        class="btn btn-outline-info"
                        data-bs-toggle="collapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Select Continent
                      </a>
                      <Collapse in={open}>
                        <div class="collapse" id="collapseExample"> */}
                          <button
                            onClick={handleMode}
                            name="EU"
                            type="button"
                            className="btn btn-outline-info"
                          >
                            Europe
                          </button>
                          <button
                            onClick={handleMode}
                            name="AS"
                            type="button"
                            className="btn btn-outline-info"
                          >
                            Asia
                          </button>
                          <button
                            onClick={handleMode}
                            name="AF"
                            type="button"
                            className="btn btn-outline-info"
                          >
                            Africa
                          </button>
                          <button
                            onClick={handleMode}
                            name="OC"
                            type="button"
                            className="btn btn-outline-info"
                          >
                            Oceania
                          </button>
                          <button
                            onClick={handleMode}
                            name="NA"
                            type="button"
                            className="btn btn-outline-info"
                          >
                            North America
                          </button>
                          <button
                            onClick={handleMode}
                            name="SA"
                            type="button"
                            className="btn btn-outline-info"
                          >
                            South America
                          </button>
                        </div>
                      {/* </Collapse> */}
                    </div>
                  </div>
                </div>
              {/* </div> */}
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
