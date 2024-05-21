import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";


function App() {
  return (
    <div className="App">
      <div className="heading">
        <p>
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness
        </p>
      </div>
      <Navbar />
      <Home />

     
    </div>
  );
}

export default App;
