import React from "react";
import { useNavigate } from "react-router-dom";

const Myringotomy = () => {
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
        .myring-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .myring-container {
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

        .icon-tag {
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
      <section className="myring-hero">
        <div className="myring-container">
          <p className="breadcrumb">Home » Home » Myringotomy</p>
          <h1 className="hero-title">Myringotomy & Ear Tube Surgery – Fluid Drainage Experts</h1>
          <p className="hero-text">
            Relieve middle ear pressure and restore hearing clarity. At <strong>Dr Cure Surgeries</strong>, 
            our ENT specialists perform precision myringotomy to drain trapped fluid and prevent 
            recurrent infections with minimally invasive techniques.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Schedule Your Expert Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Conditions Treated</p></div>
            <div className="stat"><h2>100+</h2><p>Partner Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Major Cities</p></div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="content-section">
        <div className="myring-container">
          
          <div className="info-card">
            <h2 className="section-title">👂 What is Myringotomy?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Myringotomy (Ear Tube Surgery) involves a tiny incision in the eardrum to relieve pressure 
              from fluid or pus buildup. Often, a <strong>tympanostomy tube (grommet)</strong> is 
              inserted to maintain aeration and prevent fluid re-accumulation. This is crucial for 
              treating chronic Otitis Media and Eustachian tube dysfunction.
            </p>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--cyan-accent)'}}>
            <h2 className="section-title">🔍 Specialized Diagnosis</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="highlight-text">Pneumatic Otoscopy</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>A specialized tool that uses air pressure to check eardrum movement and trapped fluid.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Audiometry & Tympanogram</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Hearing tests that determine the impact of fluid on sound conduction and ear pressure.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">🧪 Types of Procedure</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="highlight-text">Traditional Myringotomy</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Standard micro-incision to drain fluid; the eardrum usually heals spontaneously in 2-3 weeks.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Laser-Assisted Myringotomy</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Uses laser precision to create the incision, minimizing bleeding—ideal for patients with bleeding disorders.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">✅ Benefits</h2>
              <ul className="list-style">
                <li>Restores hearing clarity immediately.</li>
                <li>Prevents delayed speech in children.</li>
                <li>Equalizes pressure and restores balance.</li>
                <li>Manages complications like sinus or eye infections.</li>
              </ul>
            </div>

            <div className="info-card">
              <h2 className="section-title">🏥 Patient Care</h2>
              <div className="item-box" style={{marginBottom: '10px'}}>
                <span className="icon-tag">🚕</span>
                <strong>Complimentary Logistics</strong>
                <p style={{fontSize: '13px'}}>Free cab pickup/drop and meal support during your stay.</p>
              </div>
              <div className="item-box">
                <span className="icon-tag">💳</span>
                <strong>No-Cost EMI</strong>
                <p style={{fontSize: '13px'}}>Complete insurance assistance and affordable payment plans.</p>
              </div>
            </div>
          </div>

          <div className="info-card" style={{background: '#fff3e6', borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">🧘 Recovery & Post-Op</h2>
            <ul className="list-style">
              <li><strong>Dry Ear Protocol:</strong> Keep the bandage dry; use earplugs during bathing/showering.</li>
              <li><strong>Antibiotic Drops:</strong> Use prescribed ear drops as directed to eliminate infection risks.</li>
              <li><strong>Natural Extrusion:</strong> If a tube was placed, it will naturally fall out in 6-12 months as the ear heals.</li>
              <li><strong>Activity:</strong> Avoid submerging your head underwater until approved by your surgeon.</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
};

export default Myringotomy;