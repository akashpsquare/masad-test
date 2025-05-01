
import "./App.css";
import {useState} from 'react';
import DataCard from "./components/Reusable/DataCard/DataCard";
import NavBar from "./components/Reusable/NavBar/NavBar";

import Input from "./components/Reusable/Inputs/Input";


function App() {

  const [input,setInput] = useState({
    name: ''
  })
  function handelchange(e: React.ChangeEvent<HTMLInputElement>): void {
    const {name, value} = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }));
    console.log(`${e.target.name}: ${e.target.value}`);
  }

  return (
    <div>
   <NavBar />
 <DataCard/>
   <Input label={'Name'} name={'name'}   placeholder={'Ener Your name'} type={'text'} onChange={handelchange} value={input.name}/>
    </div>
  );
}

export default App;