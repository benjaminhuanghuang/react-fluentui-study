import React from "react";
import "./App.css";
import "office-ui-fabric-react/dist/css/fabric.css";
//
import Navigation from "./Navigation";
import CardsSection from "./CardsSection";

function App() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm-1 ms-xl1">
          <Navigation></Navigation>
        </div>
        <div className="ms-Grid-col ms-sm11 ms-xl11 main-element">
          <div className="ms-Grid-row"><CardsSection></CardsSection></div>
          <div className="ms-Grid-row"><CardsSection></CardsSection></div>
        </div>
      </div>
    </div>
  );
}

export default App;
