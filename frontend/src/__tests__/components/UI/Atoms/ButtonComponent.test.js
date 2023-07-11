import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import ButtonComponent from "../../../../component/UI/atoms/buttonComponent/ButtonComponent";

const setup = (props = {}) => {
  return shallow(<ButtonComponent {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-button");
  expect(appComponent.length).toBe(1);
});
