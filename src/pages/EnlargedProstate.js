import React from "react";
import { useNavigate } from "react-router-dom";

const EnlargedProstate = () => {
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

        /* HERO */
        .enlarged-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .enlarged-container {
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

        .hero-btn:hover { background: #e66a00; }

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
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .grade-box {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #eee;
        }

        .grade-number {
          color: var(--brand-orange);
          font-weight: 700;
          font-size: 20px;
          margin-bottom: 10px;
          display: block;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="enlarged-hero">
        <div className="enlarged-container">
          <p className="breadcrumb">Home » Home » Enlarged Prostate</p>
          <h1 className="hero-title">Best Enlarged Prostate Treatment – Prostatomegaly</h1>
          <p className="hero-text">
            Benign Prostate Hyperplasia (BPH) is common in men over 60, causing urinary discomfort. 
            At <strong>Dr Cure Surgeries</strong>, we offer advanced diagnostic care and laser 
            treatments to restore your quality of life with minimal downtime.
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
        <div className="enlarged-container">
          
          <div className="info-card">
            <h2 className="section-title">What is an Enlarged Prostate (BPH)?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              BPH occurs when the prostate gland grows and presses against the urethra. This pressure 
              leads to frequent urination, weak flow, and incomplete emptying. While not life-threatening, 
              timely intervention at <strong>Dr Cure Surgeries</strong> can prevent complications.
            </p>
          </div>

          <div className="info-card">
            <h2 className="section-title">BPH Severity Grading</h2>
            <div className="grid-layout">
              <div className="grade-box">
                <span className="grade-number">Grade 1</span>
                <p style={{fontSize: '14px'}}>Mild symptoms with minimal interference in daily life. Managed with observation.</p>
              </div>
              <div className="grade-box">
                <span className="grade-number">Grade 2</span>
                <p style={{fontSize: '14px'}}>Moderate symptoms impacting daily activities. Managed via lifestyle changes or medication.</p>
              </div>
              <div className="grade-box">
                <span className="grade-number">Grade 3</span>
                <p style={{fontSize: '14px'}}>Significant obstruction in urine flow. Usually requires surgical intervention.</p>
              </div>
              <div className="grade-box">
                <span className="grade-number">Grade 4</span>
                <p style={{fontSize: '14px'}}>Severe symptoms that disrupt sleep and daily routines significantly.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">Diagnostic Tests</h2>
            <div className="grid-layout">
              <ul style={{paddingLeft: '20px'}}>
                <li><strong>Digital Rectal Exam (DRE):</strong> To assess size and condition.</li>
                <li><strong>PSA Blood Test:</strong> To check for inflammation or other conditions.</li>
                <li><strong>Urine Test:</strong> To rule out infections or blood.</li>
                <li><strong>Transrectal Ultrasound:</strong> Detailed mapping of prostate abnormalities.</li>
              </ul>
              <ul style={{paddingLeft: '20px'}}>
                <li><strong>Urodynamic Tests:</strong> Measuring bladder and urethra function.</li>
                <li><strong>Cystoscopy:</strong> Visualizing the prostate and bladder internally.</li>
                <li><strong>Biopsy:</strong> Ruling out cancer through tissue analysis.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Surgical Treatment Options</h2>
            <p style={{marginBottom: '20px'}}>Surgery is typically considered if the prostate gland measures more than <strong>40 grams</strong> or symptoms are severe.</p>
            <div className="grid-layout">
              <div className="grade-box">
                <h4 style={{color: 'var(--brand-purple)'}}>TURP (Transurethral Resection)</h4>
                <p style={{fontSize: '14px'}}>The gold standard. Excess tissue is removed using a resectoscope through the urethra.</p>
              </div>
              <div className="grade-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Laser Surgery (HoLEP/ThuLEP)</h4>
                <p style={{fontSize: '14px'}}>Uses laser energy to vaporize tissue. Offers less bleeding and faster recovery than traditional methods.</p>
              </div>
              <div className="grade-box">
                <h4 style={{color: 'var(--brand-purple)'}}>TUIP (Transurethral Incision)</h4>
                <p style={{fontSize: '14px'}}>Small incisions are made in the prostate and bladder neck to widen the urinary passage.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default EnlargedProstate;