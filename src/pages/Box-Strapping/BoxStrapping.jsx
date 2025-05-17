import React, { useState } from 'react';
import { Navigation, ProductImage, SpecsTable, Applications, ApplicationsSlideshow, ProductWithDownloadCatalogue } from '../../Components/ProductFormat/ReusableComponents';
import "../Box-Strapping/BoxStrapping.css"
import VedioCard from "../../Components/VedioCard";
import NewGallery from "../../Components/NewGallery"; // Changed from NewGallery to ModifiedGallery

// Import images properly from within src directory
import bag1 from '../../assets/box1.jpg';
import bag2 from '../../assets/box2.jpg';
import bag3 from '../../assets/box3.jpg';
import bag4 from '../../assets/box4.jpg';

const BoxStrapping = () => {
    const [activeTab, setActiveTab] = useState('Product');
    
        // Tab-specific content
        const tabContent = {
          'Product': {
            image: require("../Box-Strapping/Assets/tab.jpg"),
            description: 'Note:-The picture may show optional equipment’s that are not part of the standard supply. For detail, refer to the quotation.',
            tableHeaders: ['Technical Specifications','STRAPEX 70-PP','STRAPEX 80-PP','STRAPEX 80-PET','STRAPEX 100-PET'],
            tableRows: [
              ['Processing Materials', 'PP/HDPE','PP/HDPE','PET Flakes/Granules','PET Flakes/Granules'],
              ['Screw Dia. (mm)', '70','80','80','100'],
              ['No. of Straps', '2','4','2','4'],
              ['Strap Size (mm)', '9, 12, 15, 19','9, 12, 15, 19','9, 12, 15, 19 ','9, 12, 15, 19 '],
              ['Max. Output (Kg/Hr.)', '75 to 80','160 to 180','120 to 150','200 to 250'],
              ['No. of Winders', '3','5','3','5'],
            ],
            slideshowImages: [require("../Box-Strapping/Assets/app.jpg"),require("../Box-Strapping/Assets/app1.jpg")],
            applicationPoints: ['Packaging: Secure bundling for boxes and cartons.',
'Logistics: Reliable strapping during transit.',
'Construction: Bundling heavy materials like pipes and rods.',
'Agriculture: Securing bales and produce.',
'Textiles: Packaging fabric rolls and garments.'],
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
          className="product-image"
        />
      </div>
      
      <div className="content-section">
        <div className="description">
          <p>
          JPEL's PET Box Strap Line and PP Box Strap Line are designed with advanced technology to meet the high demands of packaging and industrial applications, ensuring exceptional quality and efficiency.

          
            <br></br>
            <br></br>
            Our PET Box Strap Line is tailored for producing straps from 100% PET Flakes or PET Virgin Granules, making it ideal for applications that require superior strength and durability. This line is equipped with a Dehumidified Air Dryerand Crystallizer to ensure optimal processing conditions for PET materials.
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
          src={require('./Assets/banner2.jpg')}
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
         <p className="description2">*depending on machine models and specifications</p>

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
    videoTitle="EPET Strappex - PET BOX STRAP LINE"
    videoThumbnail={require("../Box-Strapping/Assets/BX.jpg")}
    videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
  />
  </div>
     {/* Add the ModifiedGallery component here */}
      <NewGallery
        galleryTitle="BOX STRAPPING GALLERY" 
        images={galleryImages} 
      />
</div>
    )
}
export default BoxStrapping;