import React, { useState } from "react";  // Import the CSS file for styling
import Cardflip1 from "../Components/Cardflip1";

const EXHIBITION = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const Cardimage1 = [
    { src: require("../assets/India Plast 2019/indiaplast-2019-1.jpg"), title: "INDIAPLAST-2019" },
    { src: require("../assets/India Plast 2019/indiaplast-2019-2.jpg"), title: "INDIAPLAST-2019" },
    { src: require("../assets/India Plast 2019/indiaplast-2019-3.jpg"), title: "INDIAPLAST-2019" },
    { src: require("../assets/India Plast 2019/indiaplast-2019-4.jpg"), title: "INDIAPLAST-2019" },
    { src: require("../assets/India Plast 2019/indiaplast-2019-5.jpg"), title: "INDIAPLAST-2019" },
    { src: require("../assets/India Plast 2019/indiaplast-2019-6.jpg"), title: "INDIAPLAST-2019" },
    { src: require("../assets/India Plast 2019/indiaplast-2019-7.jpg"), title: "INDIAPLAST-2019" },
    { src: require("../assets/India Plast 2019/indiaplast-2019-8.jpg"), title: "INDIAPLAST-2019" },
    { src: require("../assets/India Plast 2019/indiaplast-2019-9.jpg"), title: "INDIAPLAST-2019" },
    { src: require("../assets/India Plast 2019/indiaplast-2019-10.jpg"), title: "INDIAPLAST-2019" },
  ];
  const Cardimage2 = [
    { src: require("../assets/Plastvision 2017/plastivision-2017-13.jpg"), title: "Plastivision 2017" },
    { src: require("../assets/Plastvision 2017/plastivision-2017-1.jpg"), title: "Plastivision 2017" },
    { src: require("../assets/Plastvision 2017/plastivision-2017-3.jpg"), title: "Plastivision 2017" },
    { src: require("../assets/Plastvision 2017/plastivision-2017-9.jpg"), title: "Plastivision 2017" },
    { src: require("../assets/Plastvision 2017/plastivision-2017-10.jpg"), title: "Plastivision 2017" },
    { src: require("../assets/Plastvision 2017/plastivision-2017-12.jpg"), title: "Plastivision 2017" },
    { src: require("../assets/Plastvision 2017/plastivision-2017-14.jpg"), title: "Plastivision 2017" },
    { src: require("../assets/Plastvision 2017/plastivision-2017-15.jpg"), title: "Plastivision 2017" },
    { src: require("../assets/Plastvision 2017/plastivision-2017-16.jpg"), title: "Plastivision 2017" },
    { src: require("../assets/Plastvision 2017/plastivision-2017-17.jpg"), title: "Plastivision 2017" },
  ];
  const Cardimage3 = [
    { src: require("../assets/Plastvision 2013/plastivision-2013.jpg"), title: "Plastivision 2013" },
    { src: require("../assets/Plastvision 2013/plastivision-2013-2.jpg"), title: "Plastivision 2013" },
    { src: require("../assets/Plastvision 2013/plastivision-2013-3.jpg"), title: "Plastivision 2013" },
    { src: require("../assets/Plastvision 2013/plastivision-2013-4.jpg"), title: "Plastivision 2013" },
    { src: require("../assets/Plastvision 2013/plastivision-2013-5.jpg"), title: "Plastivision 2013" },
    { src: require("../assets/Plastvision 2013/plastivision-2013-6.jpg"), title: "Plastivision 2013" },
    { src: require("../assets/Plastvision 2013/plastivision-2013-7.jpg"), title: "Plastivision 2013" },
    { src: require("../assets/Plastvision 2013/plastivision-2013-8.jpg"), title: "Plastivision 2013" },
  ];
  const Cardimage4 = [
    { src: require("../assets/Plastvision 2011/plastivision-2011-1.jpg"), title: "Plastivision 2011" },
    { src: require("../assets/Plastvision 2011/plastivision-2011-2.jpg"), title: "Plastivision 2011" },
    { src: require("../assets/Plastvision 2011/plastivision-2011-3.jpg"), title: "Plastivision 2011" },
    { src: require("../assets/Plastvision 2011/plastivision-2011-4.jpg"), title: "Plastivision 2011" },
    { src: require("../assets/Plastvision 2011/plastivision-2011-5.jpg"), title: "Plastivision 2011" },
    { src: require("../assets/Plastvision 2011/plastivision-2011-6.jpg"), title: "Plastivision 2011" },
    { src: require("../assets/Plastvision 2011/plastivision-2011-7.jpg"), title: "Plastivision 2011" },
    { src: require("../assets/Plastvision 2011/plastivision-2011-8.jpg"), title: "Plastivision 2011" },
  ];
  const Cardimage5 = [
    { src: require("../assets/Plastvision 2007/cover.jpg"), title: "Plastivision 2013" },
    { src: require("../assets/Plastvision 2007/plastivision-2007-3.jpg"), title: "Plastivision 2007" },
    { src: require("../assets/Plastvision 2007/plastivision-2007-5.jpg"), title: "Plastivision 2007" },
    { src: require("../assets/Plastvision 2007/plastivision-2007-6.jpg"), title: "Plastivision 2007" },
    { src: require("../assets/Plastvision 2007/plastivision-2007-12.jpg"), title: "Plastivision 2007" },
    { src: require("../assets/Plastvision 2007/plastivision-2007-13.jpg"), title: "Plastivision 2007" },
    { src: require("../assets/Plastvision 2007/plastivision-2007-8.jpg"), title: "Plastivision 2007" },
    { src: require("../assets/Plastvision 2007/plastivision-2007-2.jpg"), title: "Plastivision 2007" },
    { src: require("../assets/Plastvision 2007/plastivision-2007-1.jpg"), title: "Plastivision 2007" },
  ];
  const Cardimage6 = [
    { src: require("../assets/Plastindia 1994/plastindia-1994-1.jpg"), title: "Plastindia 1994" },
    { src: require("../assets/Plastindia 1994/plastindia-1994-2.jpg"), title: "Plastindia 1994" },
    { src: require("../assets/Plastindia 1994/plastindia-1994-3.jpg"), title: "Plastindia 1994" },
    { src: require("../assets/Plastindia 1994/plastindia-1994-4.jpg"), title: "Plastindia 1994" },
    { src: require("../assets/Plastindia 1994/plastindia-1994-5.jpg"), title: "Plastindia 1994" },
    { src: require("../assets/Plastindia 1994/plastindia-1994-6.jpg"), title: "Plastindia 1994" },
    { src: require("../assets/Plastindia 1994/plastindia-1994-7.jpg"), title: "Plastindia 1994" },
    { src: require("../assets/Plastindia 1994/plastindia-1994-8.jpg"), title: "Plastindia 1994" },
    { src: require("../assets/Plastindia 1994/plastindia-1994-9.jpg"), title: "Plastindia 1994" },
    { src: require("../assets/Plastindia 1994/plastindia-1994-10.jpg"), title: "Plastindia 1994" },
    { src: require("../assets/Plastindia 1994/plastindia-1994-11.jpg"), title: "Plastindia 1994" },
  ];
  const Cardimage7 = [
    { src: require("../assets/Plastindia 1997/plastindia-1997-1.jpg"), title: "Plastindia 1997" },
    { src: require("../assets/Plastindia 1997/plastindia-1997-2.jpg"), title: "Plastindia 1997" },
    { src: require("../assets/Plastindia 1997/plastindia-1997-3.jpg"), title: "Plastindia 1997" },
    { src: require("../assets/Plastindia 1997/plastindia-1997-4.jpg"), title: "Plastindia 1997" },
    { src: require("../assets/Plastindia 1997/plastindia-1997-5.jpg"), title: "Plastindia 1997" },
    { src: require("../assets/Plastindia 1997/plastindia-1997-6.jpg"), title: "Plastindia 1997" },
    { src: require("../assets/Plastindia 1997/plastindia-1997-7.jpg"), title: "Plastindia 1997" },
    { src: require("../assets/Plastindia 1997/plastindia-1997-8.jpg"), title: "Plastindia 1997" },
    { src: require("../assets/Plastindia 1997/plastindia-1997-9.jpg"), title: "Plastindia 1997" },
    { src: require("../assets/Plastindia 1997/plastindia-1997-10.jpg"), title: "Plastindia 1997" },
    { src: require("../assets/Plastindia 1997/plastindia-1997-11.jpg"), title: "Plastindia 1997" },
    { src: require("../assets/Plastindia 1997/plastindia-1997-12.jpg"), title: "Plastindia 1997" },
    { src: require("../assets/Plastindia 1997/plastindia-1997-13.jpg"), title: "Plastindia 1997" },
  ];
  const Cardimage8 = [
    { src: require("../assets/Plastindia-2000/plastindia-2000-1.jpg"), title: "Plastindia 2000" },
    { src: require("../assets/Plastindia-2000/plastindia-2000-2.jpg"), title: "Plastindia 2000" },
    { src: require("../assets/Plastindia-2000/plastindia-2000-3.jpg"), title: "Plastindia 2000" },
    { src: require("../assets/Plastindia-2000/plastindia-2000-4.jpg"), title: "Plastindia 2000" },
    { src: require("../assets/Plastindia-2000/plastindia-2000-5.jpg"), title: "Plastindia 2000" },
    { src: require("../assets/Plastindia-2000/plastindia-2000-6.jpg"), title: "Plastindia 2000" },
    { src: require("../assets/Plastindia-2000/plastindia-2000-7.jpg"), title: "Plastindia 2000" },
    { src: require("../assets/Plastindia-2000/plastindia-2000-8.jpg"), title: "Plastindia 2000" },
    { src: require("../assets/Plastindia-2000/plastindia-2000-9.jpg"), title: "Plastindia 2000" },
    { src: require("../assets/Plastindia-2000/plastindia-2000-10.jpg"), title: "Plastindia 2000" },
    { src: require("../assets/Plastindia-2000/plastindia-2000-11.jpg"), title: "Plastindia 2000" },
    { src: require("../assets/Plastindia-2000/plastindia-2000-12.jpg"), title: "Plastindia 2000" },
    { src: require("../assets/Plastindia-2000/plastindia-2000-14.jpg"), title: "Plastindia 2000" },
  ];
  const Cardimage9 = [
    { src: require("../assets/Plastindia-2012/plastindia-2012-17.jpg"), title: "Plastindia 2012" },
    { src: require("../assets/Plastindia-2012/plastindia-2012-1.jpg"), title: "Plastindia 2012" },
    { src: require("../assets/Plastindia-2012/plastindia-2012-7.jpg"), title: "Plastindia 2012" },
    { src: require("../assets/Plastindia-2012/plastindia-2012-10.jpg"), title: "Plastindia 2012" },
    { src: require("../assets/Plastindia-2012/plastindia-2012-11.jpg"), title: "Plastindia 2012" },
    { src: require("../assets/Plastindia-2012/plastindia-2012-12.jpg"), title: "Plastindia 2012" },
    { src: require("../assets/Plastindia-2012/plastindia-2012-13.jpg"), title: "Plastindia 2012" },
    { src: require("../assets/Plastindia-2012/plastindia-2012-14.jpg"), title: "Plastindia 2012" },
    { src: require("../assets/Plastindia-2012/plastindia-2012-15.jpg"), title: "Plastindia 2012" },
    { src: require("../assets/Plastindia-2012/plastindia-2012-19.jpg"), title: "Plastindia 2012" },
   
  ];
  const Cardimage10 = [
    { src: require("../assets/Plastindia-2015/plastindia-2015-3.jpg"), title: "Plastindia 2015" },
    { src: require("../assets/Plastindia-2015/plastindia-2015-8.jpg"), title: "Plastindia 2015" },
    { src: require("../assets/Plastindia-2015/plastindia-2015-9.jpg"), title: "Plastindia 2015" },
    { src: require("../assets/Plastindia-2015/plastindia-2015-10.jpg"), title: "Plastindia 2015" },
    { src: require("../assets/Plastindia-2015/plastindia-2015-11.jpg"), title: "Plastindia 2015" },
    { src: require("../assets/Plastindia-2015/plastindia-2015-12.jpg"), title: "Plastindia 2015" },
    { src: require("../assets/Plastindia-2015/plastindia-2015-13.jpg"), title: "Plastindia 2015" },
    { src: require("../assets/Plastindia-2015/plastindia-2015-14.jpg"), title: "Plastindia 2015" },
    { src: require("../assets/Plastindia-2015/plastindia-2015-15.jpg"), title: "Plastindia 2015" },
    { src: require("../assets/Plastindia-2015/plastindia-2015-17.jpg"), title: "Plastindia 2015" },
   
   
  ];
  const Cardimage11 = [
    { src: require("../assets/Plastindia-2018/plastindia-2018-1.jpg"), title: "Plastindia 2018" },
    { src: require("../assets/Plastindia-2018/plastindia-2018-2.jpg"), title: "Plastindia 2018" },
    { src: require("../assets/Plastindia-2018/plastindia-2018-3.jpg"), title: "Plastindia 2018" },
    { src: require("../assets/Plastindia-2018/plastindia-2018-4.jpg"), title: "Plastindia 2018" },
    { src: require("../assets/Plastindia-2018/plastindia-2018-5.jpg"), title: "Plastindia 2018" },
    { src: require("../assets/Plastindia-2018/plastindia-2018-7.jpg"), title: "Plastindia 2018" },
    { src: require("../assets/Plastindia-2018/plastindia-2018-8.jpg"), title: "Plastindia 2018" },
    { src: require("../assets/Plastindia-2018/plastindia-2018-9.jpg"), title: "Plastindia 2018" },
    { src: require("../assets/Plastindia-2018/plastindia-2018-10.jpg"), title: "Plastindia 2018" },
    { src: require("../assets/Plastindia-2018/plastindia-2018-11.jpg"), title: "Plastindia 2018" },
    { src: require("../assets/Plastindia-2018/plastindia-2018-12.jpg"), title: "Plastindia 2018" },
    { src: require("../assets/Plastindia-2018/plastindia-2018-13.jpg"), title: "Plastindia 2018" },
   
  ];
  const Cardimage12 = [
    { src: require("../assets/Plastindia-2006/plastindia-2006-1.jpg"), title: "Plastindia 2006" },
    { src: require("../assets/Plastindia-2006/plastindia-2006-2.jpg"), title: "Plastindia 2006" },
    { src: require("../assets/Plastindia-2006/plastindia-2006-3.jpg"), title: "Plastindia 2006" },
    { src: require("../assets/Plastindia-2006/plastindia-2006-4.jpg"), title: "Plastindia 2006" },
    { src: require("../assets/Plastindia-2006/plastindia-2006-5.jpg"), title: "Plastindia 2006" },
    { src: require("../assets/Plastindia-2006/plastindia-2006-6.jpg"), title: "Plastindia 2006" },
    { src: require("../assets/Plastindia-2006/plastindia-2006-7.jpg"), title: "Plastindia 2006" },
   
  ];
  const Cardimage13 = [
    { src: require("../assets/Plastindia-2009/plastindia-2009-1.jpg"), title: "Plastindia 2009" },
    { src: require("../assets/Plastindia-2009/plastindia-2009-2.jpg"), title: "Plastindia 2009" },
    { src: require("../assets/Plastindia-2009/plastindia-2009-3.jpg"), title: "Plastindia 2009" },
    { src: require("../assets/Plastindia-2009/plastindia-2009-4.jpg"), title: "Plastindia 2009" },
    { src: require("../assets/Plastindia-2009/plastindia-2009-5.jpg"), title: "Plastindia 2009" },
    { src: require("../assets/Plastindia-2009/plastindia-2009-6.jpg"), title: "Plastindia 2009" },
    { src: require("../assets/Plastindia-2009/plastindia-2009-7.jpg"), title: "Plastindia 2009" },
    { src: require("../assets/Plastindia-2009/plastindia-2009-12.jpg"), title: "Plastindia 2009" },
    { src: require("../assets/Plastindia-2009/plastindia-2009-14.jpg"), title: "Plastindia 2009" },
    { src: require("../assets/Plastindia-2009/plastindia-2009-15.jpg"), title: "Plastindia 2009" },
  
   
  ];
  const Cardimage14 = [
    { src: require("../assets/K-2007/k-2007-1.jpg"), title: "K-GERMANY 2007" },
    { src: require("../assets/K-2007/k-2007-2.jpg"), title: "K-GERMANY 2007" },
    { src: require("../assets/K-2007/k-2007-3.jpg"), title: "K-GERMANY 2007" },
    { src: require("../assets/K-2007/k-2007-4.jpg"), title: "K-GERMANY 2007" },
    { src: require("../assets/K-2007/k-2007-5.jpg"), title: "K-GERMANY 2007" },
  ];
  const Cardimage15 = [
    { src: require("../assets/K-2016/k-2016-1.jpg"), title: "K-GERMANY 2016" },
    { src: require("../assets/K-2016/k-2016-2.jpg"), title: "K-GERMANY 2016" },
    { src: require("../assets/K-2016/k-2016-3.jpg"), title: "K-GERMANY 2016" },
    { src: require("../assets/K-2016/k-2016-4.jpg"), title: "K-GERMANY 2016" },
    { src: require("../assets/K-2016/k-2016-5.jpg"), title: "K-GERMANY 2016" },
    { src: require("../assets/K-2016/k-2016-6.jpg"), title: "K-GERMANY 2016" },
  ];
  const Cardimage16 = [
    { src: require("../assets/K-2019/k-2019-1.jpg"), title: "K-GERMANY 2019" },
    { src: require("../assets/K-2019/k-2019-2.jpg"), title: "K-GERMANY 2019" },
  ];
  const Cardimage2022 = [
    { src: require("../assets/K-2022/K-1.jpg"), title: "K-GERMANY 2022" },
    { src: require("../assets/K-2022/K-2.jpg"), title: "K-GERMANY 2022" },
    { src: require("../assets/K-2022/K-3.jpg"), title: "K-GERMANY 2022" },
    { src: require("../assets/K-2022/K-4.jpg"), title: "K-GERMANY 2022" },
    { src: require("../assets/K-2022/K-5.jpg"), title: "K-GERMANY 2022" },
    { src: require("../assets/K-2022/K-6.jpg"), title: "K-GERMANY 2022" },
    { src: require("../assets/K-2022/K-7.jpg"), title: "K-GERMANY 2022" },
    { src: require("../assets/K-2022/K-8.jpg"), title: "K-GERMANY 2022" },
    { src: require("../assets/K-2022/K-9.jpg"), title: "K-GERMANY 2022" },

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
      {/* <div className="imageContainer">
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
      </div> */}

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
         <p style={{fontSize:'26px',color:'red',paddingTop:'30px'}}>EXHIBITIONS</p>
         <p style={{fontSize:'42px'}}>INDIAPLAST</p>
  </div>
      
  <Cardflip1
        cardInfo="Click to explore INDIAPLAST-2019"
        cardTitle="INDIAPLAST-2019"
        thumbnailImage={require("../assets/India Plast 2019/indiaplast-2019-2.jpg")}
        galleryImages={Cardimage1}
        
      />
      <div className="card-header">
         <p style={{fontSize:'26px',color:'red',paddingTop:'30px'}}>EXHIBITIONS</p>
         <p style={{fontSize:'42px'}}>PLASTVISION</p>
  </div>
      <div className="card-wrapper" >
     
      <Cardflip1
        cardInfo="Click to explore Plastivision 2017"
        cardTitle="Plastivision 2017"
        thumbnailImage={require("../assets/Plastvision 2017/plastivision-2017-11.jpg")}
        galleryImages={Cardimage2}
      />
      <Cardflip1
        cardInfo="Click to explore Plastivision 2013"
        cardTitle="Plastivision 2013"
        thumbnailImage={require("../assets/Plastvision 2013/plastivision-2013-2.jpg")}
        galleryImages={Cardimage3}
      />
      <Cardflip1
        cardInfo="Click to explore Plastivision 2011"
        cardTitle="Plastivision 2011"
        thumbnailImage={require("../assets/Plastvision 2011/plastivision-2011-2.jpg")}
        galleryImages={Cardimage4}
      />
      <Cardflip1
        cardInfo="Click to explore Plastivision 2007"
        cardTitle="Plastivision 2007"
        thumbnailImage={require("../assets/Plastvision 2007/plastivision-2007-14.jpg")}
        galleryImages={Cardimage5}
      />
      </div>
      <div className="card-header">
         <p style={{fontSize:'26px',color:'red',paddingTop:'30px'}}>EXHIBITIONS</p>
         <p style={{fontSize:'42px'}}>PLASTINDIA</p>
  </div>
      <div className="card-wrapper" >
     
    
    
      <Cardflip1
      cardInfo="Click to explore PlastIndia 2018"
      cardTitle="PlastIndia 2018"
      thumbnailImage={require("../assets/Plastindia-2018/plastindia-2018-6.jpg")}
      galleryImages={Cardimage11}/>
      
     
      <Cardflip1
      cardInfo="Click to explore PlastIndia 2015"
      cardTitle="PlastIndia 2015"
      thumbnailImage={require("../assets/Plastindia-2015/plastindia-2015-19.jpg")}
      galleryImages={Cardimage10}/>
      
      <Cardflip1
      cardInfo="Click to explore PlastIndia 2012"
      cardTitle="PlastIndia 2012"
      thumbnailImage={require("../assets/Plastindia-2012/plastindia-2012-11.jpg")}
      galleryImages={Cardimage9}/>

        
        <Cardflip1
        cardInfo="Click to explore PlastIndia 2009"
        cardTitle="PlastIndia 2009"
        thumbnailImage={require("../assets/Plastindia-2009/plastindia-2009-9.jpg")}
        galleryImages={Cardimage13}/>
      <Cardflip1
        cardInfo="Click to explore PlastIndia 2006"
        cardTitle="PlastIndia 2006"
        thumbnailImage={require("../assets/Plastindia-2006/Cover.jpg")}
        galleryImages={Cardimage12}/>
        <Cardflip1
      cardInfo="Click to explore PlastIndia 2000"
      cardTitle="PlastIndia 2000"
      thumbnailImage={require("../assets/Plastindia-2000/plastindia-2000-13.jpg")}
      galleryImages={Cardimage8}/>
        <Cardflip1
      cardInfo="Click to explore PlastIndia 1997"
      cardTitle="PlastIndia 1997"
      thumbnailImage={require("../assets/Plastindia 1997/cover.jpg")}
      galleryImages={Cardimage7}/>
      
      <Cardflip1 cardInfo="Click to explore PlastIndia 1994"
        cardTitle="PlastIndia 1994"
        thumbnailImage={require("../assets/Plastindia 1994/plastindia-1994-1.jpg")}
        galleryImages={Cardimage6}/>
        
     
      </div>
      <div className="card-header">
         <p style={{fontSize:'26px',color:'red',paddingTop:'30px'}}>EXHIBITIONS</p>
         <p style={{fontSize:'42px'}}>K-GERMANY</p>
  </div>
      <div className="card-wrapper" >
     
     
      <Cardflip1
       cardInfo="Click to explore K-GERMANY 2022"
       cardTitle="K-GERMANY 2022"
       thumbnailImage={require("../assets/K-2022/K-cover.jpg")}
       galleryImages={Cardimage2022}/>
      <Cardflip1
       cardInfo="Click to explore K-GERMANY 2019"
       cardTitle="K-GERMANY 2019"
       thumbnailImage={require("../assets/K-2019/k-2019-1.jpg")}
       galleryImages={Cardimage16}/>
      <Cardflip1
      cardInfo="Click to explore K-GERMANY 2016"
      cardTitle="K-GERMANY 2016"
      thumbnailImage={require("../assets/K-2016/k-2016-2.jpg")}
      galleryImages={Cardimage15}/>
      <Cardflip1
      cardInfo="Click to explore K-GERMANY 2007"
      cardTitle="K-GERMANY 2007"
      thumbnailImage={require("../assets/K-2007/k-2007-2.jpg")}
      galleryImages={Cardimage14}/>
      
      </div>
    </div>
    
  );
};

export default EXHIBITION;
