import React from "react";
import { useNavigate } from "react-router-dom";

const MTP = () => {
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
        .mtp-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .mtp-container {
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
      <section className="mtp-hero">
        <div className="mtp-container">
          <p className="breadcrumb">Home » Home » Abortion/MTP</p>
          <h1 className="hero-title">Medical Termination of Pregnancy (MTP)</h1>
          <p className="hero-text">
            Medical abortion is a non-surgical, safe, and effective method to end an early pregnancy 
            using FDA-approved medications. At <strong>Dr Cure Surgeries</strong>, we provide 
            government-approved, 100% legal, and strictly confidential care up to the 7th week of gestation.
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

      {/* Main Content Section */}
      <section className="content-section">
        <div className="mtp-container">

          <div className="info-card">
            <h2 className="section-title">What is MTP?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Medical Termination of Pregnancy uses a combination of two drugs to block 
              progesterone, the hormone essential for maintaining pregnancy. It is about 
              <strong> 99% effective</strong> in early stages and is a non-invasive alternative 
              to surgical procedures.
            </p>
            <div className="grid-layout">
              <div className="step-box">✅ Safe & Minimal Pain</div>
              <div className="step-box">✅ 100% Legal (MTP Act)</div>
              <div className="step-box">✅ Complete Confidentiality</div>
              <div className="step-box">✅ No Cuts or Scars</div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">The MTP Process: Step-by-Step</h2>
            <div className="grid-layout">
              <div className="step-box">
                <h4 className="highlight-text">01. Assessment</h4>
                <p style={{fontSize: '14px'}}>Initial consultation including ultrasound and blood tests to confirm gestation period and health status.</p>
              </div>
              <div className="step-box">
                <h4 className="highlight-text">02. First Pill</h4>
                <p style={{fontSize: '14px'}}>Administration of <strong>Mifepristone</strong>, which stops the pregnancy from progressing by blocking progesterone.</p>
              </div>
              <div className="step-box">
                <h4 className="highlight-text">03. Second Pill</h4>
                <p style={{fontSize: '14px'}}>After 24-48 hours, <strong>Misoprostol</strong> is taken to trigger uterine contractions and expel the pregnancy.</p>
              </div>
              <div className="step-box">
                <h4 className="highlight-text">04. Completion</h4>
                <p style={{fontSize: '14px'}}>The process typically completes within a few hours. Some cramping and bleeding are normal during this stage.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">How to Prepare</h2>
              <ul className="content-list">
                <li><strong>Educate Yourself:</strong> Understand the physical and emotional steps involved.</li>
                <li><strong>Choose Licensed Care:</strong> Only seek MTP from registered gynecologists at government-approved centers like ours.</li>
                <li><strong>Confirm Age:</strong> Ensure you have valid documentation supporting 18+ years of age for self-consent.</li>
                <li><strong>Emotional Space:</strong> Allow yourself time to process your decision without judgment.</li>
              </ul>
            </div>
            <div className="info-card">
              <h2 className="section-title">Post-Procedure Care</h2>
              <ul className="content-list">
                <li>Expect bleeding and cramping similar to a heavy period for 1-2 weeks.</li>
                <li>Avoid strenuous physical activity for at least 48 hours.</li>
                <li>Attend the follow-up consultation to ensure the procedure is fully complete.</li>
                <li>Contact your doctor immediately if you experience heavy soaking of more than 2 pads per hour.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Privacy & Legality</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              At <strong>Dr Cure Surgeries</strong>, your privacy is non-negotiable. We follow 
              strict ethical guidelines under the amended MTP Act, 1971. For women 18+, 
              only your own written consent is legally required. We offer a discreet, 
              hygienic, and professional environment for all our patients.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default MTP;