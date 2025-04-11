import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';
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

function ScrollTransition({ recyclingData, initialCategory, onlyShowCategory }) {
  const [activeSection, setActiveSection] = useState(0);
  const [visibleSections, setVisibleSections] = useState([]);
  const [showFooter, setShowFooter] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const scrolling = useRef(false);
  const location = useLocation();

  // Define image mapping for sections
  const imageMapping = React.useMemo(() => ({
    "TapeExtrusion": recyclingimg3,
    "WindingMachine": recyclingimg2,
    "CircularLoom": recyclingimg1,
    "ExtrusionCoating": recyclingimg0,
    "PrintingMachine": recyclingimg4,
    "Bag-Conversion": recyclingimg5,
    "WovenSack": recyclingimg1_2,
    "PET": recyclingimg2_2,
    "BatteryBox": recyclingimg3_2,
    "Monofilament": recyclingimg5_2,
    "BoxStrapping": recyclingimg6,
    "SheetExtrusion": recyclingimg7,
    "CastLine": recyclingimg8,
    "Flexible": recyclingimg9
  }), []);

  // Enhance recyclingData with images
  const enhancedRecyclingData = React.useMemo(() => {
    if (!recyclingData) return {};
    
    const enhanced = {};
    
    Object.entries(recyclingData).forEach(([category, sectionGroups]) => {
      enhanced[category] = sectionGroups.map(group => ({
        ...group,
        sections: group.sections.map(section => {
          // Extract the path part after the last slash
          const pathKey = section.link.split('/').pop();
          return {
            ...section,
            image: imageMapping[pathKey] || recyclingimg0 // Fallback image
          };
        })
      }));
    });
    
    return enhanced;
  }, [recyclingData, imageMapping]);

  // Generate slides based on filtering criteria
  const slides = React.useMemo(() => {
    let slideId = 0;
    const allSlides = [];

    if (!enhancedRecyclingData) return [];

    Object.entries(enhancedRecyclingData).forEach(([category, sectionGroups]) => {
      // If onlyShowCategory is true, filter by initialCategory
      if (!onlyShowCategory || category === initialCategory) {
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
              category: category,
              groupId: group.id
            });
          });
        });
      }
    });

    return allSlides;
  }, [enhancedRecyclingData, initialCategory, onlyShowCategory]);

  // Find specific product in URL
  useEffect(() => {
    if (!slides.length) return;
    
    const pathParts = location.pathname.split('/');
    const lastPathPart = pathParts[pathParts.length - 1];
    
    // Find index of product in slides
    const productIndex = slides.findIndex(slide => {
      const productPath = slide.link.substring(1); // Remove leading slash
      return productPath === lastPathPart;
    });
    
    // If found, navigate to that slide
    if (productIndex !== -1) {
      setTimeout(() => {
        navigateToSection(productIndex);
      }, 200);
    } else if (initialCategory) {
      // Otherwise, if a category is selected, go to first slide of that category
      const firstCategorySlide = slides.findIndex(slide => slide.category === initialCategory);
      if (firstCategorySlide !== -1) {
        setTimeout(() => {
          navigateToSection(firstCategorySlide);
        }, 200);
      }
    }
  }, [location.pathname, slides, initialCategory]);

  // Handle mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = containerRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the center of the container
      const x = (clientX / width - 0.5) * 2; // -1 to 1
      const y = (clientY / height - 0.5) * 2; // -1 to 1
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Handle wheel events to control scrolling with the dots
  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      
      // Debounce the scroll event
      if (scrolling.current) return;
      scrolling.current = true;
      
      // Determine direction
      if (e.deltaY > 0) {
        // Scroll down
        if (activeSection < slides.length - 1) {
          navigateToSection(activeSection + 1);
        }
      } else {
        // Scroll up
        if (activeSection > 0) {
          navigateToSection(activeSection - 1);
        }
      }
      
      // Reset the scrolling lock after a delay
      setTimeout(() => {
        scrolling.current = false;
      }, 800);
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      
      return () => {
        container.removeEventListener('wheel', handleWheel);
      };
    }
  }, [activeSection, slides.length]);

  // Navigate to a specific section
  const navigateToSection = (index) => {
    if (index >= 0 && index < slides.length) {
      // Set footer visibility
      if (index === slides.length - 1) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
      
      // Update active section state
      setActiveSection(index);
      setVisibleSections(prev => (
        !prev.includes(index) ? [...prev, index] : prev
      ));
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (activeSection < slides.length - 1) {
          navigateToSection(activeSection + 1);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (activeSection > 0) {
          navigateToSection(activeSection - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSection, slides.length]);

  // Apply styles to hide scrollbar globally, but only within an ID to prevent affecting other elements
  useEffect(() => {
    // Create a style element
    const style = document.createElement('style');
    style.innerHTML = `
      #scroll-transition-component-root {
        overflow: hidden !important;
      }
      
      #scroll-transition-component-root *::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }
      
      #scroll-transition-component-root * {
        -ms-overflow-style: none !important;
        scrollbar-width: none !important;
      }
    `;
    
    // Append style to document head
    document.head.appendChild(style);
    
    // Clean up function
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const progressPercentage = slides.length > 1 ? (activeSection / (slides.length - 1)) * 100 : 0;

  // If no data is provided or no slides after filtering
  if (!slides.length) {
    return <div>No products available</div>;
  }

  return (
    <div id="scroll-transition-component-root">
      <div 
        className="scroll-transition-container" 
        ref={containerRef}
        style={{ 
          perspective: '1000px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Progress Bar */}
        <div className="scroll-transition-progress-bar" style={{ width: `${progressPercentage}%` }} />

        {/* Fixed Navigation Dots */}
        <div className="scroll-transition-navigation-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => navigateToSection(index)}
              className={`scroll-transition-nav-dot ${activeSection === index ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Stack all sections absolutely positioned */}
        <div style={{ position: 'relative', height: '100vh', width: '100%', perspective: '1000px' }}>
          {slides.map((slide, index) => (
            <section
              id={`scroll-section-${index}`}
              key={slide.id}
              data-group-id={slide.groupId}
              className={`scroll-transition-section ${activeSection === index ? 'visible' : ''}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: activeSection === index ? 1 : 0,
                visibility: activeSection === index ? 'visible' : 'hidden',
                zIndex: activeSection === index ? 2 : 1
              }}
            >
              <div
                className="scroll-transition-background-image"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  transform: activeSection === index ? 
                    `scale(1.05) translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)` : 
                    'scale(1.5)',
                }}
              />

              <div 
                className="scroll-transition-content-overlay"
                style={{
                  transform: activeSection === index ? 
                    `translate3d(${mousePosition.x * 20}px, ${mousePosition.y * 20}px, 0)` : 
                    'translate3d(0, 30px, 0)'
                }}
              >
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
                  onClick={() => navigateToSection(index + 1)}
                />
              )}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollTransition;