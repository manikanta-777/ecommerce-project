import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import CategoryComponent from "../../../../component/UI/atoms/categoryComponent/CategoryComponent";
const setup = (props = {}) => {
  return shallow(<CategoryComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-categories");
  expect(appComponent.length).toBe(1);
});
