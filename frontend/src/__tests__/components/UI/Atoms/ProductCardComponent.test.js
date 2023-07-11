import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import ProductCardComponent from "../../../../component/UI/atoms/productCardComponent/ProductCardComponent";
const setup = (props = {}) => {
  return shallow(<ProductCardComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-product");
  expect(appComponent.length).toBe(1);
});
