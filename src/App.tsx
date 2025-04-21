
import  "./App.css";
import NavBar from "./components/Reusble/NavBar/NavBar";
import PrimiumContainer from "./components/Reusble/PrimiumContainer/PrimiumContainer";
import Input from "./components/Reusble/Inputs/Input"; 
import  SideBar from "./components/Reusble/SideBar/SideBar";


function App() {


            return (
       <div>
         <NavBar/>
         <PrimiumContainer/>
       
         <Input
           placeholder="Enter"
           name="input"
           value=""
           label="Input Label"
           onChange={() => {
             console.log("Input changed");
           }}
         />
         <SideBar/>
       </div>
            );
          }

export default App;
