import React, { useState } from 'react';
import { Navigation, ProductImage, SpecsTable, Applications, ApplicationsSlideshow } from '../../Components/ProductFormat/ReusableComponents';
import "../WindingMachine/WindingMachine.css"

const WindingMachine = () => {
    const [activeTab, setActiveTab] = useState('Tape Winders ');

    // Tab-specific content
    const tabContent = {
      'Tape Winders ': {
        image: null,
        description: '',
        tableHeaders: ['Technical Specifications','JTW200IX','JTWAG200IX'],
        tableRows: [
          ['Tape Width', '1.8 to 4.0 mm', '1.8 to 4.0 mm'],
          ['Denier Range', '400 to 3000', '400 to 3000'],
          ['Traverse Length', '200 mm', '200 mm'],
          ['Bobbin Core ID', '35 mm', '35 mm'],
          ['Bobbin Core OD', 'Up to 40 mm', 'Up to 40 mm'],
          ['Bobbin Core Length', '218 mm', '218 mm'],
          ['Winding Speed', '160 to 450 MPM', '160 to 450 MPM'],
          ['Package Dia', '140 mm', '140 mm'],
        ],
        slideshowImages: ['/tab1-slide1.jpg', '/tab1-slide2.jpg'],
        applicationPoints: ['Point 1 for Tab 1', 'Point 2 for Tab 1', 'Point 3 for Tab 1'],
      },
      'Auto-Doffing Winders': {
        image: require("../PlasticRecycling/Assets/recycling-1.jpg"),
        description: '',
        tableHeaders: ['Technical Specifications','JTWAT200IX'],
        tableRows: [
          ['Tape Width', '1.8 to 4.0 mm'],
          ['Denier Range', '400 to 3000'],
          ['Traverse Length', '200 mm'],
          ['Bobbin Core ID', '35 mm'],
          ['Bobbin Core OD', 'Up to 40 mm'],
          ['Bobbin Core Length', '218 mm'],
          ['Winding Speed', '160 to 450 MPM'],
          ['Package Dia', '140 mm'],
        ],
        slideshowImages: ['/tab1-slide1.jpg', '/tab1-slide2.jpg'],
        applicationPoints: ['Point 1 for Tab 1', 'Point 2 for Tab 1', 'Point 3 for Tab 1'],
      },
      'Fibrillated Tape Winder': {
        image: require("../PlasticRecycling/Assets/recycling-1.jpg"),
        description: '',
        tableHeaders: ['Technical Specifications','JTWJ300IX'],
        tableRows: [
          ['Tape Width', '1.8 to 6.0 mm'],
          ['Denier Range', '1000 to 6000'],
          ['Traverse Length', '300 mm'],
          ['Bobbin Core ID', '90 mm'],
          ['Bobbin Core OD', '101 mm'],
          ['Bobbin Core Length', '330 mm'],
          ['Winding Speed', '160 to 350 MPM'],
          ['Package Dia', '250 mm'],
        ],
        slideshowImages: ['/tab1-slide1.jpg', '/tab1-slide2.jpg'],
        applicationPoints: [''],
      }
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
        <div >
        <div className="product-layout">
      <div className="image-section">
        <img 
          src={require('./Assets/bannerleft.jpg')}
          alt="Jaiko Industries Machine" 
          className="product-image2"
        />
      </div>
      
      <div className="content-section">
        <div className="description3">
          <p>
          J P Extrusiontech Ltd offers a comprehensive range of Winding Machines designed for high-quality and efficient tape winding across various industrial applications.
Winding machines are available for different needs, including the Inverter/Electronic Tape Winder for precise speed and tension control, the Auto Doffing Tape Winder for seamless, automated roll changing, and the Jumbo Winder for high-capacity fibrillated tape winding. The Jumbo Winder is ideal for bulk production in industries such as agriculture (packaging, bale wrapping), rope manufacturing, and sewing yarn.
These machines support end applications such as woven & leno bags, jumbo bags (Flexible Intermediate Bulk Containers – FIBCs), tarpaulins, carpet backings, geotextiles, wrapping fabrics, ropes, and twines
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
     
        <SpecsTable
          headers={currentContent.tableHeaders}
          rows={currentContent.tableRows}
        />
        <p className='description2'>*depending on machine models and specifications</p>
    
      </div>
    );
  };
export default WindingMachine;   