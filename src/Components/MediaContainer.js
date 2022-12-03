import React from "react";
import ReactPlayer from "react-player";
import StyledTitle from "./ComponentStyles/Title.style";
// import Title from "./Title";

function MediaContainer(props) {
  const { className, data, toggleModal, changeDate } = props;

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
      return <ReactPlayer url={data.url} controls={true} height="50rem" width="50%" />;
    }
  };

  return (
    <div className={className}>
      {renderCorrectMedia()}
      {/* Title Container -- Title AND Help */}
      <StyledTitle data={data} changeDate={changeDate} />
      {/* Explanation */}
      <p className="explanation">{data.explanation}</p>
    </div>
  );
}

export default MediaContainer;
