import React from "react";
import { useNavigate } from "react-router-dom";

const Thyroidectomy = () => {
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
        .thyroid-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .thyroid-container {
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
      <section className="thyroid-hero">
        <div className="thyroid-container">
          <p className="breadcrumb">Home » Home » Thyroidectomy</p>
          <h1 className="hero-title">Advanced Thyroidectomy & Surgical Care</h1>
          <p className="hero-text">
            Expert removal of the thyroid gland to treat cancer, goiter, and hyperthyroidism. 
            At <strong>Dr Cure Surgeries</strong>, we combine high-precision endoscopy with 
            compassionate post-operative care for life-changing results.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Book a Free Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>90%</h2><p>Success Rate</p></div>
            <div className="stat"><h2>100+</h2><p>Specialist Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities in India</p></div>
          </div>
        </div>
      </section>

      {/* Content Area */}
      <section className="content-section">
        <div className="thyroid-container">
          
          <div className="info-card">
            <h2 className="section-title">🦋 What is Thyroidectomy?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Thyroidectomy is the surgical removal of all or part of the butterfly-shaped thyroid gland. 
              While many thyroid issues are managed medically, surgery is critical for 
              <strong> thyroid cancer, large goiters, and overactive glands (Hyperthyroidism)</strong> 
              that don't respond to medication.
            </p>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--cyan-accent)'}}>
            <h2 className="section-title">🔍 Diagnostic Protocols</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="icon-header">🩸</span>
                <span className="highlight-text">T3, T4 & TSH Tests</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Comprehensive blood work to measure metabolic hormone levels and gland activity.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">📷</span>
                <span className="highlight-text">Thyroid Ultrasound</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>High-resolution imaging to detect cysts, nodules, or tumors within the gland.</p>
              </div>
              <div className="item-box">
                <span className="icon-header">🔬</span>
                <span className="highlight-text">Tissue Biopsy</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Extracting cells from suspicious nodules to determine if metastatic cancer is present.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">⚙️ Surgical Approaches</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="highlight-text">Endoscopic Thyroidectomy</span>
                <p style={{fontSize: '13px', marginTop: '5px'}}>Minimally invasive with tiny neck incisions, resulting in faster healing and less surgical trauma.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Transoral Approach</span>
                <p style={{fontSize: '13px', marginTop: '5px'}}>Aesthetically superior—incisions are made inside the mouth, leaving the neck completely scar-free.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Hemithyroidectomy</span>
                <p style={{fontSize: '13px', marginTop: '5px'}}>Removal of only one lobe, often preserving natural hormone production without the need for supplements.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">✅ Patient Benefits</h2>
              <ul className="list-style">
                <li><strong>Cancer Resolution:</strong> Effective removal of metastatic tissues.</li>
                <li><strong>Scar-Free Options:</strong> Axilla or transoral routes available.</li>
                <li><strong>Quick Recovery:</strong> Discharge typically within 24-48 hours.</li>
                <li><strong>Symptom Relief:</strong> Immediate relief from trachea compression.</li>
              </ul>
            </div>

            <div className="info-card">
              <h2 className="section-title">🏥 Recovery Support</h2>
              <p style={{fontSize: '14px', marginBottom: '15px'}}>Our "Dr Cure Care" package includes:</p>
              <ul className="list-style" style={{fontSize: '13px'}}>
                <li>Calcium supplements to manage Hypocalcemia risks.</li>
                <li>Hormone replacement guidance for total thyroidectomies.</li>
                <li>Scar management ointments and follow-up care.</li>
                <li>Free cab pickup and meal services during hospital stay.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{background: '#fff3e6', borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">📊 Facts & India Statistics</h2>
            <div className="grid-layout">
              <div className="item-box">
                <p style={{fontSize: '14px'}}><strong>42 Million:</strong> People in India currently suffer from thyroid disorders.</p>
              </div>
              <div className="item-box">
                <p style={{fontSize: '14px'}}><strong>1 in 10:</strong> Adults in India are affected by Hypothyroidism.</p>
              </div>
              <div className="item-box">
                <p style={{fontSize: '14px'}}><strong>Surgical Cost:</strong> Thyroidectomy in India averages around <span className="price-tag">₹82,500</span> depending on the complexity.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Thyroidectomy;