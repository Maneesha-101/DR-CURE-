import React from "react";
import { useNavigate } from "react-router-dom";

const VocalCordPolyps = () => {
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
        .vocal-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .vocal-container {
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

        .home-remedy-tag {
          display: inline-block;
          background: var(--cyan-accent);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          margin-bottom: 10px;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="vocal-hero">
        <div className="vocal-container">
          <p className="breadcrumb">Home » Home » Vocal Cord Polyps</p>
          <h1 className="hero-title">Vocal Cord Polyp Treatment – Advanced Voice Restoration</h1>
          <p className="hero-text">
            Vocal cord polyps are benign growths caused by voice abuse or acute trauma. At 
            <strong> Dr Cure Surgeries</strong>, our ENT specialists provide precision diagnostics 
            and minimally invasive surgical solutions to restore your vocal strength and clarity.
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
        <div className="vocal-container">
          
          <div className="info-card">
            <h2 className="section-title">Understanding Vocal Cord Lesions</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="highlight-text">Vocal Cord Polyps</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Blister-like growths, usually on one side. They contain more blood vessels and are common in men and professional singers.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Vocal Cord Nodules</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Often called "singer's nodes," these callus-like growths develop in pairs at the midpoint of vocal folds due to friction.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Vocal Cord Cysts</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Firm masses of tissue contained within a membrane. These are deeper and less common than nodules or polyps.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">Precision Diagnosis</h2>
            <ul className="list-style">
              <li><strong>Laryngoscopy:</strong> Using a flexible camera through the nose to view the larynx.</li>
              <li><strong>Stroboscopy:</strong> Evaluates vocal cord vibration and motion using a specialized flashing light.</li>
              <li><strong>Micro-laryngoscopy:</strong> A detailed examination under anesthesia for complex or difficult cases.</li>
            </ul>
          </div>

          <div className="info-card">
            <h2 className="section-title">Surgical Treatment Options</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="highlight-text">Laser Vocal Cord Surgery</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Uses precision lasers to remove lesions or polyps. Typically takes 60-90 minutes.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Laryngeal Framework Surgery</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Modification of vocal cord cartilage to improve vibration and voice quality under local anesthesia.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Vocal Cord Injections</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Injecting collagen or gel fillers to treat muscle weakness or temporary paralysis.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">Recovery & Aftercare</h2>
              <ul className="list-style">
                <li><strong>Voice Rest:</strong> Essential for several days post-surgery; avoid whispering or shouting.</li>
                <li><strong>Hydration:</strong> Drink plenty of water and avoid caffeine/alcohol to prevent drying.</li>
                <li><strong>Voice Therapy:</strong> Recommended to learn healthy speaking habits and prevent recurrence.</li>
                <li><strong>Lifestyle:</strong> Use visual reminders for good voice habits and take frequent "vocal breaks."</li>
              </ul>
            </div>

            <div className="info-card">
              <h2 className="section-title">Non-Surgical & Home Remedies</h2>
              <div className="item-box" style={{marginBottom:'10px'}}>
                <span className="home-remedy-tag">Hydration</span>
                <p style={{fontSize: '13px'}}>Use a humidifier to moisten dry air and drink warm tea with honey to reduce mucus.</p>
              </div>
              <div className="item-box">
                <span className="home-remedy-tag">Soothing</span>
                <p style={{fontSize: '13px'}}>Gargle warm salt water and use medicated lozenges to relieve throat pain and germs.</p>
              </div>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Surgery Cost & Factors</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              The cost of Vocal Cord Polyp Surgery at <strong>Dr Cure Surgeries</strong> is determined by 
              factors such as diagnostic stroboscopy, hospital choice, anesthesia, and necessary 
              post-operative voice therapy. We provide comprehensive pricing and insurance assistance 
              to ensure a smooth restoration of your voice.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default VocalCordPolyps;