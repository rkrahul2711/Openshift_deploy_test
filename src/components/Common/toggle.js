import React, { useState } from "react"
import { Switch, Typography } from "antd"

const Toggle = ({ text, checked, onChange, textSuffix }) => {
  const [isDisabled, setIsDisabled] = useState(true)
  /**
   * @function handleChange
   * @description Handles the change event for the switch, updating its state and enabling it if clicked.
   * @param {boolean} checked - The new state of the switch (true if checked, false if unchecked).
   */
  const handleChange = checked => {
    onChange && onChange(checked)
    // Enable the switch when it's clicked
    setIsDisabled(false)
  }
  
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography.Text style={{ marginRight: 8 }}>{text}</Typography.Text>
      <Switch
        checked={checked}
        onChange={handleChange}
        style={{
          backgroundColor: checked ? "#434242" : "#ccc",
        }}
      />
      <Typography.Text style={{ marginLeft: 8 }}>{textSuffix}</Typography.Text>
    </div>
  )
}

export default Toggle
