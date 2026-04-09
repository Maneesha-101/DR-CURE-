

import React from "react";
import { useNavigate } from "react-router-dom";

const Aesthetic = () => {
  const navigate = useNavigate();

  const handleConsultClick = () => {
    navigate("/consultation");
  };

  return (
    <>
      <style>{`
        :root {
          --primary: #7B008A;    /* Brand Purple */
          --secondary: #FF7A00;  /* Brand Orange */
          --accent: #F3E0D4;     /* Light Beige/Peach */
          --footer-dark: #002B45;
          --text-dark: #333;
          --text-light: #555;
          --white: #ffffff;
          --card-bg: #ffffff;
        }

        /* HERO SECTION */
        .aesthetic-hero {
          background: var(--accent);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .aesthetic-container {
          max-width: 1200px;
          margin: auto;
        }

        .breadcrumb {
          font-size: 14px;
          color: var(--primary);
          margin-bottom: 15px;
          font-weight: 500;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: var(--primary);
          line-height: 1.2;
          max-width: 900px;
          margin-bottom: 20px;
        }

        .hero-text {
          font-size: 16px;
          color: var(--text-dark);
          max-width: 850px;
          line-height: 1.6;
          margin-bottom: 25px;
        }

        /* CTA BUTTON */
        .cta-btn {
          padding: 14px 24px;
          background: var(--secondary);
          color: var(--white);
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .cta-btn:hover {
          background: #e86a00;
          transform: translateY(-2px);
        }

        /* STATS CARD */
        .stats-container {
          margin-top: 50px;
          background: var(--card-bg);
          border-radius: 14px;
          padding: 35px 20px;
          display: flex;
          justify-content: space-around;
          text-align: center;
          flex-wrap: wrap;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }

        .stat-box {
          flex: 1;
          min-width: 120px;
        }

        .stat-number {
          font-size: 34px;
          font-weight: bold;
          color: var(--primary);
        }

        .stat-text {
          font-size: 14px;
          color: var(--text-light);
          margin-top: 5px;
        }

        /* CONTENT SECTIONS */
        .content-section {
          padding: 60px 20px;
          font-family: 'Poppins', sans-serif;
          background: #fff;
        }

        .info-card {
          background: #fff;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border-left: 6px solid var(--primary);
        }

        .section-title {
          font-size: 32px;
          color: var(--primary);
          margin-bottom: 25px;
          font-weight: 700;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .procedure-box {
          background: #fdfdfd;
          padding: 25px;
          border-radius: 15px;
          border: 1px solid #eee;
          transition: 0.3s;
        }

        .procedure-box:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
          background: #fff;
        }

        .procedure-box h4 {
          color: var(--primary);
          margin-bottom: 10px;
          font-size: 18px;
        }

        .content-list {
          padding-left: 20px;
          margin-bottom: 20px;
          list-style-type: none;
        }

        .content-list li {
          margin-bottom: 12px;
          color: var(--text-light);
          line-height: 1.6;
          position: relative;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 30px;
          }

          .hero-text {
            font-size: 14px;
          }

          .stats-container {
            flex-direction: column;
            gap: 20px;
          }

          .info-card {
            padding: 25px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="aesthetic-hero">
        <div className="aesthetic-container">
          <p className="breadcrumb">Home » Specialized Care » Aesthetic</p>
          <h1 className="hero-title">
            Expert Plastic & Cosmetic Surgery for Natural Beauty
          </h1>
          <p className="hero-text">
            Plastic surgery focuses on restoring, reconstructing, and enhancing the human body. 
            At <strong>Dr Cure Surgeries</strong>, our elite surgeons leverage advanced techniques 
            to help you achieve your aesthetic goals with precision and safety.
          </p>
          <button className="cta-btn" onClick={handleConsultClick}>
            Call to Schedule Your Consultation
          </button>

          <div className="stats-container">
            <div className="stat-box">
              <div className="stat-number">70k+</div>
              <div className="stat-text">Happy Patients</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">50+</div>
              <div className="stat-text">Diseases</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100+</div>
              <div className="stat-text">Hospitals</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">10+</div>
              <div className="stat-text">Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="content-section">
        <div className="aesthetic-container">

          <div className="info-card">
            <h2 className="section-title">What is Plastic Surgery?</h2>
            <p className="hero-text">
              Plastic surgery is a broad specialty divided into two main categories: 
              <strong> Reconstructive Surgery</strong> (restoring function from burns or trauma) 
              and <strong>Cosmetic Surgery</strong> (improving existing features for aesthetic appeal). 
              Our surgeons at <strong>Dr Cure Surgeries</strong> specialize in both, ensuring 
              functional health meets visual perfection.
            </p>
          </div>

          <div className="info-card">
            <h2 className="section-title">Our Specialized Procedures</h2>
            <div className="grid-layout">
              <div className="procedure-box">
                <h4>Liposuction</h4>
                <p style={{fontSize: '14px', color: '#555'}}>Removal of stubborn fat from the belly, thighs, face, neck, and arms using modern techniques.</p>
              </div>
              <div className="procedure-box">
                <h4>Rhinoplasty</h4>
                <p style={{fontSize: '14px', color: '#555'}}>Correcting the shape of the nose through open or closed surgery for improved facial balance.</p>
              </div>
              <div className="procedure-box">
                <h4>Gynecomastia</h4>
                <p style={{fontSize: '14px', color: '#555'}}>Male breast reduction surgery to remove unwanted tissue and restore a masculine chest contour.</p>
              </div>
              <div className="procedure-box">
                <h4>Tummy Tuck</h4>
                <p style={{fontSize: '14px', color: '#555'}}>Abdominoplasty to tighten loose muscles and remove excess skin for a smoother profile.</p>
              </div>
              <div className="procedure-box">
                <h4>Facial Contouring</h4>
                <p style={{fontSize: '14px', color: '#555'}}>Includes Double Chin Removal, Buccal Fat Removal, and Blepharoplasty (eyelid repair).</p>
              </div>
              <div className="procedure-box">
                <h4>Skin & Repair</h4>
                <p style={{fontSize: '14px', color: '#555'}}>Expert treatment for Lipomas, Sebaceous Cysts, and minimally invasive Earlobe Repair.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">What to Expect: The Journey</h2>
            <p style={{marginBottom: '15px', fontWeight: '500'}}>Surgery is a collaborative process between you and your surgeon:</p>
            <ul className="content-list">
              <li><strong>• Pre-Surgery:</strong> Detailed consultation to set realistic goals. You'll be asked to stop smoking and provide a full medical history.</li>
              <li><strong>• During Surgery:</strong> Performed in a sterile OT under specialized anesthesia. Most procedures allow for same-day discharge.</li>
              <li><strong>• Post-Surgery:</strong> Recovery involves vital checks and personalized care instructions to manage mild swelling or bruising.</li>
            </ul>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">Recovery Do's</h2>
              <ul className="content-list">
                <li>✅ <strong>Keep Moving:</strong> Light movement helps circulation once initial swelling subsides.</li>
                <li>✅ <strong>Hydrate:</strong> Drink plenty of water to aid the body's natural healing process.</li>
                <li>✅ <strong>Follow Meds:</strong> Take prescribed pain management precisely as directed by your doctor.</li>
              </ul>
            </div>
            <div className="info-card">
              <h2 className="section-title">Recovery Don'ts</h2>
              <ul className="content-list">
                <li>❌ <strong>Don't Tough it Out:</strong> Report any unusual symptoms or extreme discomfort immediately.</li>
                <li>❌ <strong>Don't Rush Activity:</strong> Avoid heavy lifting or intense gym sessions until medically cleared.</li>
                <li>❌ <strong>Don't Skip Follow-ups:</strong> Post-op visits are crucial to monitoring your final results.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--secondary)'}}>
            <h2 className="section-title">Why Choose Dr Cure Surgeries?</h2>
            <p className="hero-text">
              We prioritize patient safety and natural-looking results. Our surgeons are 
              board-certified experts who provide a compassionate environment for your 
              transformation. With <strong>Dr Cure Surgeries</strong>, you get advanced 
              healthcare infrastructure and end-to-end assistance across all major cities.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Aesthetic;