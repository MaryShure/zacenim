import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <section style={{ height: "100vh", background: "#eee", padding: "40px" }}>
        <h2>Остальные секции появятся позже</h2>
      </section>
    </div>
  );
}

export default App;
