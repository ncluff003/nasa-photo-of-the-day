import React from "react";

function Modal(props) {
  const { data } = props;
  return (
    <div className="modal">
      {/* <FontAwesomeIcon></FontAwesomeIcon> */}
      <img src={data.hdurl} alt="Enlarged NASA Photo" />
    </div>
  );
}

export default Modal;
