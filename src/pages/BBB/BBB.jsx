import React, { useState } from 'react';
import {
  Navigation,
  SpecsTable,
  Applications,
  ProductWithDownloadCatalogue
} from '../../Components/ProductFormat/ReusableComponents';
import "../BBB/BBB.css";
import NewGallery from "../../Components/NewGallery";

import bag1 from './Assets/gallery1.jpg';
import bag2 from './Assets/gallery2.png';

const BBB = () => {
  const [activeTab, setActiveTab] = useState('Product');

  // Tab-specific content
  const tabContent = {
    'Product': {
      image: require("./Assets/BBB-main.png"),
      description:
        'Note:-The picture may show optional equipments that are not part of the standard supply. For details , refer to the quotation.',
      tableHeaders: ['Parameters', ''],
      tableRows: [
        ['Total Weight', '17500 Kgs'],
        [
          'Power Supply',
          '3Ph380Vac+5%, 50Hz three phase five cables system (CE standard)'
        ],
        ['Operating Power', 'About 60 kW'],
        ['Speed', 'upto 130 (Bags/min)'],
        [
          'Air Source',
          'Air Pressure 0.6MPa, Working pressure 0.5MPa, Air consumption 0.3m³/min'
        ]
      ],
      slideshowImages: [
        require("./Assets/BBB-app.jpg"),
        require("./Assets/BBB-app.jpg")
      ],
      applicationPoints: [
        'Durable Ropes & Twines: Strong and versatile for industrial and household use.',
        'Flexible Toothbrush Bristles: Ideal for effective and gentle oral care.',
        'Strong Fishing Nets: High tensile strength for professional fishing needs.',
        'Protective Mosquito Nets: Lightweight and long-lasting insect protection.',
        'Lifelike Doll & Wig Hair: Perfect for realistic appearances and styling.'
      ],
      catalogue: '/path-to-tab1-catalogue.pdf'
    }
  };

  const currentContent = tabContent[activeTab];

  const galleryImages = [
    { id: 1, src: bag1, alt: "" },
    { id: 2, src: bag2, alt: "" }
  ];

  // ✅ Second specifications table (from your screenshot)
  const bagSpecsHeaders = ['W1' ,'W2' ,'W3 (inner valve)', 'L', 'L1', 'T'];
  const bagSpecsRows = [
    [
     ['300 - 620mm'],
     ['190 - 550mm'], 
     ['80 - 200mm'], 
     ['440 - 910mm'], 
     ['360 - 750mm'], 
     ['80 - 160mm']
    ]
  ];

  return (
    <div>
      <div className="imageContainer1">
        <img
          className="ExportSection"
          alt="ExportSection"
          src={require('./Assets/Top-banner.jpg')}
        />
        <div>
          <div className="product-layout-mono">
            <div className="image-section-mono">
              <img
                src={require('./Assets/BBB.png')}
                alt="Jaiko Industries Machine"
                className="product-image-mono"
              />
            </div>

            <div className="content-section-mono">
              <div className="description-mono">
                <p>
                The new Generation of <span className="highlight-red">AD VALVE™</span> pocket bag making machine has
                been fully upgraded, using new heat sealing technology,
                modular design, fewer fragile parts and maintenance projects.
                Introducing PATENTED new appearance design and support for a
                variety of Al visual detection solutions.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <Navigation
        tabs={Object.keys(tabContent)}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Product with Catalogue */}
      <ProductWithDownloadCatalogue
        image={currentContent.image}
        description={currentContent.description}
        tabId={activeTab}
        tabContent={tabContent}
      />

      {/* First Specifications Table */}
      <SpecsTable
        headers={currentContent.tableHeaders}
        rows={currentContent.tableRows}
      />
      <p className="description2">
        *depending on machine models and specifications
      </p>

      {/* Applications Section */}
      <Applications
        title={`Applications for ${activeTab}`}
        images={currentContent.slideshowImages}
        points={currentContent.applicationPoints}
      />

      {/* ✅ Second Specifications Table (Bag Sizes) */}
      <h2 className="subheading">Bag Size Specifications</h2>
      <SpecsTable headers={bagSpecsHeaders} rows={bagSpecsRows} />

      {/* Gallery */}
      <NewGallery galleryTitle="GALLERY" images={galleryImages} />
    </div>
  );
};

export default BBB;
