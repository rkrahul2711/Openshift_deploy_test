import React from "react"
import { Table } from "antd"
import "./custom.module.css" // Add custom CSS for pagination

const CustomTable = ({
  tableColumns,
  tableData,
  pageSize = 5,
  currentPage,
  totalItems,
  handleTableChange,
  enablePagination = true,
  loading = false,
  paginationSize = "default",
  paginationPosition = "bottomRight",
  className
}) => {
  return (
    <Table
      size="small"
      className={className}
      loading={loading}
      columns={tableColumns}
      dataSource={tableData}
      pagination={
        enablePagination &&
        totalItems > pageSize && {
          current: currentPage,
          pageSize: pageSize,
          total: totalItems,
          onChange: handleTableChange,
          position: [`${paginationPosition}`],
          size: paginationSize,
          showSizeChanger: false,
          // itemRender: (page, type, originalElement) => {
          //   if (type === "prev") {
          //     return <a className="custom-pagination-btn">Previous</a>
          //   }
          //   if (type === "next") {
          //     return <a className="custom-pagination-btn">Next</a>
          //   }
          //   return originalElement
          // },
        }
      }
      scroll={{
        x: "max-content",
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
                color: "#79799",
                padding: "1px",
                fontFamily: "Unilever Shilling",
                fontSize: "11px",
                borderBottom: "1px solid #C7C7C7",
                borderTop: "1px solid #C7C7C7",
                fontFamily: "Unilever Shilling",
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
                  height: "1rem",
                  fontFamily: "Unilever Shilling",
                  fontWeight: 400,
                }}
              />
            </>
          ),
          cell: ({ className, ...restProps }) => (
            <td
              {...restProps}
              className={className}
              style={{ padding: "5px", textAlign: "left", margin: "0" }}
            />
          ),
        },
      }}
      bordered={false}
    />
  )
}

export default CustomTable
