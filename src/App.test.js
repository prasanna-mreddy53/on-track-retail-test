import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { Route, Switch } from "react-router-dom";

const app = shallow(<App />);

describe("App Component Tests", () => {
  it("renders app correctly", () => {
    expect(app).toHaveLength(1);
  });

  it("should contain a Switch Router", () => {
    expect(app.find(Switch)).toHaveLength(1);
  });

  it("should contain 2 route components", () => {
    expect(app.find(Route)).toHaveLength(2);
  });
});
