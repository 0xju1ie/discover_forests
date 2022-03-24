import { Divider, Drawer } from "antd";
import React from "react";

const ForestDetails = (props) => {
  const {
    country,
    latitude,
    name,
    longitude,
    long_description,
    forest_type,
    area_covered,
  } = props.forest;
  return (
    <Drawer
      data-testid="forestDetails"
      title={name + " Details"}
      visible={props.isDetailsVisible}
      onClose={props.handleExitDetails}
      placement="right"
      width={640}
    >
      <Divider orientation="left" orientationMargin="0">
        Location
      </Divider>
      <p className="site-description-item-profile-p">{"Country: " + country}</p>
      <p className="site-description-item-profile-p">
        {"Latitude: " + latitude}
      </p>
      <p className="site-description-item-profile-p">
        {"Longitude: " + longitude}
      </p>
      <p className="site-description-item-profile-p">
        {"Area covered (hectares): " + area_covered}
      </p>
      <Divider orientation="left" orientationMargin="0">
        Health Metrics
      </Divider>
      <p className="site-description-item-profile-p">
        {"Current amount of carbon stored (millions metric tonnes of C02): " +
          props.forest.current_carbon_stored}
      </p>
      <p className="site-description-item-profile-p">
        {"Change in carbon stored in the last 30 days (millions metric tonnes of C02): " +
          props.forest.delta_carbon_stored}
      </p>
      <Divider orientation="left" orientationMargin="0">
        Description
      </Divider>
      <p className="site-description-item-profile-p">
        {"Forest type: " + forest_type}
      </p>
      <p className="site-description-item-profile-p">{long_description}</p>
    </Drawer>
  );
};
export default ForestDetails;
