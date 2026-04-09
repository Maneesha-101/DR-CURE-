import React from "react";
import { useNavigate } from "react-router-dom";

const ShoulderArthroscopy = () => {
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
          --text-gray: #444;
          --bg-light: #f9f9f9;
        }

        /* HERO SECTION */
        .shoulder-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .shoulder-container {
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
          color: var(--text-gray);
          line-height: 1.6;
          max-width: 950px;
          margin-bottom: 30px;
        }

        .hero-btn {
          background: var(--brand-orange);
          color: var(--brand-white);
          padding: 16px 32px;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 10px;
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
        .stat h2 { font-size: 36px; color: var(--brand-purple); margin: 0; }
        .stat p { color: #777; margin: 5px 0 0; }

        /* CONTENT SECTIONS */
        .content-section {
          padding: 60px 20px;
          background: var(--brand-white);
          font-family: 'Poppins', sans-serif;
        }

        .info-card {
          margin-bottom: 50px;
          line-height: 1.8;
          color: var(--text-gray);
        }

        .info-card h2 {
          color: var(--brand-purple);
          font-size: 32px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .info-card h3 {
          color: var(--footer-dark);
          font-size: 22px;
          margin: 25px 0 10px;
          border-left: 4px solid var(--brand-orange);
          padding-left: 15px;
        }

        .info-card p {
          margin-bottom: 15px;
          font-size: 16px;
        }

        .icon-bullet-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }

        .icon-bullet-list li {
          background: var(--bg-light);
          padding: 15px;
          border-radius: 12px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          border-bottom: 3px solid #eee;
        }

        .bullet-icon {
          color: var(--brand-orange);
          font-weight: bold;
          flex-shrink: 0;
          font-size: 18px;
        }

        .step-box {
            background: #fff;
            border: 1px solid #e0e0e0;
            padding: 20px;
            border-radius: 12px;
            margin-bottom: 15px;
        }

        .step-number {
            background: var(--brand-purple);
            color: white;
            width: 30px;
            height: 30px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            margin-right: 10px;
            font-weight: bold;
        }

        .svg-icon {
          width: 35px;
          height: 35px;
          fill: var(--brand-orange);
        }

        /* MOBILE */
        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card h2 { font-size: 26px; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="shoulder-hero">
        <div className="shoulder-container">
          <p className="breadcrumb">Home » Home » Shoulder Arthroscopy</p>
          <h1 className="hero-title">Shoulder Arthroscopy – Diagnosis, Treatment & Recovery</h1>
          <p className="hero-text">
            Shoulder arthroscopy is a minimally invasive surgical technique used to diagnose and treat a range of shoulder problems. 
            At <strong>Dr Cure Surgeries</strong>, our expert orthopedic specialists use advanced arthroscopic techniques to ensure faster recovery, less pain, and effective treatment.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            <svg viewBox="0 0 24 24" fill="white" style={{width:'20px', height:'20px'}}><path d="M6.62 10.79a15.149 15.149 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call to Schedule Your Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Diseases Treated</p></div>
            <div className="stat"><h2>100+</h2><p>Partner Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities Present</p></div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="content-section">
        <div className="shoulder-container">
          
          {/* Section 1: Definition */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
              What is Shoulder Arthroscopy?
            </h2>
            <p>
              Shoulder arthroscopy is a minimally invasive surgical technique used to diagnose and treat a range of shoulder problems. Utilising a small camera called an arthroscope, the surgeon gains a clear view of the shoulder’s interior on a video monitor, enabling precise treatment without the need for large incisions.
            </p>
            <p>
              This procedure is essential for addressing joint abnormalities, repairing damaged tissues, and relieving persistent pain. Benefits at <strong>Dr Cure Surgeries</strong> include reduced recovery time, less postoperative discomfort, and minimal scarring compared to open surgery.
            </p>
          </div>

          {/* Section 2: Types */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>
              Types of Shoulder Arthroscopy
            </h2>
            <ul className="icon-bullet-list">
              <li><strong>Rotator Cuff Repair:</strong> Mends torn tendons in the shoulder’s rotator cuff.</li>
              <li><strong>Subacromial Decompression:</strong> Removes bursa or impinging tissue to increase movement space.</li>
              <li><strong>Labral/Bankart Repair:</strong> Repairs torn cartilage in the socket to fix instability.</li>
              <li><strong>SLAP Repair:</strong> Fixes specific labral tears where the bicep tendon attaches.</li>
              <li><strong>Capsular Release:</strong> Treats frozen shoulder by loosening the tight joint capsule.</li>
            </ul>
          </div>

          {/* Section 3: Diagnosis */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15l-4-4 1.41-1.41L12 15.17l5.59-5.59L19 11l-7 7z"/></svg>
              Diagnosis Before Surgery
            </h2>
            <p>A detailed diagnosis is crucial to pinpoint the issue. Common diagnostic steps at Dr Cure Surgeries include:</p>
            <div className="faq-grid">
               <h3>Imaging & Exams</h3>
               <p>• <strong>Physical Examination:</strong> Assessing range of motion, stability, and strength.</p>
               <p>• <strong>X-rays:</strong> Ruling out bone-related issues and joint alignment.</p>
               <p>• <strong>MRI Scans:</strong> Detailed images of soft tissues, tendons, and cartilage.</p>
               <p>• <strong>Ultrasound:</strong> Viewing soft tissues in motion to detect subtle abnormalities.</p>
            </div>
          </div>

          {/* Section 4: Procedure */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M13.13 14.56l-5.17 5.17a3.37 3.37 0 01-4.76-4.76l5.17-5.17m3.6 3.6l5.17-5.17a3.37 3.37 0 00-4.76-4.76l-5.17 5.17"/></svg>
              The Procedure Step-by-Step
            </h2>
            <div className="step-box"><span className="step-number">1</span> <strong>Preparation:</strong> Administration of general anaesthesia or a regional block.</div>
            <div className="step-box"><span className="step-number">2</span> <strong>Incision:</strong> Small incisions (about 1cm) are made around the shoulder.</div>
            <div className="step-box"><span className="step-number">3</span> <strong>Insertion:</strong> The arthroscope projects real-time images onto a screen.</div>
            <div className="step-box"><span className="step-number">4</span> <strong>Surgery:</strong> Miniature instruments repair or remove damaged tissues.</div>
            <div className="step-box"><span className="step-number">5</span> <strong>Closure:</strong> Incisions are closed with small stitches or bandages.</div>
          </div>

          {/* Section 5: Candidates & Benefits */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
              Benefits & Suitability
            </h2>
            <p><strong>You may be a candidate if you have:</strong> Persistent pain, limited mobility, chronic injuries, or failed previous treatments.</p>
            <ul className="icon-bullet-list">
              <li><strong>Reduced Pain:</strong> Smaller incisions mean less postoperative discomfort.</li>
              <li><strong>Faster Recovery:</strong> Quicker return to daily activities and work.</li>
              <li><strong>Functional Scarring:</strong> Minimal scarring ensures better cosmetic and joint movement results.</li>
              <li><strong>High Precision:</strong> Camera-guided accuracy leads to better long-term outcomes.</li>
            </ul>
          </div>

          {/* Section 6: Preparation */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
              How to Prepare
            </h2>
            <p>To ensure the best outcome at <strong>Dr Cure Surgeries</strong>:</p>
            <p>• <strong>Medical Evaluation:</strong> Complete a thorough check-up for surgical readiness.</p>
            <p>• <strong>Medication Review:</strong> Discuss all current prescriptions; some may need adjustment before the procedure.</p>
          </div>

          {/* FINAL CTA */}
          <div style={{textAlign: 'center', marginTop: '40px'}}>
             <button className="hero-btn" onClick={handleConsultClick}>
                Book Your Consultation at Dr Cure Surgeries Today
             </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default ShoulderArthroscopy;