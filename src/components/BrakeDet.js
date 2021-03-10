import React from "react";
import { Link } from "react-router-dom";

function BrakeDet() {
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
              BRAKE BLEEDING
            </h3>
            <p
              className="detp"
              style={{
                textAlign: "justify",
                marginBottom: 0,
                marginRight: 10,
              }}
            >
              This is for all your Bikers who run Hydraulic disc brakes on your
              bikes, you know you've to get your brakes bleeded when the brakes
              feel spongy and the braking isn't sharp like it used to be.
              Bleeding is basically removing air bubbles from the brake fluid,
              during which the old brake fluid is drained out and is replaced
              with new brake fluid. To give you an insight we have two types of
              brake fluids in the market, DOT fluid and MINERAL oil, the model
              of your brake will tell us what fluid needs to be used.
              Re-bleeding will Extend the life of your brakes and keep it
              performing like new.{" "}
            </p>
            <Link
              to="/BrakeForm"
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

export default BrakeDet;
