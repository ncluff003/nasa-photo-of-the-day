import React from "react";

function DatePicker(props) {
  const { className, changeDate } = props;
  return (
    <label className={className}>
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

export default DatePicker;
