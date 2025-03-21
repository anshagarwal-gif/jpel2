import React, { useState } from 'react';
import { Navigation, ProductImage, SpecsTable, Applications, ApplicationsSlideshow, ProductWithDownloadCatalogue } from '../../Components/ProductFormat/ReusableComponents';
import "../Flexible/Flexible.css"

const  Flexible = () => {
    const [activeTab, setActiveTab] = useState('Product');
    
        // Tab-specific content
        const tabContent = {
          'Product': {
            image: require("../Flexible/Assets/4.jpg"),
            description: '',
            tableHeaders: ['Technical Specifications','LAMIFLEX 1200','LAMIFLEX 1450','LAMIFLEX 1600'],
            tableRows: [
              ['Lamination width (mm)', '500 - 1000','600 - 1250','800 - 1450'],
              
            ],
            slideshowImages: [require("../Flexible/Assets/app1.jpg"), require("../Flexible/Assets/app1.jpg")],
            applicationPoints: ['Flexible Packaging: Stand-up pouches and high-barrier laminates for fresh foods.',
'Liquid Packaging: Basic and aseptic solutions combining board, film, and aluminum foil.',
'Commercial & Industrial: Release liners, envelopes, medical, hygiene, and building insulation materials.',
'Photographic Applications: Labels and photographic prints.'],
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
          Extrusion coating for flexible packaging involves applying a molten polymer layer onto substrates such as films, aluminum foil, paper, or board to create multi-layer laminates. The process enhances the material's strength, durability, and barrier properties, making it ideal for packaging solutions that require protection against moisture, oxygen, and light.

          
            <br></br>
            <br></br>
            This coating process typically uses materials like LDPE, LLDPE, PP, EVA, EAA, EVOH, and NUCREL SERLYN, which are applied to substrates such as BOPP, Paper, Al. Foil, CPP, Polyester, and METPET.
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
export default Flexible;