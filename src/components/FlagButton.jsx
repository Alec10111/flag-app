import "./FlagButton.css";
function FlagButton(props) {
  return (
    <button onClick={props.handled} name={props.name} className="">
      {props.country}
    </button>
  );
}
export default FlagButton;
