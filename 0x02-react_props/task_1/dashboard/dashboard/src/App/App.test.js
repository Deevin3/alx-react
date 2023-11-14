import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App Component Tests", () => {
  // Test if App is working well
  it("Renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
});