import React from "react";
import logo from "./Your paragraph text.png";
import "./nav.css";
import { createSvgIcon } from "@mui/material/utils";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
const HomeIcon = createSvgIcon(<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />, "Home");

const PlusIcon = createSvgIcon(
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>,
  "Plus"
);

export default function nav() {
  return (
    <div className="nav">
      <div>

        <img src={logo} style={{ width:"40px" }} alt='logo'/>
      </div>
      <div>
        <HomeIcon fontSize="large" />
      </div>
      <div>
        <PlusIcon fontSize="large" />
      </div>
      <div>
        <ManageAccountsIcon fontSize="large" />{" "}
      </div>
    </div>
  );
}
