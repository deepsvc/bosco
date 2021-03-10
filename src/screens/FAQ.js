import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Address from "../components/Address";

const sampleJSON = {
  QAs: [
    {
      Q: "What bikes do you service?",
      A:
        "We service all kinds of bikes (Rodie, MTB, Hybrid, Foldable, Kids, etc.)",
    },
    {
      Q: "Do you build custom frame?",
      A:
        "Yes..!! We do custom paint and upgrade the components according to the frame compatibility.",
    },
    {
      Q: "Does your service price include spare parts?",
      A: "Spares are considered to be extra.",
    },
    {
      Q: "Does your price include pick & drop?",
      A: "No.. But prices are very affordable.",
    },
    {
      Q: "What if the bike needs extra spares?",
      A:
        "Once we receive the bike, we will check the complete bike - this is an in depth check to see whether any additional parts needed. If needed, we will certainly call you for confirmation.",
    },
    {
      Q: "How soon can you collect my bike?",
      A:
        "Unlike bike shop who have a long waiting list, you don't have to wait too long for your bike to be collected & serviced. Even in peak season we'll be able to collect and return within 48 to 72 hours.",
    },
    {
      Q: "How long would you take to do doorstep service?",
      A:
        "Once we receive your order, we will call you and schedule the appointment and reach your venue.",
    },
    {
      Q: "Do you offer Warranty on service?",
      A:
        "All labour work comes with 3 months warranty. All parts supplied by us comes with a manufacturer's warranty (user misuse and fair wear and tear is not covered); if you do experience problem with your bike service, please do not hesitate to get in touch with us, we want our users to be happy pedalling",
    },
    { Q: "How do you take payments?", A: "Online with any UPI or Cash." },
    { Q: "Can you assemble the bicycle?", A: "Yes... We can help you out." },
  ],
};

function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div
        className="header2"
        style={{ height: "40vh", borderRadius: "0 0 10px 10px" }}
      >
        <div className="container">
          <Navbar />
        </div>
      </div>

      <div className="my-5 ">
        <div className="container  text-start" style={{ margin: "auto" }}>
          <div className="row justify-content-center">
            <div className="col-md-10 ">
              <h2
                className=" my-4"
                style={{
                  fontWeight: "600",
                }}
              >
                FAQs
              </h2>

              <div
                style={{
                  textAlign: "justify",
                  marginBottom: 0,
                }}
              >
                <ul>
                  {sampleJSON.QAs.map((item, i) => {
                    return (
                      <li key={i}>
                        <span
                          style={{
                            color: "red",
                            fontWeight: "bold",
                          }}
                        >
                          {item.Q}
                        </span>
                        <br />
                        <span
                          style={{
                            fontWeight: "unset",
                            fontStyle: "italic",
                          }}
                        >
                          {item.A}
                        </span>
                        <br />
                        <br />
                      </li>
                    );
                  })}
                </ul>
              </div>

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
            </div>
          </div>
        </div>
      </div>
      <Address />
    </div>
  );
}

export default FAQ;
