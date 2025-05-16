import React, { useState, useEffect } from "react";
import { Navigation, SpecsTable, Applications, ProductWithDownloadCatalogue } from '../../Components/ProductFormat/ReusableComponents';
import './Bag.css';
import VedioCard from "../../Components/VedioCard";
import NewGallery from "../../Components/NewGallery"; // Changed from NewGallery to ModifiedGallery

// Import images properly from within src directory
import bag1 from '../../assets/bag1.jpg';
import bag2 from '../../assets/bag2.jpg';
import bag3 from '../../assets/bag3.jpg';
import bag4 from '../../assets/bag4.jpg';

const Bag = () => {
  // Main tab and subtab states
  const [activeMainTab, setActiveMainTab] = useState('Small Bag Conversion');
  const [activeSubtab, setActiveSubtab] = useState('BCS');
  const [activeCombinedTab, setActiveCombinedTab] = useState('Small Bag Conversion-BCS');
  
  // State for slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSlideshow, setShowSlideshow] = useState(true);

  // Main tab content with nested subtabs
  const mainTabContent = {
    'Small Bag Conversion': ['BCS', 'BCL', 'Tuber', 'BCL with Gusseting'],
    'FIBC Confectionaries': ['Mouth Punching', 'Bale Press','Belt Cutting']
  };

  // Image slideshow for Standard tab
  const standardImages = [
    require("../Bag-Conversion/Assets/BCS-1.jpg"),
    require("../Bag-Conversion/Assets/BCS-2.jpg"),
    require("../Bag-Conversion/Assets/BCS-3.jpg"),
  ];

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
    
  // All tab content organized by combined ID (maintab-subtab)
  const tabContent = {
    'Small Bag Conversion-BCS': {
      // This will be overridden by the slideshow
      image: require("../WovenSack/Assets/pcl.jpg"),
      description: "Note:-  The picture may show optional equipment's that are not part of the standard supply. For detail, refer to the quotation.",
      tableHeaders: ['Technical Specifications', 'BCS 850', 'BCS 1250', 'BCS 1600'],
      tableRows: [
        ['Width of unwinder cloth', '300 to 850 mm*', '300 to 1250 mm*', '500 to 1600 mm*'],
        ['Cutting length ', 'Up to 1400 mm*', 'Up to 1550 mm*', '500 to 1850 mm*'],
        ['production speed', 'Up to 40 Bags/min*', 'Up to 35 Bags/min*', 'Up to 25 Bags/min*'],
      ],
      slideshowImages: [
        require("../Bag-Conversion/Assets/BCSapp1.jpg"),
        require("../Bag-Conversion/Assets/BCS2app.jpg"),
      ],
      applicationPoints: [
        'Agriculture and Farming: Ideal for grain, seed, fertilizer, and animal feed storage.',
        'Construction Industry: Used for cement, lime, and gypsum packaging.',
        'Food Industry: Suitable for flour, sugar, and fresh produce.',
        'Industrial Applications: Perfect for powders, granules, and non-toxic chemical storage',
      ],
      catalogue: '/assets/catalogues/standard-bag-catalogue.pdf',
      hasSlideshow: true
    },
    'Small Bag Conversion-BCL': {
      image: require("../Bag-Conversion/Assets/BCL.jpg"),
      description: "Note:-  The picture may show optional equipment's that are not part of the standard supply. For detail, refer to the quotation.",
      tableHeaders: ['Technical Specifications',""],
      tableRows: [
        ['Unwinder fabric Roll width ', '475 to 700 mm* (Liner Mode) 400 to 850 mm* (BCS Mode)'],
        ['Liner Cutting length ', '770 to 1225 mm* (Liner Mode)'],
        ['Fabric Cutting length', '650 to 1200 mm**(BCS Mode)'],
        ['Production Speed', '25-30 Bags/Min** (Liner mode) Up to 35 Bags/Min** (BCS Mode)'],
      ],
      slideshowImages: [
        require("../Bag-Conversion/Assets/BCLapp.jpg"),
        require("../Bag-Conversion/Assets/BCLapp.jpg"),
      ],
      applicationPoints: [
        'Agriculture and Farming: Durable solution for fertilizers, pesticides, and animal feed.',
        'Construction Industry: Secure packaging for raw materials in bulk. ',
        'Food Industry: Protects food products like flour, sugar, and fresh produce.',
        'Industrial Applications: Handles powders, granules, and chemicals with ease.',
      ],
      catalogue: '/assets/catalogues/premium-bag-catalogue.pdf',
      hasSlideshow: false
    },
    'Small Bag Conversion-Tuber': {
      image: require("../Bag-Conversion/Assets/TFM.jpg"),
      description: "Note:-  The picture may show optional equipment's that are not part of the standard supply. For detail, refer to the quotation.",
      tableHeaders: ['Technical Specifications',""],
      tableRows: [
        ['Fabric width', '650 to 1350 mm*'],
        ['tube width', '300 to 650 mm*'],
      ],
      slideshowImages: [
        require("../Bag-Conversion/Assets/Tuberapp.jpg"),
        require("../Bag-Conversion/Assets/Tuberapp1.jpg"),
      ],
      applicationPoints: [
        'Agriculture and Farming: Perfect for storing grain, seeds, fertilizers, and animal feed.',
        'Construction Industry: Utilized for packaging cement, lime, and gypsum.',
        'Food Industry: Appropriate for storing flour, sugar, and fresh produce.',
        'Industrial Applications: Excellent for the storage of powders, granules, and non-toxic chemicals.',
      ],
      catalogue: '/assets/catalogues/heavy-duty-catalogue.pdf',
      hasSlideshow: false
    },
    'Small Bag Conversion-BCL with Gusseting': {
      image: require("../Bag-Conversion/Assets/BC.jpg"),
      description: "Note:-  The picture may show optional equipment's that are not part of the standard supply. For detail, refer to the quotation.",
      tableHeaders: ['Technical Specifications',""],
      tableRows: [
        ['Width of unwinder cloth', '300 to 850 mm*'],
        ['Cutting length', 'Up to 1400 mm*'],
        ['production speed', 'Up to 40 Bags/min*'],
      ],
      slideshowImages: [
        require("../Bag-Conversion/Assets/Twistapp.jpg"),
        require("../Bag-Conversion/Assets/Twistapp.jpg"),
      ],
      applicationPoints: [
        'Retail and Consumer Goods: For pet food, garden supplies, and bulk items.',
        'Logistics and Relief: For sandbags and emergency supplies.',
        'Agriculture and Food: For grains, feed, fertilizers, and dry foods.',
        'Construction and Industry: For cement, sand, chemicals, and powders.',
      ],
      catalogue: '/assets/catalogues/customized-bag-catalogue.pdf',
      hasSlideshow: false
    },
    'FIBC Confectionaries-Mouth Punching': {
      image: require("../Bag-Conversion/Assets/MP.jpg"),
      description: "Note:-  The picture may show optional equipment's that are not part of the standard supply. For detail, refer to the quotation.",
      tableHeaders: ['Technical Specifications', 'FIBCM 1500', 'FIBCM 2200'],
      tableRows: [
        ['Fabric Length', '500-2000 mm*', '500-2000 mm*'],
        ['Line Speed ', '22 MPM* ', '22 MPM*'],
      ],
      slideshowImages: [
        require("../Bag-Conversion/Assets/app1.jpg"), 
        require("../Bag-Conversion/Assets/app1.jpg")
      ],
      applicationPoints: [
        'Cutting seamless mouth profile for jumbo bags.',
        'Ensuring precise, consistent cuts in bulk production.',
        'Reducing manual effort with pneumatic operation.',
      ],
      catalogue: '/assets/catalogues/fibc-type-a-catalogue.pdf',
      hasSlideshow: false
    },
    'FIBC Confectionaries-Bale Press': {
      image: require("../Bag-Conversion/Assets/Bale.jpg"),
      description: "Note:-  The picture may show optional equipment's that are not part of the standard supply. For detail, refer to the quotation.",
      tableHeaders: ['Technical Specifications', 'JP120BB'],
      tableRows: [
        ['Capacity', '120 Ton'],
        ['DayLight Gap', '2000 mm'],
        ['Bed Size', '120 x 800 mm and 1200 x 900 mm'],
        ['Stroke Length of Cylinder', '1700 mm'],
        ['Close Height','300 mm'],
        ['Bale Pushing','Rear Cylinder of 100 cm of 10 Ton Capacity'],
        ['Oil Tank Capacity','480 Litres'],
        ['Power','12 HP Electric AC Motor'],
        ['Operation','Electric Controls with interlocking']
      ],
      slideshowImages: [
        require("../Bag-Conversion/Assets/baleapp.jpg"), 
        require("../Bag-Conversion/Assets/baleapp1.jpg")
      ],
      applicationPoints: [
        'Efficient Volume Reduction: The bale press compacts FIBC jumbo bags, reducing storage space and transportation costs.',
        'High-Pressure Compression: Ensures uniform and dense bales, improving material handling and waste management.',
        'Cost-Effective Solution: Minimizes warehouse space usage and optimizes logistics for bulk materials.',
      ],
      catalogue: '/assets/catalogues/fibc-type-b-catalogue.pdf',
      hasSlideshow: false
    },
    'FIBC Confectionaries-Belt Cutting': {
      image: require("../Bag-Conversion/Assets/Belt.jpg"),
      description: "Note:-  The picture may show optional equipment's that are not part of the standard supply. For detail, refer to the quotation.",
      tableHeaders: ['Technical Specifications', 'JPBCM6'],
      tableRows: [
        ['Material for process', 'PP Webbing Belt'],
        ['No. of Belt', '6'],
        ['Belt width Max.', '75 mm*'],
        ['Distance of 2 marking points', '20 mm Min.'],
      ],
      slideshowImages: [
        require("../Bag-Conversion/Assets/Beltapp.jpg"), 
        require("../Bag-Conversion/Assets/Beltapp1.jpg")
      ],
      applicationPoints: [
        'Belts used for lifting FIBC (jumbo bags) are precisely cut to the required length.',
        'Processing reinforcement belts used in packaging.',
        'Minimizing manual labor with an efficient pneumatic system.',
        'Integrated testing and certification system',
        'Configurable for various specialty FIBC applications'
      ],
      catalogue: '/assets/catalogues/fibc-type-b-catalogue.pdf',
      hasSlideshow: false
    }
  };

  // Slideshow effect
  useEffect(() => {
    // Only run slideshow for Standard tab
    if (activeCombinedTab === 'Small Bag Conversion-BCS') {
      setShowSlideshow(true);
      const timer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % standardImages.length);
      }, 3000);
      
      return () => clearInterval(timer);
    } else {
      setShowSlideshow(false);
      setCurrentImageIndex(0);
    }
  }, [activeCombinedTab]);

  // Handle main tab change
  const handleMainTabChange = (tab) => {
    setActiveMainTab(tab);
    const firstSubtab = mainTabContent[tab][0];
    setActiveSubtab(firstSubtab);
    setActiveCombinedTab(`${tab}-${firstSubtab}`);
  };

  // Handle subtab change
  const handleSubtabChange = (subtab) => {
    setActiveSubtab(subtab);
    setActiveCombinedTab(`${activeMainTab}-${subtab}`);
  };
  
  // Get current content
  const currentContent = tabContent[activeCombinedTab];

  // Function to handle download catalogue
  const handleDownloadCatalogue = () => {
    if (currentContent && currentContent.catalogue) {
      try {
        const link = document.createElement('a');
        link.href = currentContent.catalogue;
        link.download = `${activeSubtab.toLowerCase().replace(/\s+/g, '-')}-catalogue.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error downloading catalogue:", error);
        alert('Failed to download the catalogue. Please try again later.');
      }
    }
  };

  return (
    <div>
      <div className="imageContainer1">
        <img
          className="ExportSection"
          alt="ExportSection"
          src={require('./Assets/bannermain.jpg')}
        />
        <div>
          <div className="product-layout">
            <div className="image-section">
              <img
                src={require('./Assets/leftbanner.jpg')}
                alt="Jaiko Industries Machine"
                className="product-imageBG"
              />
            </div>

            <div className="content-section">
              <div className="description">
                <p>
                  JPEL has developed cutting-edge Conversion Lines for producing bottom folded and sewn woven sacks made from tubular woven PP/HDPE fabric. The JPBCL-850 model, offered by J P EXTRUSIONTECH LIMITED, is a high-speed, next-generation machine specifically designed for conventional bag applications. This machine is engineered to handle the entire process of cutting, bottom folding, sewing, and stacking woven fabric to create durable and high-quality sacks.
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
      
      {/* Main Tab Navigation */}
      <Navigation
        tabs={Object.keys(mainTabContent)}
        activeTab={activeMainTab}
        onTabChange={handleMainTabChange}
      />
      
      {/* Subtab Navigation */}
      <div className="subtab-navigation">
        {mainTabContent[activeMainTab].map(subtab => (
          <button
            key={subtab}
            className={`subtab-button ${activeSubtab === subtab ? 'active-subtab' : ''}`}
            onClick={() => handleSubtabChange(subtab)}
          >
            {subtab}
          </button>
        ))}
      </div>
      
      {/* Product Display - Custom rendering for slideshow */}
      <div className="product-display-container">
        {showSlideshow ? (
          <div className="product-slideshow">
            <img 
              src={standardImages[currentImageIndex]} 
              alt="Standard Bag Machine"
              className="product-image"
            />
            <p className="description2">Note:-  The picture may show optional equipment's that are not part of the standard supply. For detail, refer to the quotation.</p>
            
            {/* Use the same component but just extract the download button from ProductWithDownloadCatalogue */}
            <ProductWithDownloadCatalogue
              hideImage={true}
              hideDescription={true}
              tabId={activeSubtab}
              tabContent={currentContent}
            />
          </div>
        ) : (
          <ProductWithDownloadCatalogue
            image={currentContent.image}
            description={currentContent.description}
            tabId={activeSubtab}
            tabContent={currentContent}
          />
        )}
      </div>
      
      {/* Specs Table */}
      <SpecsTable
        headers={currentContent.tableHeaders}
        rows={currentContent.tableRows}
      />
      
      <p className="description2">*depending on machine models and specifications</p>
      <p className="description2">** depends on width, length, type of fabric, quality of fabric & winding, etc.</p>
      
      {/* Applications */}
      <Applications
        title={`Salient features & Applications`}
        images={currentContent.slideshowImages}
        points={currentContent.applicationPoints}
      />

        <div className="card-header">
             <p style={{fontSize:'42px',color:'black'}}>Videos</p>
      </div>
      
      <div className="card-wrapper3">
               <VedioCard
          videoTitle=""
          videoThumbnail={require("../Bag-Conversion/Assets/BagV2.jpg")}
          videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
        />
               <VedioCard
          videoTitle=""
          videoThumbnail={require("../Bag-Conversion/Assets/BagV3.jpg")}
          videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
        />
               <VedioCard
          videoTitle=""
          videoThumbnail={require("../Bag-Conversion/Assets/BagV4.jpg")}
          videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
        />
               <VedioCard
          videoTitle=""
          videoThumbnail={require("../Bag-Conversion/Assets/BagV5.jpg")}
          videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
        />
               <VedioCard
          videoTitle=""
          videoThumbnail={require("../Bag-Conversion/Assets/BagV6.jpg")}
          videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
        />
        </div>
              {/* Add the ModifiedGallery component here */}
      <NewGallery
        galleryTitle="BAG CONVERSION MACHINE GALLERY" 
        images={galleryImages} 
      />
    </div>
  );
};

export default Bag;