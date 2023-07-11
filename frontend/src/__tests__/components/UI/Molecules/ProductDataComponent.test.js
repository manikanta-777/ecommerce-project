import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import ProductDataComponent from "../../../../component/UI/molecules/productDataComponent/ProductDataComponent";
const setup = (props = {}) => {
  return shallow(<ProductDataComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-productData");
  expect(appComponent.length).toBe(1);
});
