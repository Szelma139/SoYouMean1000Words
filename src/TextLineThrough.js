import React from "react";

import "./TextLineThrough.css";

export const TextLineThrough = ({ crossedText, leftCrossPercentage, rightCrossPercentage }) => {

  const style = {
    "--leftPercentage":`${leftCrossPercentage}%`,
    "--rightPercentage":`${rightCrossPercentage}%`
  };



  return (

        <h2 className=" container linethrough" style={style}>{crossedText}</h2>
  );
};