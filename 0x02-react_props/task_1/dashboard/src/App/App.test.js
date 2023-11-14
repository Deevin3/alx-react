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

test('App should contain Notifications component', () => {
  const App = render(<App />);
  expect(App('notifications')).toBeInTheDocument();
});

test('App should contain Header component', () => {
  const App = render(<App />);
  expect(App('header')).toBeInTheDocument();
});

test('App should contain Login component', () => {
  const App = render(<App />);
  expect(App('login')).toBeInTheDocument();
});

test('App should contain Footer component', () => {
  const App = render(<App />);
  expect(App('footer')).toBeInTheDocument();
});
