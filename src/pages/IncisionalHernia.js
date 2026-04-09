import React from "react";
import { useNavigate } from "react-router-dom";

const IncisionalHernia = () => {
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
        .incisional-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .incisional-container {
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
        .incisional-content {
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

        .benefit-box {
          background: var(--brand-white);
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #eee;
          box-shadow: 0 4px 10px rgba(0,0,0,0.02);
        }

        /* MOBILE */
        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="incisional-hero">
        <div className="incisional-container">
          <p className="breadcrumb">Home » Home » Incisional hernia</p>
          <h1 className="hero-title">
            Trusted Incisional Hernia Surgery – Expert Care & Recovery
          </h1>
          <p className="hero-text">
            At Dr Cure Surgeries, we specialize in providing advanced and minimally invasive 
            incisional hernia surgery to help patients regain comfort and confidence. Our expert 
            surgeons use the latest medical techniques to ensure safe, effective, and long-lasting 
            hernia repairs.
          </p>
          <p className="hero-text">
            Whether you’re experiencing discomfort from a previous surgery or need expert guidance 
            on incisional hernia treatment, our experienced medical team is here to support you 
            every step of the way.
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

      {/* Main Content Sections */}
      <section className="incisional-content">
        <div className="incisional-container">
          
          {/* Definition and Symbols */}
          <div className="info-card">
            <h2 className="section-title">What is an Incisional Hernia?</h2>
            <p className="hero-text">
              An incisional hernia occurs when tissue pushes through a weak spot in the abdominal muscles 
              at the site of a previous surgical incision. This is common after abdominal surgery if the 
              original wound did not heal completely.
            </p>
            <h3 className="sub-title">Common Symptoms</h3>
            <ul className="content-list">
              <li>Bulge or swelling near a surgical scar</li>
              <li>Pain or discomfort while coughing, standing, or lifting</li>
              <li>Nausea or vomiting in severe cases (Potential complication)</li>
              <li>Feeling of heaviness in the abdomen</li>
              <li>Constipation or increased abdominal pressure</li>
            </ul>
          </div>

          {/* Causes and Diagnosis */}
          <div className="grid-2">
            <div className="info-card">
              <h2 className="section-title">Common Causes</h2>
              <ul className="content-list">
                <li>Improper healing of a previous surgical wound</li>
                <li>Excessive weight gain or obesity post-surgery</li>
                <li>Strenuous physical activity too soon after operation</li>
                <li>Chronic coughing or persistent constipation</li>
                <li>Post-operative wound infections</li>
              </ul>
            </div>
            <div className="info-card">
              <h2 className="section-title">Diagnosis</h2>
              <p className="hero-text" style={{fontSize: '16px'}}>
                Our experts perform a physical exam and may use imaging to assess the hernia's severity:
              </p>
              <ul className="content-list">
                <li><strong>Ultrasound:</strong> For clear tissue visualization.</li>
                <li><strong>CT Scan:</strong> To determine the size and contents of the hernia.</li>
                <li><strong>MRI:</strong> In complex cases to map the abdominal wall.</li>
              </ul>
            </div>
          </div>

          {/* Treatment Options */}
          <div className="info-card">
            <h2 className="section-title">Advanced Treatment Options</h2>
            <div className="grid-2">
              <div className="benefit-box">
                <h3 className="sub-title" style={{margin: '0 0 10px'}}>Laparoscopic Repair</h3>
                <p className="hero-text" style={{fontSize: '16px'}}>
                  A minimally invasive "keyhole" procedure. It offers faster healing, 
                  less post-operative pain, and smaller scars.
                </p>
              </div>
              <div className="benefit-box">
                <h3 className="sub-title" style={{margin: '0 0 10px'}}>Mesh Reinforcement</h3>
                <p className="hero-text" style={{fontSize: '16px'}}>
                  We use high-quality surgical mesh to reinforce the abdominal wall, 
                  significantly reducing the risk of the hernia recurring.
                </p>
              </div>
              <div className="benefit-box">
                <h3 className="sub-title" style={{margin: '0 0 10px'}}>Open Surgery</h3>
                <p className="hero-text" style={{fontSize: '16px'}}>
                  Reserved for very large hernias or complex cases where the abdominal 
                  wall requires extensive reconstruction.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Why Choose Dr Cure Surgeries?</h2>
            <div className="grid-2">
              <ul className="content-list">
                <li>Experienced hernia specialists & surgeons</li>
                <li>Advanced laparoscopic & robotic techniques</li>
                <li>Affordable and transparent pricing</li>
              </ul>
              <ul className="content-list">
                <li>Minimal hospital stay and faster recovery</li>
                <li>Personalized post-operative care plans</li>
                <li>24/7 dedicated patient support</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default IncisionalHernia;