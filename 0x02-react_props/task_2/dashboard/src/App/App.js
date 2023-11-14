import React from "react";
import "../Header";
import "../Footer";
import "../Login";
import "../Notifications";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;