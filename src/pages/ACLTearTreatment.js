import React from "react";
import { useNavigate } from "react-router-dom";

const ACLTearTreatment = () => {
  const navigate = useNavigate();

  const handleConsultClick = () => {
    navigate("/consultation");
  };

  return (
    <div className="acl-page-wrapper">
      <style>{`
        :root {
          --brand-purple: #7D008D;
          --brand-orange: #FF7A00;
          --brand-white: #FFFFFF;
          --footer-dark: #002B45;
          --cyan-accent: #1EC1D1;
          --text-gray: #444;
          --bg-light: #f9f9f9;
        }

        .acl-page-wrapper {
          font-family: 'Poppins', sans-serif;
          color: var(--text-gray);
          line-height: 1.6;
        }

        /* HERO SECTION */
        .acl-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
        }

        .acl-container {
          max-width: 1100px;
          margin: auto;
        }

        .breadcrumb {
          color: #666;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .hero-title {
          font-size: 42px;
          font-weight: 700;
          color: var(--footer-dark);
          margin-bottom: 20px;
        }

        .hero-text {
          font-size: 18px;
          max-width: 900px;
          margin-bottom: 30px;
        }

        .hero-btn {
          background: var(--brand-orange);
          color: var(--brand-white);
          padding: 16px 32px;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 122, 0, 0.3);
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
          margin-top: 50px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          flex-wrap: wrap;
        }

        .stat { text-align: center; padding: 10px; }
        .stat h2 { font-size: 32px; color: var(--brand-purple); margin: 0; }
        .stat p { color: #777; margin: 5px 0 0; font-size: 14px; }

        /* CONTENT SECTIONS */
        .content-section {
          padding: 60px 20px;
          background: #fff;
        }

        .info-card {
          margin-bottom: 40px;
        }

        .info-card h2 {
          color: var(--brand-purple);
          font-size: 28px;
          margin-bottom: 15px;
          border-bottom: 2px solid #f0f0f0;
          padding-bottom: 10px;
        }

        .info-card h3 {
          color: var(--footer-dark);
          margin-top: 20px;
          font-size: 20px;
        }

        /* GRID FOR BULLETS */
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .feature-item {
          background: var(--bg-light);
          padding: 20px;
          border-radius: 12px;
          border-left: 4px solid var(--brand-orange);
        }

        /* TIMELINE */
        .timeline {
          border-left: 2px solid var(--brand-purple);
          margin-left: 10px;
          padding-left: 25px;
        }

        .timeline-step {
          position: relative;
          margin-bottom: 25px;
        }

        .timeline-step::before {
          content: "";
          position: absolute;
          left: -31px;
          top: 5px;
          width: 10px;
          height: 10px;
          background: var(--brand-orange);
          border-radius: 50%;
        }

        @media(max-width: 768px) {
          .hero-title { font-size: 32px; }
          .stats-box { flex-direction: column; gap: 15px; }
        }
      `}</style>

      {/* HERO */}
      <section className="acl-hero">
        <div className="acl-container">
          <p className="breadcrumb">Home » Procedures » ACL Tear Treatment</p>
          <h1 className="hero-title">ACL Reconstruction Surgery & Recovery</h1>
          <p className="hero-text">
            Don't let a knee injury stop your active lifestyle. At <strong>Dr Cure Surgeries</strong>, we specialize in 
            minimally invasive arthroscopic ACL repairs designed to get you back on the field with 
            maximum stability and minimal downtime.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Book a Free Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Patients Treated</p></div>
            <div className="stat"><h2>98%</h2><p>Success Rate</p></div>
            <div className="stat"><h2>100+</h2><p>Expert Doctors</p></div>
            <div className="stat"><h2>10+</h2><p>Cities</p></div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="content-section">
        <div className="acl-container">
          
          <div className="info-card">
            <h2>Understanding ACL Injuries</h2>
            <p>
              The Anterior Cruciate Ligament (ACL) is the primary stabilizer of the knee. Tears often occur 
              during sports involving sudden stops or changes in direction. Unlike minor muscle strains, 
              a complete ACL tear rarely heals on its own and requires surgical intervention for those 
              wishing to return to sports.
            </p>
          </div>

          <div className="info-card">
            <h2>Advanced Diagnosis</h2>
            <div className="feature-grid">
              <div className="feature-item">
                <strong>Physical Assessment:</strong> Specialized stability tests like the Lachman test.
              </div>
              <div className="feature-item">
                <strong>MRI Imaging:</strong> To confirm the tear grade and check for meniscus damage.
              </div>
              <div className="feature-item">
                <strong>Digital X-Rays:</strong> To rule out associated bone fractures.
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2>Treatment Pathway</h2>
            <h3>1. Arthroscopic Reconstruction</h3>
            <p>Using keyhole surgery, we replace the torn ligament with a graft (usually from your hamstring or a donor). This technique ensures smaller scars and a faster return to daily activities.</p>
            
            <h3>2. Non-Surgical Rehab</h3>
            <p>For partial tears in non-athletes, we offer intensive physiotherapy and customized bracing to stabilize the joint without surgery.</p>
          </div>

          <div className="info-card">
            <h2>Recovery Timeline</h2>
            <div className="timeline">
              <div className="timeline-step">
                <strong>Weeks 1-4:</strong> Focus on reducing swelling and regaining full leg straightening.
              </div>
              <div className="timeline-step">
                <strong>Months 2-4:</strong> Strength building for quads and hamstrings using low-impact cycling.
              </div>
              <div className="timeline-step">
                <strong>Months 6-9:</strong> Return to running and agility drills.
              </div>
              <div className="timeline-step">
                <strong>Months 9-12:</strong> Full clearance for competitive sports.
              </div>
            </div>
          </div>

          <div className="info-card" style={{textAlign: 'center', marginTop: '60px'}}>
            <h2>Ready to recover?</h2>
            <p>The average cost for ACL surgery in India ranges from ₹1,80,000 to ₹2,42,000 depending on graft choice.</p>
            <button className="hero-btn" onClick={handleConsultClick}>
              Check Insurance Eligibility
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ACLTearTreatment;