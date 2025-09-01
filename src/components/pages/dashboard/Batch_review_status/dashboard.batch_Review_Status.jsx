import React, { useCallback, useEffect } from "react";
import { Layout, Space, Dropdown, Button, Table, Radio, Input, Tooltip } from "antd";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
const { Content } = Layout;
import "./dashboard.batch_Review_Status.css";
import { useNavigate } from "react-router-dom";
import { getBatchList } from "../../../../services/apiWrapper";

const DashboardBatchReviewStatus = () => {
  const [selectedTable, setSelectedTable] = useState("underReview");
  const [batchList, setBatchList] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    getBatchReviewList()
  }, [])
  const goToDashboard = () => {
    navigate("/details");
  };
  const getBatchReviewList = useCallback(async (data, name) => {
    try {
      const payload = {
        "plantSelection": "SESTO",
        "lineSelection": "Line 3",
        "startDate": "2025-08-01",
        "endDate": "2025-08-15",
        "searchId": "SRCH123",
        "status": "Completed",
        "light": "green"
      }
      const list = await getBatchList(payload)
      setBatchList(list)
      return list
    } catch (err) {
      console.log("err ", err.message)
    }
  }, [])

  const underReviewColumns = [
    {
      title: "Batch Status",
      dataIndex: "batchStatus",
      key: "batchStatus",
      fixed: "left",
      align: "center",
      width: 140,
      render: (status) => (
        <div className="status-cell" style={{ cursor: "pointer" }}>
          <div
            className={`status-dot ${status.color === "green" ? "green" : "red"
              }`}
          />
          <span className="status-number" onClick={goToDashboard}>
            {status.number}
          </span>
        </div>
      ),
    },
    {
      title: "Material Code",
      dataIndex: "materialCode",
      key: "materialCode",
      fixed: "left",
      align: "center",
      width: 120,
    },
    {
      title: "Material Description",
      dataIndex: "materialDescription",
      key: "materialDescription",
      fixed: "left",
      align: "center",
      width: 250,
      render: (text) => <span style={{ fontSize: "12px" }}>{text}</span>,
    },
    // ... status columns
    ...[
      "formulationStatus",
      "fillingStatus",
      "sortingStatus",
      "campaignStatus",
      "emStatus",
    ].map((statusKey) => ({
      title: statusKey
        .replace("Status", " Status")
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (char) => char.toUpperCase())
        .trim(),
      dataIndex: statusKey,
      key: statusKey,
      width: 140,
      align: "center",


      render: (value) => {
        const borderColor = value === "Completed" ? "green" : "grey";
        const reviewTooltip = value === "Completed" ? "Reviewed" : "Not Reviewed";
        const approveTooltip = value === "Completed" ? "Approved" : "Not Approved";

        return (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Button
              size="small"
              ghost
              className={`status-button ${value === "Completed" ? "completed" : "in-progress"
                }`}
            >
              {value}
            </Button>

            {/* Circle with R + Tooltip */}
            <Tooltip title={reviewTooltip} placement="top">
              <div
                style={{
                  border: `1px solid ${borderColor}`,
                  borderRadius: "50%",
                  width: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  color: "black",
                  fontWeight: "500",
                  cursor: "pointer",

                }}
              >
                R
              </div>
            </Tooltip>

            {/* Circle with A + Tooltip */}
            <Tooltip title={approveTooltip} placement="top">
              <div
                style={{
                  border: `1px solid ${borderColor}`,
                  borderRadius: "50%",
                  width: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  color: "black",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                A
              </div>
            </Tooltip>
          </div>
        );
      }
      ,
    })),
    {
      title: "Campaign No",
      dataIndex: "campaignNo",
      key: "campaignNo",
      width: 120,
      align: "center",
    },
    {
      title: "Order No",
      dataIndex: "orderNo",
      key: "orderNo",
      width: 120,
      align: "center",
    },
    {
      title: "Formulation Start Date",
      dataIndex: "formulationStartDate",
      key: "formulationStartDate",
      width: 170,
      align: "center",
    },
    {
      title: "Formulation End Date",
      dataIndex: "formulationEndDate",
      key: "formulationEndDate",
      width: 170,
      align: "center",
    },
  ];

  const reviewedColumns = [
    { title: "Batch ID", dataIndex: "batchId", key: "batchId" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Reviewed On", dataIndex: "reviewedOn", key: "reviewedOn" },
    { title: "Status", dataIndex: "status", key: "status" },
    { title: "Remarks", dataIndex: "remarks", key: "remarks" },
    { title: "Batch ID", dataIndex: "batchId", key: "batchId" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Reviewed On", dataIndex: "reviewedOn", key: "reviewedOn" },
  ];

  return (
    <div className="dashboard-container">
      <Content className="dashboard-content">
        <div className="dashboard-header">
          <div>
            <h2>Batch Review Status</h2>
            <p>Last refresh timestamp 07-30-2025 9:00 AM EST</p>
          </div>

          <div className="dashboard-dropdown-group">

            <Input
              addonBefore={<SearchOutlined />}
              placeholder="Serach Id"
              style={{ width: 250 }}
            />

            <Dropdown>
              <Button>
                <div>
                  <span>Status</span>
                  <DownOutlined />
                </div>
              </Button>
            </Dropdown>

            <Dropdown>
              <Button>
                <div>
                  <span>All Lights</span>
                  <DownOutlined />
                </div>
              </Button>
            </Dropdown>
          </div>
        </div>

        <>
          <Space className="radio-group-space">
            <Radio.Group
              value={selectedTable}
              onChange={(e) => setSelectedTable(e.target.value)}
              className="custom-radio-group"
            >
              <Radio.Button value="underReview">
                Batches Under Review
              </Radio.Button>
              <Radio.Button value="reviewed">Reviewed Batches</Radio.Button>
            </Radio.Group>
          </Space>

          <div className="table-container">
            <Table
              className="custom-table"
              columns={
                selectedTable === "underReview"
                  ? underReviewColumns
                  : reviewedColumns
              }
              dataSource={batchList}
              pagination={false}
              bordered
              scroll={{ x: 1200 }} // or x: '100%'
            />
          </div>
        </>
      </Content>
    </div>
  );
};

export default DashboardBatchReviewStatus;
