import React, { useState } from 'react';
import { Navigation, ProductImage, SpecsTable, Applications, ApplicationsSlideshow, ProductWithDownloadCatalogue } from '../../Components/ProductFormat/ReusableComponents';

import "../PET/PET.css";
const PET = () => {
    const [activeTab, setActiveTab] = useState('Product');
    
        // Tab-specific content
        const tabContent = {
          'Product': {
            image: require("../PET/Assets/1.jpg"),
            description: '',
            tableHeaders: [],
            tableRows: [
            ],
            slideshowImages: [require("../PET/Assets/app1.jpg"), require("../PET/Assets/app1.jpg")],
            applicationPoints: ['PET Bottle Recycling: Cleaning and processing used PET bottles.',
'High-Quality Flake Production: Creating clean PET flakes for reuse.',
'Contaminant Removal: Effective separation of labels, caps, and impurities.',
'Water-Efficient Washing: Advanced systems for eco-friendly washing.',
'Food-Grade Applications: Producing recycled PET suitable for packaging.'],
            catalogue: '/path-to-tab1-catalogue.pdf',
          }
        };
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
          Discover advanced recycling solutions designed to efficiently reclaim valuable plastics from a wide range of waste materials. Our state-of-the-art recycling lines specialize in processing oriented HDPE/PP tapes, woven fabric cuttings, industrial plastic waste, and general-purpose plastics such as LDPE, LLDPE, HIPS, PP, and HDPE. With a focus on sustainability and innovation, we transform waste into high-quality reusable resources, supporting a cleaner and greener future.
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
        

</div>
    )
}
export default PET;