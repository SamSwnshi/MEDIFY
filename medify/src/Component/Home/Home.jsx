import React from "react";
import "./Home.css"

import Navbar from "../Navbar/Navbar";
import Head from "../Head/Head";
import Form from "../Form/Form";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Head />
      {/* <Form /> */}
    </div>
  );
};

export default Home;
