import React from "react";
import { useNavigate } from "react-router-dom";

const Balanoposthitis = () => {
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
        .balan-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .balan-container {
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

        /* CONTENT SECTION */
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

        .risk-box {
           background: #fff;
           border: 1px solid #ddd;
           padding: 20px;
           border-radius: 12px;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="balan-hero">
        <div className="balan-container">
          <p className="breadcrumb">Home » Home » Balanoposthitis</p>
          <h1 className="hero-title">
            Balanoposthitis Treatment – Causes, Symptoms & Surgery
          </h1>
          <p className="hero-text">
            Balanoposthitis is a painful condition affecting the foreskin and head of the penis. 
            At <strong>Dr Cure Surgeries</strong>, we provide advanced medical and surgical solutions 
            to ensure effective treatment and rapid recovery.
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
        <div className="balan-container">
          
          <div className="info-card">
            <h2 className="section-title">What is Balanoposthitis?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Balanoposthitis involves inflammation of both the foreskin and the glans (head) of the penis. 
              While it can sometimes resolve on its own, chronic or severe cases require professional intervention. 
              It is most common in uncircumcised or partially circumcised men.
            </p>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">Common Causes</h2>
              <ul className="content-list">
                <li>Yeast or fungal infections</li>
                <li>STIs like Chlamydia</li>
                <li>Eczema or Psoriasis</li>
                <li>Chronic Balanitis (BXO)</li>
                <li>Chemical irritation or trauma</li>
                <li>Reactive arthritis</li>
              </ul>
            </div>
            <div className="info-card">
              <h2 className="section-title">Symptoms</h2>
              <ul className="content-list">
                <li>Pain, tenderness, and irritation</li>
                <li>Discolored or shiny glans skin</li>
                <li>Burning or itching sensations</li>
                <li>Unusual discharge</li>
                <li>Leathery skin (lichenification)</li>
                <li>Dryness and cracking</li>
              </ul>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">Diagnosis & When to See a Doctor</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Diagnosis is primarily done through a physical exam. Urologists may also perform swab tests or blood tests. 
              Consult a specialist if you notice abnormal discharge, leathery skin, or unbearable itching.
            </p>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Treatment Options</h2>
            <h3 className="sub-title">Non-Surgical Methods</h3>
            <ul className="content-list">
              <li><strong>Antibiotics:</strong> Prescribed if the cause is bacterial or an STD.</li>
              <li><strong>Antifungal Creams:</strong> Effective for yeast-driven infections.</li>
              <li><strong>Diabetes Management:</strong> Controlling blood sugar to reduce recurrence.</li>
            </ul>

            <h3 className="sub-title">Surgical Solutions (Circumcision)</h3>
            <p className="hero-text" style={{fontSize: '16px'}}>Recommended for recurrent or chronic cases.</p>
            <div className="grid-layout">
              <div className="risk-box">
                <h4>Laser Circumcision</h4>
                <p>20-minute minimally invasive procedure. Minimal blood loss, no stitches, and rapid healing.</p>
              </div>
              <div className="risk-box">
                <h4>Stapler Circumcision</h4>
                <p>Uses a surgical stapler for quick removal. No scars, same-day discharge.</p>
              </div>
              <div className="risk-box">
                <h4>Open Surgery</h4>
                <p>Traditional method using a scalpel and stitches. Performed under anesthesia.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">Dr Cure Surgeries Expertise</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              At <strong>Dr Cure Surgeries</strong>, we treat various foreskin issues by utilizing advanced 
              technologies for faster recovery and better patient care:
            </p>
            <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
              <span style={{background: '#F3E6F7', padding: '10px 20px', borderRadius: '10px', fontWeight: '600'}}>Laser Circumcision</span>
              <span style={{background: '#F3E6F7', padding: '10px 20px', borderRadius: '10px', fontWeight: '600'}}>Stapler Circumcision</span>
              <span style={{background: '#F3E6F7', padding: '10px 20px', borderRadius: '10px', fontWeight: '600'}}>Frenuloplasty Surgery</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Balanoposthitis;