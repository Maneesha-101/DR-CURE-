import React from "react";
import { useNavigate } from "react-router-dom";

const Phimosis = () => {
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
        .phimosis-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .phimosis-container {
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

        .hero-btn {
          background: var(--brand-orange);
          color: #fff;
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

        .stats-box {
          background: #fff;
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

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      <section className="phimosis-hero">
        <div className="phimosis-container">
          <p className="breadcrumb">Home » Home » Phimosis</p>
          <h1 className="hero-title">
            Phimosis Treatment – Laser Surgery Procedure for Adults
          </h1>
          <p className="hero-text">
            Phimosis is a penile condition in which the foreskin cannot be pulled back over the head (glans). 
            At Dr Cure Surgeries, we provide advanced laser circumcision for safe, effective, and quick recovery.
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

      <section className="content-section">
        <div className="phimosis-container">
          <div className="info-card">
            <h2 className="section-title">What is Phimosis?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Phimosis is a condition where the foreskin cannot be retracted. It is common in newborns 
              but can persist or develop in adults due to infections or poor hygiene.
            </p>
          </div>

          <div className="info-card">
            <h2 className="section-title">Types of Phimosis</h2>
            <div className="grid-layout">
              <div className="highlight-box">
                <h3 className="sub-title">Physiological</h3>
                <p>Occurs naturally from birth; usually resolves on its own during adolescence.</p>
              </div>
              <div className="highlight-box">
                <h3 className="sub-title">Pathological</h3>
                <p>Occurs due to scarring, infection (Balanitis), or injury. Requires medical treatment.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">Surgical Options</h2>
            <ul className="content-list">
              <li><strong>Laser Circumcision:</strong> Advanced, bloodless, and precise.</li>
              <li><strong>Stapler Circumcision:</strong> Quick procedure using a disposable device.</li>
              <li><strong>Open Circumcision:</strong> Traditional surgical method.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Phimosis;