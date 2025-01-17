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

  useEffect(() => {
  
    const handleScroll = () => {
      
      const transitionSection = document.getElementById(id);


       // Use the unique ID
      if (!transitionSection) {
        console.error(`Element with ID "${id}" not found.`);
        return;
      }
      const rect = transitionSection.getBoundingClientRect();
      
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const progress = Math.abs(rect.top) / (rect.height - window.innerHeight);
        const newIndex = Math.floor(progress * sections.length);
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < sections.length) {
          setActiveIndex(newIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => 
      window.removeEventListener('scroll', handleScroll);
    
  }, [activeIndex, sections, id]);

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