import React from "react";
import { useNavigate } from "react-router-dom";

const Mastoidectomy = () => {
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
        .mastoid-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .mastoid-container {
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
      <section className="mastoid-hero">
        <div className="mastoid-container">
          <p className="breadcrumb">Home » Home » Mastoidectomy</p>
          <h1 className="hero-title">Specialized Mastoidectomy Surgery</h1>
          <p className="hero-text">
            Precision treatment for chronic ear infections and cholesteatoma. 
            At <strong>Dr Cure Surgeries</strong>, our ENT specialists use microscopic techniques 
            to remove infected air cells and preserve your hearing health.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Consult an ENT Specialist Today
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>2-3h</h2><p>Procedure Time</p></div>
            <div className="stat"><h2>100+</h2><p>Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Major Cities</p></div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="content-section">
        <div className="mastoid-container">
          
          <div className="info-card">
            <h2 className="section-title">👂 What is a Mastoidectomy?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              The mastoid bone, located behind the ear, features a honeycomb-like structure filled with air cells. 
              A mastoidectomy involves removing these cells when they become infected or when an abnormal skin cyst (cholesteatoma) develops. 
              This procedure is vital to prevent infections from spreading to the brain or facial nerves.
            </p>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--cyan-accent)'}}>
            <h2 className="section-title">🩺 When is Surgery Required?</h2>
            <p style={{marginBottom: '15px'}}>Surgery is recommended to prevent life-threatening complications such as:</p>
            <div className="grid-layout">
              <div className="item-box">
                <span className="icon-header">⚠️</span>
                <span className="highlight-text">Neurological Risks</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Prevents brain abscesses, meningitis, and inflammation of the brain membranes.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">🔇</span>
                <span className="highlight-text">Hearing Preservation</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Stops cholesteatoma from eroding middle ear bones and causing permanent deafness.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">🥴</span>
                <span className="highlight-text">Facial Nerve Protection</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Prevents damage to the facial nerve that can lead to permanent facial paralysis.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">🔬 Surgical Variations</h2>
            <div className="grid-layout">
              <div className="item-box">
                <strong>Simple Mastoidectomy</strong>
                <p style={{fontSize: '13px', marginTop: '5px'}}>The surgeon opens the bone and removes only the infected air cells, leaving the ear canal intact.</p>
              </div>
              <div className="item-box">
                <strong>Canal-Wall-Down (Radical)</strong>
                <p style={{fontSize: '13px', marginTop: '5px'}}>Performed when the ear canal is severely damaged; involves removing the eardrum and rebuilding middle ear structures.</p>
              </div>
              <div className="item-box">
                <strong>Modified Radical</strong>
                <p style={{fontSize: '13px', marginTop: '5px'}}>A hybrid approach that preserves some middle ear bones to maintain as much hearing as possible.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">📊 Mastoidectomy vs Tympanoplasty</h2>
              <ul className="list-style">
                <li><strong>Mastoidectomy:</strong> Focuses on the bone behind the ear to eliminate deep-seated infection.</li>
                <li><strong>Tympanoplasty:</strong> Focuses on repairing a perforated eardrum or middle ear bones.</li>
                <li><strong>Combined:</strong> Often performed together to fully restore ear health and hearing function.</li>
              </ul>
            </div>

            <div className="info-card">
              <h2 className="section-title">🔍 Diagnostic Prep</h2>
              <ul className="list-style" style={{fontSize: '13px'}}>
                <li><strong>High-Res CT Scans:</strong> To map the degeneration of the honeycomb bone structure.</li>
                <li><strong>MRI Imaging:</strong> To check if the infection has reached the skull or brain.</li>
                <li><strong>Audiometry:</strong> To establish a baseline for your hearing levels before the procedure.</li>
                <li><strong>Facial Nerve Monitoring:</strong> Used during surgery to ensure absolute nerve safety.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{background: '#fff3e6', borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">🛡️ Recovery & Benefits</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="icon-header">✨</span>
                <strong>Zero Visible Scars</strong>
                <p style={{fontSize: '13px'}}>Incisions are placed precisely behind the ear crease to minimize visibility.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">🏠</span>
                <strong>Same-Day Discharge</strong>
                <p style={{fontSize: '13px'}}>Most patients return home the same day under local or general anesthesia.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">👂</span>
                <strong>Cochlear Readiness</strong>
                <p style={{fontSize: '13px'}}>Creates the necessary environment for successful cochlear implantation in profound hearing loss cases.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Mastoidectomy;