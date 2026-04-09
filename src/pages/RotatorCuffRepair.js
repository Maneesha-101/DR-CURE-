import React from "react";
import { useNavigate } from "react-router-dom";

const RotatorCuffRepair = () => {
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
        .rotator-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .rotator-container {
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

        /* MOBILE */
        @media(max-width:900px){
          .hero-title { font-size: 32px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card h2 { font-size: 24px; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="rotator-hero">
        <div className="rotator-container">
          <p className="breadcrumb">Home » Home » Rotator Cuff Repair</p>
          <h1 className="hero-title">Rotator Cuff Repair Surgery – Diagnosis & Procedure</h1>
          <p className="hero-text">
            Get advanced diagnosis and treatment for rotator cuff injuries with expert orthopedic surgeons at <strong>Dr Cure Surgeries</strong>. 
            Our minimally invasive repair procedures relieve pain, restore shoulder strength, and ensure long-term mobility.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            <svg viewBox="0 0 24 24" fill="white" style={{width:'20px', height:'20px'}}><path d="M6.62 10.79a15.149 15.149 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call to Schedule Your Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Specialized Treatments</p></div>
            <div className="stat"><h2>100+</h2><p>Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities</p></div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="content-section">
        <div className="rotator-container">
          
          {/* Section 1: What is it */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/></svg>
              What is Rotator Cuff Repair?
            </h2>
            <p>
              Rotator cuff surgery is a specialized procedure designed to repair torn tendons in the shoulder. These tendons are integral to arm mobility and stability. Performed by seasoned orthopaedic surgeons at <strong>Dr Cure Surgeries</strong>, this is typically an outpatient procedure using anchors and sutures to reattach the tendon to the humerus (upper arm bone).
            </p>
          </div>

          {/* Section 2: Types */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>
              Types of Surgery
            </h2>
            <ul className="icon-bullet-grid">
              <li><strong>Open Repair:</strong> Traditional method for complex tears involving a several-centimeter incision.</li>
              <li><strong>Arthroscopic Repair:</strong> Minimally invasive using small incisions and a camera—least tissue damage.</li>
              <li><strong>Mini-Open Repair:</strong> Combines arthroscopy with a small 2-3 inch incision for balanced recovery.</li>
            </ul>
          </div>

          {/* Section 3: Procedure */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M13.13 14.56l-5.17 5.17a3.37 3.37 0 01-4.76-4.76l5.17-5.17m3.6 3.6l5.17-5.17a3.37 3.37 0 00-4.76-4.76l-5.17 5.17"/></svg>
              The Procedure
            </h2>
            <div className="step-item"><span className="step-tag">1</span> <span><strong>Anaesthesia:</strong> Performed under general anaesthesia for a pain-free experience.</span></div>
            <div className="step-item"><span className="step-tag">2</span> <span><strong>Approach:</strong> Open, mini-open, or arthroscopic based on tear severity.</span></div>
            <div className="step-item"><span className="step-tag">3</span> <span><strong>Repair:</strong> Tendons reattached to the humerus using high-strength sutures.</span></div>
            <div className="step-item"><span className="step-tag">4</span> <span><strong>Closure:</strong> Incisions are stitched and protected with surgical bandages.</span></div>
          </div>

          {/* Section 4: Candidates & Benefits */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
              Benefits & Suitability
            </h2>
            <p><strong>Benefits:</strong> Improved shoulder strength, significant pain relief, and faster recovery (with arthroscopic options).</p>
            <p><strong>Ideal Candidates:</strong> Those with large tears, persistent weakness, or failure of non-surgical treatments like physical therapy.</p>
          </div>

          {/* Section 5: Preparation */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
              How to Prepare
            </h2>
            <ul className="icon-bullet-grid">
              <li><strong>Medical History:</strong> Full review of past injuries and aggregate symptoms.</li>
              <li><strong>Physical Exam:</strong> Movement tests to assess range of motion and stability.</li>
              <li><strong>Imaging Scans:</strong> MRI, Ultrasound, or X-rays to confirm tear size.</li>
              <li><strong>Pre-Op Fasting:</strong> Following surgeon instructions for anaesthesia safety.</li>
            </ul>
          </div>

          {/* Section 6: Recovery */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/></svg>
              Recovery Tips
            </h2>
            <ul className="icon-bullet-grid">
              <li><strong>Wear a Sling:</strong> Immobilize the arm for 4-6 weeks to protect the tendon.</li>
              <li><strong>Gradual Exercise:</strong> Start with gentle range-of-motion, then strengthening.</li>
              <li><strong>Avoid Smoking:</strong> Nicotine significantly hinders the healing of tendons.</li>
              <li><strong>Patience:</strong> Full functional recovery can take 4-6 months or longer.</li>
            </ul>
          </div>

          {/* Section 7: Risks & Cost */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
              Risks & Insurance
            </h2>
            <p><strong>Potential Risks:</strong> Nerve injury, infection, stiffness, or tendon re-tear (rare).</p>
            <p><strong>Cost & Insurance:</strong> Most insurance providers cover rotator cuff repair at <strong>Dr Cure Surgeries</strong>. Costs vary based on the surgery type (Open vs. Arthroscopic) and hospital location.</p>
          </div>

          {/* FINAL CTA */}
          <div style={{textAlign: 'center', marginTop: '40px'}}>
             <button className="hero-btn" onClick={handleConsultClick}>
                Schedule Your Consultation at Dr Cure Surgeries Today
             </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default RotatorCuffRepair;