import React, { useState } from "react";
import { Card, Badge, Col } from "antd";
import ForestDetails from "./ForestDetails";

export default function ForestCard(props) {
  const { Meta } = Card;

  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const showDetails = () => {
    setIsDetailsVisible(true);
  };

  const handleExitDetails = () => {
    setIsDetailsVisible(false);
  };

  return (
    <>
      <Col
        span={8}
        onClick={showDetails}
        xs={{ span: 5, offset: 1 }}
        lg={{ span: 6, offset: 2 }}
      >
        <Badge.Ribbon text={props.forest.forest_type} placement="start">
          <Card
            title={props.forest._id}
            bordered={true}
            hoverable
            style={{ width: 300 }}
            cover={<img alt="forest" src={props.forest.image} />}
          >
            <Meta
              title={props.forest.name}
              description={props.forest.brief_description}
            />
          </Card>
        </Badge.Ribbon>
      </Col>
      <ForestDetails
        forest={props.forest}
        isDetailsVisible={isDetailsVisible}
        handleExitDetails={handleExitDetails}
      />
    </>
  );
}
