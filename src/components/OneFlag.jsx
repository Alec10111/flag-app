function Oneflag(props) {
  return (
    <div>
      <img
        name={props.code}
        onClick={props.clicked}
        src={"https://flagcdn.com/84x63/" + props.code.toLowerCase() + ".png"}
      ></img>
    </div>
  );
}

export default Oneflag;
