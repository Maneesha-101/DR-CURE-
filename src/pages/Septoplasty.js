import React from "react";
import { useNavigate } from "react-router-dom";

const Septoplasty = () => {
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
        .septo-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .septo-container {
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
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          border-left: 6px solid var(--brand-purple);
        }

        .section-title {
          font-size: 28px;
          color: var(--footer-dark);
          margin-bottom: 20px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .item-box {
          background: #fff;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #eee;
          transition: 0.3s;
        }

        .item-box:hover {
          border-color: var(--brand-purple);
        }

        .list-style {
          padding-left: 20px;
          color: #555;
          line-height: 1.8;
          list-style-type: disc;
        }

        .highlight-text {
          color: var(--brand-purple);
          font-weight: 600;
        }

        .icon-header {
          font-size: 24px;
          margin-bottom: 10px;
          display: block;
        }

        .price-tag {
          background: #e6f7f8;
          color: var(--footer-dark);
          padding: 10px 20px;
          border-radius: 8px;
          display: inline-block;
          font-weight: 700;
          margin-top: 10px;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="septo-hero">
        <div className="septo-container">
          <p className="breadcrumb">Home » Home » Septoplasty</p>
          <h1 className="hero-title">Septoplasty Surgery – Breathe Free Again</h1>
          <p className="hero-text">
            Correct your deviated septum and eliminate chronic breathing issues. 
            At <strong>Dr Cure Surgeries</strong>, we provide high-precision ENT care to resolve 
            snoring, sleep apnea, and chronic sinus infections with expert surgical precision.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Schedule Your Diagnosis
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>95%</h2><p>Success Rate</p></div>
            <div className="stat"><h2>100+</h2><p>Specialist Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Major Cities</p></div>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="content-section">
        <div className="septo-container">
          
          <div className="info-card">
            <h2 className="section-title">👃 What is Septoplasty?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Septoplasty is a surgical procedure designed to straighten a deviated nasal septum. 
              The septum is the cartilage and bone that divides your nostrils. When crooked, 
              it blocks airflow, leading to severe respiratory distress and chronic headaches. 
              Our specialists reposition the tissue to ensure balanced, effortless breathing.
            </p>
            
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--cyan-accent)'}}>
            <h2 className="section-title">⚖️ When is it Required?</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="icon-header">😴</span>
                <span className="highlight-text">Sleep Apnea</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Relieves gasping, choking, and chronic snoring caused by airway obstruction.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">🧠</span>
                <span className="highlight-text">Chronic Headaches</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Reduces facial pain and migraines caused by constant nasal muscle strain.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">🌧️</span>
                <span className="highlight-text">Recurring Sinusitis</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Improves mucus drainage to prevent frequent sinus infections and postnasal drip.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">🛠️ The Surgical Procedure</h2>
            <p style={{marginBottom: '15px'}}>Performed as an outpatient procedure under general or local anesthesia:</p>
            <ul className="list-style">
              <li><strong>Internal Incision:</strong> The surgeon works entirely inside the nose to avoid external scarring.</li>
              <li><strong>Repositioning:</strong> Deviated bone and cartilage are straightened or partially removed.</li>
              <li><strong>Turbinate Reduction:</strong> Often performed simultaneously to further clear the airway.</li>
              <li><strong>Support:</strong> Temporary splints or nasal packing are used to ensure the septum heals straight.</li>
            </ul>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">🛡️ Recovery Guide</h2>
              <ul className="list-style" style={{fontSize: '14px'}}>
                <li><strong>Elevation:</strong> Keep your head elevated with pillows while sleeping to reduce swelling.</li>
                <li><strong>No Blowing:</strong> Avoid forcefully blowing your nose for at least 2 weeks.</li>
                <li><strong>Saline Care:</strong> Use sterile saline sprays to keep passages moist and clear.</li>
                <li><strong>Activity:</strong> Avoid heavy lifting or strenuous sports to prevent high blood pressure and bleeding.</li>
              </ul>
            </div>

            <div className="info-card">
              <h2 className="section-title">💰 Cost & Insurance</h2>
              <p style={{fontSize: '14px'}}>Average Cost in India: <span className="price-tag">₹87,000</span></p>
              <p style={{fontSize: '13px', marginTop: '10px', color: '#666'}}>
                Septoplasty is typically covered by insurance providers like <strong>Aditya Birla Health</strong> 
                and <strong>Future Generali</strong> as it is classified as a medically necessary procedure.
              </p>
            </div>
          </div>

          <div className="info-card" style={{background: '#fff3e6', borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">🌿 Lifestyle & Home Remedies</h2>
            <div className="grid-layout">
              <div className="item-box">
                <strong>Vitamin C Support</strong>
                <p style={{fontSize: '13px'}}>Broccoli, lemons, and strawberries help naturally reduce mucus secretion.</p>
              </div>
              <div className="item-box">
                <strong>Irritant Avoidance</strong>
                <p style={{fontSize: '13px'}}>Stay clear of dust mites, pollen, and tobacco smoke to prevent inflammation.</p>
              </div>
              <div className="item-box">
                <strong>Sleep Posture</strong>
                <p style={{fontSize: '13px'}}>Sleeping on your back with slight elevation helps maintain optimal airflow.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Septoplasty;