import React from "react";
import { useNavigate } from "react-router-dom";

const Appendicitis = () => {
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
        .appendix-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .appendix-container {
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

        /* CONTENT STYLING */
        .appendix-content {
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

        /* MOBILE */
        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="appendix-hero">
        <div className="appendix-container">
          <p className="breadcrumb">Home » Home » Appendicitis</p>
          <h1 className="hero-title">
            Appendicitis Laparoscopic Surgery
          </h1>
          <p className="hero-text">
            Chronic or acute appendicitis can affect people of all age groups. 
            Undergo minimally invasive laparoscopic appendectomy at the hands of 
            experienced surgeons. Get rid of the constant pain in the right side 
            of the abdomen through a minimal pain procedure.
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

      {/* Main Information Section */}
      <section className="appendix-content">
        <div className="appendix-container">

          {/* What is Appendectomy */}
          <div className="info-card">
            <h2 className="section-title">What is an Appendectomy?</h2>
            <p className="hero-text">
              An appendectomy is the surgical removal of an inflamed or infected appendix. 
              Timely treatment is critical in acute cases; if left untreated, the appendix can 
              burst, leading to life-threatening infections in the abdominal cavity. 
              At Dr Cure Surgeries, we specialize in laparoscopic treatment—the safest and 
              most minimally invasive technique available.
            </p>
          </div>

          {/* Procedure Types */}
          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">Types of Surgery</h2>
              <h3 className="sub-title">1. Open Appendectomy</h3>
              <p className="hero-text" style={{fontSize: '16px'}}>A single 5-10cm incision in the lower-right abdomen to remove the appendix directly.</p>
              <h3 className="sub-title">2. Laparoscopic Appendectomy</h3>
              <p className="hero-text" style={{fontSize: '16px'}}>An advanced "keyhole" procedure using 2-3 tiny incisions and a camera for high precision and faster healing.</p>
            </div>
            <div className="info-card" style={{borderLeftColor: '#dc3545'}}>
              <h2 className="section-title">Risk of Delay</h2>
              <p className="hero-text" style={{fontSize: '16px'}}>
                Untreated appendicitis can lead to:
              </p>
              <ul className="content-list">
                <li>Appendix rupture (bursting)</li>
                <li>Infection spread to liver, stomach, and intestines</li>
                <li>Sepsis (life-threatening body-wide infection)</li>
                <li>Emergency medical complications</li>
              </ul>
            </div>
          </div>

          {/* Diagnostic Steps */}
          <div className="info-card">
            <h2 className="section-title">Appendicitis Diagnosis</h2>
            <div className="grid-layout">
              <div>
                <ul className="content-list">
                  <li><strong>Medical Review:</strong> Analyzing symptoms and medical history.</li>
                  <li><strong>Physical Exam:</strong> Checking for tenderness and rebound pain.</li>
                  <li><strong>Lab Tests:</strong> Blood tests and urinalysis to rule out other issues.</li>
                </ul>
              </div>
              <div>
                <ul className="content-list">
                  <li><strong>Imaging:</strong> Ultrasound, CT scans, or MRI for confirmation.</li>
                  <li><strong>Preparation:</strong> 8-hour fasting before surgery is mandatory.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Preparation & Procedure */}
          <div className="info-card">
            <h2 className="section-title">Surgery & Preparation</h2>
            <div className="grid-layout">
              <div className="highlight-box">
                <h3 className="sub-title">Preparation Tips</h3>
                <ul className="content-list">
                  <li>Avoid aspirin or blood thinners 1 week prior.</li>
                  <li>Disclose all allergies to anesthesia.</li>
                  <li>Shower before surgery to keep the site clean.</li>
                  <li>Maintain an empty stomach (8 hours fasting).</li>
                </ul>
              </div>
              <div className="highlight-box">
                <h3 className="sub-title">Procedure Steps</h3>
                <ul className="content-list">
                  <li>Administration of general anesthesia.</li>
                  <li>Abdominal inflation with CO2 for visibility.</li>
                  <li>Laparoscopic visualization and separation.</li>
                  <li>Incision closure with sutures or skin glue.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits and Recovery */}
          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Benefits & Recovery</h2>
            <div className="grid-layout">
              <div>
                <h3 className="sub-title">Why Choose Laparoscopic?</h3>
                <ul className="content-list">
                  <li>Smaller keyhole incisions (minimal scarring).</li>
                  <li>Lower risk of post-op infection or bleeding.</li>
                  <li>Same-day discharge in most cases.</li>
                  <li>Minimal post-operative pain and faster recovery.</li>
                </ul>
              </div>
              <div>
                <h3 className="sub-title">Recovery Timeline</h3>
                <ul className="content-list">
                  <li><strong>1-3 Weeks:</strong> Average full recovery time.</li>
                  <li><strong>First 24 Hours:</strong> Vital signs monitoring and disorientation management.</li>
                  <li><strong>1 Week:</strong> Return to work and daily activities.</li>
                  <li><strong>Post-Op:</strong> Keep incision dry and follow antibiotic prescriptions.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Appendicitis;