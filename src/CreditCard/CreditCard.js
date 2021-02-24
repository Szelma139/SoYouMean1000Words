import React, { useState } from "react";

import "./CreditCard.css";

import styled from "styled-components";

export const CreditCard = ({
  number,
  cardHolder,
  bankName = "You bank name",
  validThrough = "02/92",
}) => {
  const [isFront, setIsFront] = useState(true);

  return (
    <>
      <div className="flip-card">
        <div className={`flip-card-inner ${isFront ? "rotate" : ""}`}>
          <div
            className={` ${
              !isFront ? "hidden" : ""
            } flip-card-front card-background`}
          >
            <h2 className="card-name card-font">{bankName}</h2>
            <div className="card-second-row">
              <img width="48px" src="/images/chip.png" alt="chip" />
              <img
                width="32px"
                height="48px"
                src="/images/wifi.png"
                alt="field"
              />
            </div>
            <div className="card-info-container card-font uppercase">
              <div className="card-number">{number}</div>
              <div className="card-columns">
                <div>
                  <span> {cardHolder}</span>
                </div>
                <div>
                  <span>{validThrough}</span>
                </div>
                <div className="logo-container">
                  <img height="60px" width="100px" src="/images/visa.png" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              isFront ? "hidden" : ""
            } flip-card-back card-background`}
          >
            <div className="magnetic-strip"></div>
            <div className="signature-container">
              <div className="signature">Adam</div>

              <div className="cvc">412</div>
            </div>
            <img
              className="hologram"
              width="48px"
              src="images/hologram.png"
              alt="holo"
            />
          </div>
        </div>
      </div>
      <button onClick={() => setIsFront(!isFront)} style={{ padding: "3rem" }}>
        Odwróc stronę
      </button>
      <p>isFront: {isFront.toString()}</p>
    </>
  );
};
