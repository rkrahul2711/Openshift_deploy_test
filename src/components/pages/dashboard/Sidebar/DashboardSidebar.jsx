import React from "react";
import { Layout, Menu } from "antd";
import { Icon } from "@iconify/react"; // Import Iconify Icon component
import logo from "../../../../assets/logo.png";

const { Sider } = Layout;

// Iconify icons
const iconList = [
  "lucide:home",
  "streamline:user-multiple-group",
  "tabler:book"
];

const items = iconList.map((icon, index) => ({
  key: String(index + 1),
  icon: <Icon icon={icon} style={{ fontSize: "22px" }} />,
}));

const DashboardSidebar = () => {
  return (
    <Sider breakpoint="lg" width={70} collapsedWidth="0" className="sider">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <Menu mode="inline" defaultSelectedKeys={["1"]} items={items} className="menu" />
    </Sider>
  );
};

export default DashboardSidebar;
