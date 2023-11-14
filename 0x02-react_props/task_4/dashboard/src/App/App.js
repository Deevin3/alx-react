import React from "react";
import Notifications from "../Notifications";
import Header from "../Header";
import Login from "../Login";
import Footer from "../Footer";
import CourseList from "..CourseList";
import "./App.css";

function App(isLoggedIn) {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}
App.defaultProps = {
  isLoggedIn: false,
};

export default App;