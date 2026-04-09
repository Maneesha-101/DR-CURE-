import React from "react";
import { useNavigate } from "react-router-dom";

const FemoralHernia = () => {
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
        .hernia-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .hernia-container {
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
          line-height: 1.7;
          max-width: 950px;
          margin-bottom: 20px;
        }

        /* ORANGE CTA BUTTON */
        .hero-btn {
          background: var(--brand-orange);
          color: var(--brand-white);
          padding: 16px 28px;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 20px;
          transition: 0.3s;
        }

        .hero-btn:hover {
          background: #e66a00;
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

        .stat {
          text-align: center;
        }

        .stat h2 {
          font-size: 36px;
          color: var(--brand-purple);
        }

        .stat p {
          color: #777;
        }

        /* CONTENT STYLING */
        .hernia-content {
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

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .emergency-box {
          background: #fff5f5;
          border: 1px solid #feb2b2;
          padding: 20px;
          border-radius: 12px;
          color: #c53030;
          font-weight: 500;
        }

        /* MOBILE */
        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hernia-hero">
        <div className="hernia-container">
          <p className="breadcrumb">Home » Home » Femoral hernia</p>
          <h1 className="hero-title">
            Your Trusted Center for Femoral Hernia Surgery
          </h1>
          <p className="hero-text">
            At Drcure Health, we provide top-quality surgical care for femoral hernias with precision, safety, and patient comfort. Our specialists excel in both laparoscopic and open repair, ensuring fast recovery and excellent long-term results.
          </p>
          <p className="hero-text">
            With state-of-the-art facilities and personalized care, we guide you through every step — from diagnosis to post-operative recovery.
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
      <section className="hernia-content">
        <div className="hernia-container">
          
          {/* Understanding Femoral Hernia */}
          <div className="info-card">
            <h2 className="section-title">What is a Femoral Hernia?</h2>
            <p className="hero-text">
              A femoral hernia occurs when tissue pushes through a weak spot in the lower abdominal wall near the groin. Unlike inguinal hernias, these typically appear as a globular bulge in the upper thigh, below the inguinal ligament. They are more common in women and carry a high risk of strangulation if left untreated.
            </p>
          </div>

          {/* Identification Guide */}
          <div className="info-card">
            <h2 className="section-title">Common Symptoms & Identification</h2>
            <div className="grid-2">
              <div>
                <ul className="content-list">
                  <li><strong>Visible Bulge:</strong> A round-shaped lump in the upper thigh or groin area.</li>
                  <li><strong>Position Sensitivity:</strong> The lump may decrease or disappear when lying down.</li>
                  <li><strong>Activity Pain:</strong> Discomfort while standing, coughing, or lifting heavy objects.</li>
                  <li><strong>Pressure:</strong> A persistent aching or pressure in the groin region.</li>
                </ul>
              </div>
              <div className="emergency-box">
                <strong>⚠️ Surgical Emergency:</strong> Sudden nausea, vomiting, or a painful, non-reducible lump can signal strangulation. This requires immediate surgery within hours to prevent tissue death.
              </div>
            </div>
          </div>

          {/* Surgery Options */}
          <div className="info-card">
            <h2 className="section-title">Advanced Surgical Treatments</h2>
            <p className="hero-text">Timely surgery is essential for femoral hernias due to the risk of bowel obstruction. We offer two primary approaches:</p>
            <div className="grid-2">
              <div style={{background: '#fff', padding: '20px', borderRadius: '15px'}}>
                <h3 className="sub-title">1. Open Surgery</h3>
                <p className="hero-text" style={{fontSize: '16px'}}>A traditional single incision is used to push the tissue back and reinforce the abdominal wall with mesh if needed.</p>
              </div>
              <div style={{background: '#fff', padding: '20px', borderRadius: '15px'}}>
                <h3 className="sub-title">2. Laparoscopic Surgery</h3>
                <p className="hero-text" style={{fontSize: '16px'}}>A minimally invasive "keyhole" method using small cuts and a camera, allowing for quicker recovery and less post-op pain.</p>
              </div>
            </div>
          </div>

          {/* Aftercare & Timeline */}
          <div className="info-card">
            <h2 className="section-title">Aftercare & Recovery Timeline</h2>
            <div className="grid-2">
              <div>
                <h3 className="sub-title">Post-Surgery Instructions</h3>
                <ul className="content-list">
                  <li><strong>High-Fiber Diet:</strong> Prevent constipation to reduce abdominal pressure.</li>
                  <li><strong>Wound Care:</strong> Keep the site clean and dry to avoid infection.</li>
                  <li><strong>Activity Restriction:</strong> Avoid heavy lifting or straining for 6 weeks.</li>
                </ul>
              </div>
              <div style={{borderLeft: '2px dashed var(--brand-orange)', paddingLeft: '20px'}}>
                <h3 className="sub-title">Recovery Milestones</h3>
                <ul className="content-list">
                  <li><strong>Same/Next Day:</strong> Most patients return home.</li>
                  <li><strong>2 Weeks:</strong> Resumption of light activities.</li>
                  <li><strong>6 Weeks:</strong> Full recovery and return to normal physical exertion.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default FemoralHernia;