import React from "react";
import { MapPin, PhoneCall, Mail } from "react-feather";

function Address() {
  return (
    <div className="row justify-content-center address align-items-center">
      <div className="col-md-5 align-items-center">
        <div className="p-3">
          <div
            style={{
              width: "100%",
              borderRadius: 10,
            }}
          >
            <iframe
              style={{ borderRadius: 10 }}
              width="100%"
              height="350"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Yelahanka,bangalore+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="col-md-1 text-start"></div>
      <div className="col-md-4 text-start align-items-center">
        <div className="p-3">
          <h1
            className="my-4"
            style={{
              fontWeight: "600",
              letterSpacing: "1px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            REACH US AT
          </h1>
          <h5
            className="my-3"
            style={{
              fontWeight: "500",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <Mail color="white" size="22" strokeWidth="2" className="mx-2" />
            support@boscobicycleworks.com
          </h5>
          <h5
            className="my-3"
            style={{
              fontWeight: "500",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <PhoneCall
              color="white"
              size="22"
              strokeWidth="2"
              className="mx-2"
            />
            +91 8904019840 / +91 9964288130
          </h5>
          <h5
            className="my-3"
            style={{
              fontWeight: "500",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <MapPin color="white" size="22" strokeWidth="2" className="mx-2" />
            Yelahanka, Karnataka, Bangalore 560093
          </h5>
          <div
            class="d-flex justify-content-start "
            style={{ overflowX: "auto" }}
          >
            <div>
              <a
                href="https://www.facebook.com/Bosco-bicycle-works-101175561846174/?ti=as"
                target="_blank"
              >
                <i
                  class="fab fa-facebook-f my-4 mx-2 fa-2x"
                  style={{ color: "white" }}
                ></i>
              </a>
            </div>
            <div>
              <a
                href="https://api.whatsapp.com/send?phone=9964288130"
                target="_blank"
              >
                <i
                  class="fab fa-whatsapp my-4 ms-5 fa-2x"
                  style={{ color: "white" }}
                ></i>
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/boscobicycleworks/"
                target="_blank"
              >
                <i
                  class="fab fa-instagram my-4 ms-5 fa-2x"
                  style={{ color: "white" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
