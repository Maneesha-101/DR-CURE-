import React from "react";
import { useNavigate } from "react-router-dom";

const PCNL = () => {
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
        .pcnl-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .pcnl-container {
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

        /* BUTTON */
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
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #eee;
          position: relative;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="pcnl-hero">
        <div className="pcnl-container">
          <p className="breadcrumb">Home » Home » PCNL</p>
          <h1 className="hero-title">
            PCNL Surgery – Advanced Kidney Stone Treatment
          </h1>
          <p className="hero-text">
            Percutaneous Nephrolithotomy (PCNL) is the gold standard for treating large kidney stones (2cm or above). At <strong>Dr Cure Surgeries</strong>, we provide minimally invasive PCNL procedures to ensure high success rates and rapid recovery.
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
        <div className="pcnl-container">
          
          <div className="info-card">
            <h2 className="section-title">What is PCNL Surgery?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              PCNL is a specialized treatment for stones in the kidneys or upper ureter that are too large to pass naturally or don't respond to lithotripsy. This minimally invasive technique has replaced traditional open surgery, offering patients a solution with minimal pain and almost no visible scarring.
            </p>
          </div>

          <div className="info-card">
            <h2 className="section-title">Why Choose Dr Cure Surgeries for PCNL?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              We make advanced kidney stone treatments accessible and seamless. Our partner hospitals feature state-of-the-art infrastructure, and our expert urologists leverage modern technology to keep your comfort and safety as the top priority.
            </p>
          </div>

          <div className="info-card">
            <h2 className="section-title">The PCNL Procedure Step-by-Step</h2>
            <div className="grid-layout">
              <div className="step-box">
                <h4 style={{color: 'var(--brand-purple)'}}>01. Anesthesia</h4>
                <p style={{fontSize: '14px'}}>The patient is placed under general anesthesia to ensure complete comfort throughout the procedure.</p>
              </div>
              <div className="step-box">
                <h4 style={{color: 'var(--brand-purple)'}}>02. Access</h4>
                <p style={{fontSize: '14px'}}>A small incision is made in the flank. A nephroscope is inserted using X-ray guidance to locate the stone precisely.</p>
              </div>
              <div className="step-box">
                <h4 style={{color: 'var(--brand-purple)'}}>03. Fragmentation</h4>
                <p style={{fontSize: '14px'}}>If stones are large, a laser is used to break them into smaller fragments for easier extraction.</p>
              </div>
              <div className="step-box">
                <h4 style={{color: 'var(--brand-purple)'}}>04. Removal & Stenting</h4>
                <p style={{fontSize: '14px'}}>Stones are extracted using microforceps. A DJ stent may be placed for 10-14 days to ensure proper drainage.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">Preparation Tips</h2>
              <ul className="content-list">
                <li>Complete diagnostic tests (X-ray, Ultrasound, MRI, BUN).</li>
                <li>Fast for 6-8 hours prior to surgery.</li>
                <li>Inform your doctor about any anesthesia allergies.</li>
                <li>Discontinue blood thinners as advised by your urologist.</li>
              </ul>
            </div>
            <div className="info-card">
              <h2 className="section-title">Recovery (4-6 Weeks)</h2>
              <ul className="content-list">
                <li>Avoid heavy lifting for a few weeks.</li>
                <li>Drink ample fluids to flush out stone fragments.</li>
                <li>Follow a fiber-rich diet to prevent straining.</li>
                <li>Take prescribed pain-relieving medications regularly.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Benefits of PCNL</h2>
            <div className="grid-layout">
              <div className="step-box"><strong>High Success Rate:</strong> Ideal for stones 2cm.</div>
              <div className="step-box"><strong>Minimal Pain:</strong> Shorter hospital stays compared to open surgery.</div>
              <div className="step-box"><strong>Cosmetic Advantage:</strong> Tiny incision with no major scarring.</div>
              <div className="step-box"><strong>Fast Return:</strong> Resume daily activities within a week.</div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default PCNL;