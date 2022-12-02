import React from "react";
import Title from "./Title";

function ImageContainer(props) {
  const { data, toggleModal } = props;

  console.log(data);

  return (
    <div className="image-container">
      <img
        src={data.url}
        alt="NASA Photo"
        onClick={() => {
          toggleModal();
        }}
      />
      {/* Title Container -- Title AND Help */}
      <Title data={data} />
      {/* Explanation */}
      <p className="explanation">{data.explanation}</p>
    </div>
  );
}

export default ImageContainer;
