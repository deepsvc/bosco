import React from "react";
import { Link } from "react-router-dom";

function DriveTrainDet() {
  return (
    <div className="my-5 ">
      <div className="container  text-start" style={{ margin: "auto" }}>
        <div className="row justify-content-center">
          <div className="col-md-10 ">
            <h3
              className=" my-4"
              style={{
                fontWeight: "600",
              }}
            >
              DRIVE TRAIN SERVICE
            </h3>
            <p
              className="detp"
              style={{
                textAlign: "justify",
                marginBottom: 0,
                marginRight: 10,
              }}
            >
              The Drivetrain of the bike consists of all the bits that help in
              propelling your bike forward. It can be called the heart of your
              bike, Keeping it nice and clean and lubricated is very important
              to keep it in top notch condition, we at Bicycle Solutions
              dismantle every part of the drivetrain, clean it with the
              necessary solutions and replace the parts which needs replacement
              and assemble it back together and lubricate it once on the bike.{" "}
            </p>

            <Link
              to="/DriveTrainForm"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <button
                type="button"
                class="btn my-4"
                style={{
                  background: "#1b242d",
                  color: "white",
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  padding: "0.5rem 1.5rem",

                  fontFamily: "Poppins, sans-serif",
                }}
              >
                BOOK SERVICE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DriveTrainDet;
