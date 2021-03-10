import React from "react";
import { Link } from "react-router-dom";

function SpecifiService() {
  return (
    <div
      className="row py-5"
      style={{ background: "#f5f5f5", height: "100vh" }}
    >
      <h1
        className="my-5"
        style={{
          color: "rgb(234, 13, 41)",
          fontWeight: "800",
        }}
      >
        SPECIFIC SERVICE
      </h1>
      <div
        class="d-flex justify-content-start justify-content-md-around align-items-start"
        style={{ overflowX: "auto" }}
      >
        <div className="row align-items-center">
          <div className="px-3 py-2">
            <div
              className="gifHolder g4"
              style={{
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 grey",
              }}
            ></div>
            <div className="gifLabel my-5">
              <p
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                }}
              >
                BRAKE BLEEDING
              </p>
              <Link
                to="/brakebleeding"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "red",
                    lineHeight: 0,
                  }}
                >
                  READ MORE
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="px-3 py-2">
            <div
              className="gifHolder g2"
              style={{
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 grey",
              }}
            ></div>
            <div className="gifLabel">
              <div className="gifLabel my-5">
                <p
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                  }}
                >
                  WHEEL TRUING
                </p>
                <Link
                  to="/WheelTurning"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "red",
                      lineHeight: 0,
                    }}
                  >
                    READ MORE
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="px-3 py-2">
            <div
              className="gifHolder g3"
              style={{
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 grey",
              }}
            ></div>
            <div className="gifLabel">
              <div className="gifLabel my-5">
                <p
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                  }}
                >
                  SUSPENSION SERVICE
                </p>
                <Link
                  to="/SuspensionService"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "red",
                      lineHeight: 0,
                    }}
                  >
                    READ MORE
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="px-3 py-2">
            <div
              className="gifHolder g1"
              style={{
                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 grey",
              }}
            ></div>
            <div className="gifLabel">
              <div className="gifLabel my-5">
                <p
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                  }}
                >
                  DRIVE TRAIN SERVICE
                </p>
                <Link
                  to="/DriveTrainService"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "red",
                      lineHeight: 0,
                    }}
                  >
                    READ MORE
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecifiService;
