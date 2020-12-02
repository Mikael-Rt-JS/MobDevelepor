import React from "react";
import CtopRight from "./CtopRight";

const CenterTop = () => (
  <div className="center_top">
    <div className="left_text">
      <h2>AC/ is ON</h2>
      <p class="p">
        Currently 27<sup>&#9675;</sup> C<br />
        Will change in 2min
      </p>
    </div>
    <CtopRight />
  </div>
);
export default CenterTop;
