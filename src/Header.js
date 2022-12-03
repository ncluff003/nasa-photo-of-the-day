import React from "react";
import { DateTime } from "luxon";

function Header(props) {
  const { data, date } = props;

  if (!data) return <h2>Loading Data...</h2>;

  return (
    <header>
      <p className="title">NASA Photo Of The Day</p>
      <p>{`Date Of The Photo Is ${DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)}`}</p>
    </header>
  );
}

export default Header;
