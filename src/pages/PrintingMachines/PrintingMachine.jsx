import React, { useState } from 'react';
import { Navigation, ProductImage, SpecsTable, Applications, ApplicationsSlideshow, ProductWithDownloadCatalogue } from '../../Components/ProductFormat/ReusableComponents';
import '../PrintingMachines/PrintingMachine.css'
import VedioCard from "../../Components/VedioCard";
import NewGallery from "../../Components/NewGallery"; // Changed from NewGallery to ModifiedGallery

// Import images properly from within src directory
import bag1 from '../../assets/printing-1.jpg';
import bag2 from '../../assets/printing-2.jpg';
import bag3 from '../../assets/printing-3.jpg';
import bag4 from '../../assets/printing-4.jpg';
const PrintingMachine = () => {
    const [activeTab, setActiveTab] = useState('Product');
    
        // Tab-specific content
        const tabContent = {
          'Product': {
            image: require("../PrintingMachines/Assets/4.jpg"),
            description: '',
            tableHeaders: ['Technical Specifications','','',''],
            tableRows: [
              ['Model', '4 Colour','6 Colour','8 Colour'],
              ['Print Width', '760 mm', '760 mm', '760 mm'],
              ['Print Possibility', '4+0 | 3+0 | 1+0 | 3+1 | 2+2 | 2+1 | 1+1 ', '6+0 | 5+0 | 4+0 | 3+0 | 2+0 | 1+0 | 5+1 | 4+2 | 3+3','| 8+0 | 6+2 | 4+4 |'],
              ['Line Speed (MPM)', '80 to 90', '80 to 90', '80 to 90'],
              ['Repeat Print Length', '508 mm to 1307 mm', '508 mm to 1307 mm','508 mm to 1307 mm'],
            ],
            slideshowImages: [require("../PrintingMachines/Assets/13.jpg"), require("../PrintingMachines/Assets/14.jpg")],
            applicationPoints: ['Cement Bags: Printing logos, product details, and branding on woven polypropylene cement sacks.' ,
    'Fertilizer Bags: Custom designs and instructions printed on woven sacks for fertilizers.',
    'Grain Bags: Printing product names and storage instructions on woven sacks for grains'],
            catalogue: '/path-to-tab1-catalogue.pdf',
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
            
        const currentContent = tabContent[activeTab];
    return(
<div>

<div className="imageContainer1">
        <img
          className="ExportSection"
          alt="ExportSection"
          src={require('./Assets/bannermain.jpg')}
        />
        <div >
        <div className="product-layout">
      <div className="image-section">
        <img 
          src={require('./Assets/leftbanner.jpg')} 
          alt="Jaiko Industries Machine" 
          className="product-imagePM"
        />
      </div>
      
      <div className="content-section">
        <div className="description">
          <p>
          High speed, PLC base 4/6/8 color flexo printing machine for Woven Sack having inline Corona Treatment, micro perforation, twist gusseting, cutting/winding system, for HDPE / PP laminated and un-laminated woven fabrics.

            <br></br>
            <br></br>
            Specially designed Micrometric adjustment system provided at each Printing Station to have fine pressure from Anilox Roll to Printing Drum and from Printing Drum to the final product (Fabric). This will improve the better sharpness of Printing.

          
            <br></br>
            <br></br>
            Individual Gearbox system consists of hardened and ground oil dipped gears with the inbuilt planetary arrangement at each printing station. This increases the sturdiness of the machine which reduces maintenance and downtime.
            <br></br>
            <br></br>
            Easy changeover for a change of direction of printing with the help of same gearbox system is also incorporated
          </p>
        </div>
      </div>
    </div>


        </div>
      </div>
           {/* First Image and Title */}
      <div className="imageContainer1">
        <img
          className="ExportSection"
          alt="ExportSection"
          src={require('./Assets/banner.jpg')}
        />
      </div>
 <Navigation
          tabs={Object.keys(tabContent)}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
          <ProductWithDownloadCatalogue 
         image={currentContent.image}
        description={currentContent.description}
        tabId={activeTab}
        tabContent={tabContent}
      />
        <SpecsTable
          headers={currentContent.tableHeaders}
          rows={currentContent.tableRows}
        />
        <Applications
          title={`Applications for ${activeTab}`}
          images={currentContent.slideshowImages}
          points={currentContent.applicationPoints}
        />

<div className="card-header">
       
       <p style={{fontSize:'42px',color:'black'}}>Videos</p>
</div>

<div className="card-wrapper3">
      <VedioCard
    videoTitle="JP FLEX – DEMO FILM"
    videoThumbnail={require("../PrintingMachines/Assets/PM.jpg")}
    videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
  />
    <VedioCard
        videoTitle="6 COLOUR ONLINE FLEXO PRINTING FOR WOVEN SACK"
    videoThumbnail={require("../PrintingMachines/Assets/PM2.jpg")}
    videoUrl="https://youtu.be/3qPc2eCi_lg?list=TLGGPacicNLv7CEwNjAxMjAyNQ"
  />
      
      </div>
           {/* Add the ModifiedGallery component here */}
           
      <NewGallery
        galleryTitle="FLEXOGRAPHIC PRINTING MACHINE GALLERY"
        images={galleryImages} 
      />
</div>
    )
}
export default PrintingMachine;