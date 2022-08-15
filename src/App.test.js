import { render, screen } from "@testing-library/react";
import App from "./App";

test("Home page laoding", () => {
  render(<App />);
  const linkElement = screen.getByText(/int/i);
  expect(linkElement).toBeInTheDocument();
});
