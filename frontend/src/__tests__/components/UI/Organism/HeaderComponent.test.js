import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import HeaderComponent from "../../../../component/UI/organism/headerComponent/HeaderComponent";
const setup = (props = {}) => {
  return shallow(<HeaderComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-header");
  expect(appComponent.length).toBe(1);
});
