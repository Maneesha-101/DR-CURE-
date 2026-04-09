import React from "react";
import { useNavigate } from "react-router-dom";

const UmbilicalHernia = () => {
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
        .umbilical-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .umbilical-container {
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
          line-height: 1.7;
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

        /* CONTENT STYLING */
        .umbilical-content {
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

        .highlight-box {
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
      <section className="umbilical-hero">
        <div className="umbilical-container">
          <p className="breadcrumb">Home » Home » Umbilical hernia</p>
          <h1 className="hero-title">
            Umbilical Hernia Laparoscopic Surgery by Elite Surgeons
          </h1>
          <p className="hero-text">
            Are you tired of living with the discomfort of an umbilical hernia? Consult with 
            the best general surgeons and eliminate painful symptoms. Our experienced 
            specialists utilize minimally invasive techniques, ensuring quicker recovery 
            and minimal scarring.
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
      <section className="umbilical-content">
        <div className="umbilical-container">

          {/* Overview & Risk Factors */}
          <div className="info-card">
            <h2 className="section-title">What Is An Umbilical Hernia?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              An umbilical hernia occurs when a portion of the intestine protrudes through 
              the abdominal muscles near the navel. While common in infants, they often 
              occur in adults due to muscle strain.
            </p>
            <h3 className="sub-title">Risk Factors</h3>
            <div className="grid-layout">
              <ul className="content-list">
                <li><strong>Obesity:</strong> Excess weight strains abdominal muscles.</li>
                <li><strong>Pregnancy:</strong> Multiple pregnancies stretch and weaken the wall.</li>
                <li><strong>Chronic Strain:</strong> Persistent coughing or constipation.</li>
              </ul>
              <ul className="content-list">
                <li><strong>History:</strong> Previous abdominal surgeries.</li>
                <li><strong>Age/Gender:</strong> More common in infants and adult women.</li>
              </ul>
            </div>
          </div>

          {/* Diagnosis & Preparation */}
          <div className="info-card">
            <h2 className="section-title">Diagnosis & Pre-Surgery Prep</h2>
            <div className="grid-layout">
              <div className="highlight-box">
                <h3 className="sub-title">Diagnosis Tests</h3>
                <ul className="content-list">
                  <li>Physical Examination (Palpation)</li>
                  <li>Ultrasound (Real-time imaging)</li>
                  <li>CT Scan (Detailed cross-section)</li>
                  <li>MRI (Non-radiation imaging)</li>
                </ul>
              </div>
              <div className="highlight-box">
                <h3 className="sub-title">Preparation Steps</h3>
                <ul className="content-list">
                  <li>Fasting (No food/drink for specific duration)</li>
                  <li>Stop blood thinners (Aspirin, Ibuprofen)</li>
                  <li>Quit smoking to enhance healing</li>
                  <li>Remove makeup/nail paint for observation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Surgical Treatments */}
          <div className="info-card">
            <h2 className="section-title">Surgical Treatment Options</h2>
            <div className="grid-layout">
              <div style={{background: '#fff', padding: '20px', borderRadius: '15px'}}>
                <h3 className="sub-title">Laparoscopic Surgery</h3>
                <p className="hero-text" style={{fontSize: '15px'}}>
                  <strong>The Best Approach:</strong> Minimally invasive "keyhole" surgery 
                  involving tiny incisions and a camera. 
                </p>
                <ul className="content-list">
                  <li>Faster recovery time</li>
                  <li>Reduced postoperative pain</li>
                  <li>Minimal scarring</li>
                  <li>Outpatient (same-day) procedure</li>
                </ul>
              </div>
              <div style={{background: '#fff', padding: '20px', borderRadius: '15px'}}>
                <h3 className="sub-title">Open Surgery</h3>
                <p className="hero-text" style={{fontSize: '15px'}}>
                  Traditional incision near the navel used to manually repair the 
                  weakened wall, often reinforced with mesh.
                </p>
                <ul className="content-list">
                  <li>Effective for various hernia sizes</li>
                  <li>Traditional herniorrhaphy method</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recovery Tips */}
          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Recovery Tips for Success</h2>
            <div className="grid-layout">
              <div>
                <ul className="content-list">
                  <li><strong>Rest & Walk:</strong> Rest for a few days, then walk slowly to improve circulation.</li>
                  <li><strong>Diet:</strong> High-fiber foods and plenty of water to prevent constipation.</li>
                  <li><strong>Pain Management:</strong> Take prescribed NSAIDs; use a pillow for support when coughing.</li>
                </ul>
              </div>
              <div>
                <ul className="content-list">
                  <li><strong>Wound Care:</strong> Monitor for signs of infection (redness, swelling).</li>
                  <li><strong>Activity:</strong> Avoid heavy lifting or driving until cleared by your surgeon.</li>
                  <li><strong>Follow-ups:</strong> Attend all scheduled appointments to monitor progress.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Potential Complications */}
          <div className="info-card">
            <h2 className="section-title">Potential Complications</h2>
            <p className="hero-text" style={{fontSize: '15px'}}>
              Complications are rare, especially with experienced surgeons, but can include:
            </p>
            <ul className="content-list">
              <li>Infection at the incision site or hematoma formation.</li>
              <li>Minimal risk of organ or blood vessel damage.</li>
              <li>Possibility of hernia recurrence or chronic pain.</li>
              <li>Anesthesia risks or adverse reaction to mesh materials.</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
};

export default UmbilicalHernia;