import React from "react";
import { Layout } from "antd";
import { ReloadOutlined, BellOutlined, DownOutlined } from "@ant-design/icons";
import avatar from "../../../../assets/Avatar.png";

const { Header } = Layout;

const DashboardNavbar = () => {
  return (
    <Header className="header">
      <div className="header-content">
        {/* Left side */}
        <div className="title-section">
          <span className="title-main">
            B.A.T.C.H
            <sup style={{ color: "#D52B1E", fontSize: "10px" }}>GMP</sup>
          </span>
          <span className="title-sub">
            Batch Assessment & Traffic-light-control for handover
          </span>
        </div>

        {/* Right side */}
        <div className="header-right">
          <div className="refresh-time">
            <ReloadOutlined style={{ fontSize: "12px", cursor: "pointer", color: "#929497" }} />
            <span className="refresh-text">Last Refresh - 08:00 AM CST, 6th May 2025</span>
          </div>

          <div className="notification-icon">
            <BellOutlined style={{ fontSize: "18px", cursor: "pointer" }} />
            <sup>3</sup>
          </div>

          <div className="user-info">
            <span className="user-name">Johnson Hopkins</span>
            <span className="user-role">QA Reviewer</span>
          </div>

          <div className="profile-container">
            <img src={avatar} alt="Profile" className="avatar" />
            <DownOutlined style={{ fontSize: "12px", cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </Header>
  );
};

export default DashboardNavbar;
