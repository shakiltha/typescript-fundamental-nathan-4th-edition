import React from "react";

class Samples extends React.Component {
  render(): React.ReactNode {
    let item = null;
    if (Math.random() < 0.5) {
      item = <p>Random less than 0.5</p>;
    } else {
      item = <p>Random is greater than 0.5</p>;
    }
    return <div>{item}</div>;
  }
}
export default Samples;
