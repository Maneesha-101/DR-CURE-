import React from "react";
import { useNavigate } from "react-router-dom";

const IVFTreatment = () => {
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
          --bg-soft: #F9F5FB;
        }

        .ivf-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .ivf-container {
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

        /* CONTENT STYLES */
        .content-body { padding: 60px 20px; font-family: 'Poppins', sans-serif; background: #fff; }
        
        .info-card {
          background: var(--bg-soft);
          padding: 40px;
          border-radius: 24px;
          margin-bottom: 40px;
          border-left: 8px solid var(--brand-purple);
        }

        .section-h2 { font-size: 32px; color: var(--footer-dark); margin-bottom: 20px; display: flex; align-items: center; gap: 15px; }
        .section-h3 { font-size: 22px; color: var(--brand-purple); margin: 25px 0 15px; }

        .step-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .step-item {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
          position: relative;
        }

        .step-num {
          position: absolute;
          top: -10px;
          right: -10px;
          background: var(--brand-orange);
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .icon-box { font-size: 40px; margin-bottom: 15px; display: block; }

        .highlight-box {
          background: var(--footer-dark);
          color: white;
          padding: 30px;
          border-radius: 20px;
          margin-top: 40px;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
        }
      `}</style>

      <section className="ivf-hero">
        <div className="ivf-container">
          <p className="breadcrumb">Home » Home » IVF treatment</p>
          <h1 className="hero-title">IVF (In Vitro Fertilization) at Dr Cure Surgeries</h1>
          <p className="hero-text">
            IVF is the gold standard of assisted reproductive technology. By fertilizing eggs with sperm 
            in a controlled laboratory environment, we help overcome complex infertility hurdles to 
            bring your dreams of parenthood to life.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Schedule Your IVF Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Diseases Treated</p></div>
            <div className="stat"><h2>100+</h2><p>Partner Hospitals</p></div>
            <div className="stat"><h2>8M+</h2><p>IVF Babies Worldwide</p></div>
          </div>
        </div>
      </section>

      <section className="content-body">
        <div className="ivf-container">
          
          {/* What is IVF */}
          <div className="info-card">
            <h2 className="section-h2">🔬 What is IVF?</h2>
            <p>
              In vitro fertilization (IVF) involves retrieving eggs from ovaries and manually combining them 
              with sperm in a lab. Once fertilization occurs, the resulting embryo is placed inside the 
              uterus. IVF is one of the most effective treatments for infertility available today.
            </p>
            <h3 className="section-h3">Who is IVF for?</h3>
            <div className="step-grid">
              <div className="step-item">✅ Blocked/Damaged Tubes</div>
              <div className="step-item">✅ Endometriosis or PCOS</div>
              <div className="step-item">✅ Low Sperm Count/Motility</div>
              <div className="step-item">✅ Unexplained Infertility</div>
            </div>
          </div>

          {/* Steps of IVF */}
          <h2 className="section-h2">⚙️ The 5 Core Steps of IVF</h2>
          <div className="step-grid">
            <div className="step-item">
              <span className="step-num">1</span>
              <span className="icon-box">💊</span>
              <strong>Ovarian Stimulation</strong>
              <p>Injectable hormones encourage multiple eggs to mature simultaneously over 8–14 days.</p>
            </div>
            <div className="step-item">
              <span className="step-num">2</span>
              <span className="icon-box">💉</span>
              <strong>Egg Retrieval</strong>
              <p>A minor procedure using ultrasound guidance to collect mature eggs under mild sedation.</p>
            </div>
            <div className="step-item">
              <span className="step-num">3</span>
              <span className="icon-box">🧫</span>
              <strong>Fertilization (ICSI)</strong>
              <p>Sperm is injected into mature eggs. On average, 70% of mature eggs fertilize successfully.</p>
            </div>
            <div className="step-item">
              <span className="step-num">4</span>
              <span className="icon-box">🔬</span>
              <strong>Embryo Development</strong>
              <p>Embryos are monitored for 5–6 days until they reach the blastocyst stage.</p>
            </div>
            <div className="step-item">
              <span className="step-num">5</span>
              <span className="icon-box">👶</span>
              <strong>Embryo Transfer</strong>
              <p>One or more embryos are placed in the uterus. Pregnancy is confirmed 9–14 days later.</p>
            </div>
          </div>

          {/* IVF vs IUI */}
          <div className="info-card" style={{marginTop: '50px', borderColor: 'var(--brand-orange)'}}>
            <h2 className="section-h2">⚖️ IUI vs. IVF: The Difference</h2>
            <p>
              In <strong>IUI</strong>, fertilization happens inside your body. In <strong>IVF</strong>, 
              it happens in a lab. IVF has a significantly higher success rate per cycle but is more 
              invasive and requires more advanced laboratory technology.
            </p>
          </div>

          {/* Effectiveness */}
          <div className="info-card" style={{borderColor: 'var(--cyan-accent)'}}>
            <h2 className="section-h2">📈 Success Rates</h2>
            <p>Age is the strongest factor in IVF success:</p>
            <ul>
              <li><strong>Under 35:</strong> ~46% Live birth rate per cycle.</li>
              <li><strong>Age 38:</strong> ~22% Live birth rate per cycle.</li>
              <li><strong>Over 40:</strong> Success rates naturally decline with egg quality.</li>
            </ul>
          </div>

          {/* Risks & Side Effects */}
          <div className="grid-layout" style={{display: 'flex', gap: '30px', flexWrap: 'wrap'}}>
            <div className="step-item" style={{flex: 1}}>
              <h3 className="section-h3">⚠️ Potential Risks</h3>
              <ul style={{paddingLeft: '20px'}}>
                <li>Multiple births (Twins/Triplets)</li>
                <li>Ectopic pregnancy (Implanting outside uterus)</li>
                <li>OHSS (Ovarian Hyperstimulation)</li>
                <li>Minor risk of infection or bleeding</li>
              </ul>
            </div>
            <div className="step-item" style={{flex: 1}}>
              <h3 className="section-h3">🌸 Post-Transfer Care</h3>
              <ul style={{paddingLeft: '20px'}}>
                <li>Mild bloating and cramping is normal.</li>
                <li>Return to normal activities immediately.</li>
                <li>Avoid strenuous exercise for 24 hours.</li>
                <li>HCG Blood test in 10-14 days.</li>
              </ul>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="highlight-box">
            <h2 style={{color: 'white', marginBottom: '15px'}}>Start Your Journey with Dr Cure Surgeries</h2>
            <p style={{marginBottom: '25px', opacity: 0.9}}>
              The IVF process typically lasts 4 to 6 weeks. Our specialists provide personalized 
              protocols to maximize your chances of success.
            </p>
            <button className="hero-btn" onClick={handleConsultClick}>
              Book an Appointment
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default IVFTreatment;