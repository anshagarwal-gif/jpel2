import React, { useState } from 'react';
import { Navigation, ProductImage, SpecsTable, Applications, ApplicationsSlideshow, ProductWithDownloadCatalogue } from '../../Components/ProductFormat/ReusableComponents';
import "../SheetExtrusion/SheetExtrusion.css"
import VedioCard from "../../Components/VedioCard";
const SheetExtrusion = () => {
    const [activeTab, setActiveTab] = useState('Product');
    
        // Tab-specific content
        const tabContent = {
          'Product': {
            image: require("../SheetExtrusion/Assets/tab.jpg"),
            description: 'Note:-The picture may show optional equipment’s that are not part of the standard supply. For detail, refer to the quotation.',
            tableHeaders: ['EXTRUDER Ø MM ','DIE (MM)','OUT PUT KGS/HR ','CALENDER DIA X LENGTH (MM)','MAX. SHEET WIDTH (MM)'],
            tableRows: [
              ['70 ' ,'640','HIPS 100-120 PP 70-80','200 X 700 ','540 '],
              ['70 + 40 ','640 ','HIPS 100-120 PP 70-80 ','200 X 700','540 '],
            
              ['70 + 40 ','850','HIPS 100-120 PP 70-80','200 X 900 ','700'],
              ['80 + 40', '640','HIPS 180-200 PP 130-150','310 X 700','540'],
              ['80 + 40 ','850 ','HIPS 180-200 PP 130-150 ','310 X 900','700'],
              ['80',     '1000','HIPS 180-200 PP 130-150 ','310 X 1050','850'],
              ['90  ',   '1000','HIPS 225-250 PP 150-180 ','400 X 1050','850 '],
              ['80 ',     '1150','HIPS 180-200 PP 130-150','310 X 1200 ','1000'],
              ['90 ',     '1150','HIPS 225-250 PP 150-180','400 X 1200','1000'],
              ['90 V ',   '1400','HIPS 225-250 ABS 225-250','400 X 1600','1250 '],
              ['120 V  ','1400','HIPS 350-400 ABS 350-400','400 X 1600 ','1250 '],
              ['120 V + 75 V + 50', '1400','HIPS 600-650 ABS 600-650 ','400 X 1600 ','1250 '],
              ['80 V', '640','PET 120-150 ','310 X 700','540 '], 
            ],
            slideshowImages: [require("../SheetExtrusion/Assets/app.jpg"),require("../SheetExtrusion/Assets/app1.jpg")],
            applicationPoints: ['Thermoforming/Vacuum Forming: Creating precise shapes for packaging and industrial components.',
'Office Supplies: Manufacturing durable files and folders.',
'Luggage: Producing robust and lightweight suitcase shells.',
'Office Furniture: Fabricating components for desks and chairs.',
'Roofing Materials: Developing weather-resistant sheets for construction.'],
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
          className="product-imageFila"
        />
      </div>
      
      <div className="content-sectionFila">
        <div className="descriptionFila">
          <p>
          JPEL offers state-of-the-art Monolayer and Multilayer Sheet Extrusion Lines designed for the manufacturing of HIPS (High Impact Polystyrene), ABS (Acrylonitrile Butadiene Styrene), PP (Polypropylene), PET (Polyethylene Terephthalate), and PVC (Polyvinyl Chloride) sheets. These versatile machines cater to a wide range of applications including thermoforming, vacuum forming, office files, luggage, office furniture, roofing, and various other industries requiring high-quality plastic sheets.
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
        <div className="card-header">
       
       <p style={{fontSize:'42px',color:'black'}}>Videos</p>
</div>

<div className="card-wrapper3">
      <VedioCard
    videoTitle="PET – SHEET LINE – DEMO FILM"
    videoThumbnail={require("../SheetExtrusion/Assets/SH.jpg")}
    videoUrl="https://youtu.be/F4DjbKUimLE?list=TLGGiaMvZ-PlGsAwNjAxMjAyNQ"
  />
  </div>
</div>
    )
}
export default SheetExtrusion;