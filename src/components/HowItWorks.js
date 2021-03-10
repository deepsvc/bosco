import React from "react";
import TextBox from "./TextBox";

function HowItWorks() {
  return (
    <div style={{ minHeight: "xxx" }}>
      <div className="row " style={{ minHeight: "xxx" }}>
        <div
          className="col-md-1 px-0 d-none d-md-block"
          style={{
            position: "relative",
            top: "-80px",
          }}
        >
          <div className="shadowHolder"></div>
        </div>
        <div
          className="col-md-4 col-lg-4 ps-0 d-none d-md-block"
          style={{
            height: "70vh",
            position: "relative",
            top: "-80px",
          }}
        >
          <div className="holder1 align-middle">
          <h1 className="tag align-middle">How <br /> It Works</h1>
          </div>
        </div>
        <div className="col-md-7 align-items-center pt-5">
          <TextBox
            name="time"
            text="SCHEDULE A SERVICE"
            subText="Plan a service, book a slot @ your convenience.
                                We will be happy to serve you"
          />
          <TextBox
            name="img3"
            text="COOL & CLEAR SERVICES"
            subText="Upon booking a slot, we either provide door step or pick & drop services on the type of service you choice."
          />
          <TextBox
            name="img2"
            text="LOYALTY"
            subText="We are a passionate team of cyclist, who enjoy working on bike, there by assuring best services with safe return"
          />
          <TextBox
            name="img4"
            text="ASSURANCE"
            subText="we promise to deliver within 48-72 Hrs"
          />
          <TextBox
            name="img6"
            text="EXPRESS SERVICE"
            subText="24 Hour Fast tracked and quick laned services for emergencies. (**charges apply)"
          />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
