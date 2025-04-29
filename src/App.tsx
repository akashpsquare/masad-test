
import "./App.css";
import DataCard from "./components/Resusable/DataCard/DataCard";
import NavBar from "./components/Resusable/NavBar/NavBar";
import SideBar from "./components/Resusable/SideBar/SideBar";


function App() {

  return (
    <div>
   <NavBar />
<DataCard/>

<div className='sidebar'>
<SideBar/>  
<div className='sidebarside'>

</div>
</div>


    </div>
  );
}

export default App;