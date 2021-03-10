import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import Points from "./Points";

function Navbar() {
  // for main
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // for doorstep
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // for collect
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  return (
    <nav
      class="navbar navbar-expand-lg navbar-light py-0"
      style={{
        position: "absolute",
        top: 0,
        left: 10,
        right: 50,
        zIndex: 99999,
      }}
    >
      <a class="navbar-brand py-2" href="/">
        <img src={logo} alt="" width="250" height="100" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto  mb-lg-0 align-items-center">
          <li class="nav-item">
            <a class="nav-link " aria-current="page" href="/#about">
              ABOUT US
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/#services">
              SERVICES
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link "
              href="/#contact"
              tabindex="-1"
              aria-disabled="true"
            >
              CONTACT
            </a>
          </li>

          <li class="nav-item" style={{ marginRight: "2rem" }}>
            <Link
              to="/FAQ"
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <a class="nav-link" tabindex="-1" aria-disabled="true">
                FAQs
              </a>
            </Link>
          </li>

          <button
            type="button"
            class="btn btn1"
            onClick={handleShow}
            style={{
              background: "rgb(234, 13, 41)",
              color: "white",
              fontSize: "1.125rem",
              fontWeight: 600,
              padding: "0.5rem 1.5rem",
              borderRadius: 20,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Book A Service
          </button>
        </ul>
      </div>
      <>
        {/* Main */}
        <Modal
          show={show}
          size="lg"
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="text-center"
        >
          <Modal.Header className="text-center">
            <Modal.Title className="text-center">Book A Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button
              style={{ marginRight: "2rem", background: "red" }}
              className="text-left"
              left
              onClick={handleShow1}
              size="lg"
            >
              Door Step Service
            </Button>
            <Button
              style={{ marginRight: "2rem", background: "red" }}
              onClick={handleShow2}
              size="lg"
            >
              Collect & Return
            </Button>
            <Button
              style={{ background: "red" }}
              onClick={handleShow3}
              size="lg"
            >
              Book a Custom Paint Job
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      <>
        {/* DoorStep */}
        <Modal
          show={show1}
          onHide={handleClose1}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="text-center"
        >
          <Modal.Header>
            <Modal.Title>Door Step Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="heading">
              <h1 className="serviceName">REGULAR SERVICE</h1>
            </div>
            <div className="content px-3">
              <h1 className="price my-3">700/-*</h1>
              <span style={{ fontSize: "0.8rem" }}>
                Price is Inclusive of GST
              </span>
              <p>Recommended for Occasional Riders.</p>
              <p>
                Get your bike looking new and running smooth ! 6 months once
                would be an ideal time.
              </p>
              <p>
                We pick up your bike, Service it and drop it back in mint
                condition. Pickup and drop charges included.
              </p>
              <p>
                A Quick tune-up which covers all the basic checks to keep you on
                the move!
              </p>
              <p className="customPBold">
                Our Trusted technician will drop-In and service your bicycle.{" "}
              </p>
              <div style={{ textAlign: "left", paddingLeft: "10px" }}>
                <p
                  style={{
                    color: "rgb(234, 13, 41)",
                    fontSize: "1.25rem",
                    fontWeight: "900",
                  }}
                >
                  What all is done?
                </p>
                <span style={{ color: "red" }}>»</span> All bolts checked and
                torqued
                <br />
                <span
                  style={{
                    fontSize: "0.85rem",
                    paddingLeft: "10px",
                  }}
                >
                  (According to manufacturer standards)
                </span>
                <br />
                <span style={{ color: "red" }}>»</span> Wheel truing
                <br />
                <span style={{ color: "red" }}>»</span> Gear tune-up
                <br />
                <span style={{ color: "red" }}>»</span> Brake adjustment
                <br />
                <span style={{ color: "red" }}>»</span> Bottom bracket check
                <br />
                <span style={{ color: "red" }}>»</span> Chain Lubrication
                <br />
                <span style={{ color: "red" }}>»</span> Headset check-up/ adjust
                <br />
                <span style={{ color: "red" }}>»</span> Hanger alignment
                <br />
                <span style={{ color: "red" }}>»</span> Tyre inspection and
                pressure
                <br />
                <span style={{ color: "red" }}>»</span> Clean up of the bike
                <br /> <br /> <br />
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      <>
        {/* Collect & Drop */}
        <Modal
          show={show2}
          onHide={handleClose2}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="text-center"
          size="lg"
        >
          <Modal.Header>
            <Modal.Title>Book A Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="first-column">
              <div className="heading container">
                <h1 className="serviceName">PREMIUM SERVICE</h1>
              </div>
              <div className="content px-3">
                <h1 className="price mt-3">1300/-*</h1>
                <span style={{ fontSize: "0.8rem" }}>
                  Price is Inclusive of GST
                </span>

                <p> Recommended for Regular Riders.</p>
                <p>
                  Get your bike looking new and running smooth ! 6 months once
                  would be an ideal time.
                </p>
                <p>
                  We pick up your bike, Service it and drop it back in mint
                  condition. Pickup and drop charges included.
                </p>

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontStyle: "italic",
                      fontWeight: "600",
                    }}
                  >
                    This service includes all elements of Regular Service +
                  </p>
                  <span style={{ color: "red" }}>»</span> Full Frame & Fork
                  Clean
                  <br />
                  <span style={{ color: "red" }}>»</span> De-Greasing the Drive
                  Train
                  <br />
                  <span style={{ color: "red" }}>»</span> Lubrication of the
                  Drive Train
                  <br />
                  <span style={{ color: "red" }}>»</span> Hub Greasing &
                  Adjusting
                  <br />
                  <span style={{ color: "red" }}>»</span> Polishing the
                  Frame/Tyres
                  <br /> <br /> <br />
                </div>
                <div
                  className="text-center"
                  style={{
                    position: "absolute",
                    bottom: "1%",
                    left: "15%",
                    background: "rgb(199, 199, 199)",
                    borderRadius: "2.5px",
                    color: "black",
                    fontSize: "2rem",
                    padding: "7px",
                  }}
                >
                  <Link
                    to="/book"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <h1
                      className=" m-0"
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
            <div
              style={{
                borderLeft: "2px solid grey",
                height: "100%",
                position: "absolute",
                left: "50%",
                top: "0",
              }}
            ></div>

            <div className="second-column">
              <div className="heading container">
                <h1 className="serviceName">ULIMATE STRIP</h1>
              </div>
              <div className="content px-3">
                <h1 className="price my-3">1800/-*</h1>
                <span style={{ fontSize: "0.8rem" }}>
                  Price is Inclusive of GST
                </span>
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

                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontStyle: "italic",
                      fontWeight: "600",
                    }}
                  >
                    This includes all elements of Premium Service +
                  </p>
                  <span style={{ color: "red" }}>»</span> All Parts fully
                  removed from the Frame and Cleaned
                  <br />
                  <span style={{ color: "red" }}>»</span> Hub Service - Strip,
                  Clean & Re-Greased
                  <br />
                  <span style={{ color: "red" }}>»</span> Bottom Bracket Service
                  & Thread Cleaned
                  <br />
                  <span style={{ color: "red" }}>»</span> Head Set Check &
                  Re-Greased
                  <br />
                  <span style={{ color: "red" }}>»</span> Removal & Deep Clean
                  of
                  <br />
                  <div
                    style={{
                      fontSize: "0.85rem",
                      paddingLeft: "10px",
                    }}
                  >
                    <span style={{ color: "red" }}>›</span> Chain, Cassette,
                    Crank
                    <br />
                    <span style={{ color: "red" }}>›</span> Front & Rear
                    (derailleur)
                    <br />
                    <span style={{ color: "red" }}>›</span> Brake Calipers
                    <br />
                    <span style={{ color: "red" }}>›</span> Wheels and Rotor
                    (disc)
                  </div>
                  <span style={{ color: "red" }}>›</span> Anti-Seize Grease will
                  be applied.
                  <br /> <br /> <br />
                </div>

                <div
                  style={{
                    alignItems: "bottom",
                    position: "absolute",
                    bottom: "1%",
                    right: "15%",
                    background: "rgb(199, 199, 199)",
                    borderRadius: "2.5px",
                    color: "black",
                    fontSize: "2rem",
                    padding: "7px",
                  }}
                >
                  <Link
                    to="/book"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <h1
                      className=" m-0"
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>

      <>
        {/* Paint Job */}
        <Modal
          show={show3}
          onHide={handleClose3}
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="text-center"
        >
          <Modal.Header>
            <Modal.Title>Book Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="heading">
              <h1 className="serviceName">CUSTOM PAINT JOB</h1>
            </div>
            <div className="content px-3">
            <br />
              <p>Are you looking to spruce up the appearance of your bike? </p>
              <p>
                What if we told you, you can see your bike in that colour you
                have always dreamt of?
              </p>{" "}
              <p>
                {" "}
                You have definitely reached the right place to get it done.
              </p>
              <br /> <br />
              <div className="footer">
                <Link
                  to="/PaintJob"
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose3}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </nav>
  );
}

export default Navbar;
