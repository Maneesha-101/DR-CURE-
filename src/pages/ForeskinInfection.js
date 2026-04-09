import React from "react";
import { useNavigate } from "react-router-dom";

const ForeskinInfection = () => {
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
        .foreskin-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .foreskin-container {
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

        /* BUTTON */
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

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .method-box {
          background: #fff;
          padding: 25px;
          border-radius: 15px;
          border: 1px solid #eee;
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
      <section className="foreskin-hero">
        <div className="foreskin-container">
          <p className="breadcrumb">Home » Home » Foreskin Infection</p>
          <h1 className="hero-title">
            Penis Foreskin Infection Treatment & Care
          </h1>
          <p className="hero-text">
            Foreskin infection (Posthitis) is an inflammation of the foreskin often caused by 
            bacterial or fungal growth. At <strong>Dr Cure Surgeries</strong>, we offer precise 
            diagnosis and advanced surgical solutions like laser circumcision to provide lasting 
            relief from recurrent infections.
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
        <div className="foreskin-container">

          <div className="info-card">
            <h2 className="section-title">What is Foreskin Infection (Posthitis)?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Posthitis is a bacterial or fungal infection causing inflammation of the foreskin. 
              While not an STD, it often occurs alongside balanitis (inflammation of the penis head). 
              If left untreated, it can lead to complications like phimosis or chronic scarring.
            </p>
            
          </div>

          <div className="info-card">
            <h2 className="section-title">Common Causes & Risk Factors</h2>
            <div className="grid-layout">
              <div className="method-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Infections</h4>
                <p style={{fontSize: '14px'}}>Bacterial or fungal (Candida) overgrowth is the most frequent cause.</p>
              </div>
              <div className="method-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Hygiene</h4>
                <p style={{fontSize: '14px'}}>Poor cleaning habits or sensitivity to soaps/creams under the foreskin.</p>
              </div>
              <div className="method-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Phimosis</h4>
                <p style={{fontSize: '14px'}}>Men with tight foreskin are at a higher risk due to trapped moisture and bacteria.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">Diagnostic Approach</h2>
            <p style={{marginBottom: '15px'}}>At <strong>Dr Cure Surgeries</strong>, our urologists ensure a thorough evaluation:</p>
            <ul className="content-list">
              <li><strong>Physical Examination:</strong> Visual assessment of inflammation and skin condition.</li>
              <li><strong>Swab Test:</strong> To determine the specific bacterial or fungal strain causing the infection.</li>
              <li><strong>Urinalysis:</strong> To rule out underlying conditions like diabetes.</li>
            </ul>
          </div>

          <div className="info-card">
            <h2 className="section-title">Surgical Treatment (Circumcision)</h2>
            
            <div className="grid-layout">
              <div className="method-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Laser Circumcision</h4>
                <p style={{fontSize: '14px'}}>A high-beam laser removes the foreskin with minimal blood loss, no stitches, and a quick 20-minute procedure time.</p>
              </div>
              <div className="method-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Open Circumcision</h4>
                <p style={{fontSize: '14px'}}>The conventional method using a scalpel and dissolvable sutures, performed under general or local anesthesia.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">Care After Surgery</h2>
              <ul className="content-list">
                <li>Rest for 24-48 hours; start light walking within 2 days.</li>
                <li>Keep the incision site clean and pat dry carefully.</li>
                <li>Avoid strenuous activities like running or lifting for 2-3 weeks.</li>
                <li>Follow the prescribed pain-management medicine schedule.</li>
              </ul>
            </div>
            <div className="info-card">
              <h2 className="section-title">When to See a Doctor?</h2>
              <ul className="content-list">
                <li>Symptoms last longer than a week.</li>
                <li>Recurring infections (Balanoposthitis).</li>
                <li>Visible bleeding or unusual discharge.</li>
                <li>Significant pain or difficulty urinating.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Insurance & Billing</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Circumcision is often considered a medical necessity for severe or chronic foreskin infections. 
              At <strong>Dr Cure Surgeries</strong>, we accept major insurance plans and provide a 
              dedicated team to assist you with the claims process.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default ForeskinInfection;