import React from "react";
import { useNavigate } from "react-router-dom";

const Hydrocele = () => {
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
        .hydrocele-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .hydrocele-container {
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

        .method-box {
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
      <section className="hydrocele-hero">
        <div className="hydrocele-container">
          <p className="breadcrumb">Home » Home » Hydrocele</p>
          <h1 className="hero-title">
            Advanced Hydrocele Surgery (Hydrocelectomy)
          </h1>
          <p className="hero-text">
            A hydrocele is a fluid-filled sac surrounding a testicle that causes swelling in the scrotum. 
            At <strong>Dr Cure Surgeries</strong>, we provide effective, minimally invasive surgical 
            solutions and expert urological care to restore your comfort and health.
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
        <div className="hydrocele-container">

          <div className="info-card">
            <h2 className="section-title">What is Hydrocele?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Hydrocele is a type of swelling in the scrotum that occurs when fluid accumulates in the thin sheath 
              surrounding the testicle. While common in newborns (often resolving by age 1), it can also 
              affect adults due to injury or infection. If you notice scrotal swelling, consulting our 
              experts at <strong>Dr Cure Surgeries</strong> is essential for a proper diagnosis.
            </p>
          </div>

          <div className="info-card">
            <h2 className="section-title">Diagnosis & Testing</h2>
            <p style={{marginBottom: '15px'}}>Our urologists use simple, effective tests to assess the condition:</p>
            <div className="grid-layout">
              <div className="method-box">
                <strong>Transillumination:</strong> A light test to check if the scrotum is filled with clear fluid or a solid mass.
              </div>
              <div className="method-box">
                <strong>Ultrasound:</strong> Imaging to evaluate the size and specific characteristics of the hydrocele sac.
              </div>
              <div className="method-box">
                <strong>Blood Tests:</strong> To rule out underlying infections like syphilis or epididymitis.
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">Surgical Treatment (Hydrocelectomy)</h2>
            <div className="grid-layout">
              <div className="method-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Laparoscopic Hydrocelectomy</h4>
                <p style={{fontSize: '14px'}}>A minimally invasive approach using a laparoscope and small tools through tiny abdominal incisions. Faster recovery and minimal scarring.</p>
              </div>
              <div className="method-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Open Hydrocelectomy</h4>
                <p style={{fontSize: '14px'}}>A traditional surgical method where an incision is made directly in the scrotum or groin to drain the fluid and remove or close the sac.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">Non-Surgical Options</h2>
              <ul className="content-list">
                <li><strong>Needle Aspiration:</strong> Draining the fluid using a needle and syringe.</li>
                <li><strong>Sclerotherapy:</strong> Injecting a solution to close the sac after aspiration.</li>
                <li><strong>Wait-and-See:</strong> Monitoring small, painless hydroceles for natural resolution.</li>
              </ul>
            </div>
            <div className="info-card">
              <h2 className="section-title">Home Relief Tips</h2>
              <ul className="content-list">
                <li>Epsom salt baths to reduce tenderness.</li>
                <li>Cold compresses/Ice packs for swelling.</li>
                <li>Wearing supportive underwear or a jockstrap.</li>
                <li>Black tea or cumin paste for temporary relief.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Recovery & Aftercare</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Full recovery typically takes 2-3 weeks, but most patients at <strong>Dr Cure Surgeries</strong> 
              return to daily tasks within 2 days.
            </p>
            <ul className="content-list">
              <li>Avoid strenuous exercise (cycling, weight lifting) for 3 weeks.</li>
              <li>Stay active with low-impact walking.</li>
              <li>Keep the surgical area clean and dry.</li>
              <li>Follow all postoperative medication schedules.</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hydrocele;