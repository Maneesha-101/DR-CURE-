import React from "react";
import { useNavigate } from "react-router-dom";

const FrenuloplastySurgery = () => {
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
        .frenulo-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .frenulo-container {
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

        .detail-box {
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

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="frenulo-hero">
        <div className="frenulo-container">
          <p className="breadcrumb">Home » Home » Frenuloplasty</p>
          <h1 className="hero-title">
            Frenuloplasty Surgery For Tight & Short Frenulum
          </h1>
          <p className="hero-text">
            Frenuloplasty is a specialized procedure designed to treat a short or tight frenulum breve 
            while preserving the foreskin. At <strong>Dr Cure Surgeries</strong>, we provide 
            advanced laser treatments that ensure minimal discomfort and a fast return to routine.
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
        <div className="frenulo-container">

          <div className="info-card">
            <h2 className="section-title">What is Frenuloplasty?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Frenuloplasty is the surgical modification of the frenulum (the small tag of skin connecting 
              the foreskin to the glans). When the frenulum is too short, it causes pain during erections 
              and risks tearing. Unlike circumcision, which removes the entire foreskin, frenuloplasty 
              leaves the foreskin intact while relieving restriction.
            </p>
          </div>

          <div className="info-card">
            <h2 className="section-title">Causes of a Tight Frenulum</h2>
            <div className="grid-layout">
              <div className="detail-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Balanitis</h4>
                <p style={{fontSize: '14px'}}>Inflammation of the penis head, often leading to soreness and tightness.</p>
              </div>
              <div className="detail-box">
                <h4 style={{color: 'var(--brand-purple)'}}>STIs</h4>
                <p style={{fontSize: '14px'}}>Infections like Syphilis or Genital Herpes can increase the risk of developing a tight foreskin.</p>
              </div>
              <div className="detail-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Skin Conditions</h4>
                <p style={{fontSize: '14px'}}>Psoriasis, Eczema, or Lichen Sclerosus can contribute to skin restriction.</p>
              </div>
              <div className="detail-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Balanoposthitis</h4>
                <p style={{fontSize: '14px'}}>Fungal infections (Candida) affecting both the glans and the foreskin.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">Benefits of the Procedure</h2>
            <ul className="content-list">
              <li><strong>Enhanced Comfort:</strong> Immediate relief from pain during sexual activity and daily movement.</li>
              <li><strong>Improved Satisfaction:</strong> Complete retraction of the foreskin allows for pain-free intimacy.</li>
              <li><strong>Prevention:</strong> Reduces the risk of recurrent infections like Balanitis or Posthitis.</li>
              <li><strong>Preservation:</strong> Solely treats the restriction without needing full circumcision.</li>
            </ul>
          </div>

          <div className="info-card">
            <h2 className="section-title">Surgical Methods</h2>
            <div className="grid-layout">
              <div className="detail-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Laser Frenuloplasty</h4>
                <p style={{fontSize: '14px'}}>A minimally invasive method using a CO2 laser. It involves no cuts, no stitches, and virtually no blood loss, resulting in minimal scarring and a 3-5 day recovery.</p>
              </div>
              <div className="detail-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Open Frenuloplasty</h4>
                <p style={{fontSize: '14px'}}>A conventional approach where an incision is made to stretch the frenulum, which is then sealed with dissolvable stitches.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">Preparation Tips</h2>
              <ul className="content-list">
                <li>Avoid smoking as it slows the healing process.</li>
                <li>Fast for a few hours prior (based on anesthesia type).</li>
                <li>Discuss current medications and allergies with your surgeon.</li>
              </ul>
            </div>
            <div className="info-card">
              <h2 className="section-title">Potential Risks</h2>
              <ul className="content-list">
                <li>Temporary swelling or tenderness.</li>
                <li>Minor bleeding at the incision site.</li>
                <li>Reduced sensitivity in the glans (rare).</li>
                <li>In rare cases, circumcision may be needed if condition persists.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default FrenuloplastySurgery;