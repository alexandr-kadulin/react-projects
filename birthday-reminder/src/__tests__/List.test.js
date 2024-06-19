import React from "react";
import { render, screen } from "@testing-library/react";
import { List } from "../components";

describe("List", () => {
  it("renders correctly", () => {
    const people = [
      {
        id: 1,
        name: "Bertie Yates",
        age: 29,
        image:
          "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
      },
    ];

    render(<List people={people} />);

    const personImage = screen.getByAltText(people[0].name, {});

    expect(personImage).toBeInTheDocument();
    expect(personImage.getAttribute("src")).toBe(people[0].image);

    expect(
      screen.getByRole("heading", { name: people[0].name })
    ).toBeInTheDocument();

    expect(screen.getByText(`${people[0].age} years`, {})).toBeInTheDocument();
  });
});
