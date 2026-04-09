import React from "react";
import { useNavigate } from "react-router-dom";

const LaserCircumcision = () => {
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
        .laser-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .laser-container {
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
        .content-section {
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
      <section className="laser-hero">
        <div className="laser-container">
          <p className="breadcrumb">Home » Home » Laser Circumcision</p>
          <h1 className="hero-title">
            Safe and Advanced Laser Circumcision Clinic for Kids Near Me
          </h1>
          <p className="hero-text">
            Laser circumcision is an effective treatment for foreskin conditions such as 
            phimosis, paraphimosis, and balanitis. At Dr Cure Surgeries, we provide 
            advanced laser procedures that ensure minimal pain, faster healing, and safe outcomes.
          </p>
          <p className="hero-text">
            Our experienced surgeons focus on providing gentle care, especially for kids, 
            ensuring comfort, quick recovery, and a stress-free experience.
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

      {/* Main Content */}
      <section className="content-section">
        <div className="laser-container">
          
          {/* What is Laser Circumcision */}
          <div className="info-card">
            <h2 className="section-title">What Are Laser Circumcision?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              Laser circumcision is one of the most advanced circumcision procedures. During the procedure, the surgeon cuts off the foreskin using a high-energy laser beam. Since a laser is used to create the incision, there is little to no bleeding, and the wound edges are clean. It also completely preserves the surrounding tissues and is best for tissue conservation.
            </p>
            <p className="hero-text" style={{fontSize: '16px'}}>
              The surgery only takes 10-15 minutes and has a much shorter recovery time compared to other circumcision procedures. Laser circumcision is also preferred over other procedures as there is very little postoperative pain or discomfort associated with it.
            </p>
          </div>

          {/* Diagnosis & Surgery Procedure */}
          <div className="info-card">
            <h2 className="section-title">What Happens During Laser Circumcision Surgery?</h2>
            <h3 className="sub-title">Diagnosis – Laser Circumcision</h3>
            <p className="hero-text" style={{fontSize: '16px'}}>
              You can get a circumcision for religious or cosmetic reasons or if you are unhappy with the size, shape, or appearance of the foreskin. If you have any pain, inflammation, or infection, you might qualify for medical circumcision. Our urologist will examine the area to determine if surgical treatment is necessary.
            </p>
            
            <h4 style={{color: 'var(--footer-dark)', marginBottom: '10px'}}>Common Diagnostic Tests:</h4>
            <ul className="content-list">
              <li><strong>Urinalysis:</strong> For UTI detection by checking urine concentration and content.</li>
              <li><strong>Tissue Culture/Swab Tests:</strong> To examine the foreskin for bacterial or fungal infections.</li>
              <li><strong>Random Blood Sugar:</strong> To check glucose levels, particularly for diabetic patients.</li>
            </ul>

            <h3 className="sub-title">Surgery Procedure</h3>
            <div className="highlight-box">
              <p style={{color: '#555'}}>
                The surgeon utilizes a high-energy laser beam to remove the foreskin. This precision ensures clean wound edges and almost zero bleeding. This method is the benchmark for tissue conservation and leads to a significantly shorter recovery time. Most patients prefer this because it minimizes postoperative discomfort.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default LaserCircumcision;