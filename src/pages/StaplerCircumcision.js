import React from "react";
import { useNavigate } from "react-router-dom";

const StaplerCircumcision = () => {
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
        .stapler-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .stapler-container {
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

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="stapler-hero">
        <div className="stapler-container">
          <p className="breadcrumb">Home » Home » Stapler Circumcision</p>
          <h1 className="hero-title">
            Advanced Stapler Circumcision Treatment – Benefits & Recovery
          </h1>
          <p className="hero-text">
            Stapler circumcision surgery is an advanced procedure for removing the foreskin using 
            a specialized medical device. At Dr Cure Surgeries, we provide safe, precise, and 
            minimally invasive stapler circumcision with expert surgeons.
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

      {/* Main Content Section */}
      <section className="content-section">
        <div className="stapler-container">

          {/* What is Stapler Circumcision */}
          <div className="info-card">
            <h2 className="section-title">What is Stapler Circumcision?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Stapler circumcision is a minimally invasive procedure used for safe, quick, and efficient removal of the penile foreskin. The procedure is performed using a circumcision stapler (also called an anastomat), an instrument specially designed for this purpose.
            </p>
            <p className="hero-text" style={{fontSize: '16px'}}>
              During the surgery, the stapler removes the foreskin in one quick motion and closes the incision using a silicone ring or non-bioabsorbable staples. This predetermined removal makes it extremely safe and provides consistent cosmetic results.
            </p>
          </div>

          {/* Diagnosis & Procedure */}
          <div className="info-card">
            <h2 className="section-title">What Happens During Surgery?</h2>
            <h3 className="sub-title">Diagnosis</h3>
            <p className="hero-text" style={{fontSize: '16px'}}>
              For aesthetic or religious reasons, only a general health checkup is needed. For medical reasons (pain or infection), tests include:
            </p>
            <ul className="content-list">
              <li><strong>Urinalysis:</strong> To check for UTIs or kidney issues.</li>
              <li><strong>Tissue Culture:</strong> To identify bacterial or fungal infections in any discharge.</li>
              <li><strong>Blood Tests:</strong> Checking blood sugar and bleeding levels for systemic health.</li>
            </ul>

            <h3 className="sub-title">The Procedure</h3>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Performed primarily under local anesthesia. The device is fitted precisely over the glans to protect the tissue. Once triggered, the stapler removes the foreskin and seals the incision with a silicone ring simultaneously. The wound is then dressed with a compression bandage.
            </p>
          </div>

          {/* Preparation & Post-Op */}
          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">How to Prepare</h2>
              <ul className="content-list">
                <li>Provide full medical records and allergy history.</li>
                <li>Fast after midnight if general anesthesia is used.</li>
                <li>Avoid alcohol and tobacco for a few days prior.</li>
                <li>Arrange for someone to drive you home.</li>
                <li>Take a couple of days off from work.</li>
              </ul>
            </div>

            <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
              <h2 className="section-title">Recovery Expectations</h2>
              <ul className="content-list">
                <li><strong>Same-Day Discharge:</strong> Return home within hours.</li>
                <li><strong>Follow-up:</strong> Visit your urologist in 2-3 days for dressing removal.</li>
                <li><strong>Healing:</strong> The silicone ring will fall off naturally within 10-14 days.</li>
                <li><strong>Activity:</strong> Most patients return to work within 1-3 days.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default StaplerCircumcision;