import CardWrapper from "./components/Reusble/CardWrapper/CardWrapper";
import PlusIcon from "../src/assets/Icons/PlusIcon.svg";
import  "./App.css";
import EmpatyCard from "./components/Reusble/EmpatyCard/EmptyCard";
import DataCard from "./components/Reusble/DataCard/DataCard";

function App() {
  return (
    <>
      <CardWrapper  customStyle="customClass"
           children={<EmpatyCard label="Add Product" icon={<img src={PlusIcon} alt="ss"/>}/>}   />

<CardWrapper  customStyle="customClass"
children={<DataCard/>}
/>
    </>
  );
}

export default App;
