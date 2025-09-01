import React from "react"
import { Modal, Button } from "antd"
import { InfoCircleOutlined } from "@ant-design/icons"

const SuccessModal = ({ visible, onClose, onSuccess, message, title }) => {
  return (
    <Modal
      open={visible}
      title={title}
      onCancel={() => onClose()}
      centered
      footer={[
        <Button
          key="okay"
          style={{fontWeight:"bold"}}
          type="primary"
          onClick={() => {
            onSuccess()
            onClose()
          }}
        >
          Ok
        </Button>,
      ]}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* <InfoCircleOutlined
          style={{ color: "#1890ff", fontSize: "24px", marginRight: "8px" }}
        /> */}
        <span>{message}</span>
      </div>
    </Modal>
  )
}

export default SuccessModal
