import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import ProductListComponent from "../../../../component/UI/organism/productsListComponent/ProductListComponent";
const setup = (props = {}) => {
  return shallow(<ProductListComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-productList");
  expect(appComponent.length).toBe(1);
});
