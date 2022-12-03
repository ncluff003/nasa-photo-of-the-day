import React from "react";
import Date from "./Date";

function Title(props) {
  const { data, changeDate } = props;

  if (!data) return <h2>Loading Data...</h2>;

  return (
    <div className="title-container">
      <p className="title">{data.title}</p>
      <p className="help-text">{`Click On The Image To Enlarge! 🧑‍🚀👨‍🚀`}</p>
      <Date changeDate={changeDate} />
    </div>
  );
}

export default Title;
