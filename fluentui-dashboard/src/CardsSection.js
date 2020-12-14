import React from "react";
//
import { Card } from "@fluentui/react-cards";
import { Text, initializeIcons } from "@fluentui/react";
import "office-ui-fabric-react/dist/css/fabric.css";

const cards = [
  {
    title: "Current Balbence",
    amount: "$21 865",
    icon: "Mondy",
    percentange: "2.3",
  },
  {
    title: "Current Expanses",
    amount: "$21 865",
    icon: "Payment Card",
    percentange: "2.3",
  },
  {
    title: "Current Balbence",
    amount: "$21 865",
    icon: "Mondy",
    percentange: "2.3",
  },
];
function CardsSection() {
  initializeIcons();
  return (
    <div>
      {cards.map((card) => (
        <div className="s-Grid-col ms-sm-3 ms-xl-3">
          <Card>
            <Card.Section>
              <Card.Item>
                <i className={`ms-Icon ms-Icon--${card.icon}`} aria-hidden></i>
                <Text>{card.title}</Text>
              </Card.Item>
              <Card.Item>
                <Text>{card.amount}</Text>
              </Card.Item>
              <Card.Item>
                <Text>{card.percentange}%</Text>
              </Card.Item>
            </Card.Section>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default CardsSection;
