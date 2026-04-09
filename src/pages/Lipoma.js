import React from "react";
import { useNavigate } from "react-router-dom";

const Lipoma = () => {
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
        .lipoma-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .lipoma-container {
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

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .item-box {
          background: #fff;
          padding: 25px;
          border-radius: 15px;
          border: 1px solid #eee;
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

        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="lipoma-hero">
        <div className="lipoma-container">
          <p className="breadcrumb">Home » Home » Lipoma Treatment</p>
          <h1 className="hero-title">Advanced Lipoma Removal Surgery</h1>
          <p className="hero-text">
            Lipomas are benign fatty tumors that develop beneath the skin. At <strong>Dr Cure Surgeries</strong>, 
            we offer specialized scarless laser techniques and minimally invasive excisions to ensure 
            faster recovery and minimal discomfort.
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

      {/* Main Content Section */}
      <section className="content-section">
        <div className="lipoma-container">

          <div className="info-card">
            <h2 className="section-title">Lipoma Diagnosis & Screening</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              While lipomas are usually soft and mobile bumps, they can mimic other conditions like 
              sebaceous cysts or neurofibromas. Our diagnostic process ensures precision:
            </p>
            <div className="grid-layout">
              <div className="item-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Imaging Tests</h4>
                <p style={{fontSize: '13px'}}>Ultrasound, MRI, or CT scans help determine the size, depth, and vascularity of the lump.</p>
              </div>
              <div className="item-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Biopsy</h4>
                <p style={{fontSize: '13px'}}>Required if a malignant tumor (liposarcoma) is suspected, ensuring the growth is benign.</p>
              </div>
              <div className="item-box">
                <h4 style={{color: 'var(--brand-purple)'}}>Physical Exam</h4>
                <p style={{fontSize: '13px'}}>A thorough assessment of texture and mobility to differentiate from cysts.</p>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h2 className="section-title">Treatment & Surgical Options</h2>
            <div className="grid-layout">
              <div className="item-box">
                <strong>Conventional Excision</strong>
                <p style={{fontSize: '13px', marginTop: '5px'}}>The most common method; removes the lipoma intact via a standard incision. Ideal for larger lumps.</p>
              </div>
              <div className="item-box">
                <strong>Minimal Excision</strong>
                <p style={{fontSize: '13px', marginTop: '5px'}}>Uses a tiny incision to squeeze out smaller lipomas, resulting in minimal scarring.</p>
              </div>
              <div className="item-box">
                <strong>Liposuction-Assisted</strong>
                <p style={{fontSize: '13px', marginTop: '5px'}}>A thin cannula suctions out fatty tissues. Perfect for smaller, multiple lipomas.</p>
              </div>
              <div className="item-box">
                <strong>Endoscopic Removal</strong>
                <p style={{fontSize: '13px', marginTop: '5px'}}>Uses a scope to visualize and remove lipomas in sensitive or hard-to-reach areas.</p>
              </div>
            </div>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h2 className="section-title">Benefits of Removal</h2>
              <ul className="content-list">
                <li>✅ <strong>Symptom Relief:</strong> Eliminates pain, tenderness, and restricted movement.</li>
                <li>✅ <strong>Aesthetic Confidence:</strong> Improves appearance, especially for visible lumps.</li>
                <li>✅ <strong>Prevention:</strong> Stops growth that could compress nerves or lead to infection.</li>
                <li>✅ <strong>Peace of Mind:</strong> Confirms the nature of the lump through histopathology.</li>
              </ul>
            </div>

            <div className="info-card">
              <h2 className="section-title">Recovery & Care</h2>
              <ul className="content-list">
                <li><strong>Outpatient Care:</strong> Most patients are discharged on the same day.</li>
                <li><strong>Minimal Downtime:</strong> Return to light activities within 24–48 hours.</li>
                <li><strong>Scar Management:</strong> Minimally invasive techniques ensure the smallest possible marks.</li>
                <li><strong>Follow-up:</strong> Routine checks to ensure the site is healing without fluid accumulation.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h2 className="section-title">Why Choose Dr Cure Surgeries?</h2>
            <p className="hero-text" style={{fontSize: '16px'}}>
              At <strong>Dr Cure Surgeries</strong>, we prioritize your comfort and safety. 
              Our expert plastic surgeons utilize the latest technology to ensure 
              scarless results where possible. We offer transparent pricing, insurance 
              assistance, and comprehensive post-operative care to ensure a seamless 
              healing journey.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Lipoma;