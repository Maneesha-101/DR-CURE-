import React from "react";
import { useNavigate } from "react-router-dom";

const FessSurgery = () => {
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
        .fess-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .fess-container {
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

        /* STATS BOX */
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
          display: flex;
          align-items: center;
          gap: 12px;
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
          transition: 0.3s;
        }

        .item-box:hover {
          border-color: var(--brand-purple);
        }

        .list-style {
          padding-left: 20px;
          color: #555;
          line-height: 1.8;
          list-style-type: disc;
        }

        .highlight-text {
          color: var(--brand-purple);
          font-weight: 600;
        }

        .icon-header {
          font-size: 24px;
          margin-bottom: 10px;
          display: block;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="fess-hero">
        <div className="fess-container">
          <p className="breadcrumb">Home » Home » FESS Surgery</p>
          <h1 className="hero-title">Functional Endoscopic Sinus Surgery (FESS)</h1>
          <p className="hero-text">
            Regain your ability to breathe freely. At <strong>Dr Cure Surgeries</strong>, 
            we use high-definition endoscopes to treat chronic sinusitis and nasal polyps 
            with <strong>zero external incisions</strong> and an 80-90% success rate.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Schedule Your Sinus Evaluation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>85%</h2><p>Success Rate</p></div>
            <div className="stat"><h2>100+</h2><p>Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities</p></div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="content-section">
        <div className="fess-container">
          
          <div className="info-card">
            <h2 className="section-title">👃 What is Endoscopic Sinus Surgery?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              FESS is a minimally invasive procedure performed entirely through the nostrils to remove 
              blockages in the sinuses. Using a thin, rigid tube with a camera (endoscope), 
              surgeons can treat chronic inflammation without any visible cutting of the skin. 
              It is safe for both adults and children over 2 years of age.
            </p>
            
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--cyan-accent)'}}>
            <h2 className="section-title">🔍 Diagnostic Evaluation</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="icon-header">🔬</span>
                <span className="highlight-text">Nasal Endoscopy</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Visual inspection of the nasal passages to identify structural obstructions.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">🖥️</span>
                <span className="highlight-text">CT Imaging</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Detailed scans to map the sinus anatomy and identify hidden polyps or deviated septa.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">🧪</span>
                <span className="highlight-text">Lab Analysis</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Analyzing nasal discharge to identify specific pathogens for targeted treatment.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">✅ Procedure Benefits</h2>
              <ul className="list-style">
                <li><strong>Enhanced Drainage:</strong> Removes physical obstacles to allow natural mucus flow.</li>
                <li><strong>Structural Correction:</strong> Fixes deviated septums or enlarged nasal bones simultaneously.</li>
                <li><strong>Medical Synergy:</strong> Post-surgery, nasal sprays and medicines reach affected areas more effectively.</li>
                <li><strong>No Visible Scars:</strong> Performed entirely internally via the nostrils.</li>
              </ul>
            </div>

            <div className="info-card">
              <h2 className="section-title">🏥 Pre-Op Checklist</h2>
              <ul className="list-style" style={{fontSize: '13px'}}>
                <li><strong>Medication:</strong> Stop Aspirin/Anticoagulants 2 weeks prior to reduce bleeding risk.</li>
                <li><strong>Smoking:</strong> Quit at least 1 month before and after to ensure tissue healing.</li>
                <li><strong>Fasting:</strong> No food/water after midnight to avoid anesthesia complications.</li>
                <li><strong>Inflammation:</strong> Take prescribed steroids/antibiotics to reduce pre-op swelling.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{background: '#fff3e6', borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">🌿 Recovery & Lifestyle Changes</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="icon-header">🚿</span>
                <strong>Saline Irrigation</strong>
                <p style={{fontSize: '13px'}}>Use sterile saline rinses daily to keep passages moist and clear out healing crusts.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">🚫</span>
                <strong>Avoid Irritants</strong>
                <p style={{fontSize: '13px'}}>Stay away from allergens, strong perfumes, and environmental pollutants during the 4-week healing phase.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">🩺</span>
                <strong>Follow-up Care</strong>
                <p style={{fontSize: '13px'}}>Attend scheduled "debridement" sessions where the doctor cleans the sinus cavities to prevent scarring.</p>
              </div>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'red'}}>
            <h2 className="section-title">⚠️ Risks to Monitor</h2>
            <p style={{fontSize: '14px', color: '#666'}}>
              Minor bleeding is expected for 3-5 days. However, contact your specialist if you experience:
            </p>
            <ul className="list-style" style={{fontSize: '13px', marginTop: '10px'}}>
              <li>Severe fatigue lasting beyond the first week.</li>
              <li>Persistent changes in smell or taste.</li>
              <li>Vision changes (double vision or eye swelling).</li>
              <li>High fever or thick yellow/green discharge (signs of infection).</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
};

export default FessSurgery;