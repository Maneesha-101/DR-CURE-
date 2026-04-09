

import React from "react";
import { useNavigate } from "react-router-dom";
import proctoImg from "../assets/procto.png";

const Proctology = () => {
  const navigate = useNavigate();

  const handleConsultClick = () => {
    navigate("/consultation");
  };

  return (
    <>
      <style>{`
        :root {
          --primary: #7B008A;    /* Brand Purple */
          --secondary: #FF7A00;  /* Brand Orange */
          --accent: #F3E0D4;     /* Light Beige/Peach Background */
          --cyan-accent: #1EC1D1;
          --text-dark: #333;
          --text-light: #555;
          --white: #ffffff;
          --card-bg: #ffffff;
        }

        /* HERO SECTION */
        .procto-hero {
          background: var(--accent);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .procto-container {
          max-width: 1200px;
          margin: auto;
        }

        .breadcrumb {
          font-size: 14px;
          color: var(--primary);
          margin-bottom: 15px;
          font-weight: 500;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: var(--primary);
          line-height: 1.2;
          max-width: 900px;
          margin-bottom: 20px;
        }

        .hero-text {
          font-size: 16px;
          color: var(--text-dark);
          max-width: 850px;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        /* CTA BUTTONS */
        .cta-btn {
          padding: 14px 24px;
          background: var(--secondary);
          color: var(--white);
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
          display: inline-block;
          text-decoration: none;
        }

        .cta-btn:hover {
          background: #e86a00;
          transform: translateY(-2px);
        }

        /* STATS CARD */
        .stats-container {
          margin-top: 50px;
          background: var(--card-bg);
          border-radius: 14px;
          padding: 35px 20px;
          display: flex;
          justify-content: space-around;
          text-align: center;
          flex-wrap: wrap;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }

        .stat-box {
          flex: 1;
          min-width: 120px;
        }

        .stat-number {
          font-size: 34px;
          font-weight: bold;
          color: var(--primary);
        }

        .stat-text {
          font-size: 14px;
          color: var(--text-light);
          margin-top: 5px;
        }

        /* CONTENT SECTION */
        .content-section {
          padding: 60px 20px;
          font-family: 'Poppins', sans-serif;
          background: #fff;
        }

        .top-tags {
          display: flex;
          gap: 15px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .tag {
          padding: 10px 25px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 14px;
          color: var(--white);
        }

        .tag-p { background: var(--primary); }
        .tag-o { background: var(--secondary); }
        .tag-c { background: var(--cyan-accent); }

        .info-card {
          background: #fff;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border-left: 6px solid var(--primary);
        }

        .section-title {
          font-size: 32px;
          color: var(--primary);
          margin-bottom: 20px;
          font-weight: 700;
        }

        /* FLEX LAYOUT */
        .flex-layout {
          display: flex;
          gap: 40px;
          align-items: center;
          margin-top: 20px;
        }

        .flex-content { flex: 1.2; }
        .flex-image { flex: 0.8; }

        .flex-image img {
          width: 100%;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .content-list {
          padding-left: 20px;
          list-style: none;
        }

        .content-list li {
          margin-bottom: 12px;
          color: var(--text-light);
          position: relative;
        }

        .content-list li::before {
          content: "•";
          color: var(--secondary);
          font-weight: bold;
          display: inline-block; 
          width: 1em;
          margin-left: -1em;
        }

        /* FEATURE ICONS */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 30px;
          text-align: center;
        }

        .feature-item {
          padding: 20px;
          background: #f9f9f9;
          border-radius: 12px;
        }

        .feature-icon {
          font-size: 30px;
          margin-bottom: 10px;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .hero-title { font-size: 30px; }
          .flex-layout { flex-direction: column; }
          .stats-container { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="procto-hero">
        <div className="procto-container">
          <p className="breadcrumb">Home » Specialized Care » Proctology</p>
          <h1 className="hero-title">
            Best Laser Treatment for Piles, Fissure & Fistula Near Me
          </h1>
          <p className="hero-text">
            <strong>Dr Cure Surgeries</strong> is a trusted multispeciality healthcare provider 
            dedicated to delivering a seamless, stress-free, and painless surgical experience 
            using the world's most advanced laser technologies.
          </p>
          <button className="cta-btn" onClick={handleConsultClick}>
            Schedule Your Free Consultation
          </button>

          <div className="stats-container">
            <div className="stat-box">
              <div className="stat-number">70k+</div>
              <div className="stat-text">Happy Patients</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">50+</div>
              <div className="stat-text">Diseases</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100+</div>
              <div className="stat-text">Hospitals</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">10+</div>
              <div className="stat-text">Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="content-section">
        <div className="procto-container">
          <div className="top-tags">
            <div className="tag tag-p">Free Consultation</div>
            <div className="tag tag-o">No-Cost EMI</div>
            <div className="tag tag-c">Insurance Support</div>
          </div>

          <div className="info-card">
            <h2 className="section-title">Specialized Center for Proctology</h2>
            <div className="flex-layout">
              <div className="flex-content">
                <p className="hero-text" style={{fontSize: '16px'}}>
                  We deliver expert care with a promise of hassle-free recovery. 
                  Our advanced laser procedures ensure that patients return to their 
                  normal lives faster than traditional surgical methods.
                </p>
                <ul className="content-list">
                  <li><strong>Piles:</strong> Painless treatment for swollen veins.</li>
                  <li><strong>Fissure:</strong> Quick healing for anal tears and discomfort.</li>
                  <li><strong>Fistula:</strong> Precision laser closure of abnormal tracts.</li>
                  <li><strong>Pilonidal Sinus:</strong> Minimally invasive infection clearance.</li>
                </ul>
                <a href="tel:+919493994244" className="cta-btn" style={{marginTop: '20px'}}>
                  📞 Call Us: +91 9493994244
                </a>
              </div>
              <div className="flex-image">
                <img
                  src={proctoImg}
                  alt="Proctology Care"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/450x300?text=Proctology+Care";
                  }}
                />
              </div>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--cyan-accent)'}}>
            <h2 className="section-title">Advanced Laser Benefits</h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <p><strong>Faster Recovery</strong></p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🛡️</div>
                <p><strong>Minimal Pain</strong></p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🧵</div>
                <p><strong>No Stitches</strong></p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🏥</div>
                <p><strong>Same-day Discharge</strong></p>
              </div>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--secondary)'}}>
            <h2 className="section-title">Why Choose Dr Cure Surgeries?</h2>
            <div className="features-grid" style={{textAlign: 'left'}}>
               <div className="feature-item">
                  <p><strong>Centre of Excellence:</strong> Modern infrastructure designed for specialized proctology care.</p>
               </div>
               <div className="feature-item">
                  <p><strong>Expert Doctors:</strong> Access to senior proctologists with decades of surgical experience.</p>
               </div>
               <div className="feature-item">
                  <p><strong>End-to-End Support:</strong> From insurance paperwork to post-op follow-ups, we handle it all.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Proctology;