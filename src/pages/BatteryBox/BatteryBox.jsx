import React, { useState } from 'react';
import { Navigation, ProductImage, SpecsTable, Applications, ApplicationsSlideshow, ProductWithDownloadCatalogue } from '../../Components/ProductFormat/ReusableComponents';

import "../BatteryBox/BatteryBox.css"
const BatteryBox = () => {
    const [activeTab, setActiveTab] = useState('Product');
    
        // Tab-specific content
        const tabContent = {
          'Product': {
            image: require("../BatteryBox/Assets/tab.jpg"),
            description: 'Note:-  The picture may show optional equipments that are not part of the standard supply. For detail, refer to the quotation.',
            tableHeaders: [],
            tableRows: [],
            slideshowImages: [require("../BatteryBox/Assets/appli1.jpg"), require("../BatteryBox/Assets/appli1.jpg")],
            applicationPoints: ['Battery Box Recycling: Processing used ABS battery casings.',
'Material Recovery: Producing high-quality recycled ABS.',
'Contaminant Separation: Effective removal of impurities and metals.',
'Eco-Friendly Process: Sustainable recycling methods for ABS materials.',
'Reusability: Recycled ABS for automotive and industrial applications.'
],
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
        <div className="product-layout-battery">
      <div className="image-section-battery">
        <img 
          src={require('./Assets/leftbanner.jpg')} 
          alt="Jaiko Industries Machine" 
          className="product-image-battery"
        />
      </div>
      
      <div className="content-section-battery">
        <div className="description-battery">
          <p>
          Transform the recycling process for car battery boxes with our advanced solutions tailored for recovering high-quality ABS (Acrylonitrile Butadiene Styrene) plastics. Our state-of-the-art recycling machines are specifically engineered to efficiently process used and damaged car battery boxes, ensuring maximum recovery of valuable materials.
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
        <Applications
          title={`Applications for ${activeTab}`}
          images={currentContent.slideshowImages}
          points={currentContent.applicationPoints}
        />

</div>
    )
}
export default BatteryBox;