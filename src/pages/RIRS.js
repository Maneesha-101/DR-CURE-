import React from "react";
import { useNavigate } from "react-router-dom";

const RIRS = () => {
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
        .rirs-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .rirs-container {
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
          margin-bottom: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          border-left: 6px solid var(--brand-purple);
        }

        .section-title {
          font-size: 32px;
          color: var(--footer-dark);
          margin-bottom: 25px;
          font-weight: 700;
        }

        .sub-title {
          font-size: 22px;
          color: var(--brand-purple);
          margin: 25px 0 15px;
          font-weight: 600;
        }

        .content-list {
          padding-left: 20px;
          margin-bottom: 20px;
        }

        .content-list li {
          margin-bottom: 12px;
          color: #555;
          line-height: 1.6;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .step-box {
          background: #fff;
          padding: 25px;
          border-radius: 15px;
          border: 1px solid #eee;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="rirs-hero">
        <div className="rirs-container">
          <p className="breadcrumb">Home » Home » RIRS</p>
          <h1 className="hero-title">
            RIRS Surgery – Advanced Kidney Stone Treatment
          </h1>
          <p className="hero-text">
            Retrograde Intrarenal Surgery (RIRS) is a state-of-the-art, minimally invasive technique 
            to remove kidney stones without any external cuts or stitches. At <strong>Dr Cure Surgeries</strong>, 
            we prioritize your comfort with high-precision laser technology.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Call to Schedule Your Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Diseases</p></div>
            <div className="stat"><h2>100+</h2><p>Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities</p></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="rirs-container">

          <div className="info-card">
            <h2 className="section-title">What is RIRS Surgery?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              RIRS stands for Retrograde Intrarenal Surgery. It uses a flexible optic endoscope passed 
              through the natural urinary tract (urethra) to reach the kidney. This "retrograde" approach 
              allows surgeons to locate and pulverize stones using lasers, reducing them to dust without 
              a single incision.
            </p>
          </div>

          <div className="info-card">
            <h2 className="section-title">Dr Cure Surgeries: Your Partner in Care</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              We partner with India's top hospitals to provide best-in-class RIRS treatment. 
              Our panel of expert urologists uses ultra-modern technology to ensure high success 
              rates, minimal pain, and rapid recovery for all patients.
            </p>
          </div>

          <div className="info-card">
            <h2 className="section-title">The RIRS Procedure</h2>
            <div className="grid-layout">
              <div className="step-box">
                <h4 style={{color: 'var(--brand-purple)'}}>01. Anesthesia</h4>
                <p style={{fontSize: '14px'}}>Patient is sedated (spinal or general) to ensure a painless experience.</p>
              </div>
              <div className="step-box">
                <h4 style={{color: 'var(--brand-purple)'}}>02. Navigation</h4>
                <p style={{fontSize: '14px'}}>A flexible endoscope is inserted via the urethra under X-ray guidance to reach the kidney.</p>
              </div>
              <div className="step-box">
                <h4 style={{color: 'var(--brand-purple)'}}>03. Laser Treatment</h4>
                <p style={{fontSize: '14px'}}>A laser probe breaks stones into fine dust or small fragments.</p>
              </div>
              <div className="step-box">
                <h4 style={{color: 'var(--brand-purple)'}}>04. Extraction</h4>
                <p style={{fontSize: '14px'}}>Fragments are collected in a "stone basket" and extracted through the same pathway.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">Preparation Checklist</h2>
              <ul className="content-list">
                <li>Undergo diagnostic tests (KUB X-ray, MRI, BUN, Urinalysis).</li>
                <li>Fast for 8–9 hours prior to surgery to avoid anesthesia complications.</li>
                <li>Inform the doctor about current medications and allergies.</li>
                <li>Quit smoking at least two weeks before the procedure.</li>
              </ul>
            </div>
            <div className="info-card">
              <h2 className="section-title">Post-Surgery Care</h2>
              <ul className="content-list">
                <li>Increase water intake significantly to flush out dust.</li>
                <li>Stick to a fiber-rich diet; avoid spicy food for a few weeks.</li>
                <li>Resume light daily tasks within 1–2 days.</li>
                <li>Follow the urologist's guidance regarding DJ stents if placed.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Key Benefits of RIRS</h2>
            <div className="grid-layout">
              <div className="step-box"><strong>No Scars:</strong> Zero cuts, holes, or stitches involved.</div>
              <div className="step-box"><strong>Painless Recovery:</strong> Minimal blood loss and extremely low morbidity.</div>
              <div className="step-box"><strong>Tissue Safe:</strong> No harm to renal tissue during the laser process.</div>
              <div className="step-box"><strong>Fast Return:</strong> Get back to your routine in just a couple of days.</div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default RIRS;