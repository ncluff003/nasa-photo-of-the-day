import React, { useState, useEffect } from "react";
import axios from "axios";
import { DateTime } from "luxon";
import Header from "./Header";
import MediaContainer from "./MediaContainer";
import Modal from "./Modal";
import "./App.css";

function App() {
  const [nasaData, setNasaData] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [date, setDate] = useState(DateTime.now().toISODate());

  useEffect(() => {
    const nasaInfo = async () => {
      try {
        const response = await axios({
          method: `GET`,
          url: `https://api.nasa.gov/planetary/apod?api_key=OOfHLHPWSefsSIDDU9HxJu4yZ117iqi2m0ffmkBs&date=${date}`,
        });
        console.log(response.data);
        setNasaData(response.data);
      } catch (error) {}
    };
    nasaInfo();
  }, [date]);

  const toggleModal = () => {
    return setModalOpen(!modalOpen);
  };

  const changeDate = (date) => {
    return setDate(date);
  };

  return (
    <div className="App">
      {modalOpen && <Modal data={nasaData} />}
      <Header data={nasaData} date={date} />
      <MediaContainer data={nasaData} toggleModal={toggleModal} changeDate={changeDate} />
    </div>
  );
}

export default App;
