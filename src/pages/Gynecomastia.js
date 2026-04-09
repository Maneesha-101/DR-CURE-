import React from "react";
import { useNavigate } from "react-router-dom";

const Gynecomastia = () => {
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
        .gyno-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .gyno-container {
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
        .stat h2 { font-size: 36px; color: var(--brand-purple); }
        .stat p { color: #777; }

        /* CONTENT SECTIONS */
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

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .item-box {
          background: #fff;
          padding: 25px;
          border-radius: 15px;
          border: 1px solid #eee;
        }

        .grade-badge {
          display: inline-block;
          padding: 4px 12px;
          background: var(--brand-purple);
          color: #fff;
          border-radius: 20px;
          font-size: 12px;
          margin-bottom: 10px;
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

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="gyno-hero">
        <div className="gyno-container">
          <p className="breadcrumb">Home » Home » Gynecomastia</p>
          <h1 className="hero-title">Gynecomastia Surgery – Causes, Symptoms & Treatment</h1>
          <p className="hero-text">
            Gynecomastia, often referred to as "man boobs," is a condition where male breast tissue 
            enlarges due to hormonal imbalances. At <strong>Dr Cure Surgeries</strong>, we provide 
            advanced surgical solutions to restore a masculine chest contour with minimal scarring.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Call to Schedule Your Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Specialties</p></div>
            <div className="stat"><h2>100+</h2><p>Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities</p></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="gyno-container">

          <div className="info-card">
            <h2 className="section-title">Understanding Gynecomastia Grades</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Gynecomastia progresses gradually and is classified into four distinct grades to determine the best treatment approach.
            </p>
            <div className="grid-layout">
              <div className="item-box">
                <span className="grade-badge">Grade 1</span>
                <p style={{fontSize: '14px'}}>Minor enlargement with a localized lump beneath the nipple.</p>
              </div>
              <div className="item-box">
                <span className="grade-badge">Grade 2</span>
                <p style={{fontSize: '14px'}}>Expansion to chest width, covering pectoral muscles, though not yet prominent.</p>
              </div>
              <div className="item-box">
                <span className="grade-badge">Grade 3</span>
                <p style={{fontSize: '14px'}}>Moderate, clearly visible enlargement through clothes with firm tissues.</p>
              </div>
              <div className="item-box">
                <span className="grade-badge">Grade 4</span>
                <p style={{fontSize: '14px'}}>Severe enlargement resembling female breasts, causing physical and psychological distress.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">Diagnosis & Assessment</h2>
            <ul className="content-list">
              <li><strong>Medical History:</strong> Evaluation of symptoms and medications like steroids or anti-androgens.</li>
              <li><strong>Physical Exam (Pinch Test):</strong> Assessing tissue consistency to distinguish between fat and glandular growth.</li>
              <li><strong>Hormonal Panel:</strong> Blood tests to evaluate estrogen and testosterone levels.</li>
              <li><strong>Imaging:</strong> Mammography or ultrasound to rule out other conditions and map tissue growth.</li>
            </ul>
          </div>

          <div className="info-card">
            <h2 className="section-title">Gynecomastia Surgery Procedure</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              The procedure typically takes <strong>45-60 minutes</strong> and is performed on an outpatient basis.
            </p>
            <div className="grid-layout">
              <div className="item-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Anesthesia</h4>
                <p style={{fontSize: '13px'}}>Performed under general anesthesia for complete patient comfort.</p>
              </div>
              <div className="item-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Gland Excision</h4>
                <p style={{fontSize: '13px'}}>A small incision around the areola allows the surgeon to excise firm glandular tissue.</p>
              </div>
              <div className="item-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Liposuction</h4>
                <p style={{fontSize: '13px'}}>A cannula is used to break down and remove excess fat tissues for a smooth contour.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">Benefits</h2>
              <ul className="content-list">
                <li>Enhanced masculine chest shape.</li>
                <li>Boosted self-confidence and esteem.</li>
                <li>Improved posture and core comfort.</li>
                <li>Freedom to engage in physical activities like swimming or running.</li>
              </ul>
            </div>
            <div className="info-card">
              <h2 className="section-title">Recovery Timeline</h2>
              <ul className="content-list">
                <li><strong>Week 1:</strong> Initial bruising and swelling. Compression garment worn 24/7.</li>
                <li><strong>Week 2-4:</strong> Return to regular activities. Incisions heal and swelling subsides.</li>
                <li><strong>Precautions:</strong> Avoid heavy lifting or strenuous exercise for 4 weeks.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Why Choose Dr Cure Surgeries?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              We understand the sensitivity of this condition. Our board-certified plastic surgeons 
              ensure absolute privacy, minimal scarring, and natural-looking results. With 
              <strong> Dr Cure Surgeries</strong>, you get access to world-class hospital 
              infrastructure and dedicated post-operative support to ensure a smooth recovery.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Gynecomastia;