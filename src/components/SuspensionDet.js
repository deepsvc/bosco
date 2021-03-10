import React from "react";
import { Link } from "react-router-dom";

function SuspensionDet() {
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
              SUSPENSION SERVICE
            </h3>
            <p
              className="detp"
              style={{
                textAlign: "justify",
                marginBottom: 0,
                marginRight: 10,
              }}
            >
              For mountain bikers, we all know how important the suspension it
              is to feel your hands at the end of your ride, a well maintained
              suspension will make sure you don't have numb hands at the end of
              your trail ride. Servicing the same periodically is hence
              important, we open up the lowers, give it a nice wash, lubricate
              the necessary parts and leave it feeling fresh and nice again.{" "}
            </p>

            <Link
              to="/SuspensionServiceForm"
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

export default SuspensionDet;
