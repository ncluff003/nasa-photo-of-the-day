import React, { useState, useEffect } from "react";
import Header from "./Header";
import ImageContainer from "./ImageContainer";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    const nasaInfo = () =>
      fetch(`https://api.nasa.gov/planetary/apod?api_key=OOfHLHPWSefsSIDDU9HxJu4yZ117iqi2m0ffmkBs`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setNasaData(data);
        })
        .catch((error) => console.error(error));
    nasaInfo();
  }, []);

  const toggleModal = () => {
    return setModalOpen(!modalOpen);
  };

  return (
    <div className="App">
      {modalOpen && <Modal data={nasaData} />}
      <Header data={nasaData} />
      <ImageContainer data={nasaData} toggleModal={toggleModal} />
    </div>
  );
}

export default App;
