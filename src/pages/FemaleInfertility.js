import React from "react";
import { useNavigate } from "react-router-dom";

const FemaleInfertility = () => {
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
          --bg-soft: #FFF9FE;
        }

        /* HERO */
        .female-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .female-container {
          max-width: 1100px;
          margin: auto;
        }

        .breadcrumb { color: #666; margin-bottom: 20px; font-size: 14px; }
        .hero-title { font-size: 48px; font-weight: 700; color: var(--footer-dark); margin-bottom: 20px; }
        .hero-text { font-size: 18px; color: #444; line-height: 1.6; max-width: 950px; margin-bottom: 20px; }

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

        .hero-btn:hover { background: #e66a00; transform: translateY(-2px); }

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
        .content-body { padding: 60px 20px; font-family: 'Poppins', sans-serif; background: white; }
        
        .info-card {
          background: var(--bg-soft);
          padding: 40px;
          border-radius: 24px;
          margin-bottom: 40px;
          border-left: 8px solid var(--brand-purple);
        }

        .section-h2 { font-size: 32px; color: var(--footer-dark); margin-bottom: 20px; display: flex; align-items: center; gap: 15px; }
        .section-h3 { font-size: 22px; color: var(--brand-purple); margin: 25px 0 10px; }

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .feature-item {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .icon-lg { font-size: 35px; margin-bottom: 15px; display: block; }

        .prevention-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }

        .check-item {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 15px;
            color: #555;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
        }
      `}</style>

      <section className="female-hero">
        <div className="female-container">
          <p className="breadcrumb">Home » Home » Female Infertility</p>
          <h1 className="hero-title">Expert Female Infertility Specialists</h1>
          <p className="hero-text">
            Infertility is a common disease affecting at least 10% of females. At <strong>Dr Cure Surgeries</strong>, 
            we provide comprehensive diagnostics and advanced treatments to help you achieve a successful pregnancy.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Book a Fertility Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Diseases Treated</p></div>
            <div className="stat"><h2>10%</h2><p>Females Affected</p></div>
            <div className="stat"><h2>10+</h2><p>Cities Covered</p></div>
          </div>
        </div>
      </section>

      <section className="content-body">
        <div className="female-container">
          
          {/* Understanding Female Infertility */}
          <div className="info-card">
            <h2 className="section-h2">❓ What is Female Infertility?</h2>
            <p>
              Infertility is defined as the inability to get pregnant after regular, unprotected intercourse. 
              The timeline for a diagnosis depends on age:
            </p>
            <div className="grid-layout">
              <div className="feature-item" style={{borderTop: '4px solid var(--brand-orange)'}}>
                <strong>Under 35 Years:</strong>
                <p>Seeking help after 1 year of trying.</p>
              </div>
              <div className="feature-item" style={{borderTop: '4px solid var(--brand-orange)'}}>
                <strong>Over 35 Years:</strong>
                <p>Seeking help after 6 months of trying.</p>
              </div>
            </div>
            <h3 className="section-h3">Types of Infertility</h3>
            <p>• <strong>Primary:</strong> Never been pregnant before.</p>
            <p>• <strong>Secondary:</strong> Unable to conceive again after a previous successful birth.</p>
          </div>

          {/* Causes & Age Impact */}
          <h2 className="section-h2">🧬 Leading Causes & Age Impact</h2>
          <div className="grid-layout">
            <div className="feature-item">
              <span className="icon-lg">🥚</span>
              <strong>Ovulation Disorders</strong>
              <p>Conditions like PCOS or Primary Ovarian Insufficiency (POI) are the leading causes of female factor infertility.</p>
            </div>
            <div className="feature-item">
              <span className="icon-lg">📉</span>
              <strong>The Age Factor</strong>
              <p>Wait times in the 30s and 40s increase risk due to lower egg count and higher chromosomal abnormalities.</p>
            </div>
            <div className="feature-item">
              <span className="icon-lg">🏥</span>
              <strong>Medical Conditions</strong>
              <p>Blocked fallopian tubes, uterine fibroids, or endometriosis can create structural barriers to conception.</p>
            </div>
          </div>

          {/* Treatment Options */}
          <div className="info-card" style={{marginTop: '40px', borderColor: 'var(--cyan-accent)'}}>
            <h2 className="section-h2">🏥 Treatment & Solutions</h2>
            <p>Once a cause is determined, our specialists at Dr Cure Surgeries offer tailored solutions:</p>
            <div className="grid-layout">
              <div className="feature-item">
                <strong>Fertility Medications:</strong> Balance hormones and stimulate healthy ovulation.
              </div>
              <div className="feature-item">
                <strong>Surgical Interventions:</strong> Correct structural issues, remove blockages, or treat scarring.
              </div>
              <div className="feature-item">
                <strong>Assisted Tech (ART):</strong> Advanced procedures like IUI and IVF for complex cases.
              </div>
            </div>
          </div>

          {/* Prevention & Lifestyle */}
          <div className="info-card" style={{borderColor: 'var(--brand-orange)'}}>
            <h2 className="section-h2">🥗 Prevention & Lifestyle</h2>
            <p>While many factors are beyond control, these lifestyle modifications can significantly promote fertility:</p>
            <div className="prevention-list">
              <div className="check-item">✅ Maintaining healthy weight</div>
              <div className="check-item">✅ Quitting smoking & alcohol</div>
              <div className="check-item">✅ Diet rich in fruits/veg</div>
              <div className="check-item">✅ 7+ hours of sleep</div>
              <div className="check-item">✅ Regular STI screenings</div>
              <div className="check-item">✅ Preventing infections (STIs)</div>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="info-card" style={{background: 'var(--footer-dark)', color: 'white', border: 'none'}}>
            <h2 className="section-h2" style={{color: 'white'}}>🌟 Take Control of Your Health</h2>
            <p style={{opacity: 0.9}}>
              Annual checkups with a gynecologist and preventive screenings are the best ways to ensure future fertility. 
              Don't wait—if you've been trying to conceive within the recommended timelines, we are here to help.
            </p>
            <div style={{marginTop: '30px', display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
              <button className="hero-btn" onClick={handleConsultClick}>Book Consultation</button>
              <button className="hero-btn" style={{background: 'transparent', border: '2px solid white'}} onClick={() => window.location.href='tel:+919493994244'}>
                📞 Call Us: +91 9493994244
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default FemaleInfertility;