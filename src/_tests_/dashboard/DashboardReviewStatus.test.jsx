import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import DashboardBatchReviewStatus from "../../components/pages/dashboard/Batch_review_status/dashboard.batch_Review_Status";

// ---- Mock navigate ----
const mockedNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

// ---- Mock Data ----
vi.mock(
  "../../components/pages/dashboard/Batch_review_status/dashboard.batch_Review_Status.data",
  () => ({
    underReviewData: [
      {
        key: 1,
        batchStatus: { color: "green", number: "123" },
        materialCode: "MC01",
        materialDescription: "Test Material",
        formulationStatus: "Completed",
        fillingStatus: "In Progress",
        sortingStatus: "Completed",
        campaignStatus: "Completed",
        emStatus: "In Progress",
        campaignNo: "C001",
        orderNo: "O001",
        formulationStartDate: "2025-08-20",
        formulationEndDate: "2025-08-22",
      },
    ],
  })
);

describe("DashboardBatchReviewStatus", () => {
  beforeEach(() => {
    mockedNavigate.mockClear();
  });

  it("renders title and timestamp", () => {
    render(
      <MemoryRouter>
        <DashboardBatchReviewStatus />
      </MemoryRouter>
    );

    expect(screen.getByText(/Batch Review Status/i)).toBeInTheDocument();
    expect(screen.getByText(/Last refresh timestamp/i)).toBeInTheDocument();
  });

  it("renders search input and dropdowns", () => {
    render(
      <MemoryRouter>
        <DashboardBatchReviewStatus />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText(/Serach Id/i)).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("All Lights")).toBeInTheDocument();
  });

  it("shows under review table by default", () => {
    render(
      <MemoryRouter>
        <DashboardBatchReviewStatus />
      </MemoryRouter>
    );

    expect(screen.getByText("123")).toBeInTheDocument();
    expect(screen.getByText("MC01")).toBeInTheDocument();
    expect(screen.getByText("Test Material")).toBeInTheDocument();
  });

  it("navigates when clicking on batch status number", () => {
    render(
      <MemoryRouter>
        <DashboardBatchReviewStatus />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText("123"));
    expect(mockedNavigate).toHaveBeenCalledWith("/details");
  });

  it("switches to reviewed table when radio clicked", () => {
  render(
    <MemoryRouter>
      <DashboardBatchReviewStatus />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByText(/Reviewed Batches/i));

  // Use getAllByText because AntD renders duplicate headers
  const headers = screen.getAllByText(/Batch ID/i);
  expect(headers.length).toBeGreaterThan(0);
});

});
