import React from "react";
import Title from "./Title";

function MediaContainer(props) {
  const { data, toggleModal, changeDate } = props;

  if (!data) return <h2>Loading Data...</h2>;

  const renderCorrectMedia = () => {
    if (data.media_type === "image") {
      return (
        <img
          className="nasa-image"
          src={data.url}
          alt="NASA Photo"
          onClick={() => {
            toggleModal();
          }}
        />
      );
    } else if (data.media_type === `video`) {
      return <video className="nasa-video" src={data.url}></video>;
    }
  };

  return (
    <div className="image-container">
      {renderCorrectMedia()}
      {/* Title Container -- Title AND Help */}
      <Title data={data} changeDate={changeDate} />
      {/* Explanation */}
      <p className="explanation">{data.explanation}</p>
    </div>
  );
}

export default MediaContainer;
