import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import DrawerComponent from "../../../../component/UI/molecules/navbarComponent/DrawerComponent";
const setup = (props = {}) => {
  return shallow(<DrawerComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-sideDrawer");
  expect(appComponent.length).toBe(1);
});

test.skip("side drawer action to open and close", () => {
  // const openDrawer = false;
  const wrapper = setup({ openDrawer });
  const appComponent = findByTestAttr(wrapper, "component-toggleDrawer");
  appComponent.simulate("click");
  // const openClose = findByTestAttr(wrapper, "component-openClose").text();
  expect(openClose).toBe(true);
});
