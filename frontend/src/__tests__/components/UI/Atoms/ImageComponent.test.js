import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import ImageComponent from "../../../../component/UI/atoms/imageComponent/ImageComponent";

const setup = (props = {}) => {
  return shallow(<ImageComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-Image");
  expect(appComponent.length).toBe(1);
});
