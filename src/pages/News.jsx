import React from "react";
import Cardflip1 from "../Components/Cardflip1";
import VedioCard from "../Components/VedioCard";
import NCardflip from "../Components/NCardflip";
import MagazineLayout from "../Components/MazineLayout";

const News = () => {
    const Cardimage1 = [
        { src: require("../assets/Exhibition.png"), title: "INDIAPLAST-2019" },
        { src: require("../assets/Exhibition2.png"), title: "EXPO-2020" },
        { src: require("../assets/Exhibition2.png"), title: "TRADE-2021" },
        { src: require("../assets/Exhibition2.png"), title: "CONFERENCE-2022" },
      ];
    
    return (
        <div>
<div className="imageContainer1">
        <img
          className="ExportSection"
          alt="ExportSection"
          src={require('../assets/Newstop.png')}
        />
      </div>
      <div className="card-wrapper" >
     <div className="card-wrapper2">
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
     
      </div>
      <div className="card-header">
         <p style={{fontSize:'22px',color:'red',paddingTop:'30px'}}>J P Extrusiontech (Pvt) Ltd.</p>
         <p style={{fontSize:'42px'}}>Videos</p>
  </div>
      <div className="card-wrapper3">
      <VedioCard
    videoTitle="IndiaPlast 28 Feb - 4 Mar 2019 - Short Film"
    videoThumbnail={require("../assets/Exhibition.png")}
    videoUrl="https://www.youtube.com/watch?v=Mc2PalgMmIU"
  />
    <VedioCard
    videoTitle="JP Group – Corporate Film"
    videoThumbnail={require("../assets/Exhibition.png")}
    videoUrl="https://www.youtube.com/watch?v=Mc2PalgMmIU"
  />
      
      </div>
      <div className="card-wrapper3">
      <VedioCard
    videoTitle="Interview with Ms Nidhi Verma"
    videoThumbnail={require("../assets/Exhibition.png")}
    videoUrl="https://www.youtube.com/watch?v=Mc2PalgMmIU"
  />
    <VedioCard
    videoTitle="Turnkey Project For PP/HDPE Woven Sack (Short Film)"
    videoThumbnail={require("../assets/Exhibition.png")}
    videoUrl="https://www.youtube.com/watch?v=Mc2PalgMmIU"
  />
      
      </div>
      <div className="card-wrapper3">
      <VedioCard
    videoTitle="Demo – Tape Stretching Line and Circuler Loom For PP/HDPE Woven Sack"
    videoThumbnail={require("../assets/Exhibition.png")}
    videoUrl="https://www.youtube.com/watch?v=Mc2PalgMmIU"
  />
    <VedioCard
    videoTitle="Indiaplast-2019 Exhibition Short Film"
    videoThumbnail={require("../assets/Exhibition.png")}
    videoUrl="https://www.youtube.com/watch?v=Mc2PalgMmIU"
  />
      
      </div>
      <div className="card-wrapper3">
      <VedioCard
    videoTitle="Feiplastic 2019 – JP Group & Tabatex Exhibition Short Film"
    videoThumbnail={require("../assets/Exhibition.png")}
    videoUrl="https://www.youtube.com/watch?v=Mc2PalgMmIU"
  />
    <VedioCard
    videoTitle="Plastindia – 2015 – Short Film"
    videoThumbnail={require("../assets/Exhibition.png")}
    videoUrl="https://www.youtube.com/watch?v=Mc2PalgMmIU"
  />
      
      </div>
      <div className="card-wrapper">
        <NCardflip
        frontImage={require("../assets/Exhibition.png")}
         backText="Mr. P. K. Patkar – Technical Head of J P EXTRUSIONTECH (PVT) LIMITED with Shri Salman Khurshid – The Corporate Affairs Minister, Govt. of India at All India Flat Tape Manufacturers Association, 34th AGM – Jaipur on 31st October, 2009"
        />
         <NCardflip
        frontImage={require("../assets/Exhibition.png")}
         backText="Mr. P. K. Patkar of J P EXTRUSIONTECH (PVT) LIMITED with Mr. Kamal Nanavati - Reliance Industries Ltd. during Award Presentation Ceremoney PLASTICON AWARDS – Recycling Technology, PLASTINDIA 2009 – Delhi"
        />
      </div>
      <div>
      <MagazineLayout/>

      </div>






      <div className="card-header">
         <p style={{fontSize:'42px',color:'red',paddingTop:'37px'}}>EVENTS</p>
  </div>
      <div className="card-wrapper" >
     <Cardflip1
        cardInfo="INTERNATIONAL WOMEN'S DAY -2022"
        cardTitle=""
        thumbnailImage={require("../assets/Exhibition.png")}
        galleryImages={Cardimage1}
      />
      <Cardflip1
        cardInfo="Blood Donation Camp – 2019"
        cardTitle=""
        thumbnailImage={require("../assets/Exhibition.png")}
        galleryImages={Cardimage1}
      />
       <Cardflip1
        cardInfo="Blood Donation Camp – 2018"
        cardTitle=""
        thumbnailImage={require("../assets/Exhibition.png")}
        galleryImages={Cardimage1}
      />
      <Cardflip1
        cardInfo="International Yoga Day - 2018"
        cardTitle=""
        thumbnailImage={require("../assets/Exhibition.png")}
        galleryImages={Cardimage1}
      />
      
     
      </div>
        </div>
    )
}
export default News;
