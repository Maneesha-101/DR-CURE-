import React from "react";
import { useNavigate } from "react-router-dom";

const Hysterectomy = () => {
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
        .hystero-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .hystero-container {
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
          line-height: 1.7;
          max-width: 950px;
          margin-bottom: 20px;
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

        /* CONTENT SECTION */
        .hystero-content {
          padding: 60px 20px;
          font-family: 'Poppins', sans-serif;
          background: #fff;
        }

        .info-card {
          background: #f9f9f9;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.02);
          border-left: 6px solid var(--brand-purple);
        }

        .section-title {
          font-size: 32px;
          color: var(--footer-dark);
          margin-bottom: 25px;
          font-weight: 700;
        }

        .sub-title {
          font-size: 22px;
          color: var(--brand-purple);
          margin: 25px 0 15px;
          font-weight: 600;
        }

        .content-list {
          padding-left: 20px;
          margin-bottom: 20px;
        }

        .content-list li {
          margin-bottom: 12px;
          color: #555;
          line-height: 1.6;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .highlight-box {
          background: #fff;
          padding: 25px;
          border-radius: 15px;
          border: 1px solid #eee;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hystero-hero">
        <div className="hystero-container">
          <p className="breadcrumb">Home » Home » Hysterectomy</p>
          <h1 className="hero-title">
            Painless & Safe Hysterectomy Surgery by Specialists | Dr Cure
          </h1>
          <p className="hero-text">
            Dr Cure provides advanced laparoscopic hysterectomy procedures designed 
            for minimal pain, faster recovery, and maximum safety. Our experienced surgeons 
            ensure precision and personalized care for every patient.
          </p>
          <p className="hero-text">
            Whether the procedure is required for medical reasons or personal choice, 
            our expert team supports you at every step with compassionate care.
          </p>

          <button className="hero-btn" onClick={handleConsultClick}>
            Call to Schedule Your Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Diseases</p></div>
            <div className="stat"><h2>100+</h2><p>Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities</p></div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="hystero-content">
        <div className="hystero-container">

          {/* What is Hysterectomy */}
          <div className="info-card">
            <h2 className="section-title">What is a Hysterectomy?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              A Hysterectomy is a surgical procedure that involves the removal of the uterus and, 
              in some cases, other reproductive organs such as the ovaries and fallopian tubes. 
              It is a definitive solution for various gynecological health issues.
            </p>
            <h3 className="sub-title">Common Conditions Treated:</h3>
            <div className="grid-layout">
              <ul className="content-list">
                <li>Uterine Fibroids</li>
                <li>Endometriosis</li>
              </ul>
              <ul className="content-list">
                <li>Abnormal Uterine Bleeding</li>
                <li>Gynecologic Cancers</li>
              </ul>
            </div>
          </div>

          {/* When is it recommended */}
          <div className="info-card">
            <h2 className="section-title">When is Hysterectomy Recommended?</h2>
            <div className="grid-layout">
              <ul className="content-list">
                <li>Uterine fibroids causing severe pain or heavy bleeding</li>
                <li>Uterine or cervical cancer diagnosis</li>
                <li>Chronic pelvic pain and Adenomyosis</li>
                <li>Prolapsed uterus (uterus slipping into the vaginal canal)</li>
              </ul>
              <ul className="content-list">
                <li>Severe Endometriosis not responding to other treatments</li>
                <li>Abnormal or persistent uterine bleeding</li>
                <li>Infection or complications post-childbirth (rare emergency cases)</li>
              </ul>
            </div>
          </div>

          {/* Types We Offer */}
          <div className="info-card">
            <h2 className="section-title">Types of Hysterectomy We Offer</h2>
            <div className="grid-layout">
              <div className="highlight-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Total Hysterectomy</h4>
                <p style={{fontSize: '14px', color: '#555'}}>Complete removal of both the uterus and the cervix.</p>
              </div>
              <div className="highlight-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Partial (Subtotal)</h4>
                <p style={{fontSize: '14px', color: '#555'}}>Removal of only the upper part of the uterus, keeping the cervix intact.</p>
              </div>
              <div className="highlight-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Radical Hysterectomy</h4>
                <p style={{fontSize: '14px', color: '#555'}}>Removal of uterus, cervix, and surrounding tissues (primarily for cancer treatment).</p>
              </div>
              <div className="highlight-box" style={{border: '1px solid var(--cyan-accent)'}}>
                <h4 style={{color: 'var(--cyan-accent)'}}>Laparoscopic & Robotic</h4>
                <p style={{fontSize: '14px', color: '#555'}}>Modern, minimally invasive procedures ensuring much quicker recovery and less scarring.</p>
              </div>
            </div>
          </div>

          {/* Warning Signs & Recovery */}
          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">Warning Signs</h2>
              <ul className="content-list">
                <li>Abnormal or heavy periods</li>
                <li>Chronic pelvic pain or cramping</li>
                <li>Bleeding after menopause</li>
                <li>Pain during intercourse</li>
                <li>Persistent lower abdominal pressure</li>
              </ul>
            </div>

            <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
              <h2 className="section-title">Recovery Roadmap</h2>
              <ul className="content-list">
                <li><strong>Hospital Stay:</strong> 1–2 days (Laparoscopic) vs 3–5 days (Open surgery)</li>
                <li><strong>Activity:</strong> Return to normal routine within 2–4 weeks.</li>
                <li><strong>Periods:</strong> No periods post-surgery (if uterus is fully removed).</li>
                <li><strong>Hormones:</strong> Possible changes if ovaries are removed.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hysterectomy;