import React from "react";
import { useNavigate } from "react-router-dom";

const ArthroscopySurgery = () => {
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
        .arthroscopy-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .arthroscopy-container {
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

        .info-card h3 {
          color: var(--footer-dark);
          font-size: 20px;
          margin: 20px 0 10px;
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
      <section className="arthroscopy-hero">
        <div className="arthroscopy-container">
          <p className="breadcrumb">Home » Home » Arthroscopy Surgery</p>
          <h1 className="hero-title">Arthroscopy Surgery – Minimally Invasive Joint Care</h1>
          <p className="hero-text">
            Arthroscopy is an innovative surgical procedure carried out for diagnosing and treating various issues within a joint. 
            At <strong>Dr Cure Surgeries</strong>, our trained orthopaedic surgeons use advanced thin-tube camera technology 
            to ensure accurate diagnosis and faster recovery for knee, shoulder, and other joint issues.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            <svg viewBox="0 0 24 24" fill="white" style={{width:'20px', height:'20px'}}><path d="M6.62 10.79a15.149 15.149 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call to Schedule Your Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Joint Conditions</p></div>
            <div className="stat"><h2>100+</h2><p>Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities</p></div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="content-section">
        <div className="arthroscopy-container">
          
          {/* Section 1: What is it */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>
              What is Arthroscopy?
            </h2>
            <p>
              It involves inserting an arthroscope, a thin tube equipped with a camera and light, into the joint. 
              This allows the doctor to view the inside of your joint on a monitor, leading to an accurate diagnosis. 
              One of the significant advantages is its minimally invasive nature—no large cuts are required, 
              which reduces risks and speeds up recovery.
            </p>
          </div>

          {/* Section 2: Types */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
              Common Types of Arthroscopy
            </h2>
            <ul className="icon-bullet-grid">
              <li><strong>Knee Arthroscopy:</strong> Treating meniscus injuries and performing ACL reconstructions.</li>
              <li><strong>Shoulder Arthroscopy:</strong> Applied for rotator cuff tears and recurrent dislocations.</li>
              <li><strong>Ankle Arthroscopy:</strong> Addressing ankle arthritis, loose bodies, and ligament tears.</li>
              <li><strong>Wrist Arthroscopy:</strong> Employed to treat conditions like carpal tunnel syndrome.</li>
              <li><strong>Hip & Elbow:</strong> Also frequently treated using specialized arthroscopic techniques.</li>
            </ul>
          </div>

          {/* Section 3: Procedure */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M13.13 14.56l-5.17 5.17a3.37 3.37 0 01-4.76-4.76l5.17-5.17m3.6 3.6l5.17-5.17a3.37 3.37 0 00-4.76-4.76l-5.17 5.17"/></svg>
              The Procedure at Dr Cure Surgeries
            </h2>
            <div className="step-item"><span className="step-tag">1</span> <span><strong>Anaesthesia:</strong> General, local, or spinal depending on the joint.</span></div>
            <div className="step-item"><span className="step-tag">2</span> <span><strong>Incisions:</strong> Small cuts (approx. 1 cm) are made for tools.</span></div>
            <div className="step-item"><span className="step-tag">3</span> <span><strong>Insertion:</strong> Arthroscope is inserted to established a clear diagnosis.</span></div>
            <div className="step-item"><span className="step-tag">4</span> <span><strong>Surgical Repair:</strong> Suturing, pinning, or bone repositioning if required.</span></div>
            <div className="step-item"><span className="step-tag">5</span> <span><strong>Closure:</strong> Incisions are closed with minimal stitches or special tape.</span></div>
          </div>

          {/* Section 4: Benefits */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
              Key Benefits
            </h2>
            <ul className="icon-bullet-grid">
              <li><strong>Minimally Invasive:</strong> Less tissue damage and lower risk of infection.</li>
              <li><strong>Rapid Recovery:</strong> Post-operative discomfort is significantly lower.</li>
              <li><strong>Outpatient Basis:</strong> Most patients return home the same day.</li>
              <li><strong>Accurate Diagnosis:</strong> Detailed internal views lead to better outcomes.</li>
            </ul>
          </div>

          {/* Section 5: Candidates */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
              Who is the Right Candidate?
            </h2>
            <p><strong>Ideal candidates typically include:</strong></p>
            <p>• Younger, active individuals suffering from joint pain without needing full replacement.</p>
            <p>• Healthy patients without conditions that complicate surgical recovery.</p>
            <p>• Patients with specific tears (Rotator cuff, Meniscal, ACL, or Labral tears).</p>
          </div>

          {/* Section 6: Recovery */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
              Recovery Tips & Precautions
            </h2>
            <ul className="icon-bullet-grid">
              <li><strong>Pain & Swelling:</strong> Use prescribed medication and ice application for the first 24 hours.</li>
              <li><strong>Elevation:</strong> Keep the operated joint elevated to ease discomfort.</li>
              <li><strong>Wound Care:</strong> Keep incisions dry and covered for the first few days.</li>
              <li><strong>Activity:</strong> Avoid strenuous movement; use crutches or slings as advised.</li>
              <li><strong>Rehabilitation:</strong> Follow the personalized exercise plan provided by your doctor.</li>
            </ul>
          </div>

          {/* FINAL CTA */}
          <div style={{textAlign: 'center', marginTop: '40px'}}>
             <button className="hero-btn" onClick={handleConsultClick}>
                Book Your Arthroscopy at Dr Cure Surgeries
             </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default ArthroscopySurgery;