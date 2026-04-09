import React from "react";
import { useNavigate } from "react-router-dom";

const NasalPolyps = () => {
  const navigate = useNavigate();

  const handleConsultClick = () => {
    navigate("/consultation");
  };

  return (
    <>
      <style>{`
        :root {
          --brand-purple: #7D008D;
          --brand-orange: #FF7A00;
          --brand-white: #FFFFFF;
          --footer-dark: #002B45;
          --cyan-accent: #1EC1D1;
        }

        /* HERO SECTION */
        .nasal-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .nasal-container {
          max-width: 1100px;
          margin: auto;
        }

        .breadcrumb {
          color: #666;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: var(--footer-dark);
          margin-bottom: 20px;
        }

        .hero-text {
          font-size: 18px;
          color: #444;
          line-height: 1.6;
          max-width: 950px;
          margin-bottom: 30px;
        }

        /* CTA BUTTON */
        .hero-btn {
          background: var(--brand-orange);
          color: var(--brand-white);
          padding: 16px 28px;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .hero-btn:hover {
          background: #e66a00;
          transform: translateY(-2px);
        }

        /* STATS */
        .stats-box {
          background: var(--brand-white);
          border-radius: 20px;
          display: flex;
          justify-content: space-around;
          padding: 30px;
          margin-top: 60px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          flex-wrap: wrap;
        }

        .stat { text-align: center; }
        .stat h2 { font-size: 36px; color: var(--brand-purple); }
        .stat p { color: #777; }

        /* CONTENT SECTIONS */
        .content-section {
          padding: 60px 20px;
          font-family: 'Poppins', sans-serif;
          background: #fff;
        }

        .info-card {
          background: #f9f9f9;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          border-left: 6px solid var(--brand-purple);
        }

        .section-title {
          font-size: 28px;
          color: var(--footer-dark);
          margin-bottom: 20px;
          font-weight: 700;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .item-box {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #eee;
        }

        .list-style {
          padding-left: 20px;
          color: #555;
          line-height: 1.8;
        }

        .highlight-text {
          color: var(--brand-purple);
          font-weight: 600;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="nasal-hero">
        <div className="nasal-container">
          <p className="breadcrumb">Home » Home » Nasal Polyps Treatment</p>
          <h1 className="hero-title">Nasal Polyps Treatment – Diagnosis & Advanced Surgery</h1>
          <p className="hero-text">
            Nasal polyps are noncancerous, teardrop-shaped growths that can block your sinuses and 
            affect your breathing. At <strong>Dr Cure Surgeries</strong>, we provide minimally invasive 
            solutions to clear blockages and restore your quality of life.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Call to Schedule Your Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Specialties</p></div>
            <div className="stat"><h2>100+</h2><p>Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities</p></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="nasal-container">
          
          <div className="info-card">
            <h2 className="section-title">What are Nasal Polyps?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Matured polyps often resemble peeled grapes and are typically linked to chronic 
              inflammation from asthma, allergies, or immune disorders. While small polyps may 
              be asymptomatic, larger growths can lead to a loss of smell, facial pain, and 
              frequent sinus infections.
            </p>
            <div className="grid-layout">
              <div className="item-box">
                <span className="highlight-text">Bilateral Ethmoidal Polyp</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>The most common type, arising from the ethmoid sinuses on both sides of the nose.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Antrochoanal Polyp</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Unilateral growths that begin in the maxillary sinuses. These are less common but often larger.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">Diagnostic Screening</h2>
            <p style={{marginBottom: '15px'}}>Before treatment, our ENT specialists perform thorough evaluations to ensure precise removal:</p>
            <ul className="list-style">
              <li><strong>Nasal Endoscopy:</strong> A detailed look at nasal passages using a thin, lighted tube.</li>
              <li><strong>CT Scans:</strong> To locate polyps deep within the sinuses and assess bone structure.</li>
              <li><strong>Allergy Tests:</strong> To identify triggers that may be causing chronic inflammation.</li>
            </ul>
          </div>

          <div className="info-card">
            <h2 className="section-title">Surgical Treatment Options</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="highlight-text">Endoscopic Sinus Surgery (FESS)</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>The preferred method. Surgeons use an endoscope to visualize and remove polyps through the nostrils with no external incisions.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Polypectomy</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Used for very large polyps. Involves using micro-telescopes and precision instruments to clear the passageway entirely.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">Recovery Timeline</h2>
              <ul className="list-style">
                <li><strong>Week 1:</strong> Return to desk work and light activities.</li>
                <li><strong>Weeks 2-3:</strong> Gradual return to exercise; avoid strenuous lifting.</li>
                <li><strong>Weeks 4-6:</strong> Complete internal healing and stabilization of symptoms.</li>
                <li><strong>Post-Op Care:</strong> Use of saline rinses and corticosteroid sprays to prevent recurrence.</li>
              </ul>
            </div>

            <div className="info-card">
              <h2 className="section-title">Risk Management</h2>
              <p style={{fontSize: '14px', color: '#666', marginBottom: '10px'}}>Though safe, all surgeries carry minor risks which our experts minimize:</p>
              <ul className="list-style" style={{fontSize: '14px'}}>
                <li>Minor bleeding or facial bruising.</li>
                <li>Temporary changes in smell or taste.</li>
                <li>Potential recurrence (managed via long-term medication).</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Transparent Pricing & Care</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              At <strong>Dr Cure Surgeries</strong>, the average cost for nasal polyps surgery in India 
              is approximately <strong>₹60,000</strong>. This includes diagnostic screening, surgeon fees, 
              and follow-up consultations. We provide insurance assistance and flexible payment 
              options to ensure your focus remains entirely on your recovery.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default NasalPolyps;