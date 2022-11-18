import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Introduction from "./components/Layout/Introduction";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Layout/Projects";
import About from "./components/Layout/About";
import Section from "./components/Layout/Section";
import Contacts from "./components/Layout/Contacts";

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Projects />
      <About />
      <Section />
      <Contacts />
      {/* <Footer /> */}
    </>
  );
}

export default App;
