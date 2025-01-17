import React, { useEffect } from 'react';
import './Aboutus.css';

const Aboutus = () => {
  const milestones = [
    {
      year: 1989,
      image: require("./Assets/Animation-2/26.jpg"),
      description: `Coat Hanger type T-Dies of sizes ranging from 300 mm to 4300 mm for Woven Sack/Lamination/ PVC Foam/PP Sheet
Pioneer in converting traditional blown die into flat T-Die with Quenching Tank and Hot Air Oven for PP Tape Line
`,
    },
    {
      year: 1990,
      image: require("./Assets/Animation-2/25.jpg"),
      description: `Needle type Fibrillation systems used for the production of fibrillated tapes for stitching threads for Rope/Twin`
    },
    {
      year: 1994,
      image: require("./Assets/Animation-2/24.jpg"),
      description: `Three layer Cast film Line for stretch / CPP Film, Exhibited the first time in Plastindia 1994.
Automatic Recycling Line with Backflush Screen Changer, Exhibited in Plastindia 1994`
    },
    {
      year: 1995,
      image: require("./Assets/Animation-2/23.jpg"),
      description: `1600 mm Paper Lamination having Turret Unwinder & Surface Winder with auto splicing and auto loading & unloading arrangement. Exhibited in Plastivision 1995`
    },
    {
      year: 1996,
      image: require("./Assets/Animation-2/22.jpg"),
      description: `Blown Film Plant with 95% Gusseting and online sealing & cutting for Jumbo Bag Liner.
Tape Line for fibrillated Tape for Rope.
`
    },
    {
      year: 1997,
      image: require("./Assets/Animation-2/21.jpg"),
      description: `Two Layer Lamination cum Cast Film Plant, Exhibited in Plastindia 1997
2500 mm Extrusion Coating Line for Woven Sack/Jumbo Bag.
`
    },
    {
      year: 1998,
      image: require("./Assets/Animation-2/20.jpg"),
      description: `3300 mm Extrusion Coating Line for coating of tarpaulin / Cotton / Jute / Non-woven
Low Shrinkage Tape Line for manufacturing rope.
`
    },
    {
      year: 2000,
      image: require("./Assets/Animation-2/19.jpg"),
      description: `Two layer sheet plant for thin sheets for Stationary purpose, Exhibited in Plastindia 2000
`
    },
    {
      year: 2001,
      image: require("./Assets/Animation-2/18.jpg"),
      description: `Mono layer sheet plant for 1400 mm width with thickness up to 20 mm & longitudinal cutter and output up to 400 Kg/hr.
2650 mm Bid-less Die for Extrusion Coating.
`
    },
    {
      year: 2002,
      image: require("./Assets/Animation-2/17.jpg"),
      description: `High-Speed Tandem Lamination Line for both side coating on tarpaulin fabric at a time & with different (two) colors.`
    },
    {
      year: 2003,
      image: require("./Assets/Animation-2/16.jpg"),
      description: `5-Layer Lamination Plant for Flexible Packaging, Exhibited in Plastindia 2003
Inverter Driven Cheese Winders for woven sack, Exhibited in Plastindia 2003`
    },
    {
      year: 2005,
      image: require("./Assets/Animation-2/15.jpg"),
      description: `3300 mm Tandem Extrusion Coating Line.
Washing Cleaning Line 500 Kg/Hr. for PET
Monofilament Line having 80 mm Extruder and output up to 250 Kg/Hr.`
    },
    {
      year: 2006,
      image: require("./Assets/Animation-2/14.jpg"),
      description: `Three Layer Vented Sheet Line up to 600 Kg/Hr output, Exhibited in Plastindia 2006
1750 mm Tape Line up to 600 Kg/Hr output, Exhibited in Plastindia 2006
8 Colour CI Flexo Printing for woven sack, Exhibited in Plastindia 2006`
    },
    {
      year: 2007,
      image: require("./Assets/Animation-2/13.jpg"),
      description: `2300 mm Sheet Line: Accumulator & Automatic Cutting for PP/HDPE/EVA/HIPS/ABS & Carpet (for automobile application)
2400 mm Extrusion Coating Line for Carpet with Accumulator and Automatic Cutting (for automobile application)`
    },
    {
      year: 2008,
      image: require("./Assets/Animation-2/12.jpg"),
      description: `High Output 500 Kg/Hr. Vented Recycling Line, 120 mm Vented Extruder with 35:1 L/D Ratio.
3400 mm 5 Layer Cast Film Line with 5 Extruder with output up to 1000 kg/hr.`
    },
    {
      year: 2009,
      image: require("./Assets/Animation-2/11.jpg"),
      description: `2300 mm 4 Extruder with 5 Layer Cast Film Line, 1000 Kgs/hr, Exhibited in Plastindia 2009
600 Kg/Hr. Tape Line with Auto Doffing Cheese Winders & Inverter driven cheese winders, Exhibited in Plastindia 2009
`
    },
    {
      year: 2010,
      image: require("./Assets/Animation-2/10.jpg"),
      description: `Developed Scrim Lamination for strong & heavy construction fabric.`
    },
    {
      year: 2013,
      image: require("./Assets/Animation-2/9.jpg"),
      description: `Launched JAIKO brand Circular Weaving (Circular Looms) machines, Exhibited in Plastindia 2012`
    },
    {
      year: 2014,
      image: require("./Assets/Animation-2/8.jpg"),
      description: `900 Kgs/Hr Capacity, Tape Stretching Line with Tape Winders`
    },
    {
      year: 2015,
      image: require("./Assets/Animation-2/7.jpg"),
      description: `Extrusion Coating Line for Paper and Aluminium Foil – Model: 80CRP1600`
    },
    {
      year: 2016,
      image: require("./Assets/Animation-2/6.jpg"),
      description: `7 layers, 5200 mm width Tandem Co-Ex Lamination having 4 nos. of Extruders and 2 nos. of Lamination Stations and 2 nos. of sandwich stations. 
First time in INDIA.`
    },
    {
      year: 2017,
      image: require("./Assets/Animation-2/5.jpg"),
      description: `6000 mm Width Extrusion Coating line for tarpaulin (PP/HDPE)

Co-Ex Lamination for Flexible Packaging having Extruders of 90+70 and width 1450 mm. Full speed auto splicing (200 meters/min)
`
    },
    {
      year: 2018,
      image: require("./Assets/Animation-2/4.jpg"),
      description: `India's first 6 Layer Extrusion Coating and Lamination Machine features six extruders, allowing customization of material composition. The PolyCoat series offers full-speed auto-splicing and a design speed of up to 200 m/min, ensuring high-quality coating. The Vega Star Circular Weaving Loom achieves speeds up to 1200 PPM, enhancing productivity and energy efficiency with 12-15% power savings. The ValveTech 35 conversion line features advanced automation, producing up to 35 valve type bags per minute, ideal for packing materials like cement and salt, with options for laminated fabric.
`
    },
    {
      year: 2019,
      image: require("./Assets/Animation-2/3.jpg"),
      description: `Participant in INDIAPLAST-2019 Exhibition held at India Expo Centre, Greater Noida, Delhi NCR – India during 28th Feb – 4th March, 2019. JPEL has Live Demonstrated 600 Kgs/Hr Tape Stretching Line and Tape winders, High-speed Extrusion Coating Line, Circular Weaving Machine Vega STAR having 1200 ppm with a direct drive system.`,
      videoLink:'JPEL at INDIAPLAST-2019'
   
    },
    {
      year: 2024,
      image: require("./Assets/Animation-2/2.jpg"),
      description: `Participated in Plastfocus 2024 to proudly introduce and showcase the circular weaving loom equipped with internal lamination technology, marking its first-ever presentation in India. This innovative display highlighted cutting-edge advancements in weaving technology, attracting significant attention from industry leaders and setting a new benchmark for the Indian manufacturing sector.
`
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    document.querySelectorAll('.milestone-content').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="imageContainer3">
        <img
          className="ExportSection"
          alt="ExportSection"
          src={require('../Aboutus/Assets/aboutusheader.png')}
        />
      </div>
      
      <div className="timeline-container">
        {milestones.map((milestone, index) => (
          <div key={milestone.year} className="milestone-section">
            <h2 className="year-header">Year {milestone.year}</h2>
            <div className="timeline-segment" />
            
            <div className={`milestone-content ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="image-container">
                <img 
                  src={milestone.image} 
                  alt={`Milestone ${milestone.year}`}
                  className="milestone-image"
                />
              </div>
              
              <div className="description-container">
                <p className="milestone-description">{milestone.description}</p>
                {milestone.videoLink && (
                  <p className="video-link">
                    Please view Short Film{' '}
                    <span className="link-text">{milestone.videoLink}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aboutus;