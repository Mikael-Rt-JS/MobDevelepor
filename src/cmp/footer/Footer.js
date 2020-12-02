import React from "react";
import BtnFgroup from './BtnFgroup';
const Footer=()=>(
<footer>
  <h3 className="footer_h3">Fan speed</h3>
  <datalist id="tickmarks">
    <option value="0" label="1"/>
    <option value="100" label="2"/>
    <option value="200" label="3"/>
    <option value="300" label="4"/>
    <option value="400" label="5"/>
  </datalist>
  <input list="tickmarks" type="range" className="range" min="0" max="400"/>
  <h3 className="footer_h3 mode">Mode</h3>
  <BtnFgroup/>
</footer>
);
export default Footer;