import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import DropDownComponent from "../../../../component/UI/atoms/dropDownComponent/DropDownComponent";

const setup = (props = {}) => {
  return shallow(<DropDownComponent {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-sorting");
  expect(appComponent.length).toBe(1);
});
