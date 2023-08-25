import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App Componeent Tests", () => {

    let app;
    beforeEach(() => {
        app = shallow(<App/>);
    })
  it("Renders without crashing", () => {
    expect(app).toBeDefined();
  });
  it("renders a div with the class App-header", () => {
    // const app = shallow(<App />);
    expect(app.find(".App-header")).toBeDefined();
  });
  it("renders a div with the class App-body", () => {
    expect(app.find(".App-body")).toBeDefined();
  });
  it("renders a div with the class App-footer", () => {
    expect(app.find(".App-footer")).toBeDefined();
  });
});