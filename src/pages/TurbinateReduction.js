import React from "react";
import { useNavigate } from "react-router-dom";

const TurbinateReduction = () => {
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
        .turbinate-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .turbinate-container {
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
      <section className="turbinate-hero">
        <div className="turbinate-container">
          <p className="breadcrumb">Home » Home » Turbinate Reduction</p>
          <h1 className="hero-title">Turbinate Reduction Surgery – Diagnosis & Recovery</h1>
          <p className="hero-text">
            Struggling with chronic nasal congestion? Turbinate reduction is a precision procedure 
            designed to remove excess tissue around the nasal bones, significantly improving airflow 
            and breathing comfort.
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
        <div className="turbinate-container">
          
          <div className="info-card">
            <h2 className="section-title">What is Turbinate Reduction Surgery?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Turbinates are tiny structures inside the nose that cleanse and humidify air. When these 
              become chronically inflamed, a 10-minute outpatient procedure can shrink the tissue using 
              local anesthesia, ensuring minimal pain and no changes to your physical appearance.
            </p>
          </div>

          <div className="info-card">
            <h2 className="section-title">Common Surgical Techniques</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="highlight-text">Radiofrequency Ablation</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>A minimally invasive probe uses heat energy to shrink tissues. Performed in-clinic with local anesthesia.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Turbinoplasty</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>The "outfracture" technique repositioning the turbinate bone to open the nasal passage.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Microdebrider Resection</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>A tiny, high-speed device shaves away excess internal tissue while keeping the lining intact.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Coblation</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Uses low-temperature heat energy to shrink tissue while protecting surrounding healthy structures.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">Key Benefits</h2>
              <ul className="list-style">
                <li>✅ <strong>Better Sleep:</strong> Clearer passages reduce snoring and apnea.</li>
                <li>✅ <strong>Fewer Headaches:</strong> Relieves sinus tension and pressure.</li>
                <li>✅ <strong>Reduced Sinusitis:</strong> Decreases frequency of sinus infections.</li>
                <li>✅ <strong>Easy Breathing:</strong> Immediate improvement in daily airflow.</li>
              </ul>
            </div>

            <div className="info-card">
              <h2 className="section-title">Recovery Roadmap</h2>
              <ul className="list-style">
                <li><strong>Head Elevation:</strong> Sleep with extra pillows to reduce swelling.</li>
                <li><strong>Activity:</strong> Avoid blowing your nose or heavy lifting for 2 weeks.</li>
                <li><strong>Hygiene:</strong> Use saline flushes as recommended by your surgeon.</li>
                <li><strong>Duration:</strong> Full internal healing takes up to 6 weeks.</li>
              </ul>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">Post-Surgery Lifestyle Changes</h2>
            <div className="grid-layout">
              <div className="item-box">
                <strong>Manage Congestion</strong>
                <p style={{fontSize: '13px'}}>Expect a "blocked" feeling for 2 weeks as internal swelling subsides.</p>
              </div>
              <div className="item-box">
                <strong>Pain Management</strong>
                <p style={{fontSize: '13px'}}>Use prescribed painkillers; avoid Aspirin or NSAIDs which can cause nosebleeds.</p>
              </div>
              <div className="item-box">
                <strong>Avoid Irritants</strong>
                <p style={{fontSize: '13px'}}>Stay away from smoke, dust, and people with colds during the first month.</p>
              </div>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Why Choose Dr Cure Surgeries?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              At <strong>Dr Cure Surgeries</strong>, we prioritize minimally invasive solutions. 
              Our ENT experts use USFDA-approved technology to ensure precision and comfort. 
              With an average cost starting around ₹87,000 (subject to specific case requirements), 
              we offer transparent pricing, insurance support, and comprehensive follow-up care.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default TurbinateReduction;