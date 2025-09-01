import { render, screen } from "@testing-library/react";
import BatchDeatilsAlertCard from "../../components/pages/batchDetails/batchDetailsAlertCard/batchDetailsAlertCard";

describe("BatchDeatilsAlertCard", () => {
  test("renders the header correctly", () => {
    render(<BatchDeatilsAlertCard />);
    expect(
      screen.getByText("Batch Exception Summary – AI Agent")
    ).toBeInTheDocument();
  });

  test("renders exception name section", () => {
    render(<BatchDeatilsAlertCard />);
    expect(screen.getByText("Exception Name")).toBeInTheDocument();
    expect(
      screen.getByText("Exception Detected in Formulation Phase")
    ).toBeInTheDocument();
  });

  test("renders exception summary list items", () => {
    render(<BatchDeatilsAlertCard />);
    expect(
      screen.getByText(/One or more alarms were recorded/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/The alarm comment provided partially/i)
    ).toBeInTheDocument();
    expect(screen.getByText("Probe check performed")).toBeInTheDocument();
    expect(
      screen.getByText(/The temperature mentioned by the operator/i)
    ).toBeInTheDocument();
  });

  test("renders exception details list items", () => {
    render(<BatchDeatilsAlertCard />);
    expect(screen.getByText(/Alarm Code: ALM6318/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Equipment: Holding Bag Tank Inlet/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Type: Temperature Fault – Low-Low/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Timestamp: 27-Jul-2024 18:10:03/i)
    ).toBeInTheDocument();
  });

  test("renders the image with correct alt text", () => {
    render(<BatchDeatilsAlertCard />);
    const image = screen.getByAltText("Alarm Chart");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("Image%20BOT%20Lily.png"));

  });
});
