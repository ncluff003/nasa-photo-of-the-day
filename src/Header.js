import React from "react";
import { DateTime } from "luxon";

function Header(props) {
  const { data } = props;
  console.log(data.date);
  return (
    <header>
      <p className="title">NASA Photo Of The Day</p>
      <p>{`Today's Date Is ${DateTime.fromISO(data.date).toLocaleString(DateTime.DATE_FULL)}`}</p>
    </header>
  );
}

export default Header;
