import React from "react";
import "./Footer"
import App from "./App";
import { shallow } from "enzyme";

describe("Footer Component Tests", () => {
  it("Renders a div with the class App-Footer", () => {
    const Footer = shallow(<Footer />);
    expect(Footer.find(".App-Footer")).toBeDefined();
  });
});