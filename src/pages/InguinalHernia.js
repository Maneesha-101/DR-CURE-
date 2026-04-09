import React from "react";
import { useNavigate } from "react-router-dom";

const InguinalHernia = () => {
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
        .inguinal-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .inguinal-container {
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
        .inguinal-content {
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

      {/* Hero Section */}
      <section className="inguinal-hero">
        <div className="inguinal-container">
          <p className="breadcrumb">Home » Home » Inguinal hernia</p>
          <h1 className="hero-title">
            Inguinal Hernia Laparoscopic Surgery by Elite Surgeons
          </h1>
          <p className="hero-text">
            Diagnosed with an inguinal hernia and looking for the best possible surgery? 
            Our advanced treatments ensure a swift recovery, allowing you to return to life 
            without discomfort. Trust Hepta Care Health for effective solutions and 
            personalized care on your journey to hernia recovery.
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
      <section className="inguinal-content">
        <div className="inguinal-container">
          
          {/* About Inguinal Hernia */}
          <div className="info-card">
            <h2 className="section-title">About Inguinal Hernia</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              An inguinal hernia occurs when a portion of the intestine or other abdominal tissue 
              protrudes through a weak spot in the abdominal wall in the groin region. This results 
              in a visible lump or bulge, which can be painful when coughing, bending over, or 
              lifting heavy objects.
            </p>
            <h3 className="sub-title">Common Types of Hernia</h3>
            <div className="grid-layout">
              <div className="highlight-box">
                <ul className="content-list">
                  <li><strong>Inguinal:</strong> Most common in males; occurs in the groin.</li>
                  <li><strong>Umbilical:</strong> Occurs near the navel; common in infants.</li>
                  <li><strong>Hiatal:</strong> Stomach pushes through the diaphragm into the chest.</li>
                </ul>
              </div>
              <div className="highlight-box">
                <ul className="content-list">
                  <li><strong>Femoral:</strong> Protrudes near the femoral artery; common in females.</li>
                  <li><strong>Incisional:</strong> Develops at the site of a previous surgical scar.</li>
                  <li><strong>Others:</strong> Epigastric, Spigelian, and Congenital hernias.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Risk Factors */}
          <div className="info-card">
            <h2 className="section-title">Risk Factors</h2>
            <div className="grid-layout">
              <div>
                <ul className="content-list">
                  <li><strong>Age & Gender:</strong> Risk increases with age; significantly more common in males.</li>
                  <li><strong>Genetics:</strong> Family history indicates a potential predisposition.</li>
                  <li><strong>Smoking:</strong> Linked to chronic cough and decreased wound healing.</li>
                </ul>
              </div>
              <div>
                <ul className="content-list">
                  <li><strong>Physical Strain:</strong> Heavy lifting and chronic constipation.</li>
                  <li><strong>Medical Conditions:</strong> Obesity, COPD (chronic cough), and Ascites.</li>
                  <li><strong>Congenital:</strong> Weakness in the abdominal wall present from birth.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Diagnosis */}
          <div className="info-card">
            <h2 className="section-title">Diagnosis & Testing</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Healthcare providers visually examine the bulge and may ask you to cough to make the 
              hernia emerge. Internal imaging includes:
            </p>
            <div className="grid-layout">
              <div className="highlight-box">
                <ul className="content-list">
                  <li><strong>Ultrasound:</strong> Confirms location and extent of the sac.</li>
                  <li><strong>CT Scan:</strong> Provides detailed images for assessing size.</li>
                </ul>
              </div>
              <div className="highlight-box">
                <ul className="content-list">
                  <li><strong>MRI:</strong> Clear imaging for complex cases.</li>
                  <li><strong>Blood Tests:</strong> Used to check for infection or inflammation.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Management & Treatment */}
          <div className="info-card">
            <h2 className="section-title">Management and Treatment</h2>
            <h3 className="sub-title">Non-Surgical Management (Temporary Relief)</h3>
            <ul className="content-list">
              <li><strong>Lifestyle:</strong> Weight management, high-fiber diet, and proper posture.</li>
              <li><strong>Physical:</strong> Use of hernia belts (truss) and core-strengthening exercises.</li>
              <li><strong>Medications:</strong> OTC pain relievers, stool softeners, or antibiotics if infected.</li>
            </ul>

            <h3 className="sub-title">Surgical Treatment (Definitive Solution)</h3>
            <div className="grid-layout">
              <div className="highlight-box">
                <h4>Open Hernia Repair (Herniorrhaphy)</h4>
                <p style={{fontSize: '14px', color: '#555'}}>Traditional incision in the groin to reinforce the abdominal wall using sutures or mesh.</p>
              </div>
              <div className="highlight-box" style={{border: '2px solid var(--cyan-accent)'}}>
                <h4>Laparoscopic Repair (Minimally Invasive)</h4>
                <p style={{fontSize: '14px', color: '#555'}}>Keyhole surgery using a laparoscope. Results in smaller incisions, less pain, and faster recovery.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default InguinalHernia;