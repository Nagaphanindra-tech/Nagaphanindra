import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
