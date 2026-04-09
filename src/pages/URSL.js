import React from "react";
import { useNavigate } from "react-router-dom";

const URSL = () => {
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
        .ursl-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .ursl-container {
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
      <section className="ursl-hero">
        <div className="ursl-container">
          <p className="breadcrumb">Home » Home » URSL</p>
          <h1 className="hero-title">
            URSL – Modern Ureteroscopic Lithotripsy
          </h1>
          <p className="hero-text">
            Ureteroscopic Lithotripsy (URSL) is a highly effective, minimally invasive procedure used to remove 
            small to medium kidney stones (7-10 mm). At <strong>Dr Cure Surgeries</strong>, we utilize precision 
            laser technology to provide relief with minimal discomfort and rapid recovery.
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
        <div className="ursl-container">

          <div className="info-card">
            <h2 className="section-title">What Is URSL?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              URSL stands for Ureteroscopic Lithotripsy. It is a common treatment for kidney stones that are 
              small to medium in size. This modern technique is also used for stones that are resistant 
              to non-surgical solutions. Using high-precision laser technology, stones are extracted 
              from the ureter with minimal risk of complications.
            </p>
          </div>

          <div className="info-card">
            <h2 className="section-title">Why Choose Dr Cure Surgeries for URSL?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              At <strong>Dr Cure Surgeries</strong>, we combine medical excellence with state-of-the-art 
              infrastructure. Our expert urologists are extensively trained in performing URSL 
              with the utmost precision, ensuring that patients experience no discomfort and receive 
              the highest standards of care.
            </p>
          </div>

          <div className="info-card">
            <h2 className="section-title">The URSL Procedure</h2>
            <div className="grid-layout">
              <div className="step-box">
                <h4 style={{color: 'var(--brand-purple)'}}>01. Anesthesia</h4>
                <p style={{fontSize: '14px'}}>The patient is administered spinal or general anesthesia based on medical requirements.</p>
              </div>
              <div className="step-box">
                <h4 style={{color: 'var(--brand-purple)'}}>02. Scope Insertion</h4>
                <p style={{fontSize: '14px'}}>A thin fiber-optic ureteroscope is inserted into the ureteral passage via the urethra.</p>
              </div>
              <div className="step-box">
                <h4 style={{color: 'var(--brand-purple)'}}>03. Laser & Removal</h4>
                <p style={{fontSize: '14px'}}>Large stones are fragmented using precision lasers, while smaller ones are collected in a stone basket.</p>
              </div>
              <div className="step-box">
                <h4 style={{color: 'var(--brand-purple)'}}>04. DJ Stenting</h4>
                <p style={{fontSize: '14px'}}>A DJ stent may be inserted to expand the ureter and facilitate the flushing out of stone fragments.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">Diagnostic Assessment</h2>
              <p style={{fontSize: '14px', marginBottom: '10px'}}>Before surgery, we perform the following tests to map stone size and location:</p>
              <ul className="content-list">
                <li>Imaging (X-ray, Ultrasound, MRI)</li>
                <li>Blood Urea Nitrogen (BUN) Test</li>
                <li>Comprehensive Blood Test</li>
                <li>Urinalysis</li>
              </ul>
            </div>
            <div className="info-card">
              <h2 className="section-title">Preparation Checklist</h2>
              <ul className="content-list">
                <li>Discuss symptoms and medical history with your urologist.</li>
                <li>Inform the doctor about any current medications or allergies.</li>
                <li>Discontinue blood thinners if advised by your specialist.</li>
                <li>Fast for 6 to 8 hours prior to the procedure.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Key Benefits of URSL</h2>
            <div className="grid-layout">
              <div className="step-box"><strong>Minimally Invasive:</strong> No major external cuts or visible scars.</div>
              <div className="step-box"><strong>High Precision:</strong> Targets stones specifically without harming tissue.</div>
              <div className="step-box"><strong>Fast Relief:</strong> Immediate removal of stones causing painful symptoms.</div>
              <div className="step-box"><strong>Quick Recovery:</strong> Patients usually return to routine within a few days.</div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default URSL;