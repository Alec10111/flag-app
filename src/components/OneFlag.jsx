
function Oneflag(props){
    return <div className="col">
    <img name={props.code} onClick={props.clicked} src={"https://www.countryflags.io/"+ props.code+ "/shiny/64.png"}></img>
    </div>
}

export default Oneflag;