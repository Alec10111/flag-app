function Oneflag(props) {
  return (
    <div>
      {/* <span name={props.code} onClick={props.clicked} className={"flag-icon flag-icon-"+props.code.toLowerCase()}></span> */}
      <img
        name={props.code}
        onClick={props.clicked}
        src={"https://flagcdn.com/84x63/" + props.code.toLowerCase() + ".png"}
      ></img>
      {/* <img name={props.code} onClick={props.clicked} src={"https://www.countryflags.io/"+ props.code+ "/shiny/64.png"}></img> */}
    </div>
  );
}

export default Oneflag;
