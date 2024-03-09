import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductCard from "../../../src/Components/GlobalComponent/HomeSections/ProductCard";
import QRsection from "@/Components/GlobalComponent/HomeSections/QRsection";

test("QrSection componenet", () => {
  render(<QRsection />);

  const LinkElement = screen.getByText("Hala Ahmed");

  expect(LinkElement).toBeInTheDocument();
});
