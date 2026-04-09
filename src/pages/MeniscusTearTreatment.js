import React from "react";
import { useNavigate } from "react-router-dom";

const MeniscusTearTreatment = () => {
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
        .meniscus-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .meniscus-container {
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
          font-size: 22px;
          margin: 25px 0 15px;
          border-left: 4px solid var(--brand-orange);
          padding-left: 10px;
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
      <section className="meniscus-hero">
        <div className="meniscus-container">
          <p className="breadcrumb">Home » Home » Meniscus Tear Treatment</p>
          <h1 className="hero-title">Meniscus Tear Treatment: Diagnosis, Surgery & Recovery</h1>
          <p className="hero-text">
            Visit <strong>Dr Cure Surgeries</strong> for safe and effective meniscus tear surgery. 
            Our experienced orthopedic surgeons use advanced minimally invasive techniques to ensure 
            faster recovery, pain relief, and restored knee stability.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            <svg viewBox="0 0 24 24" fill="white" style={{width:'20px', height:'20px'}}><path d="M6.62 10.79a15.149 15.149 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call to Schedule Your Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Joint Specialists</p></div>
            <div className="stat"><h2>100+</h2><p>Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities</p></div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="content-section">
        <div className="meniscus-container">
          
          {/* Section 1: What is Meniscus Tear */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
              What is a Meniscus Tear?
            </h2>
            <p>
              A meniscus tear is an injury to the C-shaped cartilage in your knee that acts as a shock absorber. 
              Common in athletes and those performing heavy lifting, these tears range from <strong>Grade 1 (fraying)</strong> to <strong>Grade 3 (complete tear)</strong>. 
              Symptoms often include knee pain, swelling, "locking" sensations, and a limited range of motion.
            </p>
          </div>

          {/* Section 2: Diagnosis */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
              Diagnosis at Dr Cure Surgeries
            </h2>
            <ul className="icon-bullet-grid">
              <li><strong>Physical Exam:</strong> Checking for tenderness, swelling, and "joint line" pain.</li>
              <li><strong>MRI Scan:</strong> To get a clear image of soft tissue, cartilage, and ligaments.</li>
              <li><strong>X-Ray:</strong> To rule out underlying bone problems or fractures.</li>
            </ul>
          </div>

          {/* Section 3: Surgical Treatment */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M13.13 14.56l-5.17 5.17a3.37 3.37 0 01-4.76-4.76l5.17-5.17m3.6 3.6l5.17-5.17a3.37 3.37 0 00-4.76-4.76l-5.17 5.17"/></svg>
              Surgical Treatment Options
            </h2>
            <p>Most surgeries are performed via <strong>Knee Arthroscopy</strong>, a minimally invasive method taking less than an hour.</p>
            <div className="step-item"><span className="step-tag">A</span> <span><strong>Meniscus Repair:</strong> Sewing torn pieces together (ideal for the outer "red zone" with high blood supply).</span></div>
            <div className="step-item"><span className="step-tag">B</span> <span><strong>Partial Meniscectomy:</strong> Trimming and removing damaged cartilage while preserving healthy tissue.</span></div>
          </div>

          {/* Section 4: Non-Surgical */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
              Non-Surgical Alternatives
            </h2>
            <ul className="icon-bullet-grid">
              <li><strong>Medications:</strong> NSAIDs (Ibuprofen) or corticosteroid injections to manage inflammation.</li>
              <li><strong>Physical Therapy:</strong> Focuses on knee strength, flexibility, and balance to support healing.</li>
              <li><strong>Injections:</strong> Hyaluronic acid (viscosupplementation) for joint lubrication.</li>
              <li><strong>R.I.C.E:</strong> Rest, Ice, Compression, and Elevation for minor Grade 1 tears.</li>
            </ul>
          </div>

          {/* Section 5: Preparation */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
              Preparation Tips
            </h2>
            <ul className="icon-bullet-grid">
              <li><strong>Consultation:</strong> Discuss your medical history and current medications in detail.</li>
              <li><strong>Fasting:</strong> Avoid eating 8 hours before surgery to ensure anesthesia safety.</li>
              <li><strong>Home Ready:</strong> Clear paths and prepare a recovery space with easy access to essentials.</li>
              <li><strong>Tests:</strong> Ensure all recommended blood tests and scans are completed on time.</li>
            </ul>
          </div>

          {/* Section 6: Benefits */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/></svg>
              Benefits of Advanced Treatment
            </h2>
            <p>Choosing <strong>Dr Cure Surgeries</strong> for your meniscectomy offers several modern advantages:</p>
            <ul className="icon-bullet-grid">
              <li>Faster recovery with minimal post-operative discomfort.</li>
              <li>Significantly reduced risk of excessive bleeding or infection.</li>
              <li>Smaller scars and fewer post-surgical complications compared to traditional open surgery.</li>
            </ul>
          </div>

          {/* FINAL CTA */}
          <div style={{textAlign: 'center', marginTop: '40px'}}>
             <button className="hero-btn" onClick={handleConsultClick}>
                Book Your Knee Consultation at Dr Cure Surgeries Today
             </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default MeniscusTearTreatment;