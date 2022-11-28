import React, { Fragment } from "react"
import ContactInfo from "./../components/homeComponents/ContactInfo";
import Header from "../components/layout/Header";
import PlusInfo from "../components/homeComponents/PlusInfo";
import Footer from "../components/layout/Footer";
import Home from "../components/Home";


const HomeScreen = () => {
  return (
    <Fragment>
      <div>
      <Header/>
      <Home/>
      <PlusInfo/>
      <ContactInfo />
      <Footer/>
      </div>
    </Fragment>
    
  );
};

export default HomeScreen;
