import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/Reusble/NavBar/NavBar";
import PrimiumContainer from "./components/Reusble/PrimiumContainer/PrimiumContainer";
import MemberIcon from "./assetS/Icons/PrimiumMemberIcon.svg";
import EditIcon from "./assetS/Icons/EditIcon.svg";
import SideBar from "./components/Reusble/SideBar/SideBar";
import Input from "./components/Reusble/Inputs/Input"; 
import DataCard from './components/Reusble/DataCard/DataCard';
import { EmptyCard } from "./components/Reusble";
import Card from "./components/Reusble/Card/Card";
import PlusIcon from "../src/assetS/Icons/PlusIcon.svg"; 
import SubHeader from "./components/Reusble/SubHeader/SubHeader";
import BenefitContainer from "./components/Reusble/BenefitContainer/BenefitContainer";



function App() {
  const [inputValue, setInputValue] = useState<string>("");

  const benefits = [
      "Benefit from thorough safety inspections and regulatory compliance checks to uphold industry standards.",
      "Enjoy comprehensive safety evaluations and compliance assessments to ensure top-notch standards.",
      "Receive expedited scheduling for service requests and maintenance appointments",
    ];
  

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
      <DataCard />

<Card className="service_card">
  <EmptyCard label="Add Service" icon={PlusIcon} />
  </Card>
      <SubHeader label={'Non Comperhensive'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum orci dolor, egestas consequat metus efficitur eu. Cras pharetra'} memberType={'Yellow'} month={10} price={3} editIcon ={EditIcon} memberIcon={MemberIcon} />
      <SideBar/>
      <BenefitContainer benefit={benefits} count={benefits.length} />
    </div>
  );
}

export default App;