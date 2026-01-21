import './ServicesShowcase.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTools, FaArrowRight, FaPlay, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import { FaWifi } from 'react-icons/fa';
import img1 from "../assets/ShowcaseSparesImg1.png";
import img2 from "../assets/ShowcaseSparesImg2.png";
import img3 from "../assets/ShowcaseSparesImg3.png";
import sparesBackground from "../assets/SparesBackground.JPG";
import iot1 from "../assets/iot-1.png";
import iot2 from "../assets/iot-2.png";
import iot3 from "../assets/iot-3.png";
import iot4 from "../assets/iot4.png";
const ServicesShowcase = () => {
  const navigate = useNavigate();
  // Feature data with corresponding background images
  const featureData = [
    {
      id: 1,
      feature: "Bulk Ordering Made Easy - Add multiple spares, adjust quantities, and place large orders in a single checkout.",
      backgroundImage: img1
    },
    {
      id: 2,
      feature: "Machine-Wise Spare Catalog - Find the right spare parts instantly, organized by machine model and configuration.",
      backgroundImage: img2
    },
    {
      id: 3,
      feature: "Order Confirmation and Tracking - Unique order IDs with confirmation status",
      backgroundImage: img3
    }
  ];

  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [activeIoTFeatureIndex, setActiveIoTFeatureIndex] = useState(0);

  // IoT feature data with corresponding background images
  const iotFeatureData = [
    {
      id: 1,
      feature: "Monitor - real-time monitoring of machines through custom dashboards, enabling better control and smarter decision-making",
      backgroundImage: iot1
    },
    {
      id: 2,
      feature: "Report - Delivers real-time Stop, Production, Quality, and Shift Reports for complete operational visibility and control",
      backgroundImage: iot2
    },
    {
      id: 3,
      feature: "Record - production data, downtime logs, quality parameters, machine performance, and alarm history to ensure complete traceability ",
      backgroundImage: iot3
    },
    {
      id: 4,
      feature: "Analysis - Advanced analytics that help you understand performance, efficiency, and losses in real time",
      backgroundImage: iot4
    }
  ];

  // Automatically cycle through background images in a loop for Spare Parts
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex((prevIndex) => (prevIndex + 1) % featureData.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [featureData.length]);

  // Automatically cycle through background images in a loop for IoT
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIoTFeatureIndex((prevIndex) => (prevIndex + 1) % iotFeatureData.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [iotFeatureData.length]);

  const services = [
    {
      id: 1,
      title: "Spare Parts Services",
      subtitle: "",
      description: "",
      features: featureData.map(f => f.feature),
      icon: <FaTools />,
      backgroundImages: featureData.map(f => f.backgroundImage),
      activeBackgroundIndex: activeFeatureIndex,
      contentPosition: "left"
    },
    {
      id: 2,
      title: "IoT Services",
      subtitle: "Smart Connected Solutions",
      description: "",
      features: iotFeatureData.map(f => f.feature),
      icon: <FaWifi />,
      backgroundImages: iotFeatureData.map(f => f.backgroundImage),
      activeBackgroundIndex: activeIoTFeatureIndex,
      contentPosition: "right"
    }
  ];

  return (
    <section className="services-showcase">
      <div className="services-container">
        <div className="services-header">
          <div className="header-accent"></div>
          <h2 className="services-title">
            <span className="title-highlight">Our</span> Services
          </h2>
          <p className="services-subtitle">
            Transforming industries through innovative technology and unmatched expertise
          </p>
        </div>

        <div className="services-stack">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-panel ${service.contentPosition}`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {service.id === 1 ? (
                <div
                  className={`panel-background ${service.id === 1 ? 'spares-white-bg' : 'iot-white-bg'}`}
                  style={service.id === 1 ? { backgroundImage: `url(${sparesBackground})` } : {}}
                ></div>
              ) : (
                service.id === 2 ? (
                  <div
                    className={`panel-background ${service.id === 1 ? 'spares-white-bg' : 'iot-white-bg'}`}
                    style={service.id === 1 ? { backgroundImage: `url(${sparesBackground})` } : {}}
                  ></div>
                ) : (
                  <div className="panel-background">
                    {service.backgroundImages ? (
                      <>
                        {service.backgroundImages.map((bgImage, idx) => (
                          <div
                            key={idx}
                            className={`background-image-wrapper ${idx === service.activeBackgroundIndex ? 'active' : idx === (service.activeBackgroundIndex - 1 + service.backgroundImages.length) % service.backgroundImages.length ? 'prev' : ''}`}
                          >
                            <img
                              src={bgImage}
                              alt={service.title}
                              className="background-image"
                            />
                            <div className="image-gradient-overlay"></div>
                          </div>
                        ))}
                        <div className="background-image-indicators">
                          {service.backgroundImages.map((_, idx) => (
                            <div
                              key={idx}
                              className={`image-indicator ${idx === service.activeBackgroundIndex ? 'active' : ''}`}
                            />
                          ))}
                        </div>
                      </>
                    ) : (
                      <img
                        src={service.backgroundImage}
                        alt={service.title}
                        className="background-image"
                      />
                    )}
                    <div className="background-overlay"></div>
                  </div>
                  // )
                ))}

              {service.id === 1 && service.backgroundImages && (
                <div className="spares-images-container desktop-only">
                  {service.backgroundImages.map((bgImage, idx) => (
                    <div
                      key={idx}
                      className={`spares-image-wrapper ${idx === service.activeBackgroundIndex ? 'active' : ''}`}
                    >
                      <img
                        src={bgImage}
                        alt={service.title}
                        className="spares-image"
                      />
                    </div>
                  ))}
                  <div className="spares-image-indicators">
                    {service.backgroundImages.map((_, idx) => (
                      <div
                        key={idx}
                        className={`spares-indicator ${idx === service.activeBackgroundIndex ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {service.id === 2 && service.backgroundImages && (
                <div className="spares-images-container iot-images-container">
                  {service.backgroundImages.map((bgImage, idx) => (
                    <div
                      key={idx}
                      className={`spares-image-wrapper ${idx === service.activeBackgroundIndex ? 'active' : ''}`}
                    >
                      <img
                        src={bgImage}
                        alt={service.title}
                        className="spares-image"
                      />
                    </div>
                  ))}
                  <div className="spares-image-indicators">
                    {service.backgroundImages.map((_, idx) => (
                      <div
                        key={idx}
                        className={`spares-indicator ${idx === service.activeBackgroundIndex ? 'active' : ''}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="panel-content">
                <div className="content-wrapper">
                  <div className="service-badge">
                    <div className="badge-icon">{service.icon}</div>
                    <span className="badge-text">Online Order System</span>
                  </div>

                  <div className="service-header">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-subtitle">{service.subtitle}</p>
                  </div>

                  {service.id === 1 && service.backgroundImages && (
                    <div className="spares-images-container mobile-only">
                      {service.backgroundImages.map((bgImage, idx) => (
                        <div
                          key={idx}
                          className={`spares-image-wrapper ${idx === service.activeBackgroundIndex ? 'active' : ''}`}
                        >
                          <img
                            src={bgImage}
                            alt={service.title}
                            className="spares-image"
                          />
                        </div>
                      ))}
                      <div className="spares-image-indicators">
                        {service.backgroundImages.map((_, idx) => (
                          <div
                            key={idx}
                            className={`spares-indicator ${idx === service.activeBackgroundIndex ? 'active' : ''}`}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="service-description">
                    {service.description}
                  </p>

                  <div className="service-features">
                    {service.id === 1 ? (
                      <div className="features-list">
                        {featureData.map((featureDataItem, idx) => (
                          <div
                            key={idx}
                            className={`feature-item ${idx === activeFeatureIndex ? 'active-feature' : ''}`}
                          >
                            <FaCheckCircle className="feature-icon" />
                            <span>{featureDataItem.feature}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      service.id === 2 ? (
                        <div className="features-list">
                          {iotFeatureData.map((featureDataItem, idx) => (
                            <div
                              key={idx}
                              className={`feature-item ${idx === activeIoTFeatureIndex ? 'active-feature' : ''}`}
                            >
                              <FaCheckCircle className="feature-icon" />
                              <span>{featureDataItem.feature}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        service.features.map((feature, idx) => (
                          <div key={idx} className="feature-item">
                            <FaCheckCircle className="feature-icon" />
                            <span>{feature}</span>
                          </div>
                        ))
                        // )
                      ))}
                  </div>

                  <div className="x7k9m2-stats">


                    <div className="y3n5p8-content">
                      <div className="z4q6r1-number">{service.stats}</div>
                      <div className="a8s2t7-label">{service.experience}</div>
                    </div>
                  </div>


                  <div className="service-actions">
                    <button
                      className="action-primary"
                      onClick={() => navigate('/oos-form')}
                    >
                      <span>Get Started</span>
                      <FaArrowRight className="button-icon" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="panel-accent"></div>
            </div>
          ))}
        </div>

        <div className="services-footer">
          <div className="footer-content">
            <div className="footer-text">
              <h3>Ready to Transform Your Operations?</h3>
              <p>Join thousands of satisfied customers who trust our expertise</p>
            </div>
            <button className="footer-cta">
              <span>Start Your Journey</span>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;