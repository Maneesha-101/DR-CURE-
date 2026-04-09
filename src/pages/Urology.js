import React from "react";

const Urology = () => {
  return (
    <>
      <style>{`
        :root {
          --brand-purple: #7B008A;
          --brand-orange: #FF7A00;
          --text-dark: #333;
          --bg-light: #F3E0D4;
        }

        .urology {
          background: var(--bg-light);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .urology-container {
          max-width: 1100px;
          margin: auto;
        }

        .urology-title {
          font-size: 42px;
          font-weight: 700;
          color: var(--brand-purple);
          margin-bottom: 20px;
        }

        .urology-text {
          font-size: 18px;
          line-height: 1.7;
          max-width: 900px;
          margin-bottom: 30px;
          color: var(--text-dark);
        }

        .call-btn {
          background: var(--brand-orange);
          color: white;
          border: none;
          padding: 14px 24px;
          border-radius: 6px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 40px;
          transition: 0.3s;
        }

        .call-btn:hover {
          background: #e66c00;
        }

        .book-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 30px;
          color: #000;
        }

        /* FEATURES BOX */
        .features-box {
          background: #FFFFFF;
          border-radius: 14px;
          display: flex;
          justify-content: space-between;
          padding: 30px;
          gap: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          margin-bottom: 60px;
        }

        .feature {
          flex: 1;
          text-align: center;
          padding: 10px 20px;
        }

        .feature:not(:last-child) {
          border-right: 1px solid #ddd;
        }

        .feature-icon {
          font-size: 40px;
          margin-bottom: 15px;
          color: var(--brand-purple);
        }

        .feature-text {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.5;
          color: var(--text-dark);
        }

        /* CONTENT CARDS */
        .urology-content-section {
          padding: 40px 0;
        }

        .info-card {
          background: #fff;
          border-radius: 16px;
          padding: 35px;
          margin-bottom: 30px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          border-left: 6px solid var(--brand-purple);
        }

        .condition-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 30px;
        }

        .condition-item {
          background: #fafafa;
          padding: 25px;
          border-radius: 12px;
          border: 1px solid #eee;
        }

        .condition-name {
          font-size: 20px;
          font-weight: 700;
          color: var(--brand-purple);
          margin-bottom: 10px;
          display: block;
        }

        .treatment-tag {
          display: inline-block;
          background: #F3E6F7;
          color: var(--brand-purple);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          margin-top: 10px;
        }

        @media(max-width:900px) {
          .urology-title { font-size: 32px; }
          .features-box { flex-direction: column; }
          .feature { border-right: none !important; border-bottom: 1px solid #ddd; padding-bottom: 20px; }
          .info-card { padding: 20px; }
        }
      `}</style>

      <section id="urology" className="urology">
        <div className="urology-container">
          {/* Hero Content */}
          <h2 className="urology-title">Specialized Center for Urology Treatment</h2>
          <p className="urology-text">
            Dr Cure Surgeries is a Multispecialty healthcare provider which aims to
            deliver a hassle-free surgical experience to all patients by leveraging
            technology and advanced medical procedures. Urology focuses on the
            diagnosis and treatment of diseases related to the urinary tract and
            male reproductive system.
          </p>

          <button className="call-btn">📞 Call Us : +91 9493994244</button>

          <h3 className="book-title">Book Appointments With Our Expert Doctors Near You</h3>

          {/* Feature Highlights */}
          <div className="features-box">
            <div className="feature">
              <div className="feature-icon">🏥</div>
              <p className="feature-text">India's Trusted Centre for <br /> Urology Treatment</p>
            </div>
            <div className="feature">
              <div className="feature-icon">👨‍⚕️</div>
              <p className="feature-text">Experienced Specialists <br /> With 10+ Years of Experience</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🔒</div>
              <p className="feature-text">100% Private and <br /> Confidential Consultation</p>
            </div>
          </div>

          {/* Educational Content Section */}
          <div className="urology-content-section">
            <div className="info-card">
              <h2 className="book-title" style={{ color: "var(--brand-purple)" }}>What is Urology?</h2>
              <p className="urology-text" style={{ fontSize: "16px" }}>
                Urology is a medical specialty that focuses on the diagnosis and treatment of diseases and disorders 
                of the male and female urinary systems and medical conditions of the male reproductive system. 
                Common disorders include urinary tract infections (UTIs) and urinary incontinence. 
                If you experience pain, discomfort, or difficulty while urinating, it may be a sign of 
                dysfunction of the bladder, kidneys, ureters, or urethra.
              </p>
            </div>

            <h2 className="book-title">Urology Problems Treated at dr cure surgeries </h2>
            
            <div className="condition-grid">
              {/* Kidney Stones */}
              <div className="condition-item">
                <span className="condition-name">Kidney Stones</span>
                <p style={{ fontSize: "14px", color: "#666" }}>Hard deposits of minerals and salts forming inside the kidneys, ureters, or bladder due to diet or obesity.</p>
                <span className="treatment-tag">Treatment: ESWL, RIRS, PCNL, URSL</span>
              </div>

              {/* Enlarged Prostate */}
              <div className="condition-item">
                <span className="condition-name">Enlarged Prostate (BPH)</span>
                <p style={{ fontSize: "14px", color: "#666" }}>Age-related hormonal changes causing the prostate to block urine flow. Common in men over 50.</p>
                <span className="treatment-tag">Treatment: TURP, HoLEP Surgery</span>
              </div>

              {/* Hydrocele */}
              <div className="condition-item">
                <span className="condition-name">Hydrocele</span>
                <p style={{ fontSize: "14px", color: "#666" }}>Fluid accumulation in the testicle covering, often due to trauma or infection.</p>
                <span className="treatment-tag">Treatment: Hydrocelectomy</span>
              </div>

              {/* Phimosis & Related */}
              <div className="condition-item">
                <span className="condition-name">Phimosis & Balanitis</span>
                <p style={{ fontSize: "14px", color: "#666" }}>Tight foreskin or inflammation of the glans penis causing discomfort and risks of infection.</p>
                <span className="treatment-tag">Treatment: Circumcision</span>
              </div>

              {/* Paraphimosis */}
              <div className="condition-item">
                <span className="condition-name">Paraphimosis</span>
                <p style={{ fontSize: "14px", color: "#666" }}><strong>Medical Emergency:</strong> Foreskin trapped behind the head of the penis.</p>
                <span className="treatment-tag">Treatment: Immediate Circumcision</span>
              </div>

              {/* Urinary Incontinence */}
              <div className="condition-item">
                <span className="condition-name">Urinary Incontinence</span>
                <p style={{ fontSize: "14px", color: "#666" }}>Inability to control urine flow due to aging, childbirth, or underlying urology issues.</p>
                <span className="treatment-tag">Treatment: Sling Procedure, Laser Tightening</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Urology;