
import React from "react";
import { useNavigate } from "react-router-dom";

const Fistula = () => {
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
        .fistula-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .fistula-container {
          max-width: 1100px;
          margin: auto;
        }

        .breadcrumb {
          color: #666;
          margin-bottom: 20px;
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
          max-width: 900px;
          margin-bottom: 30px;
        }

        /* ORANGE CTA BUTTON */
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
          margin-top: 50px;
          flex-wrap: wrap;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }

        .stat {
          text-align: center;
        }

        .stat h2 {
          font-size: 36px;
          color: var(--footer-dark);
        }

        .stat p {
          color: #777;
        }

        /* CONTENT SECTIONS */
        .info-section {
          padding: 60px 20px;
          background: var(--brand-white);
          font-family: 'Poppins', sans-serif;
        }

        .section-card {
          max-width: 1100px;
          margin: 0 auto 40px;
          padding: 40px;
          border-radius: 20px;
          background: #f9f9f9;
        }

        .section-title {
          font-size: 32px;
          color: var(--footer-dark);
          margin-bottom: 25px;
          border-left: 5px solid var(--brand-purple);
          padding-left: 15px;
        }

        .sub-title {
          font-size: 22px;
          color: var(--brand-purple);
          margin-top: 20px;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .content-text {
          font-size: 16px;
          color: #555;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        /* TYPES GRID */
        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .grid-item {
          background: var(--brand-white);
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #eee;
          transition: 0.3s;
        }

        .grid-item:hover {
          border-color: var(--cyan-accent);
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .grid-item strong {
          color: var(--footer-dark);
          display: block;
          margin-bottom: 8px;
          font-size: 18px;
        }

        /* BENEFITS LIST */
        .benefit-list {
          list-style: none;
          padding: 0;
        }

        .benefit-item {
          margin-bottom: 25px;
        }

        .benefit-item h4 {
          color: var(--footer-dark);
          font-size: 18px;
          margin-bottom: 5px;
        }

        /* MOBILE RESPONSIVENESS */
        @media(max-width:900px){
          .hero-title { font-size: 32px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .section-card { padding: 20px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="fistula-hero">
        <div className="fistula-container">
          <p className="breadcrumb">Home » Home » Fistula</p>
          <h1 className="hero-title">
            Anal Fistula Treatment – Laser Surgery Procedure & Operation Benefits
          </h1>
          <p className="hero-text">
            Prompt treatment for anal fistula is vital as it does not heal on its own. 
            At Drcure, you can get treatment for anal fistula from specialized doctors 
            with advanced laser treatments, expert care coordination, and post-surgery support.
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
      <section className="info-section">
        <div className="fistula-container">
          
          {/* Definition Section */}
          <div className="section-card">
            <h2 className="section-title">What is Anal Fistula?</h2>
            <p className="content-text">
              An anal fistula is an abnormal connection or tunnel that forms between the anal canal (the end portion of the digestive tract) and the skin around the anus. It typically develops as a result of an infection or an abscess (a collection of pus) in the anal glands, which are small glands located near the anus.
            </p>
            <p className="content-text">
              Anal fistulas can cause various symptoms, including persistent pain and discomfort around the anus, swelling, redness, tenderness, and the presence of discharge or pus. Other symptoms may include itching, fever, and general malaise.
            </p>
          </div>

          {/* Types Section */}
          <div className="section-card">
            <h2 className="section-title">Types of Anal Fistula</h2>
            <div className="grid-container">
              <div className="grid-item">
                <strong>Intersphincteric Fistula</strong>
                <p className="content-text">This type occurs between the internal and external sphincter muscles of the anus. It’s the most common type and usually results from an infected anal gland.</p>
              </div>
              <div className="grid-item">
                <strong>Transsphincteric Fistula</strong>
                <p className="content-text">This fistula passes through both the internal and external sphincter muscles. An abscess infection typically causes it.</p>
              </div>
              <div className="grid-item">
                <strong>Suprasphincteric Fistula</strong>
                <p className="content-text">This type goes beyond the external sphincter muscle and usually develops from a chronic infection.</p>
              </div>
              <div className="grid-item">
                <strong>Extrasphincteric Fistula</strong>
                <p className="content-text">Goes beyond the external sphincter muscle, usually developing from a chronic condition.</p>
              </div>
            </div>
          </div>

          {/* Diagnosis Section */}
          <div className="section-card">
            <h2 className="section-title">How is Anal Fistula Diagnosed?</h2>
            <p className="content-text">
             An anal fistula is a medical condition characterized by an abnormal tunnel connecting the anal canal to the skin surrounding the anus. The diagnosis of anal fistula typically involves a physical examination and a review of the patient’s medical history. 

During the physical examination, the doctor will perform a visual analysis of the anus and surrounding area to look for any signs of inflammation, swelling, or discharge.

The doctor may also perform a digital rectal exam to check for the presence of any abscesses. The doctor may order additional tests to confirm the diagnosis, such as an MRI or a fistulogram, which involves injecting a dye into the anal fistula to help identify its exact location and extent. 

It is important to seek medical attention if you suspect you may have an anal fistula, as early diagnosis and treatment can help prevent complications and improve outcomes.
            </p>
          </div>

          {/* Treatment Benefits Section */}
          <div className="section-card">
            <h2 className="section-title">Benefits of Laser Anal Fistula Surgery</h2>
            <div className="benefit-list">
              <div className="benefit-item">
                <h4>1. Minimally Invasive</h4>
                <p className="content-text">Small incisions are made where high-intensity, medical-grade laser destroys the fistula tract, minimizing bleeding and infection risks.</p>
              </div>
              <div className="benefit-item">
                <h4>2. Shorter Recovery</h4>
                <p className="content-text">Most patients recover within 2–6 weeks, with many resuming normal activities in just 1–2 weeks.</p>
              </div>
              <div className="benefit-item">
                <h4>3. Fewer Complications</h4>
                <p className="content-text">Small incisions virtually eliminate the risk of excessive bleeding and infection.</p>
              </div>
              <div className="benefit-item">
                <h4>4. Tissue Preservation</h4>
                <p className="content-text">The laser approach preserves healthy surrounding tissues more effectively than traditional surgery.</p>
              </div>
            </div>
          </div>

          {/* Recurrence Section */}
          <div className="section-card">
            <h2 className="section-title">Causes of Recurrence</h2>
            <p className="content-text">
             A successful laser anal fistula surgery means the anal wound heals completely without leaving any residual tract, external openings, or perianal discharge.

Doctors often recommend laser surgery as the most effective treatment for anal fistulas. However, the condition may still return after surgery for several reasons. Here are some common causes of recurrence:
            </p>
            <ul>
              <li className="content-text"><strong>Poor Hygiene:</strong>  Failing to keep the surgical area clean exposes it to harmful bacteria and germs. This contamination can lead to infections and may prevent proper healing of the fistula. Therefore, it’s essential to maintain hygiene around the anal wound after surgery.</li>
              <li className="content-text"><strong>Postoperative Instructions:</strong>  Your anorectal specialist will provide specific guidelines for recovery. Following these instructions carefully can help prevent complications. Ignoring them may delay healing and increase the risk of recurrence.</li>
              <li className="content-text"><strong>Ongoing Risk Factors:</strong> Surgery alone may not be enough to prevent recurrence. If you don’t address the lifestyle factors that caused the fistula initially, it might return and require further treatment.</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
};

export default Fistula;