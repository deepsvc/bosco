import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Address from "../components/Address";
import DriveTrainDet from "../components/DriveTrainDet";

function DriveTrainService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div
        className="header2"
        style={{ height: "40vh", borderRadius: "0 0 10px 10px" }}
      >
        <div className="container">
          <Navbar />
        </div>
      </div>
      <DriveTrainDet />
      <Address />
    </div>
  );
}

export default DriveTrainService;
