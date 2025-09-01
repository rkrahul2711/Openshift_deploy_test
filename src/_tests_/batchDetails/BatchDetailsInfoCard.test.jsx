import { render, screen } from "@testing-library/react";
import BatchDeatilsInfoCard from "../../components/pages/batchDetails/batchDetailsInfoCard/batchDetailsInfoCard";

// Basic render tests
describe("BatchDeatilsInfoCard", () => {
  it("renders campaign and process order numbers", () => {
    render(<BatchDeatilsInfoCard />);

    expect(screen.getByText(/Campaign no:/i)).toBeInTheDocument();
    expect(screen.getByText("11881691-1")).toBeInTheDocument();

    expect(screen.getByText(/Process order no:/i)).toBeInTheDocument();
    expect(screen.getByText("11881691")).toBeInTheDocument();
  });

  it("renders formulation and campaign statuses", () => {
    render(<BatchDeatilsInfoCard />);

    expect(screen.getByText(/Formulation Status:/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Completed/i)[0]).toBeInTheDocument();

    expect(screen.getByText(/Campaign Status:/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Completed/i)[1]).toBeInTheDocument();
  });

  it("renders material code and form start date", () => {
    render(<BatchDeatilsInfoCard />);

    expect(screen.getByText(/Material Code:/i)).toBeInTheDocument();
    expect(screen.getByText("PS140510")).toBeInTheDocument();

    expect(screen.getByText(/Form start date:/i)).toBeInTheDocument();
    expect(screen.getByText("7/26/24 21:41")).toBeInTheDocument();
  });

  it("renders filling and EM statuses", () => {
    render(<BatchDeatilsInfoCard />);

    expect(screen.getByText(/Filling Status:/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Completed/i)[2]).toBeInTheDocument();

    expect(screen.getByText(/EM Status:/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Completed/i)[3]).toBeInTheDocument();
  });

  it("renders batch description and sorting info", () => {
    render(<BatchDeatilsInfoCard />);

    expect(screen.getByText(/Batch Desc:/i)).toBeInTheDocument();
    expect(screen.getByText("DULAGLUTIDE")).toBeInTheDocument();

    expect(screen.getByText(/Sorting End date:/i)).toBeInTheDocument();
    expect(screen.getByText("8/6/24 0:01")).toBeInTheDocument();

    expect(screen.getByText(/Sorting Status:/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Completed/i)[4]).toBeInTheDocument();
  });
});
