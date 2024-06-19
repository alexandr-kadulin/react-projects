import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

it("should render the amount of birthdays", () => {
  render(<App />);
  expect(screen.getByText(/\d+ birthdays today/i)).toBeInTheDocument();
});

it("should remove all items from the list", async () => {
  render(<App />);

  const list = screen.getAllByTestId("person");
  expect(list.length).toBeGreaterThan(0);

  const button = screen.getByRole("button");
  await userEvent.click(button);

  const updatedList = screen.queryAllByTestId("person");
  expect(updatedList.length).toBe(0);

  expect(screen.getByText(/0 birthdays today/i)).toBeInTheDocument();
});
