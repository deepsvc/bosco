import React from "react";
import Points from "./Points";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="row text-start services" id="services">
      <div className="col-md-4">
        <div className="p-5">
          <div className="contentHolder ">
            <div className="heading">
              <h1 className="serviceName">REGULAR SERVICE</h1>
            </div>
            <div className="content px-3">
              <h1 className="price my-3">700/-*</h1>
              <span style={{fontSize: "0.8rem", textAlign: "center"}}>Price is Inclusive of GST</span>
              <p>Recommended for Occasional Riders.</p>
              <p>
                A Quick tune-up which covers all the basic checks to keep you on
                the move!
              </p>
              <p className="customPBold">
                Our Trusted technician will drop-In and service your bicycle.{" "}
              </p>

              <p
                style={{
                  color: "rgb(234, 13, 41)",
                  fontSize: "1.25rem",
                  fontWeight: "900",
                }}
              >
                What all is done?
              </p>
              <div
                style={{
                  maxHeight: "450px",
                  overflowY: "scroll",
                }}
              >
                <Points
                  point="All bolts checked and torqued"
                  subPoint="(According to manufacturer standards)"
                />
                <Points point="Wheel truing" />
                <Points point="Gear tune-up" />
                <Points point="Brake adjustment" />
                <Points point="Bottom bracket check" />
                <Points point="Chain Lubrication" />
                <Points point="Headset check-up/ adjust" />
                <Points point="Hanger alignment" />
                <Points point="Tyre inspection and pressure" />
                <Points point="Clean up of the bike" />
              </div>
              <div className="footer">
                <Link
                  to="/BookDoorStep"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <h1
                    className="book m-0"
                    style={{
                      fontWeight: "600",
                      fontSize: "1.5rem",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    BOOK SERVICE
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="p-5">
          <div className="contentHolder">
            <div className="heading">
              <h1 className="serviceName">PREMIUM SERVICE</h1>
            </div>
            <div className="content px-3">
              <h1 className="price my-3">1300/-*</h1>
              <span style={{fontSize: "0.8rem", textAlign: "center"}}>Price is Inclusive of GST</span>
              <p> Recommended for Regular Riders.</p>
              <p>
                Get your bike looking new and running smooth ! 6 months once
                would be an ideal time.
              </p>
              <p>
                We pick up your bike, Service it and drop it back in mint
                condition. Pickup and drop charges included.
              </p>

              <p
                className="px-3"
                style={{
                  fontStyle: "italic",
                  fontWeight: "600",
                }}
              >
                This service include's all elements of Regular service
              </p>
              <Points point="Full frame & fork clean" />
              <Points point="De-greasing the drive train" />
              <Points point="Lubrication of the drive train" />
              <Points point="Hub greasing & adjusting" />
              <Points point="Polishing the frame/tyres" />
              <div className="footer">
                <Link
                  to="/book"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <h1
                    className="book m-0"
                    style={{
                      fontWeight: "600",
                      fontSize: "1.5rem",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    BOOK SERVICE
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="p-5 ">
          <div className="contentHolder ">
            <div className="heading">
              <h1 className="serviceName">ULIMATE STRIP</h1>
            </div>
            <div className="content px-3">
              <h1 className="price my-3">1800/-*</h1>
              <span style={{fontSize: "0.8rem", textAlign: "center"}}>Price is Inclusive of GST</span>
              <p className="customPBold">
                {" "}
                We pick up your bike, Service it and drop it back in mint
                condition. Pickup and drop charges included.
              </p>
              <p>
                Recommended for a Rider who keeps his wheels moving all the
                time, this strip down makes sure you're bikes bearings are
                running smooth.
              </p>
              <p>
                If you race often or if you go on endurance rides, this is the
                service you should consider. Getting the Ultimate strip yearly
                once is recommended.
              </p>

              <p
                style={{
                  fontStyle: "italic",
                  fontWeight: "600",
                }}
              >
                This includes all elements of premium service Plus
              </p>
              <div
                style={{
                  maxHeight: "450px",
                  overflowY: "scroll",
                }}
              >
                <Points point=" All parts fully removed from the frame and cleaned" />
                <Points point=" Hub service - strip, clean & re-greased" />
                <Points point=" Bottom bracket service & thread cleaned" />
                <Points point=" Head set check & re-greased" />

                <Points point=" Removal & deep clean of " list="show" />
                <Points point=" Anti- seize grease will be applied." />
              </div>
              <div className="footer">
                <Link
                  to="/book"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <h1
                    className="book m-0"
                    style={{
                      fontWeight: "600",
                      fontSize: "1.5rem",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    BOOK SERVICE
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
