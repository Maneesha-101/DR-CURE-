import React from "react";
import { useNavigate } from "react-router-dom";

const Rectal = () => {
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

        .rectal-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .rectal-container {
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
        .rectal-content {
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

        .content-text {
          font-size: 16px;
          color: #555;
          line-height: 1.8;
          margin-bottom: 20px;
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

        .step-box {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 15px;
          border: 1px solid #eee;
        }

        .step-box strong {
          color: var(--brand-orange);
          margin-right: 10px;
        }

        /* MOBILE */
        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="rectal-hero">
        <div className="rectal-container">
          <p className="breadcrumb">Home » Home » Rectal Treatment</p>
          <h1 className="hero-title">
            Rectal Prolapse Treatment – Diagnosis, Surgery & Recovery
          </h1>
          <p className="hero-text">
            Rectal prolapse is a condition where the rectum slides down and protrudes through the anus. 
            At Drcure, we provide advanced surgical treatments, including Laser, Laparoscopic, and Robotic surgery, 
            to ensure long-term relief and improved quality of life.
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
      <section className="rectal-content">
        <div className="rectal-container">
          
          {/* Definition Section */}
          <div className="info-card">
            <h2 className="section-title">What is Rectal Prolapse?</h2>
            <p className="content-text">
             The rectum is located at the end of the large intestine. It is the section of the digestive tract where the stool is held before it passes through the system. When the stool reaches the rectum, you may experience an urge to defecate. A group of muscles push the stool out of the anus. A rectal prolapse occurs when the rectum is pushed out along with the stool. The word ‘prolapse’ is used when any organ of the body slips from its original position. 

Rectal prolapse is more common in women than in men and generally affects people over 50 years or those who have a history of chronic constipation or diarrhoea. 
            </p>
          </div>

          {/* Surgical Options Section */}
          <div className="info-card">
            <h2 className="section-title">Surgical Treatment Options</h2>
            
            <h3 className="sub-title">1. Abdominal Rectopexy</h3>
            <p className="content-text">Repairing the rectum through an abdominal incision. The rectum is carefully dissected and sutured to the sacrum for stability.</p>
            
            <h3 className="sub-title">2. Laparoscopic Surgery</h3>
            <p className="content-text">A minimally invasive approach using small incisions and a laparoscope. Benefits include less pain and faster recovery times.</p>
            
            <h3 className="sub-title">3. Robotic Surgery</h3>
            <p className="content-text">Offers 3D visualization and precise robotic arms, resulting in reduced blood loss and shorter hospital stays.</p>
            
            <h3 className="sub-title">4. Perineal Procedures (Delorme & Altemeier)</h3>
            <p className="content-text">Surgery performed directly through the anus/perineum. Ideal for patients who may not be candidates for abdominal surgery.</p>
          </div>

          {/* Laser Benefits */}
          <div className="info-card" style={{borderColor: 'var(--cyan-accent)'}}>
            <h2 className="section-title">Benefits of Laser & Minimally Invasive Surgery</h2>
            <ul className="content-list">
              <li><strong>Minimally Invasive:</strong> Laser rectal prolapse surgery is a minimally invasive procedure that has numerous benefits. It involves minimal to no incisions or cuts and the recovery also takes much shorter compared to traditional surgeries for rectal prolapse. </li>
              <li><strong>Outpatient Basis:</strong>One of the primary advantages of this surgery is that it can be performed on an outpatient basis.</li>
              <li><strong>Precision:</strong> Patients who undergo laser rectal prolapse surgery typically experience less pain and a faster recovery time compared to traditional surgery.</li>
              <li><strong>Improved Function:</strong> The benefits of laser rectal prolapse surgery extend beyond just physical health, as patients also experience an improved quality of life..</li>
            </ul>
          </div>

          {/* Diet & Lifestyle Section */}
          <div className="info-card">
            <h2 className="section-title">Dietary Guidelines for Prolapse</h2>
            <div className="grid-2">
              <div className="step-box">
                <h3 style={{color: 'var(--brand-purple)'}}>Foods to Eat</h3>
                <ul className="content-list">
                  <li>High-fiber fruits and vegetables</li>
                  <li>Whole grains and legumes</li>
                  <li>Probiotic-rich yogurt or kefir</li>
                  <li>Lean proteins (Fish, Tofu, Chicken)</li>
                </ul>
              </div>
              <div className="step-box">
                <h3 style={{color: '#dc3545'}}>Foods to Avoid</h3>
                <ul className="content-list">
                  <li>Spicy and fried foods</li>
                  <li>Highly processed snacks</li>
                  <li>Red meat (difficult to digest)</li>
                  <li>Caffeine and Alcohol</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recovery & Preparation Section */}
          <div className="info-card">
            <h2 className="section-title">Preparation & Recovery</h2>
            <div className="grid-2">
              <div>
                <h3 className="sub-title">Preparation</h3>
                <ul className="content-list">
                  <li>Fast after midnight before surgery.</li>
                  <li>Stop blood-thinners like aspirin.</li>
                  <li>Arrange for a ride home.</li>
                </ul>
              </div>
              <div>
                <h3 className="sub-title">Recovery (4-6 Weeks)</h3>
                <ul className="content-list">
                  <li>Take prescribed medicines on time.</li>
                  <li>Avoid heavy lifting for 6 weeks.</li>
                  <li>Maintain hydration to prevent constipation.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Risks Section */}
          <div className="info-card" style={{borderLeftColor: '#dc3545'}}>
            <h2 className="section-title">Risks & Complications</h2>
            <p className="content-text">
             While rectal prolapse surgery is an effective option but it comes with some risks and complications, including;

Infection is a potential risk associated with rectal prolapse surgery.
Hemorrhage or excessive bleeding is another possible complication of the procedure.
Damage to nearby organs such as the bladder or urethra, could occur during surgery.
Urinary retention may occur following the procedure.
There is a risk of developing blood clots after rectal prolapse surgery.
Bowel obstruction is a rare but possible complication of the procedure.
Fecal incontinence or difficulty controlling bowel movements may occur following surgery.
The risk of complications increases with age and other underlying medical conditions.
Anesthesia-related complications may occur during the surgery.
Recurrence of rectal prolapse following surgery is also a potential risk.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Rectal;