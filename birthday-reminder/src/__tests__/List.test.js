import React from "react";
import { render, screen } from "@testing-library/react";
import data from "../data";
import { List } from "../components";

it("should render the list", () => {
  render(<List people={data} />);
  expect(screen.getByText(/bertie yates/i)).toBeInTheDocument();
});
