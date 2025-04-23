import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/Reusble/NavBar/NavBar";
import PrimiumContainer from "./components/Reusble/PrimiumContainer/PrimiumContainer";
import Input from "./components/Reusble/Inputs/Input"; 
import Card from "./components/Reusble/Card/Card";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setInputValue(value);
    console.log("INPUT VALUE", value);
  };

  return (
    <div>
      <NavBar />
      <PrimiumContainer />
      <Input
        placeholder="Enter"
        name="input"
        label="Input Label"
        value={inputValue}
        onChange={handleInputChange}
      />
  
      <Card/>

      
    </div>
  );
}

export default App;