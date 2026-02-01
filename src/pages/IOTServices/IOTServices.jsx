import "./IOTServices.css";
import { useNavigate } from 'react-router-dom';
import { FaChartLine, FaChartBar, FaBolt, FaEye, FaCheckCircle, FaIndustry, FaPlug, FaServer, FaShieldAlt, FaArrowRight } from 'react-icons/fa';

const IOTServices = () => {
  const navigate = useNavigate();
  
  return (
    <div className="iot-services-page">
      {/* Hero Section */}
      <section className="iot-hero">
        <div className="iot-hero-container">
          <div className="hero-accent"></div>
          <h1 className="iot-hero-title">
            Revolutionize Your Operations with<br /><span className="title-gradient">JP Nexus</span>
          </h1>
          <p className="iot-hero-subtitle">
            Real-time monitoring, predictive insights, and unmatched efficiency — all in one intelligent platform.
          </p>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="iot-features-section">
        <div className="iot-section-container">
          <div className="section-header">
            <h2 className="iot-section-title">Core Features</h2>
            <p className="iot-section-subtitle">JP Nexus Capabilities</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FaChartLine className="feature-icon" />
              </div>
              <h3 className="feature-title">Real-time Monitoring</h3>
              <p className="feature-description">
                Monitor machine performance in real-time with instant alerts and notifications.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FaChartBar className="feature-icon" />
              </div>
              <h3 className="feature-title">Advanced Analytics</h3>
              <p className="feature-description">
                Get detailed insights and reports on production efficiency and machine performance.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FaBolt className="feature-icon" />
              </div>
              <h3 className="feature-title">High Performance</h3>
              <p className="feature-description">
                Optimize production speed and reduce downtime with intelligent monitoring.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FaEye className="feature-icon" />
              </div>
              <h3 className="feature-title">Complete Visibility</h3>
              <p className="feature-description">
                Track necessary aspects of your operations from anywhere, anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="iot-overview-section">
        <div className="iot-section-container">
          <div className="section-header">
            <h2 className="iot-section-title">What is JP Nexus?</h2>
            <p className="iot-section-subtitle">Factory-ready IoT monitoring and analytics platform</p>
          </div>
          
          <div className="overview-content">
            <p className="overview-text">
              JP Nexus is a factory-ready IoT monitoring and analytics platform purpose-built for the Woven Sack and Plastic Proccesing Industry gateways and provides comprehensive insights.
            </p>
            
            <div className="key-features-grid">
              <div className="key-feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Live machine data & performance analytics</span>
              </div>
              <div className="key-feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Shift-wise and machine-wise real-time reports</span>
              </div>
              <div className="key-feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Operator accountability & efficiency insights</span>
              </div>
              <div className="key-feature-item">
                <FaCheckCircle className="check-icon" />
                <span>Modular platform supporting multiple machine types</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="iot-why-section">
        <div className="iot-section-container">
          <div className="section-header">
            <h2 className="iot-section-title white-text">Why Choose JP Nexus?</h2>
            <p className="iot-section-subtitle white-text">Built for Industry, Not Just Software</p>
          </div>
          
          <div className="why-content">
            <p className="why-description">
              JP Nexus is engineered with textile domain expertise, shop-floor realities, and scalable industrial architecture.
            </p>
            
            <div className="advantages-grid">
              <div className="advantage-card">
                <FaIndustry className="advantage-icon" />
                <span>Industrial-grade reliability</span>
              </div>
              <div className="advantage-card">
                <FaPlug className="advantage-icon" />
                <span>Plug & scale architecture</span>
              </div>
              <div className="advantage-card">
                <FaServer className="advantage-icon" />
                <span>Machine-agnostic design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Section */}
      <section className="iot-target-section">
        <div className="iot-section-container">
          <div className="section-header">
            <h2 className="iot-section-title">Perfect For</h2>
          </div>
          
          <div className="target-grid">
            <div className="target-card">
              <h4 className="target-title">Industries</h4>
              <p className="target-description">
                Textile manufacturers • Woven sack plants • PP tape extrusion units
              </p>
            </div>
            <div className="target-card">
              <h4 className="target-title">Professionals</h4>
              <p className="target-description">
                Factory owners & directors • Production managers • Process engineers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <div className="services-footer">
        <div className="footer-content">
          <div className="footer-text">
            <h3>Ready to Transform Your Operations?</h3>
            <p>Join thousands of satisfied customers who trust our expertise</p>
          </div>
          <button className="footer-cta" onClick={() => navigate('/iot-form')}>
            <span>Start Your Journey</span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IOTServices;
