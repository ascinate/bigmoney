// components/CustomToolbar.js
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const CustomToolbar = ({ label, onNavigate, onView, view }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
      
      {/* Left: Calendar Label */}
      <div className="mb-2 mb-lg-0">
        <h5 className="mb-0">{label}</h5>
      </div>

      {/* Right: Buttons and Dropdown */}
      <div className="d-flex align-items-center gap-2">
        <button onClick={() => onNavigate("TODAY")} className="btn all-btn btn-outline-primary">
          Today
        </button>

        <button onClick={() => onNavigate("PREV")} className="btn crm-arrow btn-sm btn-outline-secondary">
      <FaArrowLeftLong />
        </button>
        <button onClick={() => onNavigate("NEXT")} className="btn crm-arrow btn-outline-secondary">
        <FaArrowRightLong />
        </button>

        <select
          className="form-select"
          value={view}
          onChange={(e) => onView(e.target.value)}
        >
          <option value="month">Month</option>
          <option value="week">Week</option>
          <option value="day">Day</option>
        </select>
      </div>
    </div>
  );
};

export default CustomToolbar;
