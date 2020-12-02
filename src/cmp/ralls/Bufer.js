import React from "react";
//import Activivng from './h_cmp/Activivng';
//import from '';
const Bufer = () => (
  <div className="bufer">
    <div className="absolut">
      <div className="flex_div">
        <div className="d_line_vert blocks one"></div>
        <div className="d_line_vert blocks two"></div>
        <div className="d_line_vert blocks thre"></div>
      </div>
      <div className="title">
        <h1>
          24<sup>&#9675;</sup>C
        </h1>
        <p>Cooling...</p>
      </div>
      <div className="flex_div">
        <div className="d_line_vert blocks four"></div>
        <div className="d_line_vert1 blocks five"></div>
        <div className="d_line_vert1 blocks six"></div>
      </div>
    </div>
    <svg className="rall" width="323" height="323">
      <circle className="style_store" cx="160" cy="160" r="150" />
      <circle className="in" cx="160" cy="160" r="120" />
      <circle className="in2" cx="160" cy="160" r="95" />
    </svg>
  </div>
);
export default Bufer;
