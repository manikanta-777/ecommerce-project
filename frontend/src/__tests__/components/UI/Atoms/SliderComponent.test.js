import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import SliderComponent from "../../../../component/UI/atoms/SliderComponent/SliderComponent";
const setup = (props = {}) => {
  return shallow(<SliderComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-slider");
  expect(appComponent.length).toBe(1);
});
