
import "./App.css";
import NavBar from "./components/Reusble/NavBar/NavBar";
import AddBenefit from "./components/Reusble/AddBenefit/AddSBenefit";

import DataCard from "./components/Reusble/DataCard/DataCard";



function App() {

  return (
    <div>
   <NavBar />
   <DataCard />
   <AddBenefit />
    </div>
  );
}

export default App;