import "./App.css";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import Specialisation from "./Component/Specialisation/Specialisation";
import Blog from "./Component/Blog/Blog";
import Offers from "./Component/Offers/Offers"
import Medical from "./Component/Medical/Medical"
import Patient from "./Component/Patient/Patient";
import OurFamilies from "./Component/OurFamilies/OurFamilies";
import Faq from "./Component/FAQ/Faq";
import Mobile from "./Component/Mobile/Mobile";

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
      <Home/>
      <Offers/>
      {/* <Specialisation/> */}
      <Medical/>
      <Patient/>
      <Blog/>
      <OurFamilies/>
      <Faq/>
      <Mobile/>
    <Footer/>
    </div>
  );
}

export default App;
