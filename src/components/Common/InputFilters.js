import { useState, useEffect } from "react"
import React from "react"
import { Select, Tooltip } from "antd"
import uparrow from "../../assets/upArrow.svg"
import downarrow from "../../assets/down Arrow.svg"
import "./filter.css"
import { convertToMMKGValue, convertToInchPoundValue } from "services/functions"

const { Option } = Select

const InputFilters = ({
  title = "",
  options = [],
  placeholder = "",
  content = null,
  className = "",
  onChange,
  value,
  name,
  isMulti = false,
  activeUnitTab,
  country
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [displayValue, setDisplayValue] = useState(value);
  /**
 * @function useEffect
 * @description Updates the display value based on the selected unit tab (`imperial` or another unit).
 */
  useEffect(() => {
 
      setDisplayValue(value); // Default is in inches
   
  }, [activeUnitTab, value]);
  /**
     * @function handleChange
     * @description Handles dropdown value change and closes dropdown.
     * @param {any} value - Selected dropdown value.
     */
  const handleChange = value => {
    if (Array.isArray(value) && value.includes("All")) {
      value = ["All"]
    }
    let convertedValue = ''
    if (name == "savingsValue" || name == "storageValue" || name == "primaryRisk" || name == "palletRisk") {
      convertedValue = value;
    }
    else {
      convertedValue =value;
    }

    onChange && onChange(name, convertedValue)
    setDropdownOpen(false)
  }
  /**
   * @function handleDropdownVisibleChange
   * @description Controls the visibility state of the dropdown.
   * @param {boolean} open - Dropdown visibility status.
   */
  const handleDropdownVisibleChange = open => {
    setDropdownOpen(open)
  }
  return (
    <div className="box-container filter">
      {content || (
        <Select
          mode={isMulti ? "multiple" : undefined}
          placeholder={dropdownOpen ? "Select here" : ""}
          className={className}
          value={displayValue}
          style={{
            // maxWidth: "90px",
            height: 30,
            color: dropdownOpen && !value ? "black" : "inherit",
            textAlign: "center",
            // border: "1px solid #8080809c",
            color: "black",
            background: "#FFFFFF",
          }}
          onChange={handleChange}
          open={dropdownOpen}
          onDropdownVisibleChange={handleDropdownVisibleChange}
          suffixIcon={
            dropdownOpen ? (
              <img
                src={uparrow}
                alt="up Arrow"
                loading="lazy"
                style={{ width: "20px", height: "20px" }}
              />
            ) : (
              <img
                src={downarrow}
                alt="down arrow"
                loading="lazy"
                style={{ width: "20px", height: "20px" }}
              />
            )
          }
          suffix={<div style={{ color: "#797979" }}>(%)</div>}
          maxTagCount="responsive"
          maxTagPlaceholder={omittedValues => {
            const omittedCount = omittedValues.length - 1
            const firstSelected = value?.[0]
            return (
              <Tooltip
                overlayStyle={{
                  pointerEvents: "none",
                }}
                title={omittedValues.map(({ label }) => label).join(", ")}
              >
                <span>
                  {[firstSelected, `+${omittedCount} more`].join(", ")}
                </span>
              </Tooltip>
            )
          }}
        >
          {options.map((option, index) => (
            <Option key={index} value={option.label}>
              {option.label}
            </Option>
          ))}
        </Select>
      )}
    </div>
  )
}

export default InputFilters
