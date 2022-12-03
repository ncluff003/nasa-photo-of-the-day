import React from "react";
import { DateTime } from "luxon";
import styled from "styled-components";

function Header(props) {
  const { className, data, date } = props;

  if (!data) return <h2>Loading Data...</h2>;

  return (
    <header className={className}>
      <p className="title">NASA Photo Of The Day</p>
      <p className="date">Date Of The Photo Is: &nbsp; &nbsp; {`${DateTime.fromISO(date).toLocaleString(DateTime.DATE_FULL)}`}</p>
    </header>
  );
}

export default Header;
