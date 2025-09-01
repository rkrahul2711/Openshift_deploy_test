import React, {useEffect, useState, useCallback } from "react";
import { Row, Col } from "antd";
import { Button } from "antd";
import "./batchDetailsInfoCard.css"


const BatchDeatilsInfoCard = ({batchInfo}) => {
  
  
  const labelStyle = {
    minWidth: "120px", // consistent label width
    fontSize: "13px",
    fontWeight: 500,
    fontFamily: "Poppins"
  };

  const valueStyle = {
    fontSize: "12px",
    fontWeight: 400,
    fontFamily: "Poppins"
  };
    

  return (
    <>
      <Row gutter={[16, 16]} style={{ marginBottom: "12px" }} align="middle">
        <Col span={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ ...labelStyle, marginRight: "8px" }}>
              Campaign No:
            </div>
            <div style={valueStyle}>{batchInfo?.CampaignNo}</div>
          </div>
        </Col>

        <Col span={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ ...labelStyle, marginRight: "8px" }}>
              Process Order No:
            </div>
            <div style={valueStyle}>{batchInfo?.ProcessOrderNo}</div>
          </div>
        </Col>

        <Col span={6}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "nowrap",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                ...labelStyle,
                marginRight: "8px",
                whiteSpace: "nowrap",
              }}
            >
              Formulation Status:
            </div>
            <Button size="small" className="completed-red spaced-element">
              {batchInfo?.FormulationStatus?.status}
            </Button>
            {batchInfo?.FormulationStatus?.indicators.map((x)=>{
              return <div className="circle-green spaced-element">{x}</div>
            })}
            
          </div>
        </Col>

        <Col span={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ ...labelStyle, marginRight: "8px" }}>
              Campaign Status:
            </div>
             <Button size="small" className="completed-red spaced-element">
              {batchInfo?.CampaignStatus?.status}
            </Button>
            {batchInfo?.CampaignStatus?.indicators.map((x)=>{
              return <div className="circle-green spaced-element">{x}</div>
            })}
          </div>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginBottom: "12px" }} align="middle">
        <Col span={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ ...labelStyle, marginRight: "8px" }}>
              Material Code:
            </div>
            <div style={valueStyle}> {batchInfo?.MaterialCode}</div>
          </div>
        </Col>

        <Col span={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ ...labelStyle, marginRight: "8px" }}>
              Form Start Date:
            </div>
            <div style={valueStyle}>{batchInfo?.FormStartDate}</div>
          </div>
        </Col>

        <Col span={6}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "nowrap",
              overflow: "hidden",
            }}
          >
            <div style={{ ...labelStyle, marginRight: "14px" }}>
              Filling Status:
            </div>
            <Button size="small" className="completed-green spaced-element">
              {batchInfo?.FillingStatus?.status}
            </Button>
            {batchInfo?.FillingStatus?.indicators.map((x)=>{
              return <div className="circle-green spaced-element">{x}</div>
            })}
          </div>
        </Col>

        <Col span={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ ...labelStyle, marginRight: "8px" }}>EM Status:</div>
             <Button size="small" className="completed-green spaced-element">
              {batchInfo?.EMStatus?.status}
            </Button>
            {batchInfo?.EMStatus?.indicators.map((x)=>{
              return <div className="circle-green spaced-element">{x}</div>
            })}
          </div>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginBottom: "12px" }} align="middle">
        <Col span={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ ...labelStyle, marginRight: "8px" }}>Batch Desc:</div>
            <div style={valueStyle}> {batchInfo?.BatchDesc}</div>
          </div>
        </Col>

        <Col span={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ ...labelStyle, marginRight: "8px" }}>
              Sorting End Date:
            </div>
            <div style={valueStyle}>{batchInfo?.SortingEndDate}</div>
          </div>
        </Col>

        <Col span={6}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "nowrap",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                ...labelStyle,
                marginRight: "14px",
                whiteSpace: "nowrap",
              }}
            >
              Sorting Status:
            </div>
            <Button size="small" className="completed-green spaced-element">
              {batchInfo?.SortingStatus?.status}
            </Button>
             {batchInfo?.SortingStatus?.indicators.map((x)=>{
              return <div className="circle-green spaced-element">{x}</div>
            })}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default BatchDeatilsInfoCard;
