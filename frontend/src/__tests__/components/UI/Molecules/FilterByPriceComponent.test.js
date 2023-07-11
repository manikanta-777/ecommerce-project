import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import FilterByPriceComponent from "../../../../component/UI/molecules/filterByPriceComponent/FilterByPriceComponent";
const setup = (props = {}) => {
  return shallow(<FilterByPriceComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-price");
  expect(appComponent.length).toBe(1);
});
