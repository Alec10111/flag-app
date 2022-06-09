import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link className="btn-neu" to="/">
        Home
      </Link>
      <Link className="btn-neu" to="/scores/GF">
        ScoreBoard
      </Link>
      <Link className="btn-neu" to="/learn">
        Learn
      </Link>
    </div>
  );
}

function NavBar2() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/scores/GF">ScoreBoard</Link>
          </li>
          <li>
            <Link to="/learn">Learn</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default NavBar;
