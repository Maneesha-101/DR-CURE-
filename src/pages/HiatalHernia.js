import React from "react";
import { useNavigate } from "react-router-dom";

const HiatalHernia = () => {
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
        .hiatal-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .hiatal-container {
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

        /* CONTENT SECTION */
        .hiatal-content {
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

        .type-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .type-box {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #eee;
        }

        .type-box h4 {
          color: var(--brand-orange);
          margin-bottom: 10px;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hiatal-hero">
        <div className="hiatal-container">
          <p className="breadcrumb">Home » Home » Hiatal hernia</p>
          <h1 className="hero-title">
            Hiatal Hernia Surgery – Symptoms, Treatment & Expert Care
          </h1>
          <p className="hero-text">
            A hiatal hernia occurs when a part of the stomach pushes through the diaphragm 
            into the chest cavity. At Dr Cure Surgeries, we offer advanced diagnostic and 
            surgical solutions with a patient-first approach, ensuring long-term relief 
            and fast recovery.
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
      <section className="hiatal-content">
        <div className="hiatal-container">
          
          {/* Definition and Symptoms */}
          <div className="info-card">
            <h2 className="section-title">What is a Hiatal Hernia?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              A hiatal hernia occurs when the upper part of your stomach bulges through the large muscle 
              separating your abdomen and chest (diaphragm). This happens through a small opening 
              called the hiatus.
            </p>
            <div className="type-grid">
              <div>
                <h3 className="sub-title">Common Symptoms</h3>
                <ul className="content-list">
                  <li>Heartburn or acid reflux</li>
                  <li>Chest pain or discomfort</li>
                  <li>Difficulty swallowing (Dysphagia)</li>
                  <li>Regurgitation of food or liquids</li>
                  <li>Shortness of breath</li>
                  <li>Bloating or burping after meals</li>
                </ul>
              </div>
              <div>
                <h3 className="sub-title">Common Causes</h3>
                <ul className="content-list">
                  <li>Age-related weakening of the diaphragm</li>
                  <li>Injury or trauma to the abdominal area</li>
                  <li>Chronic coughing or straining</li>
                  <li>Increased abdominal pressure (Obesity, Lifting)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Types Section */}
          <div className="info-card">
            <h2 className="section-title">Different Hiatal Hernia Types</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              There are two main categories: sliding and paraesophageal. Most cases are sliding hernias.
            </p>
            <div className="type-grid">
              <div className="type-box">
                <h4>Type 1 (Sliding)</h4>
                <p>Accounting for 95% of cases. The junction where the esophagus meets the stomach slides up and down through the hiatus.</p>
              </div>
              <div className="type-box">
                <h4>Type 2 (Rolling)</h4>
                <p>A paraesophageal hernia where the upper part of the stomach pushes up alongside the esophagus, forming a bulge.</p>
              </div>
              <div className="type-box">
                <h4>Type 3 (Mixed)</h4>
                <p>A combination of sliding and rolling hernias, where both the junction and the stomach bulge through the hiatus.</p>
              </div>
              <div className="type-box">
                <h4>Type 4 (Complex)</h4>
                <p>Rare but serious. Multiple organs (intestines, pancreas, or spleen) herniate through the hiatus along with the stomach.</p>
              </div>
            </div>
          </div>

          {/* Diagnosis and Treatment */}
          <div className="info-card">
            <h2 className="section-title">Diagnosis & Treatment Options</h2>
            <div className="type-grid">
              <div>
                <h3 className="sub-title">Advanced Diagnostics</h3>
                <ul className="content-list">
                  <li><strong>Upper GI Endoscopy:</strong> To view the esophagus and stomach.</li>
                  <li><strong>Barium Swallow X-ray:</strong> To track organ positioning.</li>
                  <li><strong>Esophageal Manometry:</strong> To measure muscle contractions.</li>
                  <li><strong>pH Monitoring:</strong> For acid reflux assessment.</li>
                </ul>
              </div>
              <div>
                <h3 className="sub-title">Treatment Pathways</h3>
                <p className="hero-text" style={{fontSize: '16px'}}>
                  <strong>Lifestyle & Meds:</strong> Dietary changes and acid-suppressing PPIs for mild cases.
                </p>
                <p className="hero-text" style={{fontSize: '16px'}}>
                  <strong>Surgical Repair:</strong> Laparoscopic Fundoplication is the gold standard for severe or paraesophageal cases, offering minimal invasion and fast recovery.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default HiatalHernia;