import React from "react";
import { useNavigate } from "react-router-dom";

const Fertility = () => {
  const navigate = useNavigate();

  const handleConsultClick = () => {
    navigate("/consultation");
  };

  return (
    <>
      <style>{`
        :root {
          --primary: #7B008A;     /* Purple */
          --secondary: #FF7A00;   /* Orange */
          --accent: #F3E0D4;      /* Light Beige */
          --card-bg: #ffffff;     /* White */
          --text-dark: #333;
          --text-light: #555;
          --white: #ffffff;
          --cyan-soft: #E6FAFC;
        }

        .fertility-section {
          background: var(--accent);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        /* Breadcrumb */
        .breadcrumb {
          font-size: 14px;
          color: var(--primary);
          margin-bottom: 15px;
          font-weight: 500;
        }

        /* Title */
        .title {
          font-size: 48px;
          font-weight: 700;
          color: var(--primary);
          line-height: 1.2;
          max-width: 800px;
        }

        .desc {
          margin-top: 15px;
          font-size: 16px;
          color: var(--text-dark);
          max-width: 750px;
          line-height: 1.6;
        }

        .cta-btn {
          margin-top: 25px;
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

        .cta-btn:hover { background: #e86a00; transform: translateY(-2px); }

        /* Stats Card */
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

        .stat-box { flex: 1; min-width: 120px; }
        .stat-number { font-size: 34px; font-weight: bold; color: var(--primary); }
        .stat-text { font-size: 14px; color: var(--text-light); margin-top: 5px; }

        /* Content Sections */
        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          margin-top: 60px;
        }

        .content-card {
          background: var(--white);
          padding: 35px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border-top: 5px solid var(--primary);
        }

        .section-h3 {
          font-size: 24px;
          color: var(--primary);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .list-item {
          display: flex;
          gap: 12px;
          margin-bottom: 15px;
          font-size: 15px;
          color: var(--text-light);
          line-height: 1.5;
        }

        .icon-small { font-size: 20px; }

        .hormone-badge {
          background: var(--cyan-soft);
          color: var(--primary);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 10px;
        }

        .cycle-step {
            border-left: 2px dashed var(--secondary);
            padding-left: 20px;
            margin-left: 10px;
            position: relative;
            padding-bottom: 15px;
        }

        .cycle-step::before {
            content: '';
            position: absolute;
            left: -6px;
            top: 0;
            width: 10px;
            height: 10px;
            background: var(--secondary);
            border-radius: 50%;
        }

        @media (max-width: 768px) {
          .title { font-size: 30px; }
          .stats-container { flex-direction: column; gap: 20px; }
          .info-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="fertility-section">
        <div className="container">
          {/* Hero Content */}
          <div className="breadcrumb">Home » Home » Fertility</div>
          <h1 className="title">Best Fertility Hospital Near Me</h1>
          <p className="desc">
            Fertility solutions you can trust – IVF, IUI, egg freezing, and hormonal support at <strong>DRCURE SURGERIES</strong>. 
            Begin your journey toward parenthood with expert medical care and emotional support.
          </p>
          <button className="cta-btn" onClick={handleConsultClick}>
            📞 Call Us : +91 9493994244
          </button>

          {/* Corrected Core Stats */}
          <div className="stats-container">
            <div className="stat-box">
              <h2 className="stat-number">70k+</h2>
              <p className="stat-text">Happy Patients</p>
            </div>
            <div className="stat-box">
              <h2 className="stat-number">50+</h2>
              <p className="stat-text">Diseases Treated</p>
            </div>
            <div className="stat-box">
              <h2 className="stat-number">100+</h2>
              <p className="stat-text">Hospitals</p>
            </div>
            <div className="stat-box">
              <h2 className="stat-number">10+</h2>
              <p className="stat-text">Cities</p>
            </div>
          </div>

          <div className="info-grid">
            {/* Hormonal Science Section */}
            <div className="content-card">
              <h3 className="section-h3">🔬 Understanding Reproduction</h3>
              <p className="desc" style={{fontSize: '14px', marginBottom: '20px'}}>
                Reproduction is a complex biological process controlled by <strong>Gonadotropins</strong> (FSH and LH).
              </p>
              
              <div className="list-item">
                <span className="icon-small">👨‍⚕️</span>
                <div>
                  <strong>Male Fertility:</strong> Hormones stimulate sperm production (~300 million/day). Quality depends on motility and count.
                </div>
              </div>
              <div className="list-item">
                <span className="icon-small">👩‍⚕️</span>
                <div>
                  <strong>Female Fertility:</strong> Gonadotropins trigger follicle growth. Oestrogen and Progesterone prepare the uterus for implantation.
                </div>
              </div>
            </div>

            {/* Menstrual Cycle Section */}
            <div className="content-card">
              <h3 className="section-h3">📅 The Menstrual Cycle Phases</h3>
              <div className="cycle-step">
                <strong>Menstruation:</strong> Shedding of the uterine lining.
              </div>
              <div className="cycle-step">
                <strong>Follicular Phase:</strong> Eggs mature within fluid-filled sacs (follicles).
              </div>
              <div className="cycle-step">
                <strong>Ovulation:</strong> Egg release (Day 14 in average cycle). Fertilization window is 12-24 hours.
              </div>
              <div className="cycle-step">
                <strong>Luteal Phase:</strong> Lining prepares for embryo implantation.
              </div>
            </div>

            {/* Symptoms Section */}
            <div className="content-card" style={{borderTopColor: 'var(--secondary)'}}>
              <h3 className="section-h3">⚠️ Signs of Infertility</h3>
              <div className="list-item"><span className="icon-small">🚺</span> Irregular cycles or PCOS symptoms.</div>
              <div className="list-item"><span className="icon-small">🚹</span> Difficulty with ejaculation or low sex drive.</div>
              <div className="list-item"><span className="icon-small">⏳</span> No pregnancy after 12 months (or 6 months if over 35).</div>
            </div>

            {/* When to See Specialist */}
            <div className="content-card" style={{borderTopColor: 'var(--secondary)'}}>
              <h3 className="section-h3">🩺 When to see a Specialist?</h3>
              <ul style={{listStyle: 'none', padding: 0}}>
                <li className="list-item">✅ You've had two or more miscarriages.</li>
                <li className="list-item">✅ Known issues like Endometriosis or Thyroid disorders.</li>
                <li className="list-item">✅ Previous cancer treatments or surgeries.</li>
                <li className="list-item">✅ Interest in Egg/Sperm freezing for the future.</li>
              </ul>
            </div>

            {/* Causes Section */}
            <div className="content-card">
              <h3 className="section-h3">🔍 Common Causes</h3>
              <div className="list-item">🔹 <strong>Medical:</strong> Blocked tubes, Varicocele, or Fibroids.</div>
              <div className="list-item">🔹 <strong>Lifestyle:</strong> Smoking, alcohol, stress, and obesity.</div>
              <div className="list-item">🔹 <strong>Age:</strong> Fertility naturally declines as reproductive age increases.</div>
            </div>

            {/* Final Action Card */}
            <div className="content-card" style={{background: 'var(--primary)', color: 'white'}}>
              <h3 className="section-h3" style={{color: 'white'}}>🌟 Start Your Journey Today</h3>
              <p style={{fontSize: '14px', lineHeight: '1.8', marginBottom: '20px'}}>
                Planning ahead and taking care of your preconception health can significantly improve your chances of a successful pregnancy.
              </p>
              <button 
                className="cta-btn" 
                onClick={handleConsultClick}
                style={{background: 'white', color: 'var(--primary)', width: '100%', border: 'none'}}
              >
                Book Your Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fertility;