import React, { useState, useEffect } from 'react';
import './ScrollTransition.css';

const ScrollTransition = ({ 
  id='',
  title, 
  sections=[],
  className = '',
  titleClassName = '' 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  
    const handleScroll = () => {
      if (!id || sections.length === 0) {
        return;
      }
      const transitionSection = document.getElementById(id);
      


       // Use the unique ID
      if (!transitionSection) {
        console.error(`Element with ID "${id}" not found.`);
        return;
      }
      const rect = transitionSection.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      
      // Update visibility state
      if (isInView !== isVisible) {
        setIsVisible(isInView);
      }

      // Only calculate progress if section is in view
      if (isInView) {
        // Calculate progress based on how much of the section has been scrolled
        const totalHeight = rect.height - window.innerHeight;
        const scrolledHeight = Math.abs(rect.top);
        const progress = Math.min(Math.max(scrolledHeight / totalHeight, 0), 1);
        
        // Calculate new index based on progress
        const newIndex = Math.min(
          Math.floor(progress * sections.length),
          sections.length - 1
        );

        // Only update if index has changed and is valid
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < sections.length) {
          setActiveIndex(newIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex, sections, id, isVisible]);
  if (!id || sections.length === 0) {
    return null;
  }

  return (
    <section id={id} className={`transition-section ${className}`}>
      {title && <h1 className={`transition-title ${titleClassName}`}>{title}</h1>}
      
      <div className="transition-content">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`section-wrapper ${
              index === activeIndex ? 'active' : index < activeIndex ? 'previous' : 'next'
            }`}
          >
            <div 
              className="diagonal-image" 
              style={{ backgroundImage: `url(${section.image})` }}
            />
            <div className="content-overlay">
              <div className="content-box">
                <div className="navigation-container">
                  <span className="section-title">{section.subtitle}</span>
                  {section.link && (
                    <a href={section.link} className="arrow-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </section>
  );
};

export default ScrollTransition;