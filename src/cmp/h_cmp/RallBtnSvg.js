import React from "react";

const RallBtnSvg = () => (
  <svg
    className="z"
    width="90"
    height="90"
    viewBox="0 0 90 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d)">
      <circle
        cx="40.9962"
        cy="38.8289"
        r="24.5627"
        transform="rotate(180 40.9962 38.8289)"
        fill="url(#paint0_linear)"
      />
      <circle
        cx="40.9962"
        cy="38.8289"
        r="24.0627"
        transform="rotate(180 40.9962 38.8289)"
        stroke="#1B1D1E"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0.433495"
        y="0.266159"
        width="89.1255"
        height="89.1255"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx="4" dy="6" />
        <feGaussianBlur stdDeviation="10" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.35 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="56.962"
        y1="57.251"
        x2="26.2586"
        y2="19.7928"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#141515" />
        <stop offset="1" stop-color="#2E3236" />
      </linearGradient>
    </defs>
  </svg>
);
export default RallBtnSvg;
