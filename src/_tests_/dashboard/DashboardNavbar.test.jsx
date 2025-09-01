import { render, screen, fireEvent } from "@testing-library/react";
import { vi, describe, it, test, expect } from "vitest";
import DashboardNavbar from "../../components/pages/dashboard/Navbar/DashboardNavbar";
import DashboardSidebar from "../../components/pages/dashboard/Sidebar/DashboardSidebar";
import Dashboard from "../../components/pages/dashboard/Batch_review_dashboard/dashboard.dropdown";


// -----------------------
// Mock Assets
// -----------------------
vi.mock("../../../../assets/logo.png", () => ({
  default: "/src/assets/logo.png",
}));

// -----------------------
// Mock Batch Review Component
// -----------------------
vi.mock(
  "../../components/pages/dashboard/Batch_review_status/dashboard.batch_Review_Status",
  () => ({ default: () => <div>MockBatchReview</div> })
);

// -----------------------
// Mock Dashboard Dropdown Component
// -----------------------
vi.mock(
  "../../components/pages/dashboard/Batch_review_dashboard/dashboard.dropdown",
  () => ({
    default: () => (
      <div>
        <div>Sesto</div>
        <div>PFS2</div>
        <div>Alice</div>
        <div>Bob</div>
      </div>
    ),
  })
);


//------------------------
//Batch Review Status
//------------------------
// Mock navigate
const mockedNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

// Mock Data
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

// -----------------------
// Navbar Test
// -----------------------
test("shows app title and user info in Navbar", () => {
  render(<DashboardNavbar />);

  // Title
  expect(screen.getByText(/B\.A\.T\.C\.H/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Batch Assessment & Traffic-light-control for handover/i)
  ).toBeInTheDocument();

  // User info
  expect(screen.getByText(/Johnson Hopkins/i)).toBeInTheDocument();
  expect(screen.getByText(/QA Reviewer/i)).toBeInTheDocument();

  // Last refresh
  expect(
    screen.getByText(/Last Refresh - 08:00 AM CST, 6th May 2025/i)
  ).toBeInTheDocument();

  // Notification count
  expect(screen.getByText("3")).toBeInTheDocument();
});

// -----------------------
// Sidebar Test
// -----------------------
describe("DashboardSidebar", () => {
  it("renders logo and menu items", () => {
    render(<DashboardSidebar />);

    // Logo
    const logoImg = screen.getByAltText(/logo/i);
    expect(logoImg).toBeInTheDocument();

    // Menu items
    const menuItems = screen.getAllByRole("menuitem");
    expect(menuItems).toHaveLength(3);

    // Default selected
    expect(menuItems[0]).toHaveClass("ant-menu-item-selected");
  });
});

// -----------------------
// Dashboard Dropdown Test
// -----------------------
describe("Dashboard Dropdowns", () => {
  it("renders Sesto and PFS2 dropdowns and loads API items", () => {
    render(<Dashboard />);

    expect(screen.getByText("Sesto")).toBeInTheDocument();
    expect(screen.getByText("PFS2")).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
  });
});














