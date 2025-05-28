import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { FaCalendarAlt } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { BsChatDots } from "react-icons/bs";
import { IoCallSharp } from "react-icons/io5";
import { FcStatistics } from "react-icons/fc";
import { CgAddR } from "react-icons/cg";
import { LuArrowUpDown } from "react-icons/lu";
import "../styles/Sidebar.css";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hamburger" onClick={() => setOpen((prev) => !prev)}>
        &#9776;
      </div>
      <div className={`sidebar${open ? " show" : ""}`}>
        <div className="sidebar-header">
          <span className="health">Health</span>
          <span className="care">care.</span>
        </div>
        <div className="wrapper">
          <ul className="general">
            General
            <li style={{ color: "Black", fontWeight: "bold" }}>
              <RxDashboard />
              Dashboard
            </li>
            <li>
              <LuArrowUpDown />
              History
            </li>
            <li>
              <FaCalendarAlt />
              Calendar
            </li>
            <li>
              <CgAddR />
              Appointments
            </li>
            <li>
              <FcStatistics />
              Statistics
            </li>
          </ul>
          <ul className="tool">
            Tools
            <li>
              <BsChatDots />
              Chat
            </li>
            <li>
              <IoCallSharp />
              Support
            </li>
          </ul>
        </div>
        <li className="setting">
          <CiSettings />
          Setting
        </li>
      </div>
    </>
  );
}

export default Sidebar;