import React, { useCallback, useEffect, useState } from "react";
import { Card, Col, Row } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import "./DashboardKPICards.css";
import { getKPICards } from "../../../../services/apiWrapper";

const DashboardKPICards = () => {
  const [kpiInfo, setKpiInfo] = useState({});
  useEffect(() => {
    getKPIInfo();
  }, []);

  const getKPIInfo = useCallback(async () => {
    try {
      const payload = {
        plantSelection: "SESTO",
        lineSelection: "Line 3",
        startDate: "2025-08-01",
        endDate: "2025-08-15",
      };
      const list = await getKPICards(payload);

      setKpiInfo(list);
      return list;
    } catch (err) {
      console.log("err ", err.message);
    }
  }, []);
  return (
    <div className="kpi-container">
      <Row gutter={8}>
        {/* Left Card */}
        <Col span={7}>
          <Card
            title={
              <span
                style={{
                  fontSize: "13px",
                  color: "#3F3F3F",
                  fontWeight: "500",
                  padding: "-0",
                }}
              >
                Total Number of Batches Reviewed
              </span>
            }
            className="kpi-left-card"
            bodyStyle={{ padding: "10px" }}
          >
            <h5 className="kpi-section-title">Total Batches</h5>
            <p className="kpi-value">
              7
              <sup className="kpi-sup">
                <CaretDownOutlined /> 30%
              </sup>
            </p>
            <p className="kpi-prev">Prev: 4</p>
          </Card>
        </Col>

        {/* Right Card */}
        <Col span={17}>
          <Card
            title={
              <span
                style={{
                  fontSize: "13px",
                  color: "#3F3F3F",
                  fontWeight: "500",
                }}
              >
                Average Batch Review Time Metrics
              </span>
            }
            className="kpi-right-card"
            bodyStyle={{ padding: "16px" }}
          >
            <div className="kpi-right-content">
              {[
                { title: "Formulation", value: "1 hr", prev: "Prev: 3.0 hrs" },
                { title: "Filling", value: "1 hr", prev: "Prev: 2.0 hrs" },
                { title: "Sorting", value: "1 hr", prev: "Prev: 2.0 hrs" },
                { title: "Campaign", value: "2 hr", prev: "Prev: 3.0 hrs" },
                { title: "EM", value: "2 hr", prev: "Prev: 5.0 hrs" },
              ].map((item, index) => (
                <div className="kpi-metric-block" key={index}>
                  <h5 className="kpi-section-title">{item.title}</h5>
                  <p className="kpi-value">
                    {item.value}
                    <sup className="kpi-sup">
                      <CaretDownOutlined /> 60%
                    </sup>
                  </p>

                  <p className="kpi-prev">{item.prev}</p>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardKPICards;
