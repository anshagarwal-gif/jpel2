import "./IOTServices.css"
import Card from '../../Components/ServiceCard';
import header from "../Services/Assets/header.jpg";

const IOTServices = () => {
    return(
<div>
<div className="imageContainer2">
        <img   alt="header"
          src={header}
        />
      </div>

<div className="iot-content">
  {/* Hero Section */}
  <div className="hero-section">
    <h1 className="main-title">Revolutionize Your Operations with JP Nexus</h1>
    <p className="hero-subtitle">Real-time monitoring, predictive insights, and unmatched efficiency — all in one intelligent platform.</p>
    
    {/* Stats Section */}
    <div className="stats-section">
      <div className="stat-item">
        <span className="stat-number">37+</span>
        <span className="stat-label">Countries Exported</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">35+</span>
        <span className="stat-label">Years of Experience</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">6533+</span>
        <span className="stat-label">Installations</span>
      </div>
    </div>
  </div>

  {/* Core Features */}
  <section className="core-features-section">
    <h2 className="section-title">Core Features (JP Nexus Capabilities)</h2>
    <div className="features-grid">
      <div className="feature-item">
        <div className="feature-icon">📊</div>
        <h3>Real-time Monitoring</h3>
        <p>Monitor machines performance in real-time with instant alerts and notifications.</p>
      </div>
      
      <div className="feature-item">
        <div className="feature-icon">📈</div>
        <h3>Advanced Analytics</h3>
        <p>Get detailed insights and reports on production efficiency and machine performance.</p>
      </div>
      
      <div className="feature-item">
        <div className="feature-icon">⚡</div>
        <h3>High Performance</h3>
        <p>Optimize production speed and reduce downtime with intelligent monitoring.</p>
      </div>
      
      <div className="feature-item">
        <div className="feature-icon">👁️</div>
        <h3>Complete Visibility</h3>
        <p>Track necessary aspects of your operations from anywhere, anytime.</p>
      </div>
    </div>
  </section>

  {/* Platform Overview */}
  <section className="platform-overview">
    <h2 className="section-title">What is JP Nexus?</h2>
    <div className="overview-content">
      <p>JP Nexus is a factory-ready IoT monitoring and analytics platform purpose-built for the textile and plastics industry. It connects directly to machines via industrial gateways and provides comprehensive insights.</p>
      
      <div className="key-features">
        <div className="feature-point">✓ Live machine data & performance analytics</div>
        <div className="feature-point">✓ Shift-wise and machine-wise reports</div>
        <div className="feature-point">✓ Operator accountability & efficiency insights</div>
        <div className="feature-point">✓ Modular platform supporting multiple machine types</div>
      </div>
    </div>
  </section>

  {/* Why Choose JP Nexus */}
  <section className="why-choose-section">
    <h2 className="section-title">Why Choose JP Nexus?</h2>
    <div className="why-content">
      <h3>Built for Industry, Not Just Software</h3>
      <p>JP Nexus is engineered with textile domain expertise, shop-floor realities, and scalable industrial architecture.</p>
      
      <div className="advantages">
        <span>Industrial-grade reliability</span>
        <span>Plug-and-scale architecture</span>
        <span>Machine-agnostic design</span>
        <span>Data ownership stays with you</span>
      </div>
    </div>
  </section>

  {/* Target Industries */}
  <section className="target-section">
    <h2 className="section-title">Perfect For</h2>
    <div className="target-content">
      <div className="target-group">
        <h4>Industries</h4>
        <p>Textile manufacturers • Woven sack plants • PP tape extrusion units</p>
      </div>
      <div className="target-group">
        <h4>Professionals</h4>
        <p>Factory owners & directors • Production managers • Process engineers</p>
      </div>
    </div>
  </section>
</div>

<div className="service-card">
<Card email="iot@jpel.in" phone="+91 9426813311" theme="JP Nexus IoT Platform" />
</div>

</div>

    );

};
export default IOTServices;