import React, {useEffect, useState, useCallback } from "react";
import { DownOutlined} from "@ant-design/icons";
import {ArrowLeftOutlined} from "@ant-design/icons";
import BatchDeatilsKpiCard from "./batchDetailsKpiCard/batchDetailsKpiCard";
import BatchDeatilsAlertCard from "./batchDetailsAlertCard/batchDetailsAlertCard";
import BatchDeatilsInfoCard from "./batchDetailsInfoCard/batchDetailsInfoCard";
import { Layout, Space, Dropdown, Button } from "antd";

import "./batchDetails.css"
import { useNavigate } from "react-router-dom";
const { Content } = Layout;
import DashboardNavbar from "../dashboard/Navbar/DashboardNavbar"
import DashboardSidebar from "../dashboard/Sidebar/DashboardSidebar"
import { getBatchDetails } from "../../../services/apiWrapper";
import "../dashboard/dashboard.dropdown.css";
const BatchDetails = () => {
    const [batchInfo, setBatchInfo]=useState({})
    const navigate = useNavigate();

    const goToDashboard = () => {
        navigate("/"); // adjust the route path if needed
    };
     useEffect(() => {
          getBatchInfo()
        }, [])
      
        const getBatchInfo = useCallback(async () => {
          try {
            const list = await getBatchDetails("b2")
            setBatchInfo(list)
            console.log('batch list details',list)
            return list
          } catch (err) {
            console.log("err ", err.message)
          }
        }, [])
    
    return (
        <Layout>
            <DashboardSidebar />

            <Layout>
                <DashboardNavbar />
                <Content >
                    <div className="details-batch-Id-card">
                        {/* First row: icon + batch info + dropdown */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                            }}
                        >
                            <div
                                className="arrowIcon"
                            >
                                <ArrowLeftOutlined
                                    onClick={goToDashboard} />
                            </div>




                            <div style={{ flex: 1 }}>
                                {/* Flex row for batch ID + red dot */}
                                <div
                                    className="batchInfo"
                                >
                                    <span

                                        className="batchIdInfo"
                                    >
                                        Batch ID : {batchInfo?.BatchId}
                                    </span>
                                    <div
                                        className="batchIdRedDot"
                                    ></div>
                                </div>

                                {/* Drug info */}
                                <div
                                    className="batchSubInfo"
                                >
                                    {batchInfo?.BatchTitle}
                                </div>
                            </div>

                        </div>
                        <div className="details-batch-Info-card">
                            <BatchDeatilsInfoCard batchInfo={batchInfo}/>
                        </div>

                        <div className="details-batch-AI-card">
                            <BatchDeatilsAlertCard batchInfo={batchInfo}/>
                        </div>
                    </div>
                    <div className="details-batch-kpi-card">
                        <BatchDeatilsKpiCard/>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};
export default BatchDetails;
