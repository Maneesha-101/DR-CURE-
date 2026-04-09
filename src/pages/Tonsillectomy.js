import React from "react";
import { useNavigate } from "react-router-dom";

const Tonsillectomy = () => {
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
        .tonsil-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .tonsil-container {
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

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="tonsil-hero">
        <div className="tonsil-container">
          <p className="breadcrumb">Home » Home » Tonsillectomy</p>
          <h1 className="hero-title">Precision Tonsillectomy Surgery & Care</h1>
          <p className="hero-text">
            Say goodbye to chronic sore throats and sleep apnea. <strong>Dr Cure Surgeries</strong> 
            offers advanced, minimally invasive tonsil removal procedures using radiofrequency 
            and coblation technology for faster recovery and permanent relief.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Schedule Your Expert Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Conditions Treated</p></div>
            <div className="stat"><h2>100+</h2><p>Partner Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities Covered</p></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="tonsil-container">
          
          <div className="info-card">
            <h2 className="section-title">👅 What is a Tonsillectomy?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Tonsillectomy is the surgical removal of the tonsils—two oval pads of tissue at the back 
              of the throat. It is the most effective treatment for chronic tonsillitis, 
              tonsil stones, and obstructive sleep apnea. Recovery typically takes <strong>10 days to 2 weeks</strong>.
            </p>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--cyan-accent)'}}>
            <h2 className="section-title">🧪 Modern Surgical Techniques</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="icon-header">⚡</span>
                <span className="highlight-text">Radiofrequency / Coblation</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Uses low-temperature radio waves to gently dissolve tissue, minimizing damage to surrounding areas.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">🎵</span>
                <span className="highlight-text">Harmonic Scalpel</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Uses ultrasonic vibrations to cut and cauterize simultaneously, significantly reducing bleeding.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">🔪</span>
                <span className="highlight-text">Cold Knife Dissection</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Traditional surgical method where the surgeon manually removes the tonsils with absolute precision.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">✅ Key Benefits</h2>
              <ul className="list-style">
                <li><strong>Better Sleep:</strong> Eliminates obstruction causing sleep apnea and snoring.</li>
                <li><strong>Fewer Infections:</strong> Prevents secondary issues like sinusitis and ear infections.</li>
                <li><strong>Productivity:</strong> Less time taken off work/school due to recurrent illness.</li>
                <li><strong>Fresh Breath:</strong> Removes tonsil stones (halitosis) permanently.</li>
              </ul>
            </div>

            <div className="info-card">
              <h2 className="section-title">🏥 Pre-Op Preparation</h2>
              <ul className="list-style">
                <li><strong>Fasting:</strong> Minimum 8 hours prior to surgery.</li>
                <li><strong>Medication:</strong> Stop blood thinners (Aspirin/Ibuprofen) as advised.</li>
                <li><strong>Blood Tests:</strong> Complete CBC and bleeding tendency evaluations.</li>
                <li><strong>Lifestyle:</strong> Refrain from nicotine and alcohol 1 week prior.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{background: '#fff3e6', borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">🍦 Recovery & Lifestyle</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="icon-header">🥣</span>
                <strong>Dietary Changes</strong>
                <p style={{fontSize: '13px'}}>Stick to soft, cool foods like ice cream, yogurt, mashed potatoes, and broth. Avoid spicy or crispy items.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">💤</span>
                <strong>Rest Protocol</strong>
                <p style={{fontSize: '13px'}}>Avoid straining your voice. Use ice packs on the neck for the first 48 hours to reduce swelling.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">⚠️</span>
                <strong>Scab Monitoring</strong>
                <p style={{fontSize: '13px'}}>Scabs will fall off in 5-10 days. If bright red bleeding occurs, contact your ENT specialist immediately.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Tonsillectomy;