import React from "react";
import { useNavigate } from "react-router-dom";

const Circumcision = () => {
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
        .circumcision-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .circumcision-container {
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
          margin-bottom: 20px;
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

        .highlight-box {
          background: #fff;
          padding: 25px;
          border-radius: 15px;
          border: 1px solid #eee;
        }

        .benefit-tag {
          background: #F3E6F7;
          color: var(--brand-purple);
          padding: 8px 15px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          display: inline-block;
          margin: 5px;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="circumcision-hero">
        <div className="circumcision-container">
          <p className="breadcrumb">Home » Home » Circumcision</p>
          <h1 className="hero-title">
            Laser Circumcision Treatment | Dr Cure Surgeries
          </h1>
          <p className="hero-text">
            Laser circumcision is an advanced treatment for foreskin conditions such as 
            phimosis, paraphimosis, and balanitis. At Dr Cure Surgeries, we provide 
            safe, minimally invasive procedures using modern laser technology.
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
        <div className="circumcision-container">

          {/* What is Laser Circumcision */}
          <div className="info-card">
            <h2 className="section-title">What is Laser Circumcision?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Laser circumcision is one of the most advanced circumcision procedures. During the procedure, the surgeon cuts off the foreskin using a high-energy laser beam. Since a laser is used to create the incision, there is little to no bleeding, and the wound edges are clean. It also completely preserves the surrounding tissues and is best for tissue conservation.
            </p>
            <p className="hero-text" style={{fontSize: '16px'}}>
              The surgery only takes 10-15 minutes and has a much shorter recovery time compared to other circumcision procedures.
            </p>
          </div>

          {/* Diagnosis & Procedure */}
          <div className="info-card">
            <h2 className="section-title">What Happens During Surgery?</h2>
            <h3 className="sub-title">Diagnosis</h3>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Our urologists examine the penis glans for signs of infection or inflammation. Common diagnostic tests include:
            </p>
            <ul className="content-list">
              <li><strong>Urinalysis:</strong> To check for UTI or concentration issues.</li>
              <li><strong>Tissue Culture:</strong> Swab tests to identify bacterial or fungal infections.</li>
              <li><strong>Blood Sugar Tests:</strong> Especially important for diabetic patients to ensure safe healing.</li>
            </ul>

            <h3 className="sub-title">The Procedure</h3>
            <div className="highlight-box">
              <p style={{color: '#555'}}>The high-energy laser ensures precision, zero bleeding, and clean wound edges. This technique is preferred due to negligible postoperative pain and tissue conservation.</p>
            </div>
          </div>

          {/* Preparation & When Required */}
          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">When is it Required?</h2>
              <ul className="content-list">
                <li>Unhappy with foreskin size/shape</li>
                <li>Pain while urinating or inability to retract foreskin</li>
                <li>Foul-smelling discharge or swelling</li>
                <li>Blood noticed on the tip of the penis</li>
                <li>Treatment for Phimosis, Balanitis, or Paraphimosis</li>
              </ul>
            </div>

            <div className="info-card">
              <h2 className="section-title">How to Prepare</h2>
              <ul className="content-list">
                <li>Share complete medical history and current medications.</li>
                <li>Avoid food 6-8 hours prior if under general anesthesia.</li>
                <li>Avoid alcohol/tobacco for 48 hours to aid healing.</li>
                <li>Arrange for post-surgery transport.</li>
              </ul>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Benefits of Laser Procedure</h2>
            <div style={{marginTop: '20px'}}>
              <span className="benefit-tag">10 Min Procedure</span>
              <span className="benefit-tag">Minimal Blood Loss</span>
              <span className="benefit-tag">No Visible Scar</span>
              <span className="benefit-tag">Low Infection Risk</span>
              <span className="benefit-tag">No Daily Dressing</span>
              <span className="benefit-tag">100% Success Rate</span>
              <span className="benefit-tag">Permanent Solution</span>
              <span className="benefit-tag">Fast Recovery</span>
            </div>
          </div>

          {/* Recovery Tips */}
          <div className="info-card">
            <h2 className="section-title">Recovery After Surgery</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Most patients return to regular office routines in 1-3 days. Full healing typically takes 7-10 days.
            </p>
            <h3 className="sub-title">Recovery Tips:</h3>
            <div className="grid-layout">
              <ul className="content-list">
                <li>Avoid sex/masturbation for 6 weeks.</li>
                <li>Use petroleum jelly to prevent sticking to clothing.</li>
                <li>Wear light, loose-fitting clothes.</li>
              </ul>
              <ul className="content-list">
                <li>Avoid heavy lifting or strenuous exercise.</li>
                <li>Clean the wound twice daily as instructed.</li>
                <li>Use OTC pain meds if discomfort occurs.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Circumcision;