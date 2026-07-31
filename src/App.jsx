import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <section style={{ height: "100vh", background: "#eee", padding: "40px" }}>
        <h2>Остальные секции появятся позже</h2>
      </section>
      <Footer />
    </div>
  );
}

export default App;
