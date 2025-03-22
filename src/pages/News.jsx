import React from "react";
import Cardflip1 from "../Components/Cardflip1";
import VedioCard from "../Components/VedioCard";
import NCardflip from "../Components/NCardflip";
import MagazineLayout from "../Components/MazineLayout";

const News = () => {
    const Cardimage1 = [
        { src: require("../assets/international women_s day-2022/international-womens-day-2022-1.jpg"), title: "NTERNATIONAL WOMEN'S DAY-2022" },
        { src: require("../assets/international women_s day-2022/international-womens-day-2022-2.jpg"), title: "NTERNATIONAL WOMEN'S DAY-2022" },
        { src: require("../assets/international women_s day-2022/international-womens-day-2022-3.jpg"), title: "NTERNATIONAL WOMEN'S DAY-2022" },
        { src: require("../assets/international women_s day-2022/international-womens-day-2022-4.jpg"), title: "NTERNATIONAL WOMEN'S DAY-2022" },
        { src: require("../assets/international women_s day-2022/international-womens-day-2022-5.jpg"), title: "NTERNATIONAL WOMEN'S DAY-2022" },
      ];
      const Cardimage2 = [
        { src: require("../assets/Blood-donation camp-2019/blood-donation-camp-2019-1.jpg"), title: "Blood Donation Camp – 2019" },
        { src: require("../assets/Blood-donation camp-2019/blood-donation-camp-2019-4.jpg"), title: "Blood Donation Camp – 2019" },
        { src: require("../assets/Blood-donation camp-2019/blood-donation-camp-2019-5.jpg"), title: "Blood Donation Camp – 2019" },
        { src: require("../assets/Blood-donation camp-2019/blood-donation-camp-2019-6.jpg"), title: "Blood Donation Camp – 2019" },
        { src: require("../assets/Blood-donation camp-2019/blood-donation-camp-2019-8.jpg"), title: "Blood Donation Camp – 2019" },
        { src: require("../assets/Blood-donation camp-2019/blood-donation-camp-2019-16.jpg"), title: "Blood Donation Camp – 2019" },
        { src: require("../assets/Blood-donation camp-2019/blood-donation-camp-2019-17.jpg"), title: "Blood Donation Camp – 2019" },
        { src: require("../assets/Blood-donation camp-2019/blood-donation-camp-2019-29.jpg"), title: "Blood Donation Camp – 2019" },
        { src: require("../assets/Blood-donation camp-2019/blood-donation-camp-2019-31.jpg"), title: "Blood Donation Camp – 2019" },
        { src: require("../assets/Blood-donation camp-2019/blood-donation-camp-2019-34.jpg"), title: "Blood Donation Camp – 2019" },
        { src: require("../assets/Blood-donation camp-2019/blood-donation-camp-2019-20.jpg"), title: "Blood Donation Camp – 2019" },
        { src: require("../assets/Blood-donation camp-2019/blood-donation-camp-2019-39.jpg"), title: "Blood Donation Camp – 2019" },
        { src: require("../assets/Blood-donation camp-2019/blood-donation-camp-2019-40.jpg"), title: "Blood Donation Camp – 2019" },
        { src: require("../assets/Blood-donation camp-2019/blood-donation-camp-2019-13.jpg"), title: "Blood Donation Camp – 2019" },
        { src: require("../assets/Blood-donation camp-2019/blood-donation-camp-2019-14.jpg"), title: "Blood Donation Camp – 2019" },
      ];
      const Cardimage3 = [
        { src: require("../assets/Blood donation camp - 2018/blood-donation-camp-2018-2.jpg"), title: "Blood Donation Camp – 2018" },
        { src: require("../assets/Blood donation camp - 2018/blood-donation-camp-2018-3.jpg"), title: "Blood Donation Camp – 2018" },
        { src: require("../assets/Blood donation camp - 2018/blood-donation-camp-2018-4.jpg"), title: "Blood Donation Camp – 2018" },
        { src: require("../assets/Blood donation camp - 2018/blood-donation-camp-2018-5.jpg"), title: "Blood Donation Camp – 2018" },
        { src: require("../assets/Blood donation camp - 2018/blood-donation-camp-2018-6.jpg"), title: "Blood Donation Camp – 2018" },
        { src: require("../assets/Blood donation camp - 2018/blood-donation-camp-2018-7.jpg"), title: "Blood Donation Camp – 2018" },
        { src: require("../assets/Blood donation camp - 2018/blood-donation-camp-2018-8.jpg"), title: "Blood Donation Camp – 2018" },
        { src: require("../assets/Blood donation camp - 2018/blood-donation-camp-2018-9.jpg"), title: "Blood Donation Camp – 2018" },
        { src: require("../assets/Blood donation camp - 2018/blood-donation-camp-2018-10.jpg"), title: "Blood Donation Camp – 2018" },
        { src: require("../assets/Blood donation camp - 2018/blood-donation-camp-2018-11.jpg"), title: "Blood Donation Camp – 2018" },
        { src: require("../assets/Blood donation camp - 2018/blood-donation-camp-2018-12.jpg"), title: "Blood Donation Camp – 2018" },
        { src: require("../assets/Blood donation camp - 2018/blood-donation-camp-2018-13.jpg"), title: "Blood Donation Camp – 2018" },
        { src: require("../assets/Blood donation camp - 2018/blood-donation-camp-2018-14.jpg"), title: "Blood Donation Camp – 2018" },
        { src: require("../assets/Blood donation camp - 2018/blood-donation-camp-2018-15.jpg"), title: "Blood Donation Camp – 2018" },
   
      ];
      const Cardimage4 = [
        { src: require("../assets/International yoga day-2018/international-day-of-yoga-2018-1.jpg"), title: "International Yoga Day - 2018" },
        { src: require("../assets/International yoga day-2018/international-day-of-yoga-2018-2.jpg"), title: "International Yoga Day - 2018" },
        { src: require("../assets/International yoga day-2018/international-day-of-yoga-2018-3.jpg"), title: "International Yoga Day - 2018" },
        { src: require("../assets/International yoga day-2018/international-day-of-yoga-2018-4.jpg"), title: "International Yoga Day - 2018" },
      
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
        cardInfo="Best Brand 2021 Award from The Economic Times"
        cardTitle="Award from The Economic Times"
        thumbnailImage={require("../assets/newevent1.jpg")}
        galleryImages={Cardimage1}
      />
      <Cardflip1
        cardInfo="Best Brand 2019 Award from The Economic Times"
        cardTitle="Award from The Economic Times"
        thumbnailImage={require("../assets/newevent2.jpg")}
        galleryImages={Cardimage1}
      />
      
      </div>
     
      </div>
      <div className="card-header">
         <p style={{fontSize:'26px',color:'red',paddingTop:'30px'}}>J P Extrusiontech (Pvt) Ltd.</p>
         <p style={{fontSize:'42px'}}>Videos</p>
  </div>
      <div className="card-wrapper3">
      <VedioCard
    videoTitle="INDIAPLAST 28 FEB - 4 MAR 2019 - SHORT FILM"
    videoThumbnail={require("../assets/newevent3.jpg")}
    videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
  />
    <VedioCard
    videoTitle="JP GROUP – CORPORATE FILM"
    videoThumbnail={require("../assets/newevent4.jpg")}
    videoUrl="https://youtu.be/3qPc2eCi_lg?list=TLGGPacicNLv7CEwNjAxMjAyNQ"
  />
      
      </div>
      <div className="card-wrapper3">
      <VedioCard
    videoTitle="INTERVIEW WITH MS NIDHI VERMA"
    videoThumbnail={require("../assets/newevent4.jpg")}
    videoUrl="https://youtu.be/hU2Q4lkEjJo?list=TLGGwqi7XdWaor4wNjAxMjAyNQ"
  />
    <VedioCard
    videoTitle="TURNKEY PROJECT FOR PP/HDPE WOVEN SACK (SHORT FILM)"
    videoThumbnail={require("../assets/newevent4.jpg")}
    videoUrl="https://youtu.be/oiwEg7OB7cA?list=TLGG_E8tFXQFMRowNjAxMjAyNQ"
  />
      
      </div>
      <div className="card-wrapper3">
      <VedioCard
    videoTitle="DEMO – TAPE STRETCHING LINE AND CIRCULER LOOM FOR PP/HDPE WOVEN SACK"
    videoThumbnail={require("../assets/newevent4.jpg")}
    videoUrl="https://www.youtube.com/watch?v=dKCUuXxLUQc&list=TLGGTXeUEHHl_6owNjAxMjAyNQ"
  />
    <VedioCard
    videoTitle="INDIAPLAST-2019 EXHIBITION SHORT FILM"
    videoThumbnail={require("../assets/newevent4.jpg")}
    videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
  />
      
      </div>
      <div className="card-wrapper3">
      <VedioCard
    videoTitle="FEIPLASTIC 2019 – JP GROUP & TABATEX EXHIBITION SHORT FILM"
    videoThumbnail={require("../assets/newevent4.jpg")}
    videoUrl="https://youtu.be/B0b4gO-Ly8k?list=TLGGyPkgSrnvw_swNjAxMjAyNQ"
  />
    <VedioCard
    videoTitle="PLASTINDIA – 2015 – SHORT FILM"
    videoThumbnail={require("../assets/newevent4.jpg")}
    videoUrl="https://youtu.be/5RrHCT24aiU?list=TLGGDQuz2LuqKncwNjAxMjAyNQ"
  />
      
      </div>
      <div className="card-wrapper">
        <NCardflip
        frontImage={require("../assets/newevent6.jpg")}
         backText="Mr. P. K. Patkar – Technical Head of J P EXTRUSIONTECH (PVT) LIMITED with Shri Salman Khurshid – The Corporate Affairs Minister, Govt. of India at All India Flat Tape Manufacturers Association, 34th AGM – Jaipur on 31st October, 2009"
        />
         <NCardflip
        frontImage={require("../assets/newevent5.jpg")}
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
        cardInfo="INTERNATIONAL WOMEN'S DAY-2022"
        cardTitle=""
        thumbnailImage={require("../assets/international women_s day-2022/international-womens-day-2022-1.jpg")}
        galleryImages={Cardimage1}
      />
      <Cardflip1
        cardInfo="Blood Donation Camp – 2019"
        cardTitle=""
        thumbnailImage={require("../assets/Blood-donation camp-2019/cover.jpg")}
        galleryImages={Cardimage2}
      />
       <Cardflip1
        cardInfo="Blood Donation Camp – 2018"
        cardTitle=""
        thumbnailImage={require("../assets/Blood donation camp - 2018/blood-donation-camp-2018-1.jpg")}
        galleryImages={Cardimage3}
      />
      <Cardflip1
        cardInfo="International Yoga Day - 2018"
        cardTitle=""
        thumbnailImage={require("../assets/International yoga day-2018/international-day-of-yoga-2018-1.jpg")}
        galleryImages={Cardimage4}
      />
      
     
      </div>
        </div>
    )
}
export default News;
