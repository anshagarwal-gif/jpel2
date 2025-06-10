import React, { useState } from 'react';
import { Navigation, SpecsTable, Applications, ProductWithDownloadCatalogue } from '../../Components/ProductFormat/ReusableComponents';
import "../TapeExtrusion/TapeExtrusion.css";
import PhotoGallery from '../../Components/PhotoGallery/PhotoGallery';
import banner from "../TapeExtrusion/Assets/banner2.jpg";
import im from "../TapeExtrusion/Assets/4.jpg";
import VedioCard from "../../Components/VedioCard";
import NewGallery from "../../Components/NewGallery"; // Changed from NewGallery to ModifiedGallery

// Import images properly from within src directory
import bag1 from '../../assets/tape-1.jpg';
import bag2 from '../../assets/tape-2.jpg';
import bag3 from '../../assets/tape-3.jpg';
import bag4 from '../../assets/tape-4.jpg';

const TapeExtrusion = () => {
    const [activeTab, setActiveTab] = useState('Tab 1');
    const machineimages = [
      banner, banner, banner, banner
    ];
    
    // Tab-specific content
    const tabContent = {
      'Tab 1': {
        image: im,
        description: "Note:-  The picture may show optional equipment's that are not part of the standard supply. For detail, refer to the quotation.",
        tableHeaders: ['Technical Specifications', 'Model (LS)', 'Model (HS)'],
        tableRows: [
          ['Melt Capacity (Kg/Hr.) - PP', '130 to 600 Kg/Hr*', '430 to 900 Kg/Hr*'],
          ['Mechanical Line Speed', 'upto 400 m/min*', 'upto 500 m/min*'],
        ],
        slideshowImages: ['/tab1-slide1.jpg', '/tab1-slide2.jpg'],
        applicationPoints: ['Point 1 for Tab 1', 'Point 2 for Tab 1', 'Point 3 for Tab 1'],
        catalogue: '/assets/catalogues/tape-extrusion-catalogue.pdf',
      }
    };

    const galleryImages = [
                                {
                                  id: 1,
                                  src: bag1,
                                  alt: "",
                              
                                },
                                {
                                  id: 2,
                                  src: bag2,
                                  alt: "",
                               
                                },
                                {
                                  id: 3,
                                  src: bag3,
                                  alt: "",
                                  
                                },
                                {
                                  id: 4,
                                  src: bag4,
                                  alt: "",
                                 
                                }
                              ];
  
    // Get the content for the active tab
    const currentContent = tabContent[activeTab];
  
    return (
      <div>
        {/* First Image and Title */}
        <div className="imageContainer1">
          <img
            className="ExportSection"
            alt="ExportSection"
            src={require('./Assets/banner.jpg')}
          />
          <div>
            <div className="product-layout">
              <div className="image-section">
                <img 
                  src={require('./Assets/leftbanner.jpg')} 
                  alt="Jaiko Industries Machine" 
                  className="product-image2"
                />
              </div>
              
              <div className="content-section">
                <div className="description3">
                  <p>
                    JP Group has a comprehensive range of tape extrusion lines for producing high-quality PP/HDPE tapes for a wide range of applications.
                    <br></br>
                    <br></br>
                  
                    Tape Stretching Lines available from output 150 Kg/Hr to 900 Kg/Hr capacity. 450 to 900 Kh/Hr lines having godet diameter of 450 mm and imported screw, barrel, die, melt pump options are available. Die width available (MM) 800, 900, 1000, 1100, 1300, 1400, 1500, 1600, 1750, 2200
                  
                    <br></br>
                    <br></br>
                    End applications such as – woven & leno bags, jumbo bags – i.e. Flexible Intermediate Bulk Containers (FIBCs), tarpaulins, carpet backings, geotextiles, wrapping fabrics, ropes and twines etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second Banner */}
        <div className="imageContainer1">
          <img
            className="ExportSection"
            alt="ExportSection"
            src={require('./Assets/banner2.jpg')}
          />
        </div>
        
        <Navigation
          tabs={Object.keys(tabContent)}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        {/* Use ProductWithDownloadCatalogue component */}
        <div className="product-display-container">
          <ProductWithDownloadCatalogue
            image={currentContent.image}
            description={currentContent.description}
            tabId={activeTab}
            tabContent={currentContent}
          />
        </div>
        
        <SpecsTable
          headers={currentContent.tableHeaders}
          rows={currentContent.tableRows}
        />
        
        <p className='description2'>*depending on machine models and specifications</p>

        <div className="card-header">
          <p style={{fontSize:'42px',color:'black'}}>Videos</p>
        </div>
        
        <div className="card-wrapper3">
          <VedioCard
            videoTitle="TAPE STRETCHING LINE – DEMO FILM"
            videoThumbnail={require("../TapeExtrusion/Assets/TapeV.jpg")}
            videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
          />
          <VedioCard
            videoTitle="TRUNKEY WOVEN SACK PROJECTS"
            videoThumbnail={require("../TapeExtrusion/Assets/TapeV2.jpg")}
            videoUrl="https://youtu.be/3qPc2eCi_lg?list=TLGGPacicNLv7CEwNjAxMjAyNQ"
          />
        </div>

        <div className="card-wrapper3">
          <VedioCard
            videoTitle="WOVEN SACK PROJECTS (WHITE TAPE)"
            videoThumbnail={require("../TapeExtrusion/Assets/TapeV3.jpg")}
            videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
          />
          <VedioCard
            videoTitle="WOVEN SACK PROJECTS (NATURAL TAPE)"
            videoThumbnail={require("../TapeExtrusion/Assets/TapeV4.jpg")}
            videoUrl="https://youtu.be/3qPc2eCi_lg?list=TLGGPacicNLv7CEwNjAxMjAyNQ"
          />
        </div>
           {/* Add the ModifiedGallery component here */}
      <NewGallery
        galleryTitle="GALLERY" 
        images={galleryImages} 
      />
      </div>
    );
};

export default TapeExtrusion;