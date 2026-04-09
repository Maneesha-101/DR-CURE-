import React from "react";
import { useNavigate } from "react-router-dom";

const EarSurgery = () => {
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
        .ear-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .ear-container {
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
          border-color: var(--brand-orange);
        }

        .list-style {
          padding-left: 20px;
          color: #555;
          line-height: 1.8;
          list-style-type: none;
        }

        .list-style li::before {
          content: "•";
          color: var(--brand-orange);
          font-weight: bold;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }

        .highlight-text {
          color: var(--brand-purple);
          font-weight: 600;
        }

        .icon-circle {
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
      <section className="ear-hero">
        <div className="ear-container">
          <p className="breadcrumb">Home » Home » Ear Surgery</p>
          <h1 className="hero-title">Ear Infection Surgical Treatment by Expert ENT Surgeons</h1>
          <p className="hero-text">
            Chronic ear infections (Otitis) can lead to permanent hearing loss if left untreated. At 
            <strong> Dr Cure Surgeries</strong>, we offer advanced microsurgical treatments to repair 
            eardrums and clear infections with a focus on hearing restoration.
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
        <div className="ear-container">
          
          <div className="info-card">
            <h2 className="section-title">👂 What is an Ear Infection?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Ear infections involve inflammation of the outer (Externa), middle (Media), or inner (Interna) ear. 
              While many resolve with antibiotics, chronic cases lasting over 3 months often require 
              surgical intervention to prevent serious complications like cholesteatoma.
            </p>
          </div>

          <div className="info-card" style={{borderLeft: "6px solid var(--cyan-accent)"}}>
            <h2 className="section-title">🏥 Why Choose Dr Cure Surgeries?</h2>
            <p style={{marginBottom: '20px'}}>We simplify your surgical journey with premium healthcare services across India:</p>
            <div className="grid-layout">
              <div className="item-box">
                <span className="icon-circle">🚕</span>
                <strong>Free Cab Service</strong>
                <p style={{fontSize: '13px'}}>Complimentary pickup and drop for surgery patients.</p>
              </div>
              <div className="item-box">
                <span className="icon-circle">💳</span>
                <strong>No-Cost EMI</strong>
                <p style={{fontSize: '13px'}}>Flexible payment plans and complete insurance support.</p>
              </div>
              <div className="item-box">
                <span className="icon-circle">🍱</span>
                <strong>Care Package</strong>
                <p style={{fontSize: '13px'}}>Complimentary meals and free post-surgical follow-ups.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">🔪 Specialized Ear Procedures</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="highlight-text">Tympanoplasty</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Repair of the eardrum using your own tissue (fascia) to prevent recurrent infections and restore hearing.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Mastoidectomy</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Cleaning of the mastoid bone behind the ear to remove deep-seated infections or cholesteatoma.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Myringoplasty</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>A targeted procedure to patch a small hole in the eardrum when the middle ear is otherwise healthy.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Stapedectomy</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Replacing a damaged middle ear bone (stapes) with a prosthesis to treat otosclerosis.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">📅 Pre-Surgery Prep</h2>
              <ul className="list-style">
                <li>Avoid Aspirin or Vitamin E for 2 weeks prior.</li>
                <li>Quit smoking to ensure better healing and less scarring.</li>
                <li>Do not eat or drink anything 8 hours before surgery.</li>
                <li>Arrange for a companion to drive you home.</li>
              </ul>
            </div>

            <div className="info-card">
              <h2 className="section-title">🧘 Recovery Roadmap</h2>
              <ul className="list-style">
                <li>Elevate your head with 2-3 pillows while sleeping.</li>
                <li>Keep the ear dressing strictly dry during showers.</li>
                <li>Avoid goggles or tight headwear for 3 weeks.</li>
                <li>No strenuous exercise or heavy lifting for 1 month.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{background: '#fff3e6', borderLeft: "6px solid var(--brand-orange)"}}>
            <h2 className="section-title">⚠️ Risks & Complications</h2>
            <p style={{fontSize: '14px', color: '#666'}}>
              Ear surgeries are highly effective, but minor risks include temporary dizziness, 
              changes in taste sensation, or facial nerve sensitivity. Our surgeons use 
              advanced monitoring to minimize these possibilities.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default EarSurgery;