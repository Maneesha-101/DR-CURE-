import React from "react";
import { useNavigate } from "react-router-dom";

const PCODPCOS = () => {
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
        .pcod-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .pcod-container {
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

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .item-box {
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

        .danger-box {
          background: #fff5f5;
          border: 1px solid #feb2b2;
          padding: 20px;
          border-radius: 15px;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="pcod-hero">
        <div className="pcod-container">
          <p className="breadcrumb">Home » Home » PCOD/PCOS Treatment</p>
          <h1 className="hero-title">Expert PCOD & PCOS Management</h1>
          <p className="hero-text">
            Polycystic Ovary Syndrome (PCOS) and Polycystic Ovarian Disease (PCOD) are hormonal 
            disorders prevalent among reproductive-aged women. At <strong>Dr Cure Surgeries</strong>, 
            we combine medical expertise with lifestyle management to help you regain hormonal balance 
            and prevent long-term health complications.
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
        <div className="pcod-container">

          <div className="info-card">
            <h2 className="section-title">Understanding PCOD vs PCOS</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              PCOS is a metabolic disorder that affects fertility and can lead to serious conditions 
              like Type 2 diabetes and hypertension if left untreated. Early diagnosis is key to 
              managing symptoms like hirsutism (excess hair), acne, and irregular cycles.
            </p>
            
          </div>

          <div className="info-card">
            <h2 className="section-title">Comprehensive Diagnosis</h2>
            <div className="grid-layout">
              <div className="item-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Physical Exam</h4>
                <p style={{fontSize: '14px'}}>Assessment of BMI, blood pressure, and screening for skin changes or excess hair growth.</p>
              </div>
              <div className="item-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Pelvic Ultrasound</h4>
                <p style={{fontSize: '14px'}}>Imaging to count follicles and check the thickness of the uterine lining.</p>
              </div>
              <div className="item-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Hormonal Testing</h4>
                <p style={{fontSize: '14px'}}>Blood tests to check insulin levels, cholesterol, and androgen levels.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">Personalized Treatment Options</h2>
            [Image showing PCOS treatment pillars: Diet, Exercise, and Medication]
            <div className="grid-layout">
              <div className="item-box">
                <strong>Lifestyle & Diet:</strong>
                <ul className="content-list" style={{fontSize: '13px', marginTop: '10px'}}>
                  <li>Low-calorie, fresh, and local food intake.</li>
                  <li>Elimination of packaged/processed carbs.</li>
                  <li>Weight loss to improve BMI and medication efficacy.</li>
                </ul>
              </div>
              <div className="item-box">
                <strong>Medical Management:</strong>
                <ul className="content-list" style={{fontSize: '13px', marginTop: '10px'}}>
                  <li>Birth control pills to regulate hormones.</li>
                  <li>Progestin therapy to simulate menstrual cycles.</li>
                  <li>Metformin or fertility drugs for those seeking pregnancy.</li>
                </ul>
              </div>
              <div className="item-box">
                <strong>Surgical Option:</strong>
                <p style={{fontSize: '13px'}}><strong>Laparoscopic Ovarian Drilling:</strong> A laser procedure used when other treatments fail, targeting androgen-producing areas.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">Yoga & Wellness for PCOD</h2>
            <p style={{marginBottom: '15px'}}>Practicing specific asanas can help normalize health and mood:</p>
            <div className="grid-layout">
              <div className="item-box"><strong>Active:</strong> Bhujangasana, Sarpasana, Kapalbhati.</div>
              <div className="item-box"><strong>Relaxing:</strong> Vishpanda Bhav, Shavasana, Anulom Vilom.</div>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Risks of Untreated PCOD</h2>
            <div className="danger-box">
              <ul className="grid-layout" style={{listStyle: 'none'}}>
                <li>⚠️ Diabetes & Glucose Intolerance</li>
                <li>⚠️ Hypertension & Heart Disease</li>
                <li>⚠️ Endometrial Cancer</li>
                <li>⚠️ Sleep Apnea</li>
                <li>⚠️ Gestational Diabetes</li>
              </ul>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">Why Choose Dr Cure Surgeries?</h2>
            <ul className="content-list">
              <li><strong>Absolute Privacy:</strong> Confidential consultations with experienced female urologists.</li>
              <li><strong>Full-Stack Support:</strong> From online consultations to in-clinic diagnostic testing.</li>
              <li><strong>End-to-End Care:</strong> We manage hospital associations and follow-ups across major Indian cities.</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
};

export default PCODPCOS;