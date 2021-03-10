import React from "react";
import Navbar from "./Navbar";
import { Player, ControlBar } from "video-react";

import "./../../node_modules/video-react/dist/video-react.css";
import { Link } from "react-router-dom";

import vid from "../images/vid1.mp4";

function Header() {
  const videoSrc = vid;

  return (
    <div className="" style={{ height: "100vh" }}>
      <Navbar />
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
        pause={false}
        // data-bs-interval="13000"
      >
        <div class="carousel-inner" pause={false}>
          <div
            class="carousel-item active"
            pause={false}
            data-bs-interval="11500"
          >
            <div pause={false} style={{ height: "100vh" }}>
              <Player
                loop={true}
                playsInline
                autoPlay
                muted
                bigPlayButton={false}
              >
                <source src={videoSrc} />
                <ControlBar autoHide={true} />
              </Player>
            </div>

            {/* <VideoPlayer
              src={videoSrc}
              type="video/mp4"
              width="auto"
              height="auto"
              autoPlay
              // hideControls={['play','volume','seekbar','timer','playbackrates','fullscreen']}
              // bigPlayButton={false}
              controls={true}
              muted
            /> */}
          </div>
          <div class="carousel-item" pause="false" data-bs-interval="5000">
            <div pause={false} class="header-car-1"></div>
          </div>
          <div class="carousel-item" pause="false" data-bs-interval="5000">
            <div class="header-car-2">
              <div
                pause="false"
                className="position-absolute"
                style={{
                  marginLeft: "1380px",
                  marginTop: "790px",
                }}
              >
                <Link
                  to="/PaintJob"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  <button
                    type="button"
                    class="btn"
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
                    Book Custom Paint Job Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
