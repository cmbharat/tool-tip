import React from "react";
import Tooltip from "./Tooltip";
import withToolTip from "./WithTooltip";

const Button = (props) => {
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          {props.hovering === true ? <Tooltip position="top" /> : null}
          <div>Tooltip at top</div>
        </div>
        <div className="child-div">
          {props.hovering === true ? <Tooltip position="bottom" /> : null}
          <div>Tooltip at bottom</div>
        </div>
        <div className="child-div">
          {props.hovering === true ? <Tooltip position="right" /> : null}
          <div>Tooltip at right</div>
        </div>
        <div className="child-div">
          {props.hovering === true ? <Tooltip position="left" /> : null}
          <div>Tooltip at left</div>
        </div>
      </div>
    </>
  );
};

const ButtonWithHover = withToolTip(Button);

export default ButtonWithHover;
