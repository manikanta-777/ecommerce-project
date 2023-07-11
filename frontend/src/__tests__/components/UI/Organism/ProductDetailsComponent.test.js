import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import ProductDetailsComponent from "../../../../component/UI/organism/productDetailsComponent/ProductDetailsComponent";
const setup = (props = {}) => {
  return shallow(<ProductDetailsComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-productDetails");
  expect(appComponent.length).toBe(1);
});
