import React, { useState }  from "react";  
import { Navigation, SpecsTable, Applications, ProductWithDownloadCatalogue } from '../../Components/ProductFormat/ReusableComponents';
import './ExtrusionCoating.css'
import VedioCard from "../../Components/VedioCard";
const ExtrusionCoating = () => {
  const [activeTab, setActiveTab] = useState('Woven & non-Woven');
//   const images = [
//     require("../CircularLoom/Assets/grid3.jpg"),
//     require("../CircularLoom/Assets/grid2.jpg"),
//     require("../CircularLoom/Assets/grid1.jpg"),
//     require("../CircularLoom/Assets/grid4.jpg")
//   ];
    // Tab-specific content
    const tabContent = {
      'Woven & non-Woven': {
        images: [
            require("../ExtrusionCoating/Assets/wown3.jpg"),
            require("../ExtrusionCoating/Assets/wown2.jpg"),
            require("../ExtrusionCoating/Assets/wown1.jpg")
          ],
        description: ['Note:-The picture may show optional equipment’s that are not part of the standard supply. For detail, refer to the quotation.                                                      TD - tandem, L - Leno fabric lamination'],
        tableHeaders: ['Technical Specifications','850/TD','1200/L','1450','1600','1800','2000'],
        tableRows: [
          ['Die-Width (mm)', '900 x 2Nos','450','1450','1600','1800','2000 x 2Nos.'],
          ['Coating Width (Min. - Max., in mm) ', '400-750','120 - 300','800-1350','800-1500','1200-1650','1200-1850'],
        ],
        
        slideshowImages: [ require("../ExtrusionCoating/Assets/wown5.jpg"),  require("../ExtrusionCoating/Assets/wown4.jpg")],
        applicationPoints: ['Industrial: Durable packaging for sugar, cement, and food grain bags.',
'Retail: Reliable and sturdy shopping bags for consumer use.','Medical: Laminated materials that are safe and hygienic for medical purposes (such as PPE kits, aprons, masks, etc.).'],
        catalogue: '/path-to-tab1-catalogue.pdf',
      },
      'FIBC': {
        images: [
            require("../ExtrusionCoating/Assets/fibc1.jpg"),
            require("../ExtrusionCoating/Assets/fibc2.jpg"),
           
          ],
        description: 'Note:-The picture may show optional equipment’s that are not part of the standard supply. For detail, refer to the quotation.',
        tableHeaders: ['Technical Specifications','2000','2200','2650','3300'],
        tableRows: [
          ['Die-Width (mm)', '2000','2200','2650','3300'],
          ['Coating Width (Min. - Max., in mm) ', '1200-1850','1200-2050','1600-2500','2400-3150'],
        ],
        slideshowImages: [ require("../ExtrusionCoating/Assets/fibc3.jpg"),  require("../ExtrusionCoating/Assets/fibc4.jpg")],
        applicationPoints: ['Provides moisture resistance.',
'Enhances strength and durability.',
'Creates a smooth surface for printing.',
'Prevents dust and leakage.'],
        catalogue: '/path-to-tab1-catalogue.pdf',
        

      },
      'Tarpaulin': {
        images: [
            require("../ExtrusionCoating/Assets/Tamp1.jpg"),
            require("../ExtrusionCoating/Assets/Tamp2.jpg"),
           
          ],
        description: 'Note:-The picture may show optional equipment’s that are not part of the standard supply. For detail, refer to the quotation.',
        tableHeaders: ['Technical Specifications','2000','2200','2650','3300','3800','4300','5200','6000'],
        tableRows: [
          ['Die-Width (mm)', '2000','2200','2650','3300','3800','4300','5200','6000'],
          ['Coating Width (Min. - Max., in mm) ', '1200-1850','2050 - 2200','1600 - 2500','2400 - 3150','3150 - 3650','3650 - 4150','4000-5000','4600-5800'],
        ],
        slideshowImages: [  require("../ExtrusionCoating/Assets/Tamp3.jpg"),   require("../ExtrusionCoating/Assets/Tamp4.jpg")],
        applicationPoints: ['Industrial: Weatherproof tarpaulins for construction, agriculture, and transport.',
'Retail: Durable, waterproof covers for vehicles and outdoor use.'],
        catalogue: '/path-to-tab1-catalogue.pdf',
      },


      'High-Speed Lamination': {
        images: [
            require("../ExtrusionCoating/Assets/hspeed.jpg"),
            require("../ExtrusionCoating/Assets/hspeed1.jpg"),
           
          ],
        description: ['Note:-The picture may show optional equipment’s that are not part of the standard supply. For detail, refer to the quotation.                                                                    TD - tandem'],
        
        tableHeaders: ['Technical Specifications','850/TD','1600','1800','2000'],
        tableRows: [
          ['Die-Width (mm)', '900 x 2Nos','1650','1800','2000'],
          ['Coating Width (Min. - Max., in mm) ', '400-750','300 - 750(Tubular fabric) 600 - 1500(Flat fabric)','350 - 800(Tubular fabric) 600 - 1600 (Flat fabric)','1200 - 1850'],
        ],
        slideshowImages: [require("../ExtrusionCoating/Assets/hspeed2.jpg"), require("../ExtrusionCoating/Assets/hspeed3.jpg")],
        applicationPoints: ['Industrial: Durable packaging & weatherproof tarpaulins for construction and transport.',
'Retail: Sturdy shopping bags & waterproof covers for outdoor use.',
'Medical: Hygienic, moisture-reasistant laminates for PPE kits & medical gear.',
'Key Benefits: Faster production, enhanced durability, smooth print surface, and superior protection.'],
        catalogue: '/path-to-tab1-catalogue.pdf',
      },
      
    };

  
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
      <div className="image-section" style={{ borderRadius: '18px'}}>
        <img 
          src={require('./Assets/leftbanner.jpg')} 
          alt="Jaiko Industries Machine" 
          className="product-imageEx"
        />
      </div>
      
      <div className="content-section">
        <div className="description">
          <p>
          J P Extrusiontech Ltd has a wide range of Extrusion Coating Lines Models to meet a variety of applications.

            <br></br>
            <br></br>
          
            For coating thin layer of polyolefin’s (Mainly LDPE / PP) on substrates like Paper, Cotton Cloth, Woven Fabrics, Jute fabric, Aluminum foil, BOPP film, Polyester film, etc. up to 5200 mm Web width applications.

          
            <br></br>
            <br></br>
            For coating thin layer of polyolefin’s (Mainly LDPE / PP) on substrates like Paper, Cotton Cloth, Woven Fabrics, Jute fabric, Aluminum foil, BOPP film, Polyester film, etc. up to 5200 mm Web width applications.
            <br></br>
            <br></br>
            Tandem Lamination Plant For coating Circular Woven fabric, for producing multilayer laminates up to 5 layers along with the various substrates like Paper, Aluminum foil, Polyester film etc
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
         images={currentContent.images}
        description={currentContent.description}
        tabId={activeTab}
        tabContent={tabContent}
        
      />
        <SpecsTable 
   headers={currentContent.tableHeaders}
   rows={currentContent.tableRows}
/>
<style>
    
  {`
    .specs-table {
      width: 100%;
      max-width: 1200px;
      border-collapse: collapse;
      margin: 1rem auto;
      table-layout: auto;
    }

    .specs-table th, .specs-table td {
      padding: 0.8rem 1.5rem;
      text-align: center;
      border: 2px solid #e5e7eb;
      white-space: nowrap;
      font-size: 19px;
    }

    .specs-table thead tr {
      background-color: #dc2626;
      color: white;
    }

    .specs-table tbody tr:nth-child(odd) {
      background-color: #f3f4f6;
    }

    .specs-table tbody tr:nth-child(even) {
      background-color: white;
    }
  `}
</style>

        <p className="description2">*depending on machine models and specifications</p>
        <Applications
          title={`Applications for ${activeTab}`}
          images={currentContent.slideshowImages}
          points={currentContent.applicationPoints}
        />
    <div className="card-header">
       
       <p style={{fontSize:'42px',color:'black'}}>Videos</p>
</div>

<div className="card-wrapper3">
      <VedioCard
    videoTitle="EXTRUSION COATING LINE : JP 120+80 – 2650 CO-EX TD"
    videoThumbnail={require("../ExtrusionCoating/Assets/EX.jpg")}
    videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
  />
    <VedioCard
        videoTitle="POLYCOAT 1600 – EXTRUSION COATING LINE"
    videoThumbnail={require("../ExtrusionCoating/Assets/EX2.jpg")}
    videoUrl="https://youtu.be/3qPc2eCi_lg?list=TLGGPacicNLv7CEwNjAxMjAyNQ"
  />
      
      </div>

      <div className="card-wrapper3">
      <VedioCard
    videoTitle="CO-EXTRUSION COATING LINE"
    videoThumbnail={require("../ExtrusionCoating/Assets/EX3.jpg")}
    videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
  />
    <VedioCard
        videoTitle="5200 MM EXTRUSION COATING LINE"
    videoThumbnail={require("../ExtrusionCoating/Assets/EX4.jpg")}
    videoUrl="https://youtu.be/3qPc2eCi_lg?list=TLGGPacicNLv7CEwNjAxMjAyNQ"
  />
  </div>
  
  <div className="card-wrapper3">
      <VedioCard
    videoTitle="LAMINATION LINE : JP 90 CR 1600"
    videoThumbnail={require("../ExtrusionCoating/Assets/EX5.jpg")}
    videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
  />
 
      <VedioCard
        videoTitle="EXTRUSION COATING LINE FOR PAPER : JP 80 CRP 1600"
    videoThumbnail={require("../ExtrusionCoating/Assets/EX7.jpg")}
    videoUrl="https://youtu.be/3qPc2eCi_lg?list=TLGGPacicNLv7CEwNjAxMjAyNQ"
  />
  </div>
  
  
      </div>
    );
    
}
export default ExtrusionCoating;