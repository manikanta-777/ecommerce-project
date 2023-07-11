import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import SortingComponent from "../../../../component/UI/molecules/sortingComponent/SortingComponent";
const setup = (props = {}) => {
  return shallow(<SortingComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-sorting");
  expect(appComponent.length).toBe(1);
});
