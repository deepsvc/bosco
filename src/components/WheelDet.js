import React from "react";
import { Link } from "react-router-dom";

function WheelDet() {
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
              WHEEL TRUING
            </h3>
            <p
              className="detp"
              style={{
                textAlign: "justify",
                marginBottom: 0,
                marginRight: 10,
              }}
            >
              Wheel Truing is a very important maintenance job which needs to be
              periodically done irrespective of the type of bi-cycle, as the
              wheels are the contact points with the ground and these are the
              ones that take the beatings of the rough roads, trails, potholes
              and jumps. Truing the wheels is basically tensioning the nipples
              just right so as to leave the wheel aligned.{" "}
            </p>

            <Link
              to="/WheelTruingForm"
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

export default WheelDet;
