import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../../../test/testUtil";
import QuantityUpdateComponent from "../../../../component/UI/atoms/quantityUpdateComponent/QuantityUpdateComponent";

const defaultProps = { quantity: 1 };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<QuantityUpdateComponent {...setupProps} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-quantityUpdate");
  expect(appComponent.length).toBe(1);
});

describe("counter Display", () => {
  test("renders counter display", () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, "counter-display");
    expect(counterDisplay.length).toBe(1);
  });

  test("counter starts at 1", () => {
    const wrapper = setup();
    const count = findByTestAttr(wrapper, "counter-display");
    expect(count.props().value).toBe(1);
  });
});
describe("counter increment button", () => {
  test("renders increment button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "increment-button");
    expect(button.length).toBe(1);
  });
  test("counter increments when button is clicked", () => {
    // const quantity = 1;
    // const wrapper = setup();

    // find button and click
    // const button = findByTestAttr(wrapper, "increment-button");
    // button.simulate("click");
    // button.props().onClick();

    // check the counter
    const onButtonClick = sinon.spy();
    const wrapper = shallow(
      <QuantityUpdateComponent onButtonClick={onButtonClick} />
    );
    // wrapper.find("button").simulate("click");

    const button = findByTestAttr(wrapper, "increment-button");
    button.simulate("click");

    const count = findByTestAttr(wrapper, "counter-display");
    expect(count.props().value).toBe(1);
  });
});
describe("counter decrement button", () => {
  test("renders decrement button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, "decrement-button");
    expect(button.length).toBe(1);
  });

  test("counter decrements button is clicked when qunatity is 1", () => {
    const quantity = 2;
    const wrapper = setup(quantity);

    // find button and click
    const button = findByTestAttr(wrapper, "decrement-button");
    // button.simulate("click");
    button.props().onClick();

    // check the counter
    const count = findByTestAttr(wrapper, "counter-display");
    expect(count.props().value).toBe(1);
  });

  test("counter decrements when button is clicked", () => {
    const quantity = 2;
    const wrapper = setup(null, quantity, null);

    // find button and click
    const button = findByTestAttr(wrapper, "decrement-button");
    button.simulate("click");

    // check the counter
    const count = findByTestAttr(wrapper, "counter-display");
    expect(count.props().value).toBe(quantity - 1);
  });
});

test("does not throw warning with expected props", () => {
  const expectedProps = { quantity: 1 };
  checkProps(QuantityUpdateComponent, expectedProps);
});
