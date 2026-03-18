import React from "react";

const Aesthetic = () => {
  return (
    <section className="hero-section">

      <style>{`
        :root {
          --primary: #7B008A;     /* Purple */
          --secondary: #FF7A00;   /* Orange */
          --accent: #F3E0D4;      /* Light Beige */
          --card-bg: #ffffff;     /* White */
          --text-dark: #333;
          --text-light: #555;
          --white: #ffffff;
        }

        .hero-section {
          background: var(--accent);
          padding: 100px 20px 60px;
          text-align: left;
          font-family: 'Poppins', sans-serif;
        }

        .hero-content {
          max-width: 800px;
          margin: auto;
        }

        .hero-title {
          font-size: 44px;
          font-weight: 700;
          color: var(--primary);
          line-height: 1.3;
        }

        .hero-desc {
          font-size: 16px;
          color: var(--text-dark);
          margin-top: 15px;
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

        .cta-btn:hover {
          background: #e86a00;
          transform: translateY(-2px);
        }

        .stats-container {
          margin-top: 50px;
          background: var(--card-bg);
          border-radius: 14px;
          padding: 35px 20px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          text-align: center;
          flex-wrap: wrap;
          gap: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }

        .stat-box {
          flex: 1;
          min-width: 120px;
        }

        .stat-number {
          font-size: 34px;
          font-weight: bold;
          color: var(--primary);
        }

        .stat-text {
          font-size: 14px;
          color: var(--text-light);
          margin-top: 5px;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 28px;
          }

          .hero-desc {
            font-size: 14px;
          }

          .stats-container {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="hero-content">
        <h1 className="hero-title">
          Expert laser aesthetic doctor for dark spots
        </h1>

        <p className="hero-desc">
          Get advanced treatment from the best plastic surgeons. Visit HeptaCare Health to undergo advanced and minimally invasive cosmetic procedures at cost-effective prices. Enhance your physical appearance and get treatment for medical conditions that affect the aesthetics.
        </p>

        <button className="cta-btn">
          📞 Call Us : +91 9493994244
        </button>
      </div>

      <div className="stats-container">
        <div className="stat-box">
          <h2 className="stat-number">70k+</h2>
          <p className="stat-text">Happy Patients</p>
        </div>

        <div className="stat-box">
          <h2 className="stat-number">50+</h2>
          <p className="stat-text">Disease</p>
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

    </section>
  );
};

export default Aesthetic;