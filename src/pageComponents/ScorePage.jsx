import { HashRouter as Router, Switch, Link, Route } from "react-router-dom";
import ScoreTable from "../components/ScoreTable";

function ScorePage(props) {
  return (
    <Router>
      <div className="col">
        <div className="row-md-3">
          <Link to="/scores/GF" className="btn btn-outline-info">
            Guess Flag
          </Link>
          <Link to="/scores/GC" className="btn btn-outline-info">
            Guess Country
          </Link>
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
