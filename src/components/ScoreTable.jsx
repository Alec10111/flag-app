import { gameCodes } from "../utils";

function ScoreTable(props) {

  return (
    <div className="container">
      <h2>Best attempts: {gameCodes[props.mode]}</h2>
      <table className="table table-compact table-striped">
        <thead></thead>
        <tbody>
          <tr>
            <td>
              <strong>Worldwide:</strong>
            </td>
            <td>{localStorage.getItem(props.mode+"-WW")}/195</td>
          </tr>
          <tr>
            <td>
              <strong>Europe</strong>
            </td>
            <td>{localStorage.getItem(props.mode+"-EU")}/44</td>
          </tr>
          <tr>
            <td>
              <strong>Asia</strong>
            </td>
            <td>{localStorage.getItem(props.mode+"-AS")}/48</td>
          </tr>
          <tr>
            <td>
              <strong>North America</strong>
            </td>
            <td>{localStorage.getItem(props.mode+"-NA")}/35</td>
          </tr>
          <tr>
            <td>
              <strong>South America</strong>
            </td>
            <td>{localStorage.getItem(props.mode+"-SA")}/35</td>
          </tr>
          <tr>
            <td>
              <strong>Africa</strong>
            </td>
            <td>{localStorage.getItem(props.mode+"-AF")}/54</td>
          </tr>
          <tr>
            <td>
              <strong>Oceania</strong>
            </td>
            <td>{localStorage.getItem(props.mode+"-OC")}/14</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScoreTable;
