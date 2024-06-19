import React from "react";
import { render, screen } from "@testing-library/react";
import List from "../List";
import data from "../data";

it("should render the list", () => {
  render(<List people={data} />);
  expect(screen.getByText(/bertie yates/i)).toBeInTheDocument();
});
