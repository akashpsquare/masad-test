import "./App.css";
import { baseAppUrl } from "./config/config.ts";
import AddBenefits from "./modules/Testbenefits/AddBenefits.tsx";

// function App() {
//   return <>Hello Masad${baseAppUrl}</>;
// }


function App() {
  return <>
    <AddBenefits />
  </>;
}
export default App;