import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtil";
import DetailsComponent from "../../../../component/UI/molecules/detailsComponent/DetailsComponent";
const setup = (props = {}) => {
  return shallow(<DetailsComponent {...props} />);
};
test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-details");
  expect(appComponent.length).toBe(1);
});
