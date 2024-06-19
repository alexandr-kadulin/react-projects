import React from "react";
import { render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";
import { App } from "../components";
import data from "../data";

describe("App", () => {
  beforeEach(() => render(<App />));

  it("renders correctly", () => {
    expect(
      screen.getByRole("heading", { name: `${data.length} birthdays today` })
    ).toBeInTheDocument();

    const persons = screen.getAllByRole("article", {});

    persons.forEach((person, index) => {
      const personImage = within(person).getByAltText(data[index].name);
      const personName = within(person).getByRole("heading", {
        name: `${data[index].name}`,
      });
      const personAge = within(person).getByText(
        `${data[index].age} years`,
        {}
      );

      expect(personImage).toBeInTheDocument();
      expect(personImage.getAttribute("src")).toBe(data[index].image);
      expect(personName).toBeInTheDocument();
      expect(personAge).toBeInTheDocument();
    });

    expect(screen.getByRole("button", {})).toBeInTheDocument();
  });

  it("removes all items from the list", async () => {
    user.setup();

    await user.click(screen.getByRole("button", {}));

    expect(
      screen.getByRole("heading", { name: `0 birthdays today` })
    ).toBeInTheDocument();

    expect(screen.queryAllByRole("article", {})).toHaveLength(0);
  });
});
