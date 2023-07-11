import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import TotalComponent from "../../../../component/UI/molecules/totalComponent/TotalComponent";
const setup = (props = {}) => {
  return shallow(<TotalComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-total");
  expect(appComponent.length).toBe(1);
});
