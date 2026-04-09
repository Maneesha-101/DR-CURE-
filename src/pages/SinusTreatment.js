import React from "react";
import { useNavigate } from "react-router-dom";

const SinusTreatment = () => {
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
        .sinus-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .sinus-container {
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
          margin-bottom: 20px;
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
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
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
      <section className="sinus-hero">
        <div className="sinus-container">
          <p className="breadcrumb">Home » Home » Sinus Treatment</p>
          <h1 className="hero-title">Sinus Infection – Permanent One-Day Relief</h1>
          <p className="hero-text">
            End the cycle of facial pain, congestion, and headaches. At <strong>Dr Cure Surgeries</strong>, 
            our expert ENT specialists offer minimally invasive surgical and non-surgical solutions 
            to restore your breathing and long-term sinus health.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Book Your Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>4</h2><p>Sinus Types Covered</p></div>
            <div className="stat"><h2>100+</h2><p>Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities</p></div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="content-section">
        <div className="sinus-container">
          
          <div className="info-card">
            <h2 className="section-title">🧪 Understanding Sinusitis</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Sinusitis is the inflammation of the air-filled spaces behind your forehead, cheeks, and eyes. 
              Whether caused by infections, allergies, or structural issues, it leads to pressure that disrupts daily life.
            </p>
            

[Image of paranasal sinuses anatomy]

          </div>

          {/* Stages by Location */}
          <div className="info-card" style={{borderLeftColor: 'var(--cyan-accent)'}}>
            <h2 className="section-title">📍 Types of Sinusitis (By Location)</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="icon-header">🦴</span>
                <strong>Maxillary</strong>
                <p style={{fontSize: '13px'}}>Located in the cheekbones on either side of the nose.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">👁️</span>
                <strong>Ethmoidal</strong>
                <p style={{fontSize: '13px'}}>Found between the eyes at the bridge of the nose.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">🧠</span>
                <strong>Frontal</strong>
                <p style={{fontSize: '13px'}}>Situated within the forehead bone above the eyes.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">🛡️</span>
                <strong>Sphenoid</strong>
                <p style={{fontSize: '13px'}}>Located deep behind the nasal cavity.</p>
              </div>
            </div>
          </div>

          {/* Stages by Severity */}
          <div className="info-card">
            <h2 className="section-title">📊 Clinical Stages</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="highlight-text">Acute Sinusitis</span>
                <p style={{fontSize: '13px'}}>Symptoms last 4 weeks or less; usually bacterial.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Subacute Sinusitis</span>
                <p style={{fontSize: '13px'}}>Inflammation lasts between 1 to 3 months.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Chronic Sinusitis</span>
                <p style={{fontSize: '13px'}}>Symptoms persist beyond 3 months; often requires surgery.</p>
              </div>
            </div>
          </div>

          {/* Surgical Options */}
          <div className="info-card" style={{background: '#fff3e6', borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">🔪 Advanced Surgical Treatments</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="icon-header">🔬</span>
                <strong>FESS</strong>
                <p style={{fontSize: '13px'}}>Endoscopic removal of infected tissue and bone to widen natural drainage paths.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">🎈</span>
                <strong>Balloon Sinuplasty</strong>
                <p style={{fontSize: '13px'}}>A minimally invasive catheter-based procedure that inflates a balloon to unblock passages.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">🩹</span>
                <strong>Caldwell-Luc</strong>
                <p style={{fontSize: '13px'}}>A secondary option accessing the maxillary sinus through an incision in the upper gum.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">✅ Benefits of Surgery</h2>
              <ul className="list-style">
                <li>Enhanced mucus drainage and reduced congestion.</li>
                <li>Correction of structural issues like polyps or deviated septum.</li>
                <li>Significant relief from chronic facial pain and headaches.</li>
                <li>Improved efficacy of post-op medical sprays/treatments.</li>
              </ul>
            </div>

            <div className="info-card">
              <h2 className="section-title">🛡️ Recovery & Care</h2>
              <ul className="list-style" style={{fontSize: '14px'}}>
                <li><strong>Initial Phase:</strong> Discomfort and swelling are managed with prescribed pain meds.</li>
                <li><strong>Nasal Hygiene:</strong> Use saline rinses daily to prevent crusting and infection.</li>
                <li><strong>Activity:</strong> Avoid strenuous exercise for at least 2-4 weeks to ensure tissue healing.</li>
                <li><strong>Follow-up:</strong> Attend all scheduled cleanings with your specialist.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'red'}}>
            <h2 className="section-title">⚠️ Potential Risks</h2>
            <p style={{fontSize: '14px', color: '#666'}}>While rare, some complications may include:</p>
            <div className="grid-layout">
              <div className="item-box" style={{border: 'none'}}>
                <ul className="list-style" style={{fontSize: '13px'}}>
                  <li>Temporary changes in smell or taste</li>
                  <li>Minor postoperative bleeding</li>
                  <li>Scarring (Adhesions) in nasal passages</li>
                </ul>
              </div>
              <div className="item-box" style={{border: 'none'}}>
                <ul className="list-style" style={{fontSize: '13px'}}>
                  <li>Eye or vision issues (very rare)</li>
                  <li>Cerebrospinal fluid (CSF) leak (rare)</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default SinusTreatment;