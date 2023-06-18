import React from "react";
import Tooltip from "./Tooltip";

const Button = (props) => {
  return (
    <>
      <div className="child-div">
        <Tooltip position={props.position} />
      </div>
    </>
  );
};

export default Button;
