import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Phone, Mail } from 'lucide-react';
import './BBB-news.css';
import BBB from "./assets/BBB.jpg";
import BBB1Video from './assets/BBB-1.webm';
import BBB2Video from './assets/BBB-2.webm';

const BBBnews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState({ images: false });

  // Video and image data for the grid
  const mediaItems = [
    {
      id: 1,
      type: 'video',
      src: BBB1Video, // Video from public folder
      alt: "Manufacturing process demonstration"
    },
    {
      id: 2,
      type: 'video',
      src: BBB2Video, // Video from public folder
      alt: "Block bottom valve bag making process"
    },
    {
      id: 3,
      type: 'image',
      src: BBB,
      alt: "JP Group and Gachn International partnership"
    }
  ];

  // Content data
  const eventContent = {
    title: "JP Group Partners with GACHN Group",
    secondaryTitle: "A Strategic Collaboration for Innovation",
    description: "JP Group is proud to announce the partnership with Xiamen Gachn International Co., Ltd. This collaboration aims to improve sales and service capabilities for Gachn's advanced Smart Model Block Bottom Valve Sack Making Machine (FKO008-III)."
  };

  const detailedContent = {
    sections: [
      {
        title: "A Strategic Collaboration for Innovation",
        content: "Founded in 2011 and listed on the NEEQ in 2015, Gachn International brings extensive expertise. With over 200 national patents and a reputation for innovation Gachn has become a trusted partner for various industries including paper sanitary products and cement packaging. Their latest product the FKO008-III is a 3rd generation model for block bottom valve bag making machine that showcases their commitment to quality. Featuring numerous patented technologies that distinguish it in the polypropylene (PP) woven valve bag production sector."
      },
      {
        content: "JP Group that is well recognized for its industry knowledge and focus on the customers will lead the sales, after-sales & service for this state-of-the-art machine in India. This partnership combines JP Group's strong presence and trust in India with Gachn's emerging technology promising a smooth experience for customers seeking efficient and reliable packaging solutions."
      },
      {
        content: "The FKO008-III is ideal for industries that need strong packaging solutions including cement, chemicals, fertilizers and food products. Its ability to produce valve sacks with consistent quality and efficiency makes it essential for manufacturers looking to streamline operations and cut costs."
      },
      {
        title: "Empowering the Market with Advanced Technology",
        content: "With JP Group leading this launch, the FKO008-III is set to reshape the block bottom valve bag converting industry. The company's dedicated sales engineers and service teams will provide personalized support ensuring that clients get comprehensive help from installation and commissioning to technical training and maintenance."
      },
      {
        quote: {
          text: "We are excited to partner with Gachn International to bring this revolutionary machine to our customers completing our entire woven portfolio for growing valve sacks demand in India. The FKO008-III combines speed, precision and cost-saving innovations. It fits perfectly with our goal to provide value-driven solutions.",
          author: "Mr Rakesh Patkar",
          position: "Business Development Executive, JP Group"
        }
      },
      {
        title: "A Proven Track Record",
        content: "Gachn's technology has already powered over 50 successful projects worldwide including installations in Uzbekistan and China. This collaboration marks a significant step in expanding its presence in India with JP Group at the forefront of meeting the increasing demand for high-performance packaging equipment."
      },
      {
        title: "Looking Ahead",
        content: "As JP Group launches the FKO008-III, the partnership with Gachn International highlights a shared focus on innovation, quality and customer satisfaction. This launch not only strengthens JP Group's offerings but also positions it as a key player in the global PP woven packaging machinery industry."
      }
    ],
    contact: {
      title: "For more information about the Smart Model Block Bottom Valve Sack Making Machine or to learn how this technology can help your operations contact us at",
      person: "Samarth Srivastava",
      position: "Marketing & Sales Manager",
      phone: "+91-7046044446",
      email: "sales@jpel.in"
    }
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id');
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('.bbb-animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div className="bbb-events-container">
        {/* Main Title */}
        <h1 className="bbb-events-title">
          {eventContent.title}
        </h1>

        {/* Content Container */}
        <div className="bbb-events-content">
          {/* Media Grid Section */}
          <div className="bbb-animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200"
            data-id="images"
            style={isVisible.images ? { opacity: 1, transform: 'translateY(0)' } : {}}>
            <div className="bbb-media-grid">
              {/* Left side - Two videos stacked */}
              <div className="bbb-video-column">
                <div className="bbb-video-container">
                  <video
                    src={mediaItems[0].src}
                    alt={mediaItems[0].alt}
                    className="media-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="bbb-video-container">
                  <video
                    src={mediaItems[1].src}
                    alt={mediaItems[1].alt}
                    className="media-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div>

              {/* Right side - Single image */}
              <div className="bbb-image-column">
                <div className="bag-image-container">
                  <img
                    src={mediaItems[2].src}
                    alt={mediaItems[2].alt}
                    className="media-image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="bbb-text-content">
            <h2 className="bbb-content-title">
              {eventContent.secondaryTitle}
            </h2>

            <p className="bbb-content-description">
              {eventContent.description}
            </p>

            {/* Read More Button */}
            <button
              onClick={openModal}
              className="bbb-read-more-btn"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="bbb-modal-overlay" onClick={closeModal}>
          <div className="bbb-modal-container" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header with Image */}
            <div className="bbb-modal-header">
              <div className="bbb-modal-header-content">
                {/* Header Image */}
                <div className="bbb-modal-header-image">
                  <img
                    src={BBB}
                    alt="JP Group Partnership"
                    className="bbb-header-image"
                  />
                  <div className="bbb-header-image-overlay"></div>
                  <div className="bbb-header-text-overlay">
                    <h2 className="bbb-modal-title">{eventContent.title}</h2>
                  </div>
                </div>
              </div>
              <button onClick={closeModal} className="bbb-modal-close-btn">
                <X className="bbb-close-icon" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="bbb-modal-content">
              {detailedContent.sections.map((section, index) => (
                <div key={index} className="bbb-modal-section">
                  {section.title && (
                    <h3 className="bbb-section-title">{section.title}</h3>
                  )}

                  {section.content && (
                    <p className="bbb-section-content">{section.content}</p>
                  )}

                  {section.quote && (
                    <div className="bbb-quote-container">
                      <blockquote className="bbb-quote-text">
                        "{section.quote.text}"
                      </blockquote>
                      <div className="bbb-quote-author">
                        <span className="bbb-author-name">{section.quote.author}</span>
                        <span className="bbb-author-position">({section.quote.position})</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Contact Section */}
              <div className="bbb-contactinf-section">
                <h3 className="bbb-section-title">Contact Information</h3>
                <p className="bbb-contact-intro">{detailedContent.contact.title}</p>

                <div className="bbb-contact-card">
                  <div className="bbb-contact-person">
                    <h4 className="bbb-contact-name">{detailedContent.contact.person}</h4>
                    <p className="bbb-contact-position">{detailedContent.contact.position}</p>
                  </div>

                  <div className="bbb-contact-details">
                    <a href={`tel:${detailedContent.contact.phone}`} className="bbb-contact-link">
                      <Phone className="bbb-contact-icon" />
                      <span>{detailedContent.contact.phone}</span>
                    </a>

                    <a href={`mailto:${detailedContent.contact.email}`} className="bbb-contact-link">
                      <Mail className="bbb-contact-icon" />
                      <span>{detailedContent.contact.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BBBnews;