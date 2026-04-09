import React from "react";
import { useNavigate } from "react-router-dom";

const CarpalTunnelSyndrome = () => {
  const navigate = useNavigate();

  const handleConsultClick = () => {
    navigate("/consultation");
  };

  return (
    <div className="carpal-wrapper">
      <style>{`
        :root {
          --brand-purple: #7D008D;
          --brand-orange: #FF7A00;
          --brand-white: #FFFFFF;
          --footer-dark: #002B45;
          --cyan-accent: #1EC1D1;
        }

        .carpal-wrapper {
          font-family: 'Poppins', sans-serif;
          color: #444;
          line-height: 1.6;
        }

        /* HERO SECTION */
        .carpal-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
        }

        .carpal-container {
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
          max-width: 950px;
          margin-bottom: 30px;
        }

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
          box-shadow: 0 4px 15px rgba(255, 122, 0, 0.2);
        }

        .hero-btn:hover {
          background: #e66a00;
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
        .stat h2 { font-size: 36px; color: var(--brand-purple); margin: 0; }
        .stat p { color: #777; margin: 5px 0 0; }

        /* CONTENT SECTIONS */
        .content-section {
          padding: 60px 20px;
        }

        .info-card {
          margin-bottom: 40px;
        }

        .info-card h2 {
          color: var(--brand-purple);
          font-size: 28px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .icon-small {
          width: 32px;
          height: 32px;
          fill: var(--brand-orange);
        }

        /* GRID LAYOUTS */
        .grid-3 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .feature-item {
          background: #fdfdfd;
          border: 1px solid #f0f0f0;
          padding: 25px;
          border-radius: 15px;
          transition: 0.3s;
        }

        .feature-item:hover {
          border-color: var(--cyan-accent);
          transform: translateY(-5px);
        }

        .cost-box {
          background: var(--footer-dark);
          color: white;
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          margin: 40px 0;
        }

        .cost-amount {
          font-size: 36px;
          color: var(--brand-orange);
          font-weight: 800;
          display: block;
          margin: 10px 0;
        }

        /* CHECKLIST */
        .prep-list {
          list-style: none;
          padding: 0;
        }

        .prep-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 15px;
        }

        .check-icon {
          width: 20px;
          height: 20px;
          fill: var(--cyan-accent);
          flex-shrink: 0;
          margin-top: 4px;
        }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
        }
      `}</style>

      {/* HERO */}
      <section className="carpal-hero">
        <div className="carpal-container">
          <p className="breadcrumb">Home » Procedures » Carpal Tunnel Syndrome</p>
          <h1 className="hero-title">Carpal Tunnel Syndrome – Treatment & Recovery</h1>
          <p className="hero-text">
            Eliminate numbness and tingling. At <strong>Dr Cure Surgeries</strong>, we perform advanced endoscopic 
            carpal tunnel release surgery to restore hand function and prevent permanent nerve damage.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Schedule Your Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Diseases</p></div>
            <div className="stat"><h2>100+</h2><p>Partner Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities</p></div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="content-section carpal-container">
        
        {/* Section 1: Overview */}
        <div className="info-card">
          <h2>
            <svg className="icon-small" viewBox="0 0 24 24"><path d="M13,3A9,9 0 0,0 4,12H1L4.5,15.5L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.52,19.12C8.03,20.3 9.93,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 13,3Z"/></svg>
            What is the Treatment?
          </h2>
          <p>
            Carpal tunnel release surgery is the most successful solution for this condition. It effectively eliminates symptoms 
            by releasing pressure on the <strong>median nerve</strong>. For mild cases, splints and rest help, but persistent 
            pressure requires surgical intervention to avoid permanent nerve wasting.
          </p>
        </div>

        {/* Section 2: Diagnosis */}
        <div className="info-card">
          <h2>
            <svg className="icon-small" viewBox="0 0 24 24"><path d="M19,3H5C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3M19,19H5V5H19V19M7,12H9V17H7V12M11,7H13V17H11V7M15,10H17V17H15V10Z"/></svg>
            Diagnosis Before Surgery
          </h2>
          <div className="grid-3">
            <div className="feature-item">
              <strong>Nerve Conduction Test</strong>
              <p>Measures electrical signals in your nerves to detect damage extent.</p>
            </div>
            <div className="feature-item">
              <strong>Electromyogram (EMG)</strong>
              <p>Evaluates the electrical activity produced by skeletal muscles.</p>
            </div>
            <div className="feature-item">
              <strong>Imaging (X-Ray/MRI)</strong>
              <p>Rules out fractures, arthritis, or abnormal soft tissue growth.</p>
            </div>
          </div>
        </div>

        {/* Section 3: Cost */}
        <div className="cost-box">
          <h3>Estimated Treatment Cost in India</h3>
          <span className="cost-amount">Rs. 40,500 – Rs. 60,000</span>
          <p>Includes diagnostics, surgery, and basic post-treatment care. Final cost depends on city and severity.</p>
          <button className="hero-btn" style={{marginTop:'15px'}} onClick={handleConsultClick}>Get Exact Quote</button>
        </div>

        {/* Section 4: Preparation */}
        <div className="grid-3" style={{alignItems:'start'}}>
          <div className="info-card">
            <h2>Preparation Tips</h2>
            <ul className="prep-list">
              <li>
                <svg className="check-icon" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>
                Complete preoperative tests (Blood/ECG) in time.
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>
                Discuss all current supplements and vitamins with your surgeon.
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>
                Quit smoking 2 weeks prior to ensure better healing.
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 24 24"><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>
                Fasting (6-12 hours) is required before the procedure.
              </li>
            </ul>
          </div>

          <div className="info-card feature-item" style={{backgroundColor:'#FFF5F5', borderColor:'#FED7D7'}}>
            <h2 style={{color:'#C53030'}}>Untreated Risks</h2>
            <p>
              Delaying treatment can worsen severity, leading to:
              <br/>• Permanent loss of hand motion
              <br/>• Severe chronic pain
              <br/>• Muscle atrophy at the base of the thumb
            </p>
          </div>
        </div>

      </section>
    </div>
  );
};

export default CarpalTunnelSyndrome;