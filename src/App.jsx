import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;
