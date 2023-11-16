import React from "react";
import Notifications from "../Notifications";
import Header from "..Header";
import Login from "../Login";
import Footer from "../Footer";
import { getLatestNotification } from "../utils";
import CourseList from "../CourseList";
import "./App.css";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

function App(isLoggedIn) {
  return (
    <React.Fragment>
      <Notifications listNotifications={listNotifications} />
      <div className="App">
        <Header />
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}
App.defaultProps = {
  isLoggedIn: false,
};

export default App;