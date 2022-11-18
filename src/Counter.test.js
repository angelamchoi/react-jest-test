import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
// name of component you are testing
// can use test or describe
//initial count test
describe(Counter, () => {
  // it = the component (Counter)
  it("counter displays correct initial count", () => {
    //action that will occur
    const { getByTestId } = render(<Counter initialCount={0} />); // add all props related to the test
    const countValue = Number(getByTestId("count").textContent); // dom element
    expect(countValue).toEqual(0); // our initial value
  });

  // increment button test
  it("count should increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBttn = getByRole("button", { name: "Increment" }); //grabbing specific button
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementBttn); //simulates button clicking event
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });

  // decrement button test
  it("count should decrement by 1 if the decrement button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const decrementBttn = getByRole("button", { name: "Decrement" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);
    fireEvent.click(decrementBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(-1);
  });

  // reset button test
  it("count should be set to 0 if the restart button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const restartBttn = getByRole("button", { name: "Restart" });
    expect(Number(getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(restartBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(0);
  });

  // switch button test
  it("count should show opposite sign if the switch signs button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={50} />);
    const switchBttn = getByRole("button", { name: "Switch Signs" });
    expect(Number(getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(switchBttn);
    expect(Number(getByTestId("count").textContent)).toEqual(-50);
  });
});

//Notes
// run yarn test
//getByRole = to access the increment button
//getByTestId= value changes
