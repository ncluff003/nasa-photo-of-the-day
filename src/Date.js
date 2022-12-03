import React from "react";

function Date(props) {
  const { changeDate } = props;
  return (
    <label>
      <p className="date-picker-label">Select Date</p>
      <input
        type="date"
        id="date"
        onChange={(e) => {
          const { value } = e.target;
          console.log(value);
          changeDate(value);
        }}
      />
    </label>
  );
}

export default Date;
