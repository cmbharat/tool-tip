import React from "react";
import Tooltip from "./Tooltip";
import withToolTip from "./WithTooltip";

const Button = (props) => {
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          {props.hovering === true ? (
            <Tooltip position={props.position} />
          ) : null}
          <div>Tooltip at {props.position}</div>
        </div>
      </div>
    </>
  );
};

const ButtonWithHover = withToolTip(Button);

export default ButtonWithHover;
