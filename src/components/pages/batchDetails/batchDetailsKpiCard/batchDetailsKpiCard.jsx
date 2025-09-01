import React, { useState, useEffect, useCallback } from "react";
import {
  EyeOutlined,
  FullscreenOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";
const { TabPane } = Tabs;
import { Table, Modal } from "antd";
import "./batchDetailsKpiCard.css"
import { getBatchDetailsTable, getBatchDownload, getBatchView } from "../../../../services/apiWrapper";
const BatchDeatilsKpiCard = () => {
  const [activeCategory, setActiveCategory] = useState("Formulation");
  const [activeSubCategory, setActiveSubCategory] = useState("Batch Information");
  const [batchList, setBatchList] = useState([])
  const [subcategoryList, setSubCategoryList] = useState([])
 
  const [openResponsive, setOpenResponsive] = useState(false);
  const cellStyle = {
    display: "flex",
    height: "40px",
    padding: "8px 16px",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    alignSelf: "stretch",
  };
  const categories = [
    { id: "Formulation", label: "Formulation" },
    { id: "Filling", label: "Filling" },
    { id: "Sorting", label: "Sorting" },
    { id: "Campaign", label: "Campaign" },
    { id: "EM", label: "EM" },
  ];

 
  const kpiDetailesColums = [
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <div style={cellStyle}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: record.status === "Completed" ? "green" : "red",
            }}
          ></div>
        </div>
      ),
    },
    {
      title: "Step Code",
      dataIndex: "stepcode",
      key: "stepcode",
      render: (text) => <div style={cellStyle}>{text}</div>,
    },
    {
      title: "Step Description",
      dataIndex: "stepdescription",
      key: "stepdescription",
      render: (text) => <div style={cellStyle}>{text}</div>,
    },
    {
      title: "Step Status",
      dataIndex: "stepstatus",
      key: "stepstatus",
      render: (text) => <div style={cellStyle}>{text}</div>,
    },
    {
      title: "Work Center Code",
      dataIndex: "workcentercode",
      key: "workcentercode",
      render: (text) => <div style={cellStyle}>{text}</div>,
    },
    {
      title: "Work Center Description",
      dataIndex: "workcenterdescription",
      key: "workcenterdescription",
      render: (text) => <div style={cellStyle}>{text}</div>,
    },
  ];

  useEffect(() => {
    getBatchList()
  }, [activeCategory, activeSubCategory])

const getBatchViewIcon = useCallback(async () => {
  const payload = {
    batchId: "b1",
    phase: activeCategory,
    category: activeSubCategory
  };

  try {
    const blob = await getBatchView(payload);

    if (!blob) {
      console.error("No PDF blob received");
      return;
    }

    const blobUrl = URL.createObjectURL(blob);
    window.open(blobUrl, '_blank'); // Open PDF in new tab

    // Optional cleanup
    setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
  } catch (error) {
    console.error("Error viewing batch PDF:", error);
  }
}, [activeCategory, activeSubCategory]);

const getBatchDownloadIcon = useCallback(async () => {
  const payload = {
    batchId: "b1",
    phase: activeCategory,
    category: activeSubCategory
  };

  try {
    const blob = await getBatchDownload(payload);

    if (!blob) {
      console.error("No PDF blob received");
      return;
    }

    const blobUrl = URL.createObjectURL(blob);

    // Create a temporary anchor element for download
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = `Batch_${payload.phase}.pdf`; // Set the file name
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
  } catch (error) {
    console.error("Error viewing batch PDF:", error);
  }
}, [activeCategory, activeSubCategory]);

  const getBatchList = useCallback(async (data, name) => {
    try {
      const payload = {
        "batchId": "b1",
        "phase": activeCategory,
        "category": activeSubCategory
      }
      const list = await getBatchDetailsTable(payload)
      setBatchList(list.tableData)
      let catgoryList=[];
      list.categoryList.map((x)=>{
        catgoryList.push({ id: x, label: x }) 
      })
      console.log('list data',catgoryList)
      setSubCategoryList(catgoryList);
      
      
      return list
    } catch (err) {
      console.log("err ", err.message)
    }
  }, [activeCategory, activeSubCategory])

  const getContent = () => {
    return (
      <div>
        <Table
          columns={kpiDetailesColums}
          className="custom-kpi-table"
          dataSource={batchList} // No data as per your request
          pagination={false}
          rowClassName={() => "compact-row"}
          bordered
        />
      </div>
    );
  };
  return (
    <>
      {/* Two-column layout inside the vertical stack */}
      <div style={{ display: "flex", gap: "16px", width: "100%" }}>
        {/* Left side: vertical subcategory tabs */}
        <div
          style={{
            width: 162,

            padding: "8px",
            borderRadius: "4px",
          }}
        >
          <Tabs
            tabPosition="left"
            activeKey={activeSubCategory}
            onChange={setActiveSubCategory}
            className="custom-vertical-tabs"
          >
            {subcategoryList.map((sub) => (
              <TabPane
                tab={
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#4CAF50",
                      }}
                    ></div>
                    <span>{sub.label} (2)</span>
                  </div>
                }
                key={sub.id}
              />
            ))}
          </Tabs>
        </div>

        {/* Right side: horizontal category tabs + content */}
        <div
          style={{
            flexGrow: 1,
            paddingLeft: 32,
            padding: "8px",
            borderRadius: "4px",
          }}
        >
          <Tabs
            activeKey={activeCategory}
            onChange={setActiveCategory}
            className="custom-horizontal-tabs"
            tabBarExtraContent={
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  paddingRight: 8,
                }}
              >
                <EyeOutlined
                  style={{ fontSize: 16, cursor: "pointer" }}
                  onClick={() => getBatchViewIcon()}
                />
                <FullscreenOutlined
                  style={{ fontSize: 16, cursor: "pointer" }}
                  onClick={() => setOpenResponsive(true)}
                />
                <DownloadOutlined
                  style={{ fontSize: 16, cursor: "pointer" }}
                  onClick={() => getBatchDownloadIcon()}
                />
              </div>
            }
          >
            {categories.map((cat) => (
              <TabPane tab={cat.label} key={cat.id}>
                {getContent()}
              </TabPane>
            ))}
          </Tabs>

          {/* Responsive */}
        </div>
      </div>
      <Modal
        title={activeCategory}
        centered
        open={openResponsive}
        onOk={() => setOpenResponsive(false)}
        onCancel={() => setOpenResponsive(false)}
        footer={null}
        width="90vw"
        className="responsive-modal"
      >
        <div className="info-container">
          <p>Batch Number: D76631</p>
          <p>Material Code and Description: PS14045</p>
          <p>Process Order: 11881691</p>
        </div>
        <div className="content-container">{getContent()}</div>
      </Modal>
    </>
  );
};

export default BatchDeatilsKpiCard;
