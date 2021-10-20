
function FlagButton(props){
    return <button
    onClick={props.handled}
    name={props.name}
    type="button"
     className="buto"
  >
    {props.country}
  </button>

}
export default FlagButton;