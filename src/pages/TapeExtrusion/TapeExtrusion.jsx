import React, { useState } from 'react';
import { Navigation, ProductImage, SpecsTable, Applications, ApplicationsSlideshow } from '../../Components/ProductFormat/ReusableComponents';


const TapeExtrusion = () => {
    const [activeTab, setActiveTab] = useState('Tab 1');

    // Tab-specific content
    const tabContent = {
      'Tab 1': {
        image: require("../PlasticRecycling/Assets/recycling-1.jpg"),
        description: 'This is the description for Tab 1.',
        tableHeaders: ['Property', 'Value 1', 'Value 2', 'Value 3'],
        tableRows: [
          ['Density', '0.92', '0.94', '0.96'],
          ['Strength', 'High', 'Medium', 'Low'],
        ],
        slideshowImages: ['/tab1-slide1.jpg', '/tab1-slide2.jpg'],
        applicationPoints: ['Point 1 for Tab 1', 'Point 2 for Tab 1', 'Point 3 for Tab 1'],
      },
      'Tab 2': {
        image: '/tab2-image.jpg',
        description: 'This is the description for Tab 2.',
        tableHeaders: ['Property', 'Feature 1', 'Feature 2'],
        tableRows: [
          ['Speed', 'Fast', 'Slow'],
          ['Price', '$100', '$150'],
        ],
        slideshowImages: ['/tab2-slide1.jpg', '/tab2-slide2.jpg'],
        applicationPoints: ['Point 1 for Tab 2', 'Point 2 for Tab 2'],
      },
      'Tab 3': {
        image: '/tab3-image.jpg',
        description: 'This is the description for Tab 3.',
        tableHeaders: ['Specification', 'Metric 1', 'Metric 2'],
        tableRows: [
          ['Width', '100cm', '200cm'],
          ['Height', '50cm', '150cm'],
        ],
        slideshowImages: ['/tab3-slide1.jpg', '/tab3-slide2.jpg'],
        applicationPoints: ['Point 1 for Tab 3', 'Point 2 for Tab 3', 'Point 3 for Tab 3'],
      },
    };
  
    // Get the content for the active tab
    const currentContent = tabContent[activeTab];
  
    return (
      <div>
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
        <ProductImage
          image={currentContent.image}
          description={currentContent.description}
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
    );
  };
export default TapeExtrusion;   