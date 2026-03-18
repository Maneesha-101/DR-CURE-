import React from "react";

const ENT = () => {
  return (
    <section className="ent-section">

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

        .ent-section {
          background: var(--accent);
          padding: 100px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        /* Breadcrumb */
        .breadcrumb {
          font-size: 14px;
          color: var(--primary);
          margin-bottom: 15px;
          font-weight: 500;
        }

        /* Title */
        .ent-title {
          font-size: 48px;
          font-weight: 700;
          color: var(--primary);
          line-height: 1.2;
          max-width: 800px;
        }

        /* Description */
        .ent-desc {
          margin-top: 15px;
          font-size: 16px;
          color: var(--text-dark);
          max-width: 750px;
          line-height: 1.6;
        }

        /* Button */
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
        }

        /* Stats Card */
        .stats-container {
          margin-top: 50px;
          background: var(--card-bg);
          border-radius: 14px;
          padding: 35px 20px;
          display: flex;
          justify-content: space-around;
          text-align: center;
          flex-wrap: wrap;
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

        /* Responsive */
        @media (max-width: 768px) {
          .ent-title {
            font-size: 30px;
          }

          .ent-desc {
            font-size: 14px;
          }

          .stats-container {
            flex-direction: column;
            gap: 20px;
          }
        }
      `}</style>

      <div className="container">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          Home » Home » ENT
        </div>

        {/* Title */}
        <h1 className="ent-title">
          Specialized Doctor & Clinics for ENT Treatments
        </h1>

        {/* Description */}
        <p className="ent-desc">
          Most advanced treatment of various diseases and disorders related to the Ear, Nose and Throat. Visit HeptaCare Health for highly experienced ENT Doctors.
        </p>

        {/* Button */}
        <button className="cta-btn">
       📞 Call Us : +91 9493994244
        </button>

        {/* Stats */}
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

      </div>

    </section>
  );
};

export default ENT;