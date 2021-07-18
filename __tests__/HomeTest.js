/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../src/pages/index";

test("Check for Getting Started Text", () => {
  const { getByText } = render(<Home />);
  expect(getByText("Welcome to the URL Shortening Application")).toBeInTheDocument();
});

it("Renders appropriately", () => {
  render(<Home />);
  expect(
    screen.getByRole("heading", { name: "Please enter you original URL to get a short url" })
  ).toBeInTheDocument();
});