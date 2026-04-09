import React from "react";
import { useNavigate } from "react-router-dom";

const EggFreezing = () => {
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
          --bg-soft: #FDF9FF;
        }

        /* HERO SECTION */
        .egg-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .egg-container {
          max-width: 1100px;
          margin: auto;
        }

        .breadcrumb { color: #666; margin-bottom: 20px; font-size: 14px; }
        .hero-title { font-size: 48px; font-weight: 700; color: var(--footer-dark); margin-bottom: 20px; }
        .hero-text { font-size: 18px; color: #444; line-height: 1.6; max-width: 950px; margin-bottom: 30px; }

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

        .section-h2 { font-size: 30px; color: var(--footer-dark); margin-bottom: 25px; display: flex; align-items: center; gap: 12px; }
        .section-h3 { font-size: 22px; color: var(--brand-purple); margin-bottom: 15px; }

        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 25px;
        }

        .item-card {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .icon-lg { font-size: 32px; margin-bottom: 15px; display: block; }

        .timeline-box {
            border-left: 3px dashed var(--cyan-accent);
            padding-left: 25px;
            margin-left: 10px;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
        }
      `}</style>

      <section className="egg-hero">
        <div className="egg-container">
          <p className="breadcrumb">Home » Home » Egg Freezing</p>
          <h1 className="hero-title">Fertility & Reproductive Health: Egg Freezing</h1>
          <p className="hero-text">
            Egg freezing (oocyte cryopreservation) is a breakthrough technology that empowers women to preserve 
            their reproductive potential. At <strong>Dr Cure Surgeries</strong>, we provide a safe, 
            scientifically advanced path to future parenthood.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Book a Fertility Assessment
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Diseases Treated</p></div>
            <div className="stat"><h2>100+</h2><p>Partner Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities Covered</p></div>
          </div>
        </div>
      </section>

      <section className="content-body">
        <div className="egg-container">
          
          {/* What is Egg Freezing */}
          <div className="info-card">
            <h2 className="section-h2">❄️ What is Egg Freezing?</h2>
            <p>
              Oocyte cryopreservation is a process where a woman’s eggs are extracted, frozen, and stored. 
              Modern techniques like <strong>vitrification</strong> (ultra-rapid cooling) have revolutionized 
              survival rates, making it a standard medical procedure rather than an experimental one. 
              It allows women greater autonomy over their reproductive timeline.
            </p>
          </div>

          {/* Who Needs It */}
          <h2 className="section-h2">🎯 Who Should Consider Egg Freezing?</h2>
          <div className="grid-3">
            <div className="item-card">
              <span className="icon-lg">🏥</span>
              <strong>Medical Reasons</strong>
              <p>Cancer patients facing chemotherapy/radiation or those requiring surgery that may damage ovaries.</p>
            </div>
            <div className="item-card">
              <span className="icon-lg">🧬</span>
              <strong>Genetic Risks</strong>
              <p>Risk of premature ovarian failure, Turner syndrome, or genetic mutations like BRCA.</p>
            </div>
            <div className="item-card">
              <span className="icon-lg">📅</span>
              <strong>Social/Personal</strong>
              <p>Choosing to delay childbearing for career, educational, or personal reasons.</p>
            </div>
          </div>

          {/* The Process */}
          <div className="info-card" style={{marginTop: '50px', borderColor: 'var(--cyan-accent)'}}>
            <h2 className="section-h2">🔬 How the Process Works</h2>
            <div className="timeline-box">
              <h3 className="section-h3">1. Assessment</h3>
              <p>Pelvic ultrasound and blood tests to evaluate ovarian reserve and determine medication dosage.</p>
              
              <h3 className="section-h3">2. Stimulation</h3>
              <p>Injectable hormonal medications encourage the growth of multiple follicles simultaneously.</p>
              
              <h3 className="section-h3">3. Retrieval</h3>
              <p>Oocytes are aspirated vaginally under mild sedation. The procedure is quick and outpatient-based.</p>
              
              <h3 className="section-h3">4. Vitrification</h3>
              <p>Mature eggs are ultra-rapidly cooled in liquid nitrogen for long-term storage.</p>
            </div>
          </div>

          {/* Future Use & Success */}
          <h2 className="section-h2">📈 Future Use & Success Rates</h2>
          
          <div className="grid-3">
            <div className="item-card">
              <strong>The Thaw & ICSI</strong>
              <p>When ready, eggs are warmed and fertilized via ICSI (sperm injection) before embryo transfer.</p>
            </div>
            <div className="item-card">
              <strong>Success Probability</strong>
              <p>Clinical pregnancy rates are ~4-12% per oocyte. Success depends heavily on age at the time of freezing.</p>
            </div>
            <div className="item-card">
              <strong>Offspring Health</strong>
              <p>Data shows no increased risk of congenital anomalies compared to fresh oocyte births.</p>
            </div>
          </div>

          {/* Risks & Storage */}
          <div className="info-card" style={{marginTop: '40px', borderColor: 'var(--brand-orange)'}}>
            <h2 className="section-h2">⚠️ Risks & Considerations</h2>
            <p>
              Risks are similar to IVF: small risks of <strong>Ovarian Hyperstimulation Syndrome (OHSS)</strong>, 
              minor infection, or bleeding during retrieval. 
            </p>
            <p style={{marginTop: '15px'}}>
              <strong>Storage:</strong> At Dr Cure, storage is available for up to 4 years. Note that while 
              eggs stay young, carrying a pregnancy at an older age increases risks like high blood pressure or diabetes.
            </p>
          </div>

          {/* Final CTA */}
          <div className="info-card" style={{background: 'var(--footer-dark)', color: 'white', border: 'none'}}>
            <h2 className="section-h2" style={{color: 'white'}}>💰 Cost & Consultation</h2>
            <p style={{opacity: 0.9}}>
              Costs depend on insurance coverage and specific treatment plans. Many plans cover the initial assessment. 
              Our team at Dr Cure Surgeries can help you navigate the financial and medical path.
            </p>
            <div style={{marginTop: '30px', display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
              <button className="hero-btn" onClick={handleConsultClick}>Schedule Appointment</button>
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

export default EggFreezing;