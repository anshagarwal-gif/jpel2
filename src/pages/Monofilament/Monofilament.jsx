import React, { useState } from 'react';
import { Navigation, ProductImage, SpecsTable, Applications, ApplicationsSlideshow, ProductWithDownloadCatalogue } from '../../Components/ProductFormat/ReusableComponents';
import "../Monofilament/Monofilament.css"
import VedioCard from "../../Components/VedioCard";
import NewGallery from "../../Components/NewGallery"; // Changed from NewGallery to ModifiedGallery

// Import images properly from within src directory
import bag1 from '../../assets/mono-1.jpg';
import bag2 from '../../assets/mono-2.jpg';
import bag3 from '../../assets/mono-3.jpg';
import bag4 from '../../assets/mono-4.jpg';

const Monofilament = () => {
    const [activeTab, setActiveTab] = useState('Product');
    
        // Tab-specific content
        const tabContent = {
          'Product': {
            image: require("../Monofilament/Assets/tab.jpg"),
            description: 'Note:-The picture may show optional equipment’s that are not part of the standard supply. For details , refer to the quotation.',
            tableHeaders: ['Technical Specifications','JP 70 MONO','JP 80 MONO','JP 90 MONO'],
            tableRows: [
              ['Max. Output - PP (Kgs/Hr)' ,'150','200','250'],
              ['Max. Output - HDPE (Kgs/Hr)','135','180','200'],
              ['Godet width (mm)', '800','1100','1200'],
            ],
            slideshowImages: [require("../Monofilament/Assets/app.jpg"),require("../Monofilament/Assets/app1.jpg")],
            applicationPoints: ['Durable Ropes & Twines: Strong and versatile for industrial and household use.',
'Flexible Toothbrush Bristles: Ideal for effective and gentle oral care.',
'Strong Fishing Nets: High tensile strength for professional fishing needs.',
'Protective Mosquito Nets: Lightweight and long-lasting insect protection.',
'Lifelike Doll & Wig Hair: Perfect for realistic appearances and styling.'],
            catalogue: '/path-to-tab1-catalogue.pdf',
          }
        };
        const currentContent = tabContent[activeTab];

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
        
    return(
<div>

<div className="imageContainer1">
        <img
          className="ExportSection"
          alt="ExportSection"
          src={require('./Assets/bannermain.jpg')}
        />
        <div >
        <div className="product-layoutFila">
      <div className="image-sectionFila">
        <img 
          src={require('./Assets/leftbanner.jpg')} 
          alt="Jaiko Industries Machine" 
          className="product-imageFilaMO"
        />
      </div>
      
      <div className="content-sectionFila">
        <div className="descriptionFila">
          <p>
          JP Group takes pride in offering a diverse range of highly efficient Monofilament Line Machines designed to produce HDPE, PP, and Nylon monofilaments with exceptional quality and performance. These machines are crafted with advanced engineering to cater to industries requiring precision, durability, and efficiency in monofilament production.
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
    videoTitle="MONOFILAMENT LINE ( JP 90 MONO )"
    videoThumbnail={require("../BatteryBox/Assets/BB.jpg")}
    videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
  />
        <VedioCard
    videoTitle="Monofilament Line - Model: JP 80 MONO"
    videoThumbnail={require("../BatteryBox/Assets/BB1.jpg")}
    videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
  />
  </div>
    {/* Add the ModifiedGallery component here */}
      <NewGallery
        galleryTitle="GALLERY" 
        images={galleryImages} 
      />
</div>
    )
}
export default Monofilament;