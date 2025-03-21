import React, { useState } from 'react';
import { Navigation, ProductImage, SpecsTable, Applications, ApplicationsSlideshow, ProductWithDownloadCatalogue } from '../../Components/ProductFormat/ReusableComponents';
import "../Monofilament/Monofilament.css"

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
          JPEL takes pride in offering a diverse range of highly efficient Monofilament Line Machines designed to produce HDPE, PP, and Nylon monofilaments with exceptional quality and performance. These machines are crafted with advanced engineering to cater to industries requiring precision, durability, and efficiency in monofilament production.
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

</div>
    )
}
export default Monofilament;