import "./FlagButton.css";
function FlagButton(props) {
  return (
    <button
      onClick={props.handled}
      name={props.name}
      style={{ textAlign: "center" }}
    >
      {props.country}
    </button>
  );
}
export default FlagButton;
