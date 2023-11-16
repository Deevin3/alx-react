import React from "react";
import "./Header";
import { shallow } from "enzyme";

describe("Header Component Tests", () => {
  it("Renders a div with the class App-header", () => {
    const header = shallow(<Header />);
    expect(Header.find(".App-header")).toBeDefined();
  });
});