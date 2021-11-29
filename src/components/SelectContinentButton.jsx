import SelectModePage from "./SelectModePage"

function SelectContinentButton(props) {
 return <button
 onClick={props.setM}
 name="SA"
 type="button"
 value={7}
 className={
   7 == btn2Ctrl
     ? "btn btn-outline-info pressed"
     : "btn btn-outline-info"
 }
>
 South America
</button>    
}

export default SelectModePage;