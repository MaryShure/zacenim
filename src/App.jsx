import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Works from "./components/Works";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Steps />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
