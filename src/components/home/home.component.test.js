import React from "react";
import Home from "./home.component";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

let match = {
  params: {
    page: 1,
  },
};
const wrapper = shallow(<Home match={match} />);

describe("Home component tests", () => {
  it("should match snapshot", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
