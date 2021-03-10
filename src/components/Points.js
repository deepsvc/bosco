import React from "react";

function Points({ point, subPoint, list }) {
  return (
    <div className="row ">
      <div className="col-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="12"
          height="12"
          viewBox="0 0 172 172"
          style={{ fill: "#000000" }}
        >
          <g
            fill="none"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="2"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <path d="M0,172v-172h172v172z" fill="none"></path>
            <g fill="#e74c3c">
              <path d="M30.87938,10.25281c-2.795,0 -5.30781,1.70656 -6.35594,4.3c-1.06156,2.59344 -0.43,5.56312 1.57219,7.51156l63.93562,63.93562l-63.93562,63.93563c-1.80063,1.72 -2.52625,4.28656 -1.89469,6.70531c0.63156,2.40531 2.51281,4.28656 4.91813,4.91813c2.41875,0.63156 4.98531,-0.09406 6.70531,-1.89469l73.66437,-73.66438l-73.66437,-73.66437c-1.30344,-1.33031 -3.07719,-2.08281 -4.945,-2.08281zM75.61281,10.25281c-2.80844,0 -5.32125,1.70656 -6.36938,4.3c-1.06156,2.59344 -0.43,5.56312 1.57219,7.51156l63.93562,63.93562l-63.93562,63.93563c-1.80063,1.72 -2.52625,4.28656 -1.89469,6.70531c0.63156,2.40531 2.51281,4.28656 4.91813,4.91813c2.41875,0.63156 4.98531,-0.09406 6.70531,-1.89469l73.66437,-73.66438l-73.66437,-73.66437c-1.30344,-1.33031 -3.07719,-2.08281 -4.93156,-2.08281z"></path>
            </g>
          </g>
        </svg>
      </div>
      <div className="col-11">
        <p className="customPItalicBold">{point}</p>
        {subPoint ? <p>{subPoint}</p> : null}
        {list === "show" ? (
          <React.Fragment>
            <div className="row ">
              <div className="col-1 ">
                <img src="https://img.icons8.com/material/12/000000/rounded-square.png" />
              </div>
              <div className="col-11 text-start">
                <p style={{ fontStyle: "italic" }}>Chain, Cassette, Crank</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-1">
                <img src="https://img.icons8.com/material/12/000000/rounded-square.png" />
              </div>
              <div className="col-11 text-start">
                <p style={{ fontStyle: "italic" }}>
                  {" "}
                  Front & Rear (derailleur)
                </p>
              </div>
            </div>
            <div className="row ">
              <div className="col-1">
                <img src="https://img.icons8.com/material/12/000000/rounded-square.png" />
              </div>
              <div className="col-11 text-start">
                <p style={{ fontStyle: "italic" }}>Brake Calipers</p>
              </div>
            </div>
            <div className="row ">
              <div className="col-1">
                <img src="https://img.icons8.com/material/12/000000/rounded-square.png" />
              </div>
              <div className="col-11 text-start">
                <p style={{ fontStyle: "italic" }}>
                  {" "}
                  Wheels and Rotor (disc)
                </p>
              </div>
            </div>{" "}
          </React.Fragment>
        ) : null}
      </div>
    </div>
  );
}

export default Points;
