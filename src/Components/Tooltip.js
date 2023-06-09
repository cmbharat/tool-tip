import React, { useEffect, useRef } from "react";

export const Tooltip = (props) => {
  const spanRef = useRef();
  const position = props.position;
  useEffect(() => {
    //top tooltip
    if (position === "top") {
      spanRef.current.style.bottom = "120%";
      spanRef.current.style.left = "50%";
      spanRef.current.style.marginLeft = "-110px";
    }

    //bottom tooltip
    if (position === "bottom") {
      spanRef.current.style.top = "140%";
      spanRef.current.style.left = "50%";
      spanRef.current.style.marginLeft = "-110px";
    }

    //left tooltip
    if (position === "left") {
      spanRef.current.style.top = "-50%";
      spanRef.current.style.right = "110%";
    }

    //right tooltip
    if (position === "right") {
      spanRef.current.style.top = "-50%";
      spanRef.current.style.left = "110%";
    }
  }, [position]);
  return (
    <div className="tooltip">
      Hover over me!
      <span ref={spanRef} className="tooltiptext">
        Thanks for hovering! I'm a tooltip in {position} position
      </span>
    </div>
  );
};

export default Tooltip;
