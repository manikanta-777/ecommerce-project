import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import TruncateComponent from "../../../../component/UI/atoms/truncateComponent/TruncateComponent";
const setup = (props = {}) => {
  return shallow(<TruncateComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-truncate");
  expect(appComponent.length).toBe(1);
});

test("renders see more before onClick ", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-seeMoreLess");
  expect(appComponent.text()).toBe("See more ");
});

test.skip("renders show less after onClick ", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-seeMoreLess");
  appComponent.simulate("onclick");
  expect(appComponent.text()).toBe("Show less ");
});
