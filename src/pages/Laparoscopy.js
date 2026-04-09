import React from "react";

const Laparoscopy = () => {
  return (
    <>
      <style>{`
        :root {
          --brand-purple: #7B008A;
          --brand-orange: #FF7A00;
          --brand-white: #FFFFFF;
          --bg-peach: #F3E0D4;
          --text-dark: #333;
        }

        .laparoscopy {
          background: var(--bg-peach);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .laparoscopy-container {
          max-width: 1100px;
          margin: auto;
        }

        .laparoscopy-title {
          font-size: 40px;
          font-weight: 700;
          color: var(--brand-purple);
          margin-bottom: 20px;
        }

        .laparoscopy-text {
          font-size: 18px;
          line-height: 1.7;
          max-width: 950px;
          margin-bottom: 30px;
          color: var(--text-dark);
        }

        .call-btn {
          background: var(--brand-orange);
          color: white;
          border: none;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          margin-bottom: 40px;
          transition: 0.3s;
        }

        .call-btn:hover {
          background: #e46d00;
          transform: translateY(-2px);
        }

        .book-title {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 30px;
          color: #000;
        }

        /* STATS BOX */
        .stats-box {
          background: var(--brand-white);
          border-radius: 14px;
          display: flex;
          justify-content: space-between;
          padding: 30px;
          gap: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          margin-bottom: 60px;
        }

        .stat {
          flex: 1;
          text-align: center;
        }

        .stat:not(:last-child) {
          border-right: 1px solid #ddd;
        }

        .stat-number {
          font-size: 40px;
          font-weight: 700;
          color: #1f4d7a;
          margin-bottom: 10px;
        }

        .stat-text {
          font-size: 18px;
          font-weight: 600;
        }

        /* CONTENT SECTIONS */
        .info-content {
          background: #fff;
          padding: 60px 20px;
          font-family: 'Poppins', sans-serif;
        }

        .content-card {
          max-width: 1100px;
          margin: 0 auto 40px;
          padding: 40px;
          background: #fdfdfd;
          border-radius: 20px;
          border-left: 6px solid var(--brand-purple);
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        }

        .section-h3 {
          font-size: 28px;
          color: var(--brand-purple);
          margin-bottom: 20px;
          font-weight: 700;
        }

        .sub-h4 {
          font-size: 20px;
          color: #1f4d7a;
          margin: 20px 0 10px;
          font-weight: 600;
        }

        .list-style {
          padding-left: 20px;
          margin-bottom: 20px;
        }

        .list-style li {
          margin-bottom: 12px;
          color: #555;
          line-height: 1.6;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .grid-item {
          background: #fff;
          padding: 25px;
          border-radius: 15px;
          border: 1px solid #eee;
        }

        /* DO'S & DON'TS */
        .status-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .do-box { border-top: 5px solid #28a745; padding: 20px; background: #f8fff9; border-radius: 10px; }
        .dont-box { border-top: 5px solid #dc3545; padding: 20px; background: #fffafb; border-radius: 10px; }

        @media(max-width:900px){
          .laparoscopy-title { font-size: 30px; }
          .stats-box { flex-direction: column; }
          .stat { border-right: none !important; border-bottom: 1px solid #ddd; padding-bottom: 20px; }
          .status-grid { grid-template-columns: 1fr; }
          .content-card { padding: 20px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="laparoscopy">
        <div className="laparoscopy-container">
          <h2 className="laparoscopy-title">
            Advanced Laparoscopic Surgery – Minimally Invasive & High Precision
          </h2>
          <p className="laparoscopy-text">
            Laparoscopy, also known as keyhole surgery, uses advanced high-resolution cameras 
            and minute incisions to treat conditions like Hernia, Gallbladder stones, and Appendicitis. 
            Our expert surgeons ensure swift recovery and minimal discomfort with personalized care.
          </p>

          <button className="call-btn" onClick={() => window.location.href='tel:+919493994244'}>
            📞 Call Us : +91 9493994244
          </button>

          <h3 className="book-title">Our Clinical Excellence</h3>

          <div className="stats-box">
            <div className="stat"><div className="stat-number">70k+</div><div className="stat-text">Happy Patients</div></div>
            <div className="stat"><div className="stat-number">40+</div><div className="stat-text">Clinics</div></div>
            <div className="stat"><div className="stat-number">100+</div><div className="stat-text">Hospitals</div></div>
            <div className="stat"><div className="stat-number">10+</div><div className="stat-text">Cities</div></div>
          </div>
        </div>
      </section>

      {/* Information Sections */}
      <section className="info-content">
        <div className="laparoscopy-container">

          {/* What is Laparoscopy */}
          <div className="content-card">
            <h3 className="section-h3">What is Laparoscopy?</h3>
            <p className="laparoscopy-text">
             Laparoscopy is an effective procedure to treat certain conditions such as:

Hernia
Gallbladder stones
Appendicitis , etc.
This procedure is also known as keyhole surgery due to the minute nature of incisions involved. The surgeon uses a long, thin instrument called a laparoscope which is attached to a high-resolution camera on the other end. The camera provides live images of the organs and tissues in the abdomen. The surgeon locates the epicenter of the disease via an external monitor and operates with high precision.<strong>laparoscope</strong>. This device is fitted with a high-resolution camera that provides live images of internal organs on an external monitor, allowing for extreme precision without large incisions.
            </p>
            



          </div>

          {/* Expectations During/After */}
          <div className="content-card">
            <h3 className="section-h3">What to Expect During & After Surgery</h3>
            <div className="grid-container">
              <div className="grid-item">
                <h4 className="sub-h4">During Surgery</h4>
                <ul className="list-style">
                  <li>General or local anesthesia administered.</li>
                  <li>Abdomen inflated with CO2 gas for better visibility.</li>
                  <li>Insertion of the laparoscope (takes 30–45 minutes).</li>
                  <li>Robotic assistance may be used for complex procedures.</li>
                </ul>
              </div>
              <div className="grid-item">
                <h4 className="sub-h4">After Surgery</h4>
                <ul className="list-style">
                  <li>Temporary dizziness due to anesthesia.</li>
                  <li>Mild pain around the incision sites.</li>
                  <li>Hospital monitoring for a few hours.</li>
                  <li>Recovery at home typically takes 1–2 weeks.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Do's and Don'ts */}
          <div className="content-card">
            <h3 className="section-h3">Recovery Guidelines: Do's & Don'ts</h3>
            <div className="status-grid">
              <div className="do-box">
                <h4 className="sub-h4" style={{color: '#28a745'}}>Do's</h4>
                <ul className="list-style">
                  <li>Walk lightly to keep the body active.</li>
                  <li>Stay hydrated with plenty of fluids.</li>
                  <li>Eat fiber-rich foods (fruits/vegetables).</li>
                  <li>Attend regular follow-up consultations.</li>
                </ul>
              </div>
              <div className="dont-box">
                <h4 className="sub-h4" style={{color: '#dc3545'}}>Don'ts</h4>
                <ul className="list-style">
                  <li>No heavy weight lifting for 2 weeks.</li>
                  <li>Do not drive immediately after anesthesia.</li>
                  <li>Avoid sports or swimming for at least a week.</li>
                  <li>Avoid citrus fruits like oranges and tomatoes.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Post-Surgery at Home */}
          <div className="content-card">
            <h3 className="section-h3">At-Home Recovery</h3>
            <p className="laparoscopy-text">
              It is normal to feel moderate pain around incisions for a few days. You might also experience bloating or shoulder pain caused by the CO2 gas used during the procedure; this usually resolves within 24–48 hours as the body absorbs the gas.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Laparoscopy;