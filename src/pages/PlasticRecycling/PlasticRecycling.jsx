import React from "react";
import "./PlasticRecycling.css"
import ScrollTransition from "../../Components/ScrollTransion/ScrollTransition";

const PlasticRecycling= () => {
    const sections = [
        {
            subtitle: "Woven Sacks",
            image: require("../PlasticRecycling/Assets/recycling1.jpg"),
            link: "/WovenSack",
            description: "Industrial grade woven sacks" // optional
          },
          {
            subtitle: "PET Washing Line",
            image: require("../PlasticRecycling/Assets/recycling2.jpg"), 
            link: "/products/pet-washing",
            description: "Advanced PET bottle washing systems"
          }
          // {
          //   subtitle: "Film Recycling Line",
          //   image: require("../PlasticRecycling/Assets/recycling4.jpg"),
          //   link: "/products/bottle-shredding",
          //   description: "Industrial shredding machines"
          // }
        // ... more sections
      ];
   
      
      const sections1 = [
        {
            subtitle: "Tape Extrusion",
            image: require("../PlasticRecycling/Assets/recycling-3.jpg"),
            link: "TapeExtrusion",
            description: "Industrial grade woven sacks" // optional
          },
          {
            subtitle: "Tape Winding",
            image: require("../PlasticRecycling/Assets/recycling-2.jpg"), 
            link: "WindingMachine",
            description: "Advanced PET bottle washing systems"
          },
          {
            subtitle: "Circular Looms",
            image: require("../PlasticRecycling/Assets/recycling-1.jpg"),
            link: "CircularLoom",
            description: "Complete HDPE recycling solutions"
          }
        // ... more sections
      ];
      const sections3 = [
        {
            subtitle: "Monofilament Line/Danline",
            image: require("../PlasticRecycling/Assets/recycling5.jpg"),
            link: "/Monofilament",
            description: "Industrial grade woven sacks" // optional
          },
          {
            subtitle: "Box-Strapping Line",
            image: require("../PlasticRecycling/Assets/recycling6.jpg"), 
            link: "/BoxStrapping",
            description: "Advanced PET bottle washing systems"
          },
      ];
      const sections4 = [
        {
            subtitle: "Sheet Extrusion Line",
            image: require("../PlasticRecycling/Assets/recycling7.jpg"),
            link: "/SheetExtrusion",
            description: "Industrial grade woven sacks" // optional
          },
          {
            subtitle: "Cast Film Line",
            image: require("../PlasticRecycling/Assets/recycling8.jpg"), 
            link: "/CastLine",
            description: "Advanced PET bottle washing systems"
          },
      ];
      const sections5 = [
        {
          subtitle: "Extrusion Coating",
          image: require("../PlasticRecycling/Assets/recycling0.jpg"),
          link: "/ExtrusionCoating",
          description: "Industrial shredding machines"
        }
        ,
        {
          subtitle: "Printing Machines",
          image: require("../PlasticRecycling/Assets/recycling-4.jpg"),
          link: "PrintingMachine",
          description: "Industrial shredding machines"
        }
        , 
        {
          subtitle: "Bag Conversion Machines",
          image: require("../PlasticRecycling/Assets/recycling-5.jpg"),
          link: "/products/bottle-shredding",
          description: "Industrial shredding machines"
        }
      ];
      const sections6 = [
          {
            subtitle: "Battery Box Recycling",
            image: require("../PlasticRecycling/Assets/recycling3.jpg"),
            link: "/BatteryBox",
            description: "Complete HDPE recycling solutions"
        },
      ];
      
      
    return(
<div>

<ScrollTransition 
 id="woven12"
  title="Woven Packaging" 
  sections={sections1}
  className="custom-class"
  titleClassName="custom-title-class"
/>
<ScrollTransition 
 id="woven13"
  title="Woven Packaging" 
  sections={sections5}
  className="custom-class"
  titleClassName="custom-title-class"
/>

<ScrollTransition 
  id="Plastic21"
  title="Plastic Recycling" 
  sections={sections}
  className="custom-class"
  titleClassName="custom-title-class"
/>
<ScrollTransition 
  id="Plastic22"
  title="Plastic Recycling" 
  sections={sections6}
  className="custom-class"
  titleClassName="custom-title-class"
/>

<ScrollTransition 
  id="Profile34"
  title="Profile Extrusion" 
  sections={sections3}
  className="custom-class"
  titleClassName="custom-title-class"
/>
<ScrollTransition 
   id="SheetFilm43"
  title="Sheet/Film Extrusion" 
  sections={sections4}
  className="custom-class"
  titleClassName="custom-title-class"
/>

</div>
    )
}


export default PlasticRecycling;