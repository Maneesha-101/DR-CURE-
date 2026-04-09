import React from "react";
import { useNavigate } from "react-router-dom";

const ThroatSurgery = () => {
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
        .throat-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .throat-container {
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

        .remedy-tag {
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
      <section className="throat-hero">
        <div className="throat-container">
          <p className="breadcrumb">Home » Home » Throat Surgery</p>
          <h1 className="hero-title">Advanced Throat Surgery & Infection Treatment</h1>
          <p className="hero-text">
            Chronic throat infections (Pharyngitis) and tonsillitis can severely impact your 
            daily life. At <strong>Dr Cure Surgeries</strong>, we provide specialized surgical 
            care including Tonsillectomy and Adenoidectomy with a focus on minimal pain and 
            permanent relief.
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
        <div className="throat-container">
          
          <div className="info-card">
            <h2 className="section-title">🩺 Understanding Throat Infections</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Throat infections involve inflammation, redness, and swelling that make swallowing difficult. 
              While viral infections often resolve in a week, persistent bacterial infections 
              (like Streptococcus) may require targeted medical or surgical intervention.
            </p>
            
          </div>

          <div className="info-card">
            <h2 className="section-title">🔪 Specialized Surgical Procedures</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="highlight-text">Tonsillectomy</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Removal of tonsils for recurrent tonsillitis. Methods include Radiofrequency, Harmonic Scalpel, and Cold Knife dissection.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Adenoidectomy</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Removal of infected or swollen adenoids. Usually performed as an outpatient procedure with same-day discharge.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">Thyroidectomy</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Removal of the thyroid gland to treat nodules, hyperthyroidism, or severe inflammation.</p>
              </div>
              <div className="item-box">
                <span className="highlight-text">UPPP & Uvulectomy</span>
                <p style={{fontSize: '14px', marginTop: '8px'}}>Surgical correction of the uvula or throat tissues to treat severe sleep apnea and breathing difficulties.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">📈 Recovery & Benefits</h2>
              <ul className="list-style">
                <li><strong>Improved Sleep:</strong> Resolution of issues like sleep apnea.</li>
                <li><strong>Less Medication:</strong> Reduces the long-term need for chronic antibiotic use.</li>
                <li><strong>Dietary Care:</strong> Stick to soft foods like yogurt, mashed potatoes, and chilled puddings.</li>
                <li><strong>Hydration:</strong> Drink plenty of water; avoid caffeine and alcohol to prevent surgical site irritation.</li>
              </ul>
            </div>

            <div className="info-card">
              <h2 className="section-title">🌿 Non-Surgical Remedies</h2>
              <div className="item-box" style={{marginBottom:'10px'}}>
                <span className="remedy-tag">Soothing</span>
                <p style={{fontSize: '13px'}}>Honey with warm lemon water or Chamomile tea provides antioxidant and anti-inflammatory relief.</p>
              </div>
              <div className="item-box">
                <span className="remedy-tag">Natural Care</span>
                <p style={{fontSize: '13px'}}>Saltwater or baking soda gargles help break down secretions and reduce bacterial growth.</p>
              </div>
            </div>
          </div>

          <div className="info-card" style={{borderLeft: "6px solid var(--brand-orange)"}}>
            <h2 className="section-title">💰 Surgery Cost in India</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              The average cost for throat infection surgery at <strong>Dr Cure Surgeries</strong> is 
              approximately <strong>₹65,000</strong>. This estimate covers diagnostics, surgeon fees, 
              and hospital choice. We provide flexible insurance support to make your healthcare 
              journey stress-free.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default ThroatSurgery;