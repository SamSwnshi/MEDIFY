import React from "react";
import "./Home.css";
import Mobile from "../Mobile/Mobile";
import Head from "../Head/Head";
import Specialisation from "../Specialisation/Specialisation.jsx";
import Blog from "../Blog/Blog.jsx";
import Offers from "../Offers/Offers";
import Medical from "../Medical/Medical";
import Patient from "../Patient/Patient";
import OurFamilies from "../OurFamilies/OurFamilies";
import Footer from "../Footer/Footer";
import Faq from "../FAQ/Faq";
const Home = () => {
  return (
    <div >
      <Head />
      <Offers />
      {/* <Specialisation /> */}
      <Medical />
      <Patient />
      <Blog />
      <OurFamilies />
      <Faq />
      <Mobile />
      <Footer />
    </div>
  );
};

export default Home;
