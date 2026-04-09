import React from "react";
import { useNavigate } from "react-router-dom";

const ENT = () => {
  const navigate = useNavigate();

  const handleConsultClick = () => {
    navigate("/consultation");
  };

  return (
    <section className="ent-section">
      <style>{`
        :root {
          --primary: #7B008A;     /* Purple */
          --secondary: #FF7A00;   /* Orange */
          --accent: #F3E0D4;      /* Light Beige */
          --card-bg: #ffffff;     /* White */
          --text-dark: #333;
          --text-light: #555;
          --white: #ffffff;
        }

        .ent-section {
          background: var(--accent);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        .breadcrumb {
          font-size: 14px;
          color: var(--primary);
          margin-bottom: 15px;
          font-weight: 500;
        }

        .ent-title {
          font-size: 48px;
          font-weight: 700;
          color: var(--primary);
          line-height: 1.2;
          max-width: 800px;
        }

        .ent-desc {
          margin-top: 15px;
          font-size: 16px;
          color: var(--text-dark);
          max-width: 750px;
          line-height: 1.6;
        }

        .cta-btn {
          margin-top: 25px;
          padding: 14px 24px;
          background: var(--secondary);
          color: var(--white);
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .cta-btn:hover {
          background: #e86a00;
          transform: translateY(-2px);
        }

        /* Stats Card */
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

        /* Content Blocks */
        .info-card {
          background: var(--white);
          padding: 40px;
          border-radius: 20px;
          margin-top: 40px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        .section-h2 {
          color: var(--primary);
          font-size: 28px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .feature-item {
          background: #fdfaf8;
          padding: 20px;
          border-radius: 12px;
          border-left: 4px solid var(--secondary);
        }

        .feature-item h4 {
          color: var(--primary);
          margin-bottom: 10px;
        }

        .list-style {
          list-style: none;
          padding: 0;
        }

        .list-style li {
          margin-bottom: 10px;
          padding-left: 25px;
          position: relative;
          color: var(--text-light);
        }

        .list-style li::before {
          content: "✔";
          position: absolute;
          left: 0;
          color: var(--secondary);
          font-weight: bold;
        }

        .icon-large {
          font-size: 40px;
          display: block;
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {
          .ent-title { font-size: 30px; }
          .stats-container { flex-direction: column; gap: 20px; }
          .grid-3 { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container">
        <div className="breadcrumb">Home » Home » ENT</div>

        <h1 className="ent-title">
          Specialized Care for Ear, Nose, and Throat (ENT)
        </h1>

        <p className="ent-desc">
          At <strong>DR CURE SURGERIES</strong>, we provide the most advanced medical and surgical 
          treatments for disorders of the Ear, Nose, and Throat. Our highly experienced ENT specialists 
          utilize global standard technology to ensure the best outcomes.
        </p>

        <button className="cta-btn" onClick={handleConsultClick}>
          📞 Call Us : +91 9493994244
        </button>

        <div className="stats-container">
          <div className="stat-box">
            <h2 className="stat-number">70k+</h2>
            <p className="stat-text">Happy Patients</p>
          </div>
          <div className="stat-box">
            <h2 className="stat-number">50+</h2>
            <p className="stat-text">Diseases Treated</p>
          </div>
          <div className="stat-box">
            <h2 className="stat-number">100+</h2>
            <p className="stat-text">Hospitals</p>
          </div>
          <div className="stat-box">
            <h2 className="stat-number">10+</h2>
            <p className="stat-text">Cities</p>
          </div>
        </div>

        {/* What is ENT Section */}
        <div className="info-card">
          <h2 className="section-h2">👂 What is ENT (Otolaryngology)?</h2>
          <p className="ent-desc">
            ENT involves the diagnosis and management of health problems concerning the ears, nose, 
            and throat. This includes hearing loss, balance disorders, tinnitus, nasal obstructions 
            (deviated septum), sinus infections, and voice box disorders.
          </p>
        </div>

        {/* Surgeries Performed */}
        <div className="info-card">
          <h2 className="section-h2">🏥 Specialized ENT Surgeries</h2>
          <div className="grid-3">
            <div className="feature-item">
              <h4>Ear Procedures</h4>
              <p>Tympanoplasty, Stapedectomy, Myringotomy, and Ossicular reconstruction for hearing restoration.</p>
            </div>
            <div className="feature-item">
              <h4>Nose & Sinus</h4>
              <p>Septoplasty for deviated septum, FESS (Functional Endoscopic Sinus Surgery), and Turbinate reduction.</p>
            </div>
            <div className="feature-item">
              <h4>Throat & Neck</h4>
              <p>Tonsillectomy, Adenoidectomy, Laryngoplasty, and Thyroidectomy for tumors or voice disorders.</p>
            </div>
          </div>
        </div>

        {/* Preparation & Recovery */}
        <div className="grid-3">
          <div className="info-card">
            <h3 className="section-h2">🕒 Pre-Surgery</h3>
            <ul className="list-style">
              <li>Consult your surgeon about regular blood thinners.</li>
              <li>Fasting for 8 hours prior to the procedure.</li>
              <li>Complete all pre-operative diagnostic tests.</li>
            </ul>
          </div>
          <div className="info-card">
            <h3 className="section-h2">🛡️ Recovery</h3>
            <ul className="list-style">
              <li>Sleep with your head elevated.</li>
              <li>Avoid blowing your nose for 10 days post-nasal surgery.</li>
              <li>Stay hydrated and avoid strenuous activities.</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="info-card" style={{borderTop: '5px solid var(--primary)'}}>
          <h2 className="section-h2">Why Choose Dr Cure Surgeries?</h2>
          <div className="grid-3">
            <div style={{textAlign: 'center', padding: '10px'}}>
              <span className="icon-large">🚕</span>
              <p style={{marginTop: '10px', fontWeight: '600'}}>Free Cab Facility</p>
              <p className="stat-text">Complimentary transport on surgery day.</p>
            </div>
            <div style={{textAlign: 'center', padding: '10px'}}>
              <span className="icon-large">💳</span>
              <p style={{marginTop: '10px', fontWeight: '600'}}>Financial Support</p>
              <p className="stat-text">No-cost EMI and cashless processing.</p>
            </div>
            <div style={{textAlign: 'center', padding: '10px'}}>
              <span className="icon-large">👨‍⚕️</span>
              <p style={{marginTop: '10px', fontWeight: '600'}}>Post-Op Care</p>
              <p className="stat-text">Free follow-up consultations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ENT;