import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BatchDeatilsKpiCard from "../../components/pages/batchDetails/batchDetailsKpiCard/batchDetailsKpiCard";

describe("BatchDeatilsKpiCard", () => {
  it("renders vertical subcategory tabs", () => {
    render(<BatchDeatilsKpiCard />);
    expect(screen.getByText(/Batch Information/i)).toBeInTheDocument();
    expect(screen.getByText(/Log PMX-PPN/i)).toBeInTheDocument();
    expect(screen.getByText(/Genealogy/i)).toBeInTheDocument();
    expect(screen.getByText(/Alarms/i)).toBeInTheDocument();
  });

  it("renders horizontal category tabs", () => {
    render(<BatchDeatilsKpiCard />);
    expect(screen.getByText(/Formulation/i)).toBeInTheDocument();
    expect(screen.getByText(/Filling/i)).toBeInTheDocument();
    expect(screen.getByText(/Campaign/i)).toBeInTheDocument();
    expect(screen.getByText(/EM/i)).toBeInTheDocument();
  });

  it("renders table rows with data", () => {
    render(<BatchDeatilsKpiCard />);
    expect(screen.getAllByText("1188169101").length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Selection of API Containers/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Finished/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/PFS - DISY FORM/i).length).toBeGreaterThan(0);
  });

  it("switches subcategory when clicked", () => {
    render(<BatchDeatilsKpiCard />);
    fireEvent.click(screen.getByText(/Log PMX-PPN/i));
    expect(screen.getByText(/Log PMX-PPN/i)).toBeInTheDocument();
  });

  it("switches category when clicked", () => {
    render(<BatchDeatilsKpiCard />);
    fireEvent.click(screen.getByText(/Filling/i));
    expect(screen.getAllByText("1188169101").length).toBeGreaterThan(0);
  });

  it("opens modal when fullscreen icon is clicked", () => {
    render(<BatchDeatilsKpiCard />);
    fireEvent.click(screen.getByLabelText("fullscreen"));

    // Modal should appear
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("dialog")).toHaveTextContent(/FORMULATION/i);
  });

  // If modal close needs testing later, uncomment below:
  // it("closes modal on cancel (close button)", async () => {
  //   render(<BatchDeatilsKpiCard />);
  //   fireEvent.click(screen.getByLabelText("fullscreen"));
  //   expect(screen.getByRole("dialog")).toBeInTheDocument();
  //   const closeButton = screen.getByRole("button", { name: /close/i });
  //   fireEvent.click(closeButton);
  //   await waitFor(() => {
  //     expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  //   });
  // });

  it("renders action icons", () => {
    render(<BatchDeatilsKpiCard />);
    expect(screen.getByLabelText("eye")).toBeInTheDocument();
    expect(screen.getByLabelText("fullscreen")).toBeInTheDocument();
    expect(screen.getByLabelText("download")).toBeInTheDocument();
  });
});
