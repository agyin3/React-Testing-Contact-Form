import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test('form works properly', async () => {
  const { getByTestId, getByLabelText } = render(<ContactForm />)

  const firstInput = getByLabelText(/first name/i)
  const secondInput = getByLabelText(/last name/i)
  const thirdInput = getByLabelText(/email/i)
  const fourthInput = getByLabelText(/message/i)
  

  fireEvent.change(firstInput, {target:{value: 'test first name'}})
  fireEvent.change(secondInput, {target:{value: 'test first name'}})
  fireEvent.change(thirdInput, {target:{value: 'test first name'}})
  fireEvent.change(fourthInput, {target:{value: 'test first name'}})
  fireEvent.click(getByTestId(/submit/i))

  waitForElement(() => getByTestId(/testing/i))
})
