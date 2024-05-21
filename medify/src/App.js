import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Component/Home/Home";
import FindDoctor from "./Component/FindDoctor/FindDoctor"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/finddoctor" element={<FindDoctor />}/>
        

      </Routes>
        
        
      
    </BrowserRouter>
  );
}

export default App;
