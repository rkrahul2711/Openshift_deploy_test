import { Spin } from "antd";
import React from "react";

function Loader() {
  return (
    <div
      style={{
        height: "calc(90vh - 100px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Spin spinning size="large" tip="Loading..." />
    </div>
  );
}

export default Loader;
