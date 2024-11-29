import React, { useState } from "react";  // Import the CSS file for styling
import Cardflip1 from "../Components/Cardflip1";

const EXHIBITION = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const Cardimage1 = [
    { src: require("../assets/Exhibition.png"), title: "INDIAPLAST-2019" },
    { src: require("../assets/Exhibition2.png"), title: "EXPO-2020" },
    { src: require("../assets/Exhibition2.png"), title: "TRADE-2021" },
    { src: require("../assets/Exhibition2.png"), title: "CONFERENCE-2022" },
  ];

  const openModal = (imageSrc, title) => {
    setModalImage(imageSrc);
    setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* First Image and Title */}
      <div className="imageContainer1">
        <img
          className="ExportSection"
          alt="ExportSection"
          src={require('../assets/Exhibition.png')}
        />
      </div>

      {/* Second Image and Title */}
      <div className="imageContainer">
        <h1 className="centerText" style={{fontSize:'22px',color:'red'}}>UPCOMING</h1>
        <h2 className="centerText" style={{fontSize:'42px'}}>EXHIBITIONS</h2>
        <img
          className="Exhitbition2"
          alt="Exhitbition2"
          src={require('../assets/Exhibition2.png')}
          onClick={() => openModal(require('../assets/Exhibition2.png'), "Exhibition 2")}
        />
        <div className="titleBox" onClick={() => openModal(require('../assets/Exhibition2.png'), "Exhibition 2")}>
          UPCOMING EXHIBITION 2024
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="overlay">
          <div className="modal">
            <span className="closeButton" onClick={closeModal}>
              &times;
            </span>
            <img
              src={modalImage}
              alt="Fullscreen View"
              className="modalImage"
            />
            <div className="modalTitle">{modalTitle}</div>
          </div>
        </div>
      )}
      <div className="card-header">
         <p style={{fontSize:'22px',color:'red',paddingTop:'30px'}}>Exhibition</p>
         <p style={{fontSize:'42px'}}>Plastivision</p>
  </div>
      
  <Cardflip1
        cardInfo="Click to explore INDIAPLAST-2019"
        cardTitle="INDIAPLAST-2019"
        thumbnailImage={require("../assets/Exhibition.png")}
        galleryImages={Cardimage1}
        
      />
      <div className="card-header">
         <p style={{fontSize:'22px',color:'red',paddingTop:'30px'}}>Exhibition</p>
         <p style={{fontSize:'42px'}}>Plastivision</p>
  </div>
      <div className="card-wrapper" >
     
      <Cardflip1
        cardInfo="Click to explore INDIAPLAST-2019"
        cardTitle="INDIAPLAST-2019"
        thumbnailImage={require("../assets/Exhibition.png")}
        galleryImages={Cardimage1}
      />
      <Cardflip1
        cardInfo="Click to explore INDIAPLAST-2019"
        cardTitle="INDIAPLAST-2019"
        thumbnailImage={require("../assets/Exhibition.png")}
        galleryImages={Cardimage1}
      />
      <Cardflip1
        cardInfo="Click to explore INDIAPLAST-2019"
        cardTitle="INDIAPLAST-2019"
        thumbnailImage={require("../assets/Exhibition.png")}
        galleryImages={Cardimage1}
      />
      <Cardflip1
        cardInfo="Click to explore INDIAPLAST-2019"
        cardTitle="INDIAPLAST-2019"
        thumbnailImage={require("../assets/Exhibition.png")}
        galleryImages={Cardimage1}
      />
      </div>
      <div className="card-header">
         <p style={{fontSize:'22px',color:'red',paddingTop:'30px'}}>Exhibition</p>
         <p style={{fontSize:'42px'}}>Plastindia</p>
  </div>
      <div className="card-wrapper" >
     
      <Cardflip1/>
      <Cardflip1/>
      <Cardflip1/>
      <Cardflip1/>
      <Cardflip1/>
      <Cardflip1/>
      <Cardflip1/>
      <Cardflip1/>
      </div>
      <div className="card-header">
         <p style={{fontSize:'22px',color:'red',paddingTop:'30px'}}>Exhibition</p>
         <p style={{fontSize:'42px'}}>K-GERMANY</p>
  </div>
      <div className="card-wrapper" >
     
      <Cardflip1/>
      <Cardflip1/>
      <Cardflip1/>
      <Cardflip1/>
      <Cardflip1/>
      </div>
    </div>
    
  );
};

export default EXHIBITION;
