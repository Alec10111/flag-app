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

export default NavBar;
