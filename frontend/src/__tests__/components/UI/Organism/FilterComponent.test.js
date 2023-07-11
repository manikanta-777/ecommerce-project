import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import FilterComponent from "../../../../component/UI/organism/filterComponent/FilterComponent";
const setup = (props = {}) => {
  return shallow(<FilterComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-filter");
  expect(appComponent.length).toBe(1);
});
