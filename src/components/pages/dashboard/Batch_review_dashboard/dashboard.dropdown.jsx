import React, { useCallback, useEffect, useState } from "react";
import { Layout, Dropdown, Button, Menu, DatePicker, Col, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import DashboardSidebar from "../Navbar/DashboardNavbar";
import DashboardNavbar from "../Sidebar/DashboardSidebar";
import DashboardKPICards from "../KPI_Cards/dashboard.KPIcards";
import DashboardBatchReviewStatus from "../Batch_review_status/dashboard.batch_Review_Status";
import "../dashboard.dropdown.css";
import { getFilterList } from "../../../../services/apiWrapper";
import Filter from "../../../Common/filter.jsx";

const { Content } = Layout;
const { RangePicker } = DatePicker;

const Dashboard = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [placement, setPlacement] = useState("topLeft");
  const [dropdown, setDropdown] = useState([]);
  const [selectedFilters, setselectedFilters] = useState({
    Plant_Selections: "SESTO",
    Line_Selections: "Line 3",
    Start_Date: "2025-08-01",
    End_Date: "2025-08-15",
  });

  useEffect(() => {
    getFilterOptions({}, "Plant Selections");
  }, [selectedFilters]);

  const updateFilterDropDownData = (newResponse, name) => {
    setDropdown((prevState) => {
      // Loop over the new response
      const updatedState = newResponse?.map((newField) => {
        // Find the field in the previous state by matching name
        const existingField = prevState.find(
          (field) => field.name === newField.name
        );

        if (existingField && newField.name === name) {
          // Only concatenate for the matching field "interventionBucket"
          const updatedOptions = [
            ...new Set([...existingField.options, ...newField.options]), // Concatenate and remove duplicates
          ];
          const allIndex = updatedOptions.indexOf("All");
          if (allIndex > -1) {
            updatedOptions.splice(allIndex, 1);
            updatedOptions.unshift("All");
          }

          return {
            ...newField,
            options: updatedOptions,
          };
        } else {
          // For other fields, return the new field data
          return newField;
        }
      });

      return updatedState;
    });
  };
  const getFilterOptions = useCallback(
    async (data, name) => {
      try {
        const payload = {
          plantSelection: "SESTO",
          lineSelection: "Line 3",
          startDate: "2025-08-01",
          endDate: "2025-08-15",
        };
        const filter = await getFilterList(payload);

        updateFilterDropDownData(filter, name);

        return filter;
      } catch (err) {
        console.log("err ", err.message);
      }
    },
    [selectedFilters]
  );

  const handleChange = (name, value) => {
    setselectedFilters({
      ...selectedFilters,
      [name]: value,
    });
    getFilterOptions(
      {
        ...selectedFilters,
        [name]: value,
      },
      name
    );
  };

  const menu = <Menu items={menuItems} />;

  return (
    <Layout>
      <DashboardNavbar />
      <Layout>
        <DashboardSidebar />

        <Content>
          <div className="content-header">
            <h1 className="page-title">Batch Review Dashboard</h1>
            <div className="dropdown-group">
              {dropdown && dropdown.length > 0 && (
                <Row gutter={[12, 12]} justify="end">
                  {dropdown.map((filter, index) => (
                    <Col
                      xs={24}
                      sm={12}
                      md={10}
                      lg={6}
                      xl={4}
                      key={index}
                      style={{ width: "230px" }}
                      className="filter-width-override"
                    >
                      <div className="filter-container">
                        <Filter
                          onChange={handleChange}
                          name={filter.name}
                          value={
                            filter.name === "country"
                              ? selectedFilters[filter.name] || "Select"
                              : selectedFilters[filter.name] === ""
                                ? "All"
                                : selectedFilters[filter.name]
                          }
                          options={filter.options.map((option) => ({
                            value: option,
                            label: option,
                          }))}
                          className="ai-filter-button"
                        />
                      </div>
                    </Col>
                  ))}
                </Row>
              )}
            </div>
          </div>
          <DashboardKPICards />
          <DashboardBatchReviewStatus />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
