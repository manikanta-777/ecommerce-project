import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import SearchBarComponent from "../../../../component/UI/atoms/searchBarComponent/SearchBarComponent";
const setup = (props = {}) => {
  return shallow(<SearchBarComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-search");
  expect(appComponent.length).toBe(1);
});
