import { useState } from "react"
import React from "react"
import { Select, Spin, Tooltip ,Col,Row} from "antd"
import uparrow from "../../assets/upArrow.svg"
import downarrow from "../../assets/down Arrow.svg"
import "./filter.css"

const { Option } = Select

const Filter = ({
  title = "",
  options = [],
  placeholder = "",
  content = null,
  className = "",
  onChange,
  value,
  name,
  isMulti = false,
  rootClassName = "",
  suffixIcon,
  disabled,
  useFullWidth,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  /**
   * @function handleChange
     * @description Handles dropdown value change and closes dropdown.
   * @param {any} value - Selected dropdown value.
   */
  const handleChange = value => {
    if (isMulti) {
      if (value.includes("All")) {
        if (value[value.length - 1] === "All") {
          value = ["All"];
        }
        else {
          value = value.filter(val => val !== "All");
        }
      }
      else {
        value = value.filter(val => val !== "All"); // Remove "All" from the value array
        onChange && onChange(name, value);
      }
    }

    if (value.length === 0) {
      value = ["All"];
    }

    onChange && onChange(name, value); // Call the onChange callback
    setDropdownOpen(false); // Close the dropdown
  };
  /**
   * @function handleDropdownVisibleChange
   * @description Controls the visibility state of the dropdown.
   * @param {boolean} open - Dropdown visibility status.
   */
  const handleDropdownVisibleChange = open => {
    setDropdownOpen(open)
  }

  let containerStyle = {};

  if(useFullWidth) {
    containerStyle = {width: '100%'}
  }

  return (
    <div className="box-container filter" style={containerStyle}>
      {title && <h4 className="filter-title">{title}</h4>}
      {content || (
        <Select
          mode={isMulti ? "multiple" : undefined}
          placeholder={dropdownOpen ? "Select here" : placeholder}
          className={className}
          value={value}
          style={{ width: '100%' }}
          onChange={handleChange}
          open={dropdownOpen}
          // onSelect={() => setDropdownOpen(true)}
          onDropdownVisibleChange={handleDropdownVisibleChange}
          rootClassName={rootClassName}
          showSearch
          disabled={disabled}
          suffixIcon={suffixIcon ?
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <span style={{ color: "rgb(121, 121, 121)" }}>(%)</span>
              <img
                src={dropdownOpen ? uparrow : downarrow}
                alt={dropdownOpen ? "up arrow" : "down arrow"}
                loading="lazy"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            :
            disabled ? <Spin size="small" /> : dropdownOpen ? (
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
          maxTagCount="responsive"
          maxTagPlaceholder={(omittedValues) => {
            const omittedCount = omittedValues.length - 1;
            const firstSelected = value?.[0];
            return (
              <Tooltip
                overlayStyle={{
                  pointerEvents: 'none',
                }}
                title={omittedValues.map(({ label }) => label).join(', ')}
              >
                <span>{[firstSelected.length>10? firstSelected.slice(0, 10) + "..."
                        : firstSelected, omittedCount?`+${omittedCount} more`: ''].join(', ')}</span>
              </Tooltip>
            );
          }}
        >

          {/* <Option key={index} value={option.label}> */}
          {options.map((option, index) => (
            <Option key={index} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      )}
    </div>
  )
}

export default Filter
