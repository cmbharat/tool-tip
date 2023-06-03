import React from "react";

export default function withToolTip(Component) {
  class WithToolTip extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hovering: false };
    }

    mouseOver = () => {
      this.setState({ hovering: true });
    };

    mouseOut = () => {
      this.setState({ hovering: false });
    };

    render() {
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component hovering={this.state.hovering} />
        </div>
      );
    }
  }

  return WithToolTip;
}
