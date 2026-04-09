import React from "react";
import { useNavigate } from "react-router-dom";

const MaleFertility = () => {
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
          --bg-soft: #F0F7FF;
        }

        /* HERO */
        .male-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .male-container {
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

        /* CONTENT */
        .content-section { padding: 60px 20px; font-family: 'Poppins', sans-serif; background: white; }
        
        .info-card {
          background: var(--bg-soft);
          padding: 40px;
          border-radius: 24px;
          margin-bottom: 30px;
          border-left: 6px solid var(--brand-purple);
        }

        .section-h2 { font-size: 30px; color: var(--footer-dark); margin-bottom: 20px; display: flex; align-items: center; gap: 15px; }
        
        .grid-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .feature-box {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .icon-div { font-size: 32px; margin-bottom: 15px; display: block; }

        .warning-box {
          background: #FFF4F4;
          border: 1px solid #FFDADA;
          padding: 25px;
          border-radius: 15px;
          margin-top: 20px;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
        }
      `}</style>

      <section className="male-hero">
        <div className="male-container">
          <p className="breadcrumb">Home » Home » Male fertility</p>
          <h1 className="hero-title">Best Male Infertility Doctor Near Me</h1>
          <p className="hero-text">
            Male infertility affects approximately 1 in 10 men trying to conceive. At <strong>Dr Cure Surgeries</strong>, 
            we combine advanced diagnostics with compassionate care to help men overcome reproductive challenges.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Schedule a Fertility Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Diseases Treated</p></div>
            <div className="stat"><h2>186M</h2><p>Affected Worldwide</p></div>
            <div className="stat"><h2>10+</h2><p>Cities</p></div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="male-container">
          
          {/* Understanding Infertility */}
          <div className="info-card">
            <h2 className="section-h2">🔬 What is Male Infertility?</h2>
            <p>
              Male infertility is a condition where a man's reproductive system is unable to impregnate a female partner 
              after one year of repeated, unprotected intercourse. While conception is a complex process, the male partner 
              is found to be a factor in about 50% of infertility cases globally.
            </p>
            <div className="warning-box">
              <strong>💡 Did you know?</strong> Even a young, healthy couple only has a 20-25% chance of conceiving 
              each month. Humans are considered a species with relatively low reproductive capacity.
            </div>
          </div>

          {/* Conception Factors */}
          <h2 className="section-h2">🧬 Factors for Successful Conception</h2>
          <div className="grid-info">
            <div className="feature-box">
              <span className="icon-div">🏃‍♂️</span>
              <strong>Healthy Sperm</strong>
              <p>Production of high-count, motile, and well-formed reproductive cells.</p>
            </div>
            <div className="feature-box">
              <span className="icon-div">🛤️</span>
              <strong>Clear Pathways</strong>
              <p>Unblocked tubes and ducts allowing sperm to reach the egg effectively.</p>
            </div>
            <div className="feature-box">
              <span className="icon-div">⚖️</span>
              <strong>Hormonal Balance</strong>
              <p>Adequate testosterone and pituitary gland function for embryo development.</p>
            </div>
          </div>

          {/* Causes */}
          <div className="info-card" style={{marginTop: '40px', borderColor: 'var(--brand-orange)'}}>
            <h2 className="section-h2">⚠️ Common Causes of Infertility</h2>
            <div className="grid-info">
              <div className="feature-box">
                <strong>Sperm Quality:</strong> Low count (oligospermia), malformed shapes, or total absence (azoospermia).
              </div>
              <div className="feature-box">
                <strong>Medical Issues:</strong> Diabetes, Varicoceles (swollen veins), STIs, or Klinefelter syndrome.
              </div>
              <div className="feature-box">
                <strong>Past Treatments:</strong> History of chemotherapy, radiation, or previous testicular surgeries.
              </div>
              <div className="feature-box">
                <strong>Physical Trauma:</strong> History of testicular injury or hormonal gland disorders.
              </div>
            </div>
          </div>

          {/* Signs & Symptoms */}
          <div className="info-card" style={{borderColor: 'var(--cyan-accent)'}}>
            <h2 className="section-h2">🚩 Signs of Unhealthy Sperm</h2>
            <p>While the primary sign is the inability to conceive, other physical and emotional indicators include:</p>
            <ul style={{lineHeight: '2', marginTop: '15px'}}>
              <li>🔹 <strong>Low Testosterone:</strong> Tiredness, impotence, and weight gain.</li>
              <li>🔹 <strong>Semen Changes:</strong> Typically, healthy semen is thick and sticky; watery or runny semen may indicate issues.</li>
              <li>🔹 <strong>Emotional Impact:</strong> Feelings of inadequacy, grief, or depression.</li>
            </ul>
          </div>

          {/* Expert Support */}
          <div className="info-card" style={{background: 'var(--footer-dark)', color: 'white', border: 'none'}}>
            <h2 className="section-h2" style={{color: 'white'}}>🌟 Professional Support at Dr Cure</h2>
            <p style={{opacity: 0.9}}>
              Infertility can be an emotional journey. Our urologists and reproductive endocrinologists are here to 
              provide not just medical treatment, but also the psychological support needed to navigate this process.
            </p>
            <div style={{marginTop: '25px', display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
              <button className="hero-btn" onClick={handleConsultClick}>Book Appointment</button>
              <button className="hero-btn" style={{background: 'transparent', border: '2px solid white'}} onClick={() => window.location.href='tel:+919493994244'}>
                📞 Call +91 9493994244
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default MaleFertility;