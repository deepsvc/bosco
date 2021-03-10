import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Home from "./screens/Home";
import ServiceScreen from "./screens/ServiceScreen";
import BrakeBleeding from "./screens/BrakeBleeding";
import FAQ from "./screens/FAQ";
import PaintJob from "./screens/PaintJob";
import ServiceScreenDoorStep from "./screens/ServiceScreenDoorStep";
import WheelTurning from "./screens/WheelTurning";
import SuspensionService from "./screens/SuspensionService";
import DriveTrainService from "./screens/DriveTrainService";
import BrakeForm from "./screens/BrakeForm";
import WheelForm from "./screens/WheelForm";
import SuspensionServiceForm from "./screens/SuspensionForm";
import DriveForm from "./screens/DriveForm";

function App() {
  return (
    <div className="App" data-spy="scroll" data-target=".navbar">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/book" exact component={ServiceScreen} />
          <Route path="/BookDoorStep" exact component={ServiceScreenDoorStep} />
          <Route path="/brakebleeding" exact component={BrakeBleeding} />
          <Route path="/FAQ" exact component={FAQ} />
          <Route path="/PaintJob" exact component={PaintJob} />
          <Route path="/WheelTurning" exact component={WheelTurning} />
          <Route
            path="/SuspensionService"
            exact
            component={SuspensionService}
          />
          <Route
            path="/DriveTrainService"
            exact
            component={DriveTrainService}
          />
          <Route path="/BrakeForm" exact component={BrakeForm} />
          <Route path="/WheelTruingForm" exact component={WheelForm} />
          <Route
            path="/SuspensionServiceForm"
            exact
            component={SuspensionServiceForm}
          />
          <Route path="/DriveTrainForm" exact component={DriveForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
