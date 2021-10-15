
function FlagButton(props){
    return <button
    onClick={props.handled}
    name={props.name}
    type="button"
    className="btn btn-outline-info"
  >
    {props.country}
  </button>

}
export default FlagButton;