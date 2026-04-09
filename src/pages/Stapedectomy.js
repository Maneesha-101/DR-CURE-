import React from "react";
import { useNavigate } from "react-router-dom";

const Stapedectomy = () => {
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
        .stap-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .stap-container {
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

        .warning-box {
          background: #fff5f5;
          border: 1px solid #feb2b2;
          padding: 20px;
          border-radius: 12px;
          margin-top: 20px;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="stap-hero">
        <div className="stap-container">
          <p className="breadcrumb">Home » Home » Stapedectomy</p>
          <h1 className="hero-title">Advanced Stapedectomy for Otosclerosis Treatment</h1>
          <p className="hero-text">
            Restore your hearing with precision microsurgery. At <strong>Dr Cure Surgeries</strong>, 
            we specialize in removing hardened middle ear bones and replacing them with 
            high-grade prosthetics to emulate natural sound vibration.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Book Your Free Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Specialties</p></div>
            <div className="stat"><h2>100+</h2><p>Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities</p></div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="content-section">
        <div className="stap-container">
          
          <div className="info-card">
            <h2 className="section-title">👂 What is Stapedectomy?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Stapedectomy is a minimally invasive procedure performed to treat hearing loss caused by 
              <strong> Otosclerosis</strong>—a condition where the tiny stapes bone in the middle ear 
              becomes fixed and fails to vibrate. The surgery involves replacing the damaged bone 
              with a micro-prosthesis to restore sound amplification.
            </p>
            
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--cyan-accent)'}}>
            <h2 className="section-title">🔍 Diagnostic Protocols</h2>
            <p>Comprehensive testing is vital to distinguish bone hardening from other ear traumas:</p>
            <div className="grid-layout">
              <div className="item-box">
                <span className="highlight-text">Audiometry & Tuning Fork</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Tests sound transmission through bones and the mastoid to measure the "Air-Bone Gap."</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Tympanometry</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Assesses eardrum movement to ensure hearing loss isn't caused by tympanum deformity.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">CT Scan Imaging</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Visualizes internal structures to help the surgeon select the best type of prosthesis.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">⚖️ Candidate Check: Is it right for you?</h2>
            <div className="grid-layout">
              <div className="item-box">
                <h4 style={{color: 'green'}}>Recommended For:</h4>
                <ul className="list-style" style={{fontSize: '13px'}}>
                  <li>Conductive hearing loss (30dB+ gap)</li>
                  <li>Paget’s disease or Osteogenesis imperfecta</li>
                  <li>Good cochlear reserve</li>
                </ul>
              </div>
              <div className="item-box">
                <h4 style={{color: 'red'}}>Not Recommended For:</h4>
                <ul className="list-style" style={{fontSize: '13px'}}>
                  <li>Active ear infections or pregnancy</li>
                  <li>Positive Schwartz sign (active otospongiosis)</li>
                  <li>High-impact athletes (Boxers/Wrestlers)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">🩹 Post-Op Recovery</h2>
              <ul className="list-style">
                <li><strong>Wait for Clarity:</strong> Noticeable improvement usually takes 3-4 weeks as swelling subsides.</li>
                <li><strong>No Flying:</strong> Avoid air travel for at least 3 weeks to prevent dislodging the prosthesis.</li>
                <li><strong>Dry Ear:</strong> Use silicone plugs or Vaseline-coated cotton during showers.</li>
                <li><strong>Low Strain:</strong> No heavy lifting or intense exercise for 4-6 weeks.</li>
              </ul>
            </div>

            <div className="info-card">
              <h2 className="section-title">🏥 Surgical Excellence</h2>
              <p style={{fontSize: '14px', marginBottom: '15px'}}>At Dr Cure Surgeries, we ensure an outpatient experience with:</p>
              <ul className="list-style" style={{fontSize: '13px'}}>
                <li>USFDA-approved microsurgical instruments</li>
                <li>Complimentary cab & meal services for patients</li>
                <li>Complete insurance and documentation support</li>
                <li>No-Cost EMI payment options</li>
              </ul>
            </div>
          </div>

          <div className="warning-box">
            <h4 style={{color: 'var(--footer-dark)'}}>⚠️ Potential Risks</h4>
            <p style={{fontSize: '13px', color: '#666', marginTop: '5px'}}>
              While 90% of procedures are complications-free, rare risks include temporary dizziness, 
              altered taste sensation on the tongue (nerve irritation), or development of tinnitus. 
              Consult your surgeon if pain persists beyond 3 days.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Stapedectomy;