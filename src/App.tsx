import React from "react";

import "./App.css";
import MainPage from "./screens/mainPage/MainPage";
import TopBar from "./components/topbar/Topbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar />
        <MainPage />
        <Footer />
      </header>
    </div>
  );
}

export default App;
