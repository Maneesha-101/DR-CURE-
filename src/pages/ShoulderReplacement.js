import React from "react";
import { useNavigate } from "react-router-dom";

const ShoulderReplacement = () => {
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
        .shoulder-replace-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .shoulder-replace-container {
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
          font-size: 30px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .icon-bullet-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 15px;
          margin-top: 20px;
          list-style: none;
          padding: 0;
        }

        .icon-bullet-grid li {
          background: var(--bg-light);
          padding: 18px;
          border-radius: 12px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          border-left: 5px solid var(--brand-orange);
          font-size: 15px;
        }

        .step-item {
          margin-bottom: 12px;
          padding: 15px 20px;
          border: 1px solid #eee;
          border-radius: 10px;
          background: #fff;
          display: flex;
          align-items: center;
        }

        .step-tag {
          color: var(--brand-purple);
          font-weight: 800;
          margin-right: 15px;
          background: #f0f0f0;
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .svg-icon {
          width: 35px;
          height: 35px;
          fill: var(--brand-orange);
        }

        @media(max-width:900px){
          .hero-title { font-size: 32px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card h2 { font-size: 24px; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="shoulder-replace-hero">
        <div className="shoulder-replace-container">
          <p className="breadcrumb">Home » Home » Shoulder Replacement</p>
          <h1 className="hero-title">Shoulder Replacement: Diagnosis, Surgery & Recovery</h1>
          <p className="hero-text">
            Shoulder replacement, also known as shoulder arthroplasty, is a surgical procedure that helps relieve pain and restore function in damaged shoulder joints. At <strong>Dr Cure Surgeries</strong>, our expert specialists provide advanced joint replacement techniques ensuring improved mobility and long-lasting results.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            <svg viewBox="0 0 24 24" fill="white" style={{width:'20px', height:'20px'}}><path d="M6.62 10.79a15.149 15.149 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call to Schedule Your Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Joint Procedures</p></div>
            <div className="stat"><h2>100+</h2><p>Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities</p></div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="content-section">
        <div className="shoulder-replace-container">
          
          {/* What is Shoulder Replacement */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/></svg>
              What is Shoulder Replacement?
            </h2>
            <p>
              Shoulder replacement surgery is a specialized medical procedure designed to replace damaged bone and cartilage with prosthetic components. These parts are integral to restoring arm mobility and stability. Performed by seasoned orthopaedic surgeons at <strong>Dr Cure Surgeries</strong>, this procedure is safe and effective for helping individuals regain their full range of motion after severe joint degradation.
            </p>
          </div>

          {/* Types of Surgery */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>
              Types of Shoulder Replacement
            </h2>
            <ul className="icon-bullet-grid">
              <li><strong>Total Shoulder Replacement:</strong> Replacing both the ball and socket with prosthetic parts.</li>
              <li><strong>Partial Shoulder Replacement (Hemiarthroplasty):</strong> Replacing only the ball (humerus head) of the joint.</li>
              <li><strong>Reverse Shoulder Replacement:</strong> Switching the position of the ball and socket—ideal for patients with severe rotator cuff damage.</li>
              <li><strong>Resurfacing:</strong> Replacing only the joint surfaces to preserve as much natural bone as possible.</li>
            </ul>
          </div>

          {/* Diagnosis */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
              Diagnosis Before Surgery
            </h2>
            <ul className="icon-bullet-grid">
              <li><strong>Medical History:</strong> Comprehensive review of past injuries and chronic joint symptoms.</li>
              <li><strong>Physical Examination:</strong> Testing range of motion, strength, and stability.</li>
              <li><strong>Imaging Tests:</strong> X-rays, MRI scans, or CT scans to visualize bone and soft tissue damage.</li>
            </ul>
          </div>

          {/* Procedure */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M13.13 14.56l-5.17 5.17a3.37 3.37 0 01-4.76-4.76l5.17-5.17m3.6 3.6l5.17-5.17a3.37 3.37 0 00-4.76-4.76l-5.17 5.17"/></svg>
              The Procedure
            </h2>
            <div className="step-item"><span className="step-tag">1</span> <span><strong>Anaesthesia:</strong> Performed under general anaesthesia for patient comfort.</span></div>
            <div className="step-item"><span className="step-tag">2</span> <span><strong>Incision:</strong> A precise incision is made over the shoulder to access the joint.</span></div>
            <div className="step-item"><span className="step-tag">3</span> <span><strong>Replacement:</strong> Damaged bone is removed and replaced with prosthetic components.</span></div>
            <div className="step-item"><span className="step-tag">4</span> <span><strong>Closure:</strong> The site is sutured and protected with surgical bandages.</span></div>
          </div>

          {/* Recovery Tips */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              Recovery Tips & Precautions
            </h2>
            <ul className="icon-bullet-grid">
              <li><strong>Sling Support:</strong> Immobilize the arm for 4-6 weeks to protect the new joint.</li>
              <li><strong>Physical Therapy:</strong> Essential for regaining functional range-of-motion.</li>
              <li><strong>Avoid Smoking:</strong> Nicotine use can hinder bone healing and prosthetic integration.</li>
              <li><strong>Gradual Resumption:</strong> Avoid heavy lifting or strenuous activity until cleared by the doctor.</li>
            </ul>
          </div>

          {/* Cost & Insurance */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
              Cost & Insurance in India
            </h2>
            <p>
              The cost of shoulder replacement at <strong>Dr Cure Surgeries</strong> varies based on the type of prosthesis used and the severity of the case. In India, most health insurance policies provide coverage for joint replacement, including surgeon fees and hospital stay costs. We recommend consulting your provider to check for specific exclusions.
            </p>
          </div>

          {/* FINAL CTA */}
          <div style={{textAlign: 'center', marginTop: '40px'}}>
             <button className="hero-btn" onClick={handleConsultClick}>
                Schedule Your Shoulder Evaluation at Dr Cure Surgeries
             </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default ShoulderReplacement;