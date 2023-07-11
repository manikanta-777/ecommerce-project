import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import NavbarComponent from "../../../../component/UI/molecules/navbarComponent/NavbarComponent";
const setup = (props = {}) => {
  return shallow(<NavbarComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-navbar");
  expect(appComponent.length).toBe(1);
});
