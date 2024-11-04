import React,{useState} from "react";

function ColourPicker(){

  const [color,setColor]=useState("#FFFFFF");

  function handleColorChange(e){
    setColor(e.target.value);
  }


  return(<div className="color-picker-container">
    <h1>Colour Picker</h1>
    <div className="color-display" style={{backgroundColor:color}}>
      <p>Selected Colour :{color}</p>
    </div>
    <label>
      Select A Colour<br/>
      <input type="color" value={color} onChange={handleColorChange}></input>
    </label>
  </div>);
}

export default ColourPicker