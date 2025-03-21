import React, { useState } from 'react';
import { Navigation, ProductImage, SpecsTable, Applications, ApplicationsSlideshow } from '../../Components/ProductFormat/ReusableComponents';
import "../WindingMachine/WindingMachine.css"

const WindingMachine = () => {
    const [activeTab, setActiveTab] = useState('Tape Winders ');

    // Tab-specific content
    const tabContent = {
      'Tape Winders ': {
        image: require("../PlasticRecycling/Assets/recycling-1.jpg"),
        description: 'Note:-  The picture may show optional equipment’s that are not part of the standard supply. For detail, refer to the quotation.',
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
        description: 'Note:-  The picture may show optional equipment’s that are not part of the standard supply. For detail, refer to the quotation.',
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
        description: 'Note:-  The picture may show optional equipment’s that are not part of the standard supply. For detail, refer to the quotation.',
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
        applicationPoints: ['Point 1 for Tab 1', 'Point 2 for Tab 1', 'Point 3 for Tab 1'],
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
          src="" 
          alt="Jaiko Industries Machine" 
          className="product-image2"
        />
      </div>
      
      <div className="content-section">
        <div className="description3">
          <p>
          J P Extrusiontech Ltd having a comprehensive range of tape extrusion lines for producing high-quality PP/HDPE tapes for a wide range of applications.
            <br></br>
            <br></br>
          
            Tape Stretching Lines available from output 150 Kg/Hr to 900 Kg/Hr capacity. 450 to 900 Kh/Hr lines having godet diameter of 450 mm and imported screw, barrel, die, melt pump options are available. Die width available (MM) 800, 900, 1000, 1100, 1300, 1400, 1500, 1600, 1750, 2200

          
            <br></br>
            <br></br>
            End applications such as – woven & leno bags, jumbo bags – i.e. Flexible Intermediate Bulk Containers (FIBCs), tarpaulins, carpet backings, geotextiles, wrapping fabrics, ropes and twines etc.
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
        <ProductImage
          image={currentContent.image}
          description={currentContent.description}
        />
        <SpecsTable
          headers={currentContent.tableHeaders}
          rows={currentContent.tableRows}
        />
        <p className='description2'>*depending on machine models and specifications</p>
        <Applications
          title={`Applications for ${activeTab}`}
          images={currentContent.slideshowImages}
          points={currentContent.applicationPoints}
        />
      </div>
    );
  };
export default WindingMachine;   