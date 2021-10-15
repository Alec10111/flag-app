import { HashRouter as Router, Switch, Link, Route } from "react-router-dom";

function ScorePage(props) {
  return (
    <Router>
    <div className="col">
      <div className="row-md-3">
        <Link to="/scores/GF" className="btn btn-outline-info">Guess Flag</Link>
        <Link to="/scores/GC" className="btn btn-outline-info">Guess Country</Link>
        <hr/>
      </div>
      <Switch>
      <Route path="/scores/GF">
      <h2>Best attempts: Guess Flag</h2>

      <table className="table table-compact table-striped">
        <thead></thead>
        <tbody>
          <tr>
            <td>
              <strong>Worldwide:</strong>
            </td>
            <td>0/195</td>
          </tr>
          <tr>
            <td>
              <strong>Europe</strong>
            </td>
            <td>0/44</td>
          </tr>
          <tr>
            <td>
              <strong>Asia</strong>
            </td>
            <td>0/48</td>
          </tr>
          <tr>
            <td>
              <strong>America</strong>
            </td>
            <td>0/35</td>
          </tr>
          <tr>
            <td>
              <strong>Africa</strong>
            </td>
            <td>0/54</td>
          </tr>
          <tr>
            <td>
              <strong>Oceania</strong>
            </td>
            <td>0/14</td>
          </tr>
        </tbody>
      </table>
      </Route>
      
      </Switch>
    </div>
    
    </Router>
  );
}

export default ScorePage;
