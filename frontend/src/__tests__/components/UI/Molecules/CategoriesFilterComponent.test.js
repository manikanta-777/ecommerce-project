import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import CategoriesFilterComponent from "../../../../component/UI/molecules/categoriesFilterComponent/CategoriesFilterComponent";
const setup = (props = {}) => {
  return shallow(<CategoriesFilterComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-categoriesFilter");
  expect(appComponent.length).toBe(1);
});
