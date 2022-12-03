import React from "react";
import styled from "styled-components";

function Modal(props) {
  const { className, data } = props;

  return (
    <div className={className}>
      {/* <FontAwesomeIcon></FontAwesomeIcon> */}
      <img src={data.hdurl} alt="Enlarged NASA Photo" />
    </div>
  );
}

export default Modal;
