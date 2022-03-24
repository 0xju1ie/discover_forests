import ForestCard from "./ForestCard";
import "./ForestCardView.css";
import { Row } from "antd";

export default function ForestCardView(props) {
  return (
    <div data-testid="forestView" className="site-card-wrapper">
      <Row gutter={[80, 80]} justify="space-around" align="middle">
        {props.forestList.map((forest, index) => (
          <ForestCard forest={forest} key={index} />
        ))}
      </Row>
    </div>
  );
}
