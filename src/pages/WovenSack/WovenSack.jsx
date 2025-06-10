import React, { useState }  from "react";  
import { Navigation, SpecsTable, Applications, ProductWithDownloadCatalogue } from '../../Components/ProductFormat/ReusableComponents';
import './WovenSack.css'
import VedioCard from "../../Components/VedioCard";
import NewGallery from "../../Components/NewGallery"; // Changed from NewGallery to ModifiedGallery

// Import images properly from within src directory
import bag1 from '../../assets/Plastic-Recycling-1.jpg';
import bag2 from '../../assets/Plastic-Recycling-2.jpg';
import bag3 from '../../assets/Plastic-Recycling-3.jpg';
import bag4 from '../../assets/Plastic-Recycling-4.jpg';

const WovenSack = () => {
  const [activeTab, setActiveTab] = useState('Plastic Cleaning & Washing');
    // Tab-specific content
    const tabContent = {
      'Plastic Cleaning & Washing': {
        image: require("../WovenSack/Assets/pcl.jpg"),
        description: 'Note:-The picture may show optional equipment’s that are not part of the standard supply. For details , refer to the quotation.',
        tableHeaders: [],
        tableRows: [],
        slideshowImages: [require("../WovenSack/Assets/pclapll.jpg"),require("../WovenSack/Assets/pclapll1.jpg")],
        applicationPoints: ['PP/PE  Recycling: Cleaning and recycling polypropylene and polyethylene films.',
'Waste Bag Processing: Handling heavily soiled plastic bags for reuse.',
'High-Quality Material Recovery: Producing recycled materials for various applications.',
'Contamination Handling: Managing diverse contamination levels effectively.',
'Efficient Drying and Filtration: Minimizing material loss while maximizing recovery.'],
        catalogue: '/path-to-tab1-catalogue.pdf',
      },
      'Single-Stage Recycling': {
        image: require("../WovenSack/Assets/pcl1.jpg"),
        description: 'Note:-The picture may show optional equipment’s that are not part of the standard supply. For details , refer to the quotation.',
        tableHeaders: ['Technical Specifications Output (kg/Hr.)','JP 80 RC','JP 100 RC','JP 120 RC'],
        tableRows: [
          ['PE Film', '130-150','250-300','400-450'],
          ['HDPE/PP Raffia', '100-120','200-250','300-350'],
        ],
        slideshowImages: [require("../WovenSack/Assets/recycling1.jpg"), require("../WovenSack/Assets/recycling1.jpg")],
        applicationPoints: [
'The Shredder integrated plastic recycling line breaks down plastic waste into smaller pieces, enhancing the efficiency of the recycling process.'],
        catalogue: '/path-to-tab1-catalogue.pdf',
        

      },
      'Two-Stage Recycling': {
        image: require("../WovenSack/Assets/pcl2.jpg"),
        description: 'Note:-The picture may show optional equipment’s that are not part of the standard supply. For details , refer to the quotation.',
        tableHeaders: ['Technical Specifications Output (kg/Hr.)','JP 80V + 100RC','JP 90V + 100 RC','JP100V + 120 RC'],
        tableRows: [
          ['PE Film', '130-150','170-200','250-300'],
          ['HDPE/PP Raffia', '100-120','150-180','200-250'],
        ],
        slideshowImages: [require("../WovenSack/Assets/recycle.jpg"), require("../WovenSack/Assets/recycle.jpg")],
        applicationPoints: ['A two-stage recycling machine equipped with venting capabilities shreds and granulates plastic waste, allowing gases to escape.','This process enhances material quality and minimizes degradation, making it perfect for processing printed PE, PP films, and multilayer laminated films.'],
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
          className="product-imageWS"
        />
      </div>
      
      <div className="content-section">
        <div className="description">
          <p>
          Our recycling systems are meticulously designed to handle the specialized task of washing and processing PP/PE films and bags. These systems are equipped with a comprehensive suite of cutting-edge equipment, ensuring thorough cleaning and effective recycling. They efficiently transform waste and heavily soiled PP/PE films and bags into high-quality recycled materials, suitable for a variety of applications.
          
            <br></br>
            <br></br>
            Built with precision and innovation, the machinery is tailored to handle diverse levels of contamination, maintaining consistent output quality. Advanced washing technologies combined with efficient drying and filtration processes guarantee minimal material loss and maximum recovery rates.
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
        {activeTab !== 'Plastic Cleaning & Washing' && (
  <p className="description2">*depending on machine models and specifications</p>
)}
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
    videoTitle="RECYCLING LINE – JP 100 RC"
    videoThumbnail={require("../WovenSack/Assets/WW.jpg")}
    videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
  />
          <VedioCard
        videoTitle=""
    videoThumbnail={require("../WovenSack/Assets/WW3.jpg")}
    videoUrl="https://youtu.be/3qPc2eCi_lg?list=TLGGPacicNLv7CEwNjAxMjAyNQ"
  />
           <VedioCard
        videoTitle=""
    videoThumbnail={require("../WovenSack/Assets/WW4.jpg")}
    videoUrl="https://youtu.be/3qPc2eCi_lg?list=TLGGPacicNLv7CEwNjAxMjAyNQ"
  />
           <VedioCard
        videoTitle=""
    videoThumbnail={require("../WovenSack/Assets/WW5.jpg")}
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
    
}
export default WovenSack;