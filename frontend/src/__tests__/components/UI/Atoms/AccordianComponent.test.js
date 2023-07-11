import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import AccordianComponent from "../../../../component/UI/atoms/accordianComponent/AccordianComponent";

const setup = (props = {}) => {
  return shallow(<AccordianComponent {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-accordian");
  expect(appComponent.length).toBe(1);
});

test("renders All categories ", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(
    wrapper,
    "component-allCategories"
  ).text();
  expect(appComponent).toBe("All categories(0)");
});
test("renders category without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component - category");
  expect(appComponent.length).toBe(0);
});
