import React from "react"
import { Divider, Typography, Flex } from "antd"
import "./cards.css"

const { Title } = Typography

const ReusableCard = ({ contents }) => (
  <Flex wrap="wrap" align="start" className="reusableCard">
    {contents?.length &&
      contents?.map((content, index) => (
        <React.Fragment key={index}>
          <Flex align="start"  gap={4} wrap="wrap" className={contents?.length > 4 ? "card-flex" : "card-flex-register"}>
            <Flex align="start"  style={{width: "90%"}}>
              {content?.icon && <div>{content?.icon}</div>}
             <div style={{width: "96px"}}>
             <Title level={5} className="Card-title">
                {content?.text}
              </Title>
             </div>
            </Flex>
            <div style={{marginLeft: "10px"}}>
            <Title level={3} key={index}>
              {content?.value}
            </Title>
            </div>
          </Flex>

          {index < contents?.length - 1 && (
            <Divider
              type="vertical"
              style={{
                height: 68,
                minHeight: 20,
                backgroundColor: "#d9d9d9",
              }}
            />
          )}
        </React.Fragment>
      ))}
  </Flex>
)

export default ReusableCard
