import React from "react";

function Title(props) {
  const { data } = props;
  return (
    <div className="title-container">
      <p className="title">{data.title}</p>
      <p className="help-text">{`Click On The Image To Enlarge! 🧑‍🚀👨‍🚀`}</p>
    </div>
  );
}

export default Title;
