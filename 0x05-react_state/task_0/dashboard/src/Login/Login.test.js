import React from "react";
import "./Login";
import App from "./App";
import { shallow } from "enzyme";

describe("Footer Component Tests", () => {
  it("Renders a div with the class App-body", () => {
    const Login = shallow(<Login />);
    expect(Login.find(".App-body")).toBeDefined();
  });
});