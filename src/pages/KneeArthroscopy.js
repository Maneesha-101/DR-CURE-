import React from "react";
import { useNavigate } from "react-router-dom";

const KneeArthroscopy = () => {
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
        .knee-arthroscopy-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .knee-arthroscopy-container {
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
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 15px;
          margin-top: 20px;
          list-style: none;
          padding: 0;
        }

        .icon-bullet-grid li {
          background: var(--bg-light);
          padding: 15px;
          border-radius: 10px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          border-left: 4px solid var(--brand-orange);
          font-size: 15px;
        }

        .step-item {
          margin-bottom: 15px;
          padding: 20px;
          border: 1px solid #eee;
          border-radius: 12px;
          background: #fff;
        }

        .step-tag {
          color: var(--brand-orange);
          font-weight: 700;
          margin-right: 10px;
        }

        .svg-icon {
          width: 32px;
          height: 32px;
          fill: var(--brand-orange);
        }

        /* MOBILE */
        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card h2 { font-size: 24px; }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="knee-arthroscopy-hero">
        <div className="knee-arthroscopy-container">
          <p className="breadcrumb">Home » Home » Knee Arthroscopy</p>
          <h1 className="hero-title">Minimally Invasive Knee Arthroscopy</h1>
          <p className="hero-text">
            Knee arthroscopy is a modern minimally invasive surgical procedure used to diagnose and treat various knee conditions such as ligament injuries, cartilage damage, and joint disorders. At <strong>Dr Cure Surgeries</strong>, our expert orthopedic surgeons use advanced arthroscopic techniques to ensure faster recovery, minimal pain, and improved mobility.
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
        <div className="knee-arthroscopy-container">
          
          {/* Section 1: Definition */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>
              What Is Knee Arthroscopy?
            </h2>
            <p>
              Knee arthroscopy is a surgical intervention that enables orthopaedic specialists to view the knee joint without making a large incision. This is achieved through the use of an arthroscope—a type of endoscope inserted into the joint through a small cut. 
            </p>
            <p>
              At <strong>Dr Cure Surgeries</strong>, this procedure is typically recommended when less invasive treatments have failed. It offers crucial benefits, such as reduced healing time, decreased risk of infection, and minimal scarring.
            </p>
          </div>

          {/* Section 2: Types */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>
              Types of Knee Arthroscopy
            </h2>
            <ul className="icon-bullet-grid">
              <li><strong>Partial Meniscectomy:</strong> Removal of torn meniscus portions.</li>
              <li><strong>Meniscus Repair:</strong> Suturing torn tissue to preserve function.</li>
              <li><strong>ACL/PCL Reconstruction:</strong> Graft replacement for torn ligaments.</li>
              <li><strong>Synovectomy:</strong> Removal of inflamed synovial tissue.</li>
              <li><strong>Chondroplasty:</strong> Reshaping damaged articular cartilage.</li>
              <li><strong>Loose Fragment Removal:</strong> Extraction of bone or cartilage debris.</li>
              <li><strong>Patellar Treatments:</strong> Addressing kneecap alignment issues.</li>
              <li><strong>Knee Sepsis Treatment:</strong> Eradication of joint infections.</li>
            </ul>
          </div>

          {/* Section 3: Diagnosis */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 15l-4-4 1.41-1.41L12 15.17l5.59-5.59L19 11l-7 7z"/></svg>
              Diagnosis & Evaluation
            </h2>
            <p>Before proceeding at <strong>Dr Cure Surgeries</strong>, a thorough diagnosis is essential:</p>
            <ul className="icon-bullet-grid">
              <li><strong>Physical Examination:</strong> Assessing range of motion, stability, and swelling.</li>
              <li><strong>Imaging (X-Ray/MRI/CT):</strong> Identifying fractures and soft tissue damage.</li>
              <li><strong>Diagnostic Arthroscopy:</strong> Direct joint visualization if imaging is inconclusive.</li>
            </ul>
          </div>

          {/* Section 4: Procedure */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M13.13 14.56l-5.17 5.17a3.37 3.37 0 01-4.76-4.76l5.17-5.17m3.6 3.6l5.17-5.17a3.37 3.37 0 00-4.76-4.76l-5.17 5.17"/></svg>
              The Procedure Step-by-Step
            </h2>
            <div className="step-item"><span className="step-tag">Step 1:</span> <strong>Preparation:</strong> Administration of general or regional anaesthesia.</div>
            <div className="step-item"><span className="step-tag">Step 2:</span> <strong>Incision:</strong> Small 1cm cuts are made around the knee area.</div>
            <div className="step-item"><span className="step-tag">Step 3:</span> <strong>Arthroscope Insertion:</strong> A tiny camera projects internal images onto a monitor.</div>
            <div className="step-item"><span className="step-tag">Step 4:</span> <strong>Execution:</strong> Miniature instruments repair or remove damaged tissue.</div>
            <div className="step-item"><span className="step-tag">Step 5:</span> <strong>Closure:</strong> The joint is irrigated and incisions are closed with stitches or bandages.</div>
          </div>

          {/* Section 5: Benefits */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
              Benefits of Choosing Arthroscopy
            </h2>
            <ul className="icon-bullet-grid">
              <li><strong>Minimal Pain:</strong> Smaller incisions mean significantly less postoperative discomfort.</li>
              <li><strong>Rapid Recovery:</strong> Faster return to work and daily physical activities.</li>
              <li><strong>Outpatient Care:</strong> Most patients go home the same day.</li>
              <li><strong>High Accuracy:</strong> Enhanced camera views improve surgical precision.</li>
            </ul>
          </div>

          {/* Section 6: Recovery */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
              Recovery Tips & Precautions
            </h2>
            <p>To ensure an effective recovery at <strong>Dr Cure Surgeries</strong>, follow these steps:</p>
            <ul className="icon-bullet-grid">
              <li><strong>RICE Method:</strong> Rest, Ice, Compression, and Elevation.</li>
              <li><strong>Physical Therapy:</strong> Crucial sessions to regain joint strength and mobility.</li>
              <li><strong>Wound Care:</strong> Keeping the site clean and dry is vital to prevent infection.</li>
              <li><strong>Use of Crutches:</strong> Avoiding weight-bearing as advised by your surgeon.</li>
            </ul>
          </div>

          {/* FINAL CTA */}
          <div style={{textAlign: 'center', marginTop: '40px'}}>
             <button className="hero-btn" onClick={handleConsultClick}>
                Schedule Your Appointment at Dr Cure Surgeries Today
             </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default KneeArthroscopy;