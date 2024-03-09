import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BottomCardPersonal from "../../../src/Components/GlobalComponent/HomeSections/BottomCardPersonal";

test("BottomCardPersonal componenet", () => {
  render(<BottomCardPersonal />);

  const LinkElement = screen.getByText("QR Code");

  expect(LinkElement).toBeInTheDocument();
});
