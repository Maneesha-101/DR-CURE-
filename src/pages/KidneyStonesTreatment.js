import React from "react";
import { useNavigate } from "react-router-dom";

const KidneyStonesTreatment = () => {
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
        .kidney-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .kidney-container {
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

        .content-list {
          padding-left: 20px;
          margin-bottom: 20px;
        }

        .content-list li {
          margin-bottom: 12px;
          color: #555;
          line-height: 1.6;
        }

        .image-placeholder {
          background: #eef2f5;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 250px;
          margin: 20px 0;
          color: #777;
          border: 1px dashed #ccc;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="kidney-hero">
        <div className="kidney-container">
          <p className="breadcrumb">Home » Home » Kidney Stones Treatment</p>
          <h1 className="hero-title">Advanced Kidney Stone Laser Treatment</h1>
          <p className="hero-text">
            Kidney stone laser treatment, or laser lithotripsy, is a minimally invasive procedure 
            that breaks stones into tiny fragments for natural passage. At <strong>Dr Cure Surgeries</strong>, 
            we use high-precision technology to provide safe, effective relief without external incisions.
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

      {/* Main Content Section */}
      <section className="content-section">
        <div className="kidney-container">

          <div className="info-card">
            <h2 className="section-title">Understanding Laser Lithotripsy</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              During the procedure, a specialized ureteroscope is inserted into the urinary tract. 
              A laser fiber then delivers focused energy to the stone, breaking it into tiny pieces 
              that can be easily expelled from the body.
            </p>
            
          </div>

          <div className="info-card">
            <h2 className="section-title">Diagnosis & Eligibility</h2>
            <div className="grid-layout">
              <div className="step-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Who is Eligible?</h4>
                <ul className="content-list" style={{fontSize: '14px', marginTop: '10px'}}>
                  <li>Small to medium-sized stones.</li>
                  <li>Severe pain or difficulty urinating.</li>
                  <li>Presence of calcium or uric acid stones.</li>
                  <li>Cases where traditional surgery is high-risk.</li>
                </ul>
              </div>
              <div className="step-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Diagnostic Steps</h4>
                <ul className="content-list" style={{fontSize: '14px', marginTop: '10px'}}>
                  <li>Physical examination & history.</li>
                  <li>Imaging (CT scan, Ultrasound).</li>
                  <li>Urinalysis & stone composition analysis.</li>
                </ul>
              </div>
            </div>
            
          </div>

          <div className="info-card">
            <h2 className="section-title">The Step-by-Step Procedure</h2>
            <div className="grid-layout">
              <div className="step-box"><strong>01. Anesthesia:</strong> Patient receives general anesthesia for comfort.</div>
              <div className="step-box"><strong>02. Scope Entry:</strong> A ureteroscope is passed through the urethra into the bladder.</div>
              <div className="step-box"><strong>03. Localization:</strong> Surgeon locates stones in the kidney or ureter via camera.</div>
              <div className="step-box"><strong>04. Fragmentation:</strong> Laser pulses break the stones into fine fragments.</div>
              <div className="step-box"><strong>05. Removal:</strong> Fragments are removed or left to pass naturally.</div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">Benefits of Laser Surgery</h2>
              <ul className="content-list">
                <li><strong>Minimally Invasive:</strong> No external incisions or trauma.</li>
                <li><strong>Precision:</strong> Minimal damage to surrounding healthy tissue.</li>
                <li><strong>Fast Recovery:</strong> Most patients return home the same day.</li>
                <li><strong>Reduced Pain:</strong> Significantly less discomfort than open surgery.</li>
              </ul>
            </div>
            <div className="info-card">
              <h2 className="section-title">Recovery & Aftercare</h2>
              <ul className="content-list">
                <li>Drink 3-4 liters of water daily to flush fragments.</li>
                <li>Follow a balanced, low-salt, and low-sugar diet.</li>
                <li>Avoid strenuous exercise in the initial days.</li>
                <li>Monitor for fever or persistent pain and contact us immediately.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Cost & Insurance</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              At <strong>Dr Cure Surgeries</strong>, we provide transparent pricing. Costs depend on 
              surgeon expertise, facility fees, and the technology used. We work with major 
              insurance providers and Medicare to facilitate smooth coverage for medical necessity.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default KidneyStonesTreatment;