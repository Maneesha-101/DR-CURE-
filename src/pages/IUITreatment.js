import React from "react";
import { useNavigate } from "react-router-dom";

const IUITreatment = () => {
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
          --bg-light: #F8F9FA;
        }

        /* HERO */
        .iui-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .iui-container {
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
          margin-bottom: 20px;
        }

        /* CTA */
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
          background: white;
        }

        .info-card {
          background: var(--bg-light);
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
          border-left: 6px solid var(--brand-purple);
        }

        .section-title {
          font-size: 28px;
          color: var(--footer-dark);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .item-box {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.03);
        }

        .icon-lg { font-size: 30px; margin-bottom: 15px; display: block; }
        
        .age-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
          background: white;
          border-radius: 10px;
          overflow: hidden;
        }

        .age-table th, .age-table td {
          padding: 15px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }

        .age-table th { background: var(--brand-purple); color: white; }

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
        }
      `}</style>

      <section className="iui-hero">
        <div className="iui-container">
          <p className="breadcrumb">Home » Home » IUI treatment</p>
          <h1 className="hero-title">IUI Treatment – Procedure, Benefits & Cost</h1>
          <p className="hero-text">
            Intrauterine Insemination (IUI) is a specialized fertility treatment that places 
            concentrated, high-quality sperm directly into the uterus, significantly increasing 
            the chances of natural fertilization.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Book Your Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Diseases Treated</p></div>
            <div className="stat"><h2>100+</h2><p>Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities</p></div>
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="iui-container">
          
          {/* What is IUI */}
          <div className="info-card">
            <h2 className="section-title">❓ What is IUI?</h2>
            <p>
              During natural conception, only 5% of sperm reach the uterus. IUI bypasses the 
              vaginal and cervical hurdles by placing washed and concentrated sperm directly 
              into the uterus via a thin catheter. This puts the sperm closer to the fallopian 
              tubes exactly when ovulation occurs.
            </p>
            
          </div>

          {/* Why IUI */}
          <div className="info-card" style={{borderColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">🎯 Why is IUI Performed?</h2>
            <div className="grid-layout">
              <div className="item-box">
                <span className="icon-lg">🔬</span>
                <strong>Sperm Impairments</strong>
                <p>Effective for low sperm count, slow motility, or oddly shaped sperm.</p>
              </div>
              <div className="item-box">
                <span className="icon-lg">🛑</span>
                <strong>Cervical Issues</strong>
                <p>Bypasses thick cervical mucus that acts as a barrier to sperm.</p>
              </div>
              <div className="item-box">
                <span className="icon-lg">🛡️</span>
                <strong>Semen Allergy</strong>
                <p>Removes proteins that cause allergic reactions in the vaginal lining.</p>
              </div>
              <div className="item-box">
                <span className="icon-lg">❓</span>
                <strong>Unexplained Infertility</strong>
                <p>A primary choice when healthcare providers cannot identify a specific cause.</p>
              </div>
            </div>
          </div>

          {/* IUI vs IVF */}
          <div className="info-card" style={{borderColor: 'var(--cyan-accent)'}}>
            <h2 className="section-title">⚖️ IUI vs. IVF</h2>
            <p>
              The main difference is <strong>location of fertilization</strong>. In IUI, 
              fertilization happens <em>inside</em> your body (fallopian tube). In IVF, it happens 
              in a lab. IUI is significantly less expensive and less invasive than IVF, 
              though it typically has a lower success rate per cycle.
            </p>
          </div>

          {/* Success Rates */}
          <div className="info-card">
            <h2 className="section-title">📈 Success Rates by Age</h2>
            <p>Age is the most critical factor in IUI success. Statistics show the following pregnancy rates per cycle:</p>
            <table className="age-table">
              <thead>
                <tr>
                  <th>Age Group</th>
                  <th>Success Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>20 to 30</td><td>17.6%</td></tr>
                <tr><td>31 to 35</td><td>13.3%</td></tr>
                <tr><td>36 to 38</td><td>13.4%</td></tr>
                <tr><td>39 to 40</td><td>10.6%</td></tr>
                <tr><td>Over 40</td><td>5.4%</td></tr>
              </tbody>
            </table>
          </div>

          {/* Preparation & Procedure */}
          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">📝 Preparation</h2>
              <ul style={{lineHeight: '2'}}>
                <li>✔️ Semen analysis & fertility testing</li>
                <li>✔️ Uterine ultrasound exams</li>
                <li>✔️ STI screening</li>
                <li>✔️ Folic acid supplements (3 months prior)</li>
              </ul>
            </div>
            <div className="info-card">
              <h2 className="section-title">⚡ Risks to Know</h2>
              <ul style={{lineHeight: '2'}}>
                <li>⚠️ Multiple births (Twins/Triplets)</li>
                <li>⚠️ Minor spotting or cramping</li>
                <li>⚠️ Ovarian Hyperstimulation (Rare)</li>
                <li>⚠️ Minor risk of infection</li>
              </ul>
            </div>
          </div>

          {/* Timeline & Costs */}
          <div className="info-card" style={{background: 'var(--footer-dark)', color: 'white'}}>
            <h2 className="section-title" style={{color: 'white'}}>💰 Timeline & Cost</h2>
            <p>
              The process takes approximately <strong>28 days</strong> (one menstrual cycle). 
              Insemination itself takes only a few minutes, with a 15-minute rest afterward. 
              Costs range from <strong>$300 to $4,000 per cycle</strong> depending on 
              medications and diagnostics.
            </p>
            <button className="hero-btn" style={{marginTop: '20px'}} onClick={handleConsultClick}>
              Start Your Journey Today
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default IUITreatment;