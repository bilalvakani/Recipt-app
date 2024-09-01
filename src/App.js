
import './App.css';
import { Mainpage } from './Components/Mainpage';
import {Route, Router, Routes} from "react-router-dom"
import { Mealsinformation } from './Components/Mealsinformation';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Mainpage/>}/>
      {/* <Route path='/:mealid' element={<Mealsinformation/>}/> */}
      <Route path='/meal/:mealids' element={<Mealsinformation />} />

    </Routes>
     
    </div>
  );
}

export default App;
