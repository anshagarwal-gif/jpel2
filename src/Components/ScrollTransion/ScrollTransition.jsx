import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import './ScrollTransition.css';

// Import all images
import recyclingimg1 from '../../pages/PlasticRecycling/Assets/recycling-1.jpg';
import recyclingimg2 from '../../pages/PlasticRecycling/Assets/recycling-2.jpg';
import recyclingimg3 from '../../pages/PlasticRecycling/Assets/recycling-3.jpg';
import recyclingimg4 from '../../pages/PlasticRecycling/Assets/recycling-4.jpg';
import recyclingimg5 from '../../pages/PlasticRecycling/Assets/recycling-5.jpg';
import recyclingimg0 from '../../pages/PlasticRecycling/Assets/recycling0.jpg';
import recyclingimg1_2 from '../../pages/PlasticRecycling/Assets/recycling1.jpg';
import recyclingimg2_2 from '../../pages/PlasticRecycling/Assets/recycling2.jpg';
import recyclingimg3_2 from '../../pages/PlasticRecycling/Assets/recycling3.jpg';
import recyclingimg5_2 from '../../pages/PlasticRecycling/Assets/recycling5.jpg';
import recyclingimg6 from '../../pages/PlasticRecycling/Assets/recycling6.jpg';
import recyclingimg7 from '../../pages/PlasticRecycling/Assets/recycling7.jpg';
import recyclingimg8 from '../../pages/PlasticRecycling/Assets/recycling8.jpg';
import recyclingimg9 from '../../pages/PlasticRecycling/Assets/recycling-9.jpg';

function ScrollTransition() {
  const [activeSection, setActiveSection] = useState(0);
  const [visibleSections, setVisibleSections] = useState([]);

  const recyclingData = React.useMemo(() => ({
    "woven-packaging": [
      {
        id: "woven12",
        title: "Woven Packaging",
        sections: [
          { subtitle: "Tape Extrusion", image: recyclingimg3, link: "/TapeExtrusion", description: "Industrial grade woven sacks" },
          { subtitle: "Winding Machines", image: recyclingimg2, link: "/WindingMachine", description: "Advanced PET bottle washing systems" },
          { subtitle: "Circular Looms", image: recyclingimg1, link: "/CircularLoom", description: "Complete HDPE recycling solutions" }
        ]
      },
      {
        id: "woven13",
        title: "Woven Packaging",
        sections: [
          { subtitle: "Extrusion Coating", image: recyclingimg0, link: "/ExtrusionCoating", description: "Industrial shredding machines" },
          { subtitle: "Printing Machines", image: recyclingimg4, link: "/PrintingMachine", description: "Industrial shredding machines" },
          { subtitle: "Bag Conversion Machines", image: recyclingimg5, link: "/Bag-Conversion", description: "Industrial shredding machines" }
        ]
      }
    ],
    "plastic-recycling": [
      {
        id: "Plastic21",
        title: "Plastic Recycling",
        sections: [
          { subtitle: "Woven Sacks", image: recyclingimg1_2, link: "/WovenSack", description: "Industrial grade woven sacks" },
          { subtitle: "PET Washing Line", image: recyclingimg2_2, link: "/PET", description: "Advanced PET bottle washing systems" }
        ]
      },
      {
        id: "Plastic22",
        title: "Plastic Recycling",
        sections: [
          { subtitle: "Battery Box Recycling", image: recyclingimg3_2, link: "/BatteryBox", description: "Complete HDPE recycling solutions" }
        ]
      }
    ],
    "profile-extrusion": [
      {
        id: "Profile34",
        title: "Profile Extrusion",
        sections: [
          { subtitle: "Monofilament Line/Danline", image: recyclingimg5_2, link: "/Monofilament", description: "Industrial grade woven sacks" },
          { subtitle: "Box-Strapping Line", image: recyclingimg6, link: "/BoxStrapping", description: "Advanced PET bottle washing systems" }
        ]
      }
    ],
    "sheet-film-extrusion": [
      {
        id: "SheetFilm43",
        title: "Sheet/Film Extrusion",
        sections: [
          { subtitle: "Sheet Extrusion Line", image: recyclingimg7, link: "/SheetExtrusion", description: "Industrial grade woven sacks" },
          { subtitle: "Cast Film Line", image: recyclingimg8, link: "/CastLine", description: "Advanced PET bottle washing systems" },
          { subtitle: "Flexible Packaging", image: recyclingimg9, link: "/Flexible", description: "Advanced PET bottle washing systems" }
        ]
      }
    ]
  }), []);

  // Flatten recyclingData
  const slides = React.useMemo(() => {
    let slideId = 0;
    const allSlides = [];

    Object.entries(recyclingData).forEach(([category, sectionGroups]) => {
      sectionGroups.forEach(group => {
        group.sections.forEach(section => {
          allSlides.push({
            id: slideId++,
            type: 'image',
            image: section.image,
            title: group.title,
            subtitle: section.subtitle,
            description: section.description,
            link: section.link,
            category: category
          });
        });
      });
    });

    return allSlides;
  }, [recyclingData]);

  const scrollToNextSection = (index) => {
    const nextSection = document.getElementById(`scroll-section-${index + 1}`);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Create a container element for the component
    const containerElement = document.querySelector('.scroll-transition-container');
    
    if (!containerElement) return;
    
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const sectionIndex = parseInt(sectionId.split('-')[2]);

          setActiveSection(sectionIndex);
          setVisibleSections(prev => (
            !prev.includes(sectionIndex) ? [...prev, sectionIndex] : prev
          ));
        }
      });
    }, { threshold: 0.5 });

    slides.forEach((_, i) => {
      const section = document.getElementById(`scroll-section-${i}`);
      if (section) {
        sectionObserver.observe(section);
      }
    });

    return () => {
      slides.forEach((_, i) => {
        const section = document.getElementById(`scroll-section-${i}`);
        if (section) {
          sectionObserver.unobserve(section);
        }
      });
    };
  }, [slides]);

  const progressPercentage = (activeSection / (slides.length - 1)) * 100;

  return (
    <div className="scroll-transition-container">
      {/* Progress Bar */}
      <div className="scroll-transition-progress-bar" style={{ width: `${progressPercentage}%` }} />

      {/* Navigation Dots */}
      <div className="scroll-transition-navigation-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              const el = document.getElementById(`scroll-section-${index}`);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`scroll-transition-nav-dot ${activeSection === index ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Sections */}
      {slides.map((slide, index) => (
        <section
          id={`scroll-section-${index}`}
          key={slide.id}
          className={`scroll-transition-section scroll-transition-image-section ${visibleSections.includes(index) ? 'visible' : ''}`}
        >
          <div
            className="scroll-transition-background-image"
            style={{ backgroundImage: `url(${slide.image})` }}
          />

          <div className="scroll-transition-content-overlay">
            <h2>{slide.title}</h2>
            <h5>{slide.subtitle}</h5>
            <p>{slide.description}</p>
            <a href={slide.link} className="scroll-transition-arrow-button">
              <ArrowRight size={24} />
            </a>
          </div>

          {index < slides.length - 1 && (
            <ChevronDown
              className="scroll-transition-scroll-indicator"
              onClick={() => scrollToNextSection(index)}
            />
          )}
        </section>
      ))}
    </div>
  );
}

export default ScrollTransition;