import React from "react"
import { Table } from "antd"

const ReusableTable = ({ dataSource, columns, className, onClick, hideHeaders }) => {

  const modifiedColumns = hideHeaders
    ? columns.map(col => ({ ...col, title: null }))
    : columns;
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      className={className}
      // bordered
      showHeader={!hideHeaders}
      onRow={(record, rowIndex) => {
        return {
          onClick: onClick

        }

      }}
      onHeaderRow={(columns, index) => {
        return {
          onClick: onClick
        }
      }}
      components={{
        table: props => (
          <table
            {...props}
            style={{
              width: "100%",
              fontFamily: "Unilever Shilling",
              fontSize: "12px",
              borderSpacing: "0 0px", // Vertical row spacing here
              borderCollapse: "collapse", // Ensure rows don't collapse together
            }}
          >
            {props.children}
          </table>
        ),
        header: {
          cell: ({ className, ...restProps }) => (
            <th
              {...restProps}
              className={className}
              style={{
                textAlign: "left",
                fontWeight: "500",
                color: "#797979",
                padding: "8px",
                backgroundColor: "#F2F2F2", // Gray color for the gap
                height: "5px", // 10px gap height
              }}
            />
          ),
        },
        body: {
          row: ({ className, ...restProps }) => (
            <>
              <tr
                {...restProps}
                className={className}
                style={{
                  backgroundColor: "white",
                  height: "3rem",
                  borderBottom: "18px solid #F2F2F2",
                }}
              />
            </>
          ),
          cell: ({ className, ...restProps }) => (
            <td
              {...restProps}
              className={className}
              style={{ padding: "2px", textAlign: "left", margin: "0" }}
            />
          ),
        },
      }}
      bordered
    />
  )
}

export default ReusableTable
