import React, { useState }  from "react";  
import { Navigation, SpecsTable, Applications, ProductWithDownloadCatalogue } from '../../Components/ProductFormat/ReusableComponents';
import './CircularLoom.css'
import VedioCard from "../../Components/VedioCard";
import NewGallery from "../../Components/NewGallery"; // Changed from NewGallery to ModifiedGallery

// Import images properly from within src directory
import loom1 from '../../assets/loom1.jpg';
import loom2 from '../../assets/loom2.jpg';
import loom3 from '../../assets/loom3.jpg';
import loom4 from '../../assets/loom4.jpg';

const CircularLoom = () => {
  const [activeTab, setActiveTab] = useState('4-Shuttle');
  
  // Create formatted gallery images for ModifiedGallery
  const galleryImages = [
    {
      id: 1,
      src: loom1,
      alt: "",
      description: ""
    },
    {
      id: 2,
      src: loom2,
      alt: "",
      
    },
    {
      id: 3,
      src: loom3,
      alt: "",
      
    },
    {
      id: 4,
      src: loom4,
      alt: "",
     
    }
  ];
  
  // Tab-specific content
  const tabContent = {
    '4-Shuttle': {
      image: require("../CircularLoom/Assets/4.jpg"),
      description: 'Note:-The picture may show optional equipments that are not part of the standard supply. For detail, refer to the quotation.',
      tableHeaders: ['Technical Specifications',''],
      tableRows: [
        ['Working width - Double Flat', '20 to 80 cm*'],
        ['Weft insertion rate', 'Up to 720ppm*'],
      ],
      slideshowImages: [require("../CircularLoom/Assets/1.jpg"), require("../CircularLoom/Assets/2.jpg")],
      applicationPoints: ['Engineered for producing tubular fabric with an open mesh structure.',
'Perfect solution for packing perishable fruits and vegetables.' ,
'Provides ventilation and strength to maintain the freshness of produce.',
'Designed to cater to the needs of the food and agriculture packaging sector.'],
        catalogue: '/path-to-tab1-catalogue.pdf',
      },
      '6-Shuttle': {
        image: require("../CircularLoom/Assets/5.jpg"),
        description: 'Note:-The picture may show optional equipment’s that are not part of the standard supply. For detail, refer to the quotation.',
        tableHeaders: ['Technical Specifications',''],
        tableRows: [
          ['Working width - Double Flat', '30 to 140 cm*'],
          ['Weft insertion rate', 'Up to 1200 ppm*'],
        ],
        slideshowImages: [require("../CircularLoom/Assets/3.jpg"), require("../CircularLoom/Assets/4_1.jpg")],
        applicationPoints: ['Designed for versatile applications, including the packaging of cement, fertilizers, polymer granules, chemicals, and seeds.', 'Ideal for creating jumbo bags (FIBCs), packaging fabric, and lumber wraps.* ','Suitable for storing and transporting husk, animal feed, and similar bulk materials. ','Tailored to meet the demands of industrial and agricultural packaging solutions.'],
        catalogue: '/path-to-tab1-catalogue.pdf',
        

      },
      '8-Shuttle': {
        image: require("../CircularLoom/Assets/6.jpg"),
        description: 'Note:-The picture may show optional equipment’s that are not part of the standard supply. For detail, refer to the quotation.',
        tableHeaders: ['Technical Specifications',''],
        tableRows: [
          ['Working width - Double Flat', '100 to 225 cm*'],
          ['Weft insertion rate', 'Up to 740 ppm*'],
        ],
        slideshowImages: [require("../CircularLoom/Assets/5_1.jpg"), require("../CircularLoom/Assets/6_1.jpg")],
        applicationPoints: ['Specializes in producing wide-width fabrics tailored for industrial applications.', 'Enables the creation of durable and high-quality jumbo bags (FIBCs).', 'Designed for manufacturing weather-resistant tarpaulins for versatile uses'],
        catalogue: '/path-to-tab1-catalogue.pdf',
      },
      '10-Shuttle': {
        image: require("../CircularLoom/Assets/7.jpg"),
        description: 'Note:-The picture may show optional equipment’s that are not part of the standard supply. For detail, refer to the quotation.',
        tableHeaders: ['Technical Specifications',''],
        tableRows: [
          ['Working width - Double Flat', '175 to 255 cm*'],
          ['Weft insertion rate', 'Up to 700 ppm*'],
        ],
        slideshowImages: [require("../CircularLoom/Assets/7_1.jpg"), require("../CircularLoom/Assets/8_1.jpg")],
        applicationPoints: ['Supports geotextile production, catering to construction and infrastructure projects.', 'Suitable for agro-textile solutions to enhance agricultural efficiency and productivity','Provides customization options for fabrics to meet diverse industry requirements.'],
        catalogue: '/path-to-tab1-catalogue.pdf',
      },
      '12-Shuttle': {
        image: require("../CircularLoom/Assets/8.jpg"),
        description: 'Note:-The picture may show optional equipment’s that are not part of the standard supply. For detail, refer to the quotation.',
        tableHeaders: ['Technical Specifications',''],
        tableRows: [
          ['Working width - Double Flat', '250 to 295 cm*'],
          ['Weft insertion rate', 'Up to 650 ppm*'],
        ],
        slideshowImages: [require("../CircularLoom/Assets/9_1.jpg"), require("../CircularLoom/Assets/10_1.jpg")],
        applicationPoints: ['Pond Lining: Prevents water leakage and protects the environment.', 'Tarpaulin: Provides waterproofing and heavy-duty protection.','Geo-membrane: Used for containment in landfills and ponds.'],
        catalogue: '/path-to-tab1-catalogue.pdf',
      },
      'iL (Inside Lamination)': {
        image:require("../CircularLoom/Assets/9.png"),
        description: 'Note:-The picture may show optional equipment’s that are not part of the standard supply. For detail, refer to the quotation.',
        tableHeaders: ['Technical Specifications',''],
        tableRows: [
          ['Working width (Without Liner)', '30 to 90 cm*'],
          ['Working width (With Liner)', '30 to 70 cm*'],
          ['Weft insertion rate', 'Up to 1100 ppm*'],
        ],
        slideshowImages: [require("../CircularLoom/Assets/11_1.jpg")],
        applicationPoints: ['Packaging: Industrial sacks, food-grade bags, and chemical-resistant containers.', 'Agriculture: Seed bags, fertilizer storage, and crop covers.','Consumer Goods: Reusable shopping and laundry bags.','Medical and Pharmaceutical: Moisture-resistant packaging for powders and hygiene products.'],
        catalogue: '/path-to-tab1-catalogue.pdf',
      },
    };

  // Get the content for the active tab
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
                className="product-imageLO"
              />
            </div>
            
            <div className="content-section">
              <div className="description">
                <p>
                  JAIKO INDUSTRIES offers a range of circular looms for weaving light to heavy 
                  weight tubular or flat PP/HDPE fabrics for a wide variety of end applications.
                  <br></br>
                  <br></br>
                
                  Jaiko's loom ranges from 4 shuttle for open mesh (leno weave) packaging fabric 
                  for fruits & vegetable, to 6 shuttle for a wide range of packaging applications 
                  such as cement, fertilizer, polymer granules, chemicals, grains, animal feed, 
                  seeds and husk and 8 shuttle for the production of wide width fabric for Jumbo 
                  bags (FIBC's), tarpaulins and Geo & agro textiles.
                
                  <br></br>
                  <br></br>
                  Our looms are available under machine models: Jaiko 4, Vega 6, Vega HS, 
                  Jaiko 6 LN, Jaiko 608, Jaiko 810, Jaiko 811, Jaiko 812 LF, Jaiko 812 HF, 
                  Jaiko 814 LF and Jaiko 814 HF, Jaiko 1014, LF and Jaiko 1014 HF, Jaiko 1016 LF 
                  and 1016 HF.
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
          src={require('./Assets/banner2.png')}
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
        enableSlideshow={false}
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
          videoTitle=""
          videoThumbnail={require("../CircularLoom/Assets/CV5.jpg")}
          videoUrl="https://www.youtube.com/watch?v=UaU5zhOe_F4"
        />
        {/* <VedioCard (deploy after when available)
          videoTitle=""
          videoThumbnail={require("../CircularLoom/Assets/CV6.jpg")}
          videoUrl="https://youtu.be/3qPc2eCi_lg?list=TLGGPacicNLv7CEwNjAxMjAyNQ"
        /> */}

        <VedioCard
          videoTitle="CIRCULAR WEAVING MACHINE, VEGA-812"
          videoThumbnail={require("../CircularLoom/Assets/CV2.jpg")}
          videoUrl="https://www.youtube.com/watch?v=FA5yd-STHNo"
        />
        <VedioCard
          videoTitle="LENO CIRCULAR WEAVING MACHINE"
          videoThumbnail={require("../CircularLoom/Assets/CV4.jpg")}
          videoUrl="https://www.youtube.com/watch?v=G1JvbNQfV7Y"
        />
        
     
        <VedioCard
          videoTitle="VEGA VENT 4 – VENTED FABRIC WEAVING MACHINE"
          videoThumbnail={require("../CircularLoom/Assets/CV3.jpg")}
          videoUrl="https://www.youtube.com/watch?v=FA5yd-STHNo"
        />
        <VedioCard
          videoTitle="CIRCULAR WEAVING MACHINE"
          videoThumbnail={require("../CircularLoom/Assets/CV.jpg")}
          videoUrl="https://www.youtube.com/watch?v=zhzf6cIEGM8"
        />
        
      </div>
      {/* Add the ModifiedGallery component here */}
      <NewGallery
        galleryTitle="GALLERY" 
        images={galleryImages} 
      />
    </div>
  );
}

export default CircularLoom;