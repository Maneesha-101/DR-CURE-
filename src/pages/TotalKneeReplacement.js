import React from "react";
import { useNavigate } from "react-router-dom";

const TotalKneeReplacement = () => {
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
          --text-gray: #444;
          --bg-light: #f9f9f9;
        }

        .knee-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .knee-container {
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
          color: var(--text-gray);
          line-height: 1.6;
          max-width: 950px;
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
          transition: 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 10px;
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
        .stat h2 { font-size: 36px; color: var(--brand-purple); margin: 0; }
        .stat p { color: #777; margin: 5px 0 0; }

        /* CONTENT SECTIONS */
        .content-section {
          padding: 60px 20px;
          background: var(--brand-white);
          font-family: 'Poppins', sans-serif;
        }

        .info-card {
          margin-bottom: 40px;
          line-height: 1.7;
          color: var(--text-gray);
        }

        .info-card h2 {
          color: var(--brand-purple);
          font-size: 32px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .info-card h3 {
          color: var(--footer-dark);
          font-size: 22px;
          margin: 25px 0 10px;
        }

        .info-card p {
          margin-bottom: 15px;
          font-size: 16px;
        }

        .icon-bullet-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }

        .icon-bullet-list li {
          background: var(--bg-light);
          padding: 15px;
          border-radius: 10px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          border-left: 4px solid var(--brand-orange);
        }

        .check-icon {
          color: var(--brand-orange);
          font-weight: bold;
          flex-shrink: 0;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        /* MOBILE */
        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .faq-grid { grid-template-columns: 1fr; }
          .info-card h2 { font-size: 26px; }
        }

        .svg-icon {
            width: 32px;
            height: 32px;
            fill: var(--brand-orange);
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="knee-hero">
        <div className="knee-container">
          <p className="breadcrumb">Home » Home » Total Knee Replacement</p>
          <h1 className="hero-title">Knee Replacement Surgery at Dr Cure Surgeries</h1>
          <p className="hero-text">
            Restore mobility of the knee joint by replacing the damaged joint with advanced and minimally invasive techniques. 
            At Dr Cure Surgeries, we provide both total and partial knee replacement surgeries with expert orthopedic surgeons, 
            ensuring faster recovery, reduced pain, and improved quality of life.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            <svg className="svg-icon" viewBox="0 0 24 24" fill="white" style={{width:'20px', height:'20px'}}><path d="M6.62 10.79a15.149 15.149 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
            Call to Schedule Your Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Diseases Treated</p></div>
            <div className="stat"><h2>100+</h2><p>Partner Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities Present</p></div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="content-section">
        <div className="knee-container">
          
          {/* Section 1 */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
              What is Knee Replacement Surgery?
            </h2>
            <p>
              Knee replacement surgery procedure involves replacing a damaged, worn, or diseased knee with an artificial joint. It is also known as arthroplasty and total knee replacement Surgery. In this surgery, metal and plastic parts are used to cap the ends of the bones that form the knee joint, along with the knee cap. 
            </p>
            <p>
              Knee replacement Surgery is usually considered if the patient has severe arthritis or a severe knee injury. At <strong>Dr Cure Surgeries</strong>, a successful knee replacement typically leads to a higher quality of life, better mobility, and less pain.
            </p>
          </div>

          {/* Section 2 */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"/></svg>
              Types of Knee Replacement Surgery
            </h2>
            <h3>Total knee replacement Surgery</h3>
            <p>This surgical procedure involves the replacement of both sides of the knee joint. Our surgeons remove damaged cartilage and bone, positioning new metal and plastic implants to restore alignment. Procedure time: 1-3 hours.</p>
            
            <h3>Partial knee replacement Surgery</h3>
            <p>Only the affected compartment (lateral or medial) is replaced. This is less taxing on the body, involves smaller incisions, and preserves more natural bone and soft tissue.</p>
          </div>

          {/* Section 3: Dangers of Delay */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
              Dangers of Delaying Surgery
            </h2>
            <p>Delaying surgery due to fear or recovery concerns can lead to serious consequences:</p>
            <ul className="icon-bullet-list">
              <li><span><strong>Increased Pain:</strong> Chronic pain that worsens over time.</span></li>
              <li><span><strong>Joint Deformation:</strong> The knee may become deformed, making surgery harder.</span></li>
              <li><span><strong>Loss of Mobility:</strong> Inability to walk or perform daily tasks independently.</span></li>
              <li><span><span><strong>Complex Procedures:</strong> Waiting may turn a "partial" replacement into a "total" replacement requirement.</span></span></li>
            </ul>
          </div>

          {/* Section 4: Post Op */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M10.5 19l-4.5-4.5 1.41-1.41L10.5 16.17l7.59-7.59L19.5 10z"/></svg>
              Post-Operative Care at Dr Cure Surgeries
            </h2>
            <ul className="icon-bullet-list">
              <li><strong>Wound Care:</strong> Avoid cutting sutures at home; they must be removed by professionals.</li>
              <li><strong>Blood Clot Prevention:</strong> Use prescribed anticoagulants and watch for redness or swelling.</li>
              <li><strong>Limited Activity:</strong> Use crutches/walkers as advised; avoid crossing legs or kneeling.</li>
              <li><strong>Pain Management:</strong> We use a combination of NSAIDs and specialized meds for comfort.</li>
              <li><strong>Diet:</strong> High-iron balanced diet to restore muscle strength and speed up healing.</li>
            </ul>
          </div>

          {/* Section 5: FAQs/Questions */}
          <div className="info-card">
            <h2>
              <svg className="svg-icon" viewBox="0 0 24 24"><path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"/></svg>
              Questions to Ask Your Surgeon
            </h2>
            <div className="faq-grid">
              <div>
                <p>• How long will the results of the Surgery last?</p>
                <p>• What type of implant is used during the Surgery?</p>
                <p>• What is the success rate at Dr Cure Surgeries?</p>
              </div>
              <div>
                <p>• How long does it take to walk normally again?</p>
                <p>• Is physiotherapy compulsory after Surgery?</p>
                <p>• What are the total costs and insurance coverages?</p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div style={{textAlign: 'center', marginTop: '40px'}}>
             <button className="hero-btn" onClick={handleConsultClick}>
                Book Your Appointment at Dr Cure Surgeries
             </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default TotalKneeReplacement;