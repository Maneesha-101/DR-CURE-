// src/components/Surgeries.jsx
import React, { useState, useEffect } from "react";

const Surgeries = () => {
  const [showAllSurgeries, setShowAllSurgeries] = useState(false);

  const surgeries = [
    { id: 1, name: "Piles", icon: "🩸", category: "proctology" },
    { id: 2, name: "Anal Fistula", icon: "🔍", category: "proctology" },
    { id: 3, name: "Anal Fissure", icon: "💢", category: "proctology" },
    { id: 4, name: "Gallstone", icon: "🪨", category: "general" },
    { id: 5, name: "Kidney Stones", icon: "💎", category: "urology" },
    { id: 6, name: "Vaginoplasty", icon: "🌸", category: "gynecology" },
    { id: 7, name: "Breast Augmentation", icon: "👙", category: "aesthetics" },
    { id: 8, name: "Hernia", icon: "🕳️", category: "general" },
    { id: 9, name: "Appendix", icon: "📌", category: "general" },
    { id: 10, name: "Varicose Veins", icon: "🩹", category: "vascular" },
    { id: 11, name: "Cataract", icon: "👁️", category: "ophthalmology" },
    { id: 12, name: "Knee Replacement", icon: "🦵", category: "orthopedics" }
  ];

  const specialities = [
    {
      id: 1,
      title: "Proctology",
      description:
        "You are treated with Specialised & advanced treatment for Anorectal Diseases.",
      icon: "🩺",
      color: "#0d4d8d"
    },
    {
      id: 2,
      title: "Weight Loss",
      description:
        "Gastric balloon & Bariatric Surgery (Scientific proven & advanced techniques).",
      icon: "⚖️",
      color: "#ff6b35"
    },
    {
      id: 3,
      title: "Vascular",
      description:
        "A surgical subspecialty that deals with the vascular system...",
      icon: "🩸",
      color: "#1a6fb3"
    },
    {
      id: 4,
      title: "Aesthetics",
      description:
        "Retouching or enhancing of natural corporeal appearance...",
      icon: "✨",
      color: "#ff8b35"
    },
    {
      id: 5,
      title: "Orthopedics",
      description:
        "Pediatric Orthopedic Hand and Upper Extremity Surgery",
      icon: "🦴",
      color: "#0d4d8d"
    },
    {
      id: 6,
      title: "ENT",
      description:
        "Minimally invasive surgery for ear, nose and throat.",
      icon: "👂",
      color: "#1a6fb3"
    }
  ];

  const visibleSurgeries = showAllSurgeries
    ? surgeries
    : surgeries.slice(0, 8);

  const handleSurgeryClick = (surgery) => {
    alert(
      `Selected: ${surgery.name}\n\nWould you like to learn more about ${surgery.name} surgery?`
    );
  };

  const handleViewMore = () => {
    setShowAllSurgeries(!showAllSurgeries);
  };

  const handleSpecialityClick = () => {
    const formSection = document.querySelector(".consultation");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
    
    :root {
      --brand-purple: #7D008D;
      --brand-orange: #FF7A00;
      --brand-white: #FFFFFF;
    }

    .surgeries {
      background-color: var(--brand-white);
      padding: 80px 20px;
    }

    .container {
      max-width: 1200px;
      margin: auto;
    }

    .surgeries-section,
    .specialities-section {
      margin-bottom: 80px;
    }

    .surgeries-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }

    .surgery-card {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 25px 20px;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 2px solid transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .surgery-card:hover {
      transform: translateY(-8px);
      border-color: var(--brand-purple);
      background: var(--brand-white);
      box-shadow: 0 10px 25px rgba(125, 0, 141, 0.1);
    }

    .surgery-icon {
      font-size: 40px;
      margin-bottom: 15px;
      width: 70px;
      height: 70px;
      background: var(--brand-white);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    }

    .surgery-name {
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
      font-weight: 600;
      color: var(--brand-purple);
      margin-bottom: 8px;
    }

    .surgery-category {
      font-size: 12px;
      font-weight: 500;
      color: #666;
      padding: 4px 12px;
      background: #f3e6f5;
      border-radius: 20px;
      text-transform: capitalize;
    }

    .view-more-container {
      text-align: center;
    }

    .view-more-btn {
      background: none;
      border: none;
      color: var(--brand-orange);
      font-weight: 600;
      cursor: pointer;
      font-size: 16px;
      transition: 0.3s ease;
    }

    .view-more-btn:hover {
      color: var(--brand-purple);
    }

    /* Specialities */

    .specialities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 30px;
    }

    .speciality-card {
      background: #f8f9fa;
      border-radius: 15px;
      padding: 30px;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 2px solid transparent;
      position: relative;
      overflow: hidden;
    }

    .speciality-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 100%;
      background-color: var(--speciality-color, var(--brand-purple));
      transition: width 0.3s ease;
    }

    .speciality-card:hover::before {
      width: 10px;
    }

    .speciality-card:hover {
      transform: translateY(-8px);
      background: var(--brand-white);
      box-shadow: 0 15px 35px rgba(125, 0, 141, 0.1);
      border-color: var(--speciality-color, var(--brand-purple));
    }

    .speciality-header {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
    }

    .speciality-icon {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      color: white;
      flex-shrink: 0;
      transition: transform 0.3s ease;
    }

    .speciality-card:hover .speciality-icon {
      transform: scale(1.1);
    }

    .speciality-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 22px;
      font-weight: 700;
      color: #333;
      margin: 0;
    }

    .speciality-description {
      color: #666;
      font-size: 15px;
      line-height: 1.6;
      margin-bottom: 25px;
    }

    .speciality-btn {
      background: none;
      border: none;
      color: var(--brand-orange);
      font-weight: 600;
      cursor: pointer;
      font-size: 15px;
      transition: 0.3s ease;
    }

    .speciality-btn:hover {
      color: var(--brand-purple);
    }

    @media (max-width: 768px) {
      .surgeries-grid {
        grid-template-columns: repeat(2, 1fr);
      }
      .specialities-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .surgeries-grid {
        grid-template-columns: 1fr;
        max-width: 250px;
        margin: auto;
      }
    }

    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="surgeries">
      <div className="container">
        {/* Surgeries Section */}
        <div className="surgeries-section">
          <h2 className="section-title">DR CURE surgeries</h2>
          <p className="section-subtitle">
            Advanced surgical treatments with minimal invasion and faster recovery
          </p>

          <div className="surgeries-grid">
            {visibleSurgeries.map((surgery) => (
              <div
                key={surgery.id}
                className="surgery-card"
                onClick={() => handleSurgeryClick(surgery)}
              >
                <div className="surgery-icon">{surgery.icon}</div>
                <h3 className="surgery-name">{surgery.name}</h3>
                <span className="surgery-category">{surgery.category}</span>
              </div>
            ))}
          </div>

          <div className="view-more-container">
            <button className="view-more-btn" onClick={handleViewMore}>
              {showAllSurgeries ? "View Less" : "View More"} →
            </button>
          </div>
        </div>

        {/* Specialities Section */}
        <div className="specialities-section">
          <h2 className="section-title">Our DR CURE Specialities</h2>
          <p className="section-subtitle">
            Comprehensive medical care across various specializations
          </p>

          <div className="specialities-grid">
            {specialities.map((speciality) => (
              <div
                key={speciality.id}
                className="speciality-card"
                style={{ "--speciality-color": speciality.color }}
                onClick={handleSpecialityClick}
              >
                <div className="speciality-header">
                  <div
                    className="speciality-icon"
                    style={{ backgroundColor: speciality.color }}
                  >
                    {speciality.icon}
                  </div>
                  <h3 className="speciality-title">
                    {speciality.title}
                  </h3>
                </div>
                <p className="speciality-description">
                  {speciality.description}
                </p>
                <button className="speciality-btn">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Surgeries;