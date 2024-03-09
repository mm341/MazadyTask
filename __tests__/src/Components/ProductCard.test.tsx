import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductCard from "../../../src/Components/GlobalComponent/HomeSections/ProductCard";

test("BottomCardPersonal componenet", () => {
  render(<ProductCard />);

  const LinkElement = screen.getByText("Starting Price");

  expect(LinkElement).toBeInTheDocument();
});
