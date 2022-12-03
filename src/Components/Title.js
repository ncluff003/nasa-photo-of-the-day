import React from "react";
import StyledDatePicker from "./ComponentStyles/DatePicker.style";
// import DatePicker from "./DatePicker";

function Title(props) {
  const { className, data, changeDate } = props;

  if (!data) return <h2>Loading Data...</h2>;

  return (
    <div className={className}>
      <p className="title">{data.title}</p>
      <p className="help-text">{`Click On The Image To Enlarge Or View The HD Media! 🧑‍🚀👨‍🚀`}</p>
      <StyledDatePicker changeDate={changeDate} />
    </div>
  );
}

export default Title;
