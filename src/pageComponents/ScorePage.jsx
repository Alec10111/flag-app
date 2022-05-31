import { Button } from "react-bootstrap";
import { HashRouter as Router, Switch, Link, Route } from "react-router-dom";
import ScoreTable from "../components/ScoreTable";

function ScorePage(props) {
  return (
    <Router>
      <div className="col">
        <div className="row-md-3">
          <button>
            <Link to="/scores/GF">Guess Flag</Link>
          </button>
          <button>
            <Link to="/scores/GC">Guess Country</Link>
          </button>
          <hr />
        </div>
        <Switch>
          <Route path="/scores/GF">
            <ScoreTable mode={"GF"} />
          </Route>
          <Route path="/scores/GC">
            <ScoreTable mode={"GC"} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default ScorePage;
