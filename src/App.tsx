import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/Reusble/NavBar/NavBar";
import PrimiumContainer from "./components/Reusble/PrimiumContainer/PrimiumContainer";
import Input from "./components/Reusble/Inputs/Input"; 
import DataCardBody from "./components/Reusble/DataCardBody/DataCardBody";
import Card from "./components/Reusble/Card/Card";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    console.log("Input changed:", value);
  };

  return (
    <div>
      <NavBar />
      <PrimiumContainer />
      <Input
        placeholder="Enter"
        name="input"
        value={inputValue}
        label="Input Label"
        onChange={handleInputChange}
      />
  
      <Card/>

      
    </div>
  );
}

export default App;