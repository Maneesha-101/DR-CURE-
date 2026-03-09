// src/components/WeightLossSection.js
import React, { useEffect } from "react";

const WeightLossSection = () => {

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      :root {
        --brand-purple: #7D008D;
        --brand-orange: #FF7A00;
        --brand-white: #FFFFFF;
      }

      .weight-loss-section {
        background: linear-gradient(135deg, #f9f2fa 0%, #ffffff 100%);
        padding: 80px 20px;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .section-title {
        text-align: center;
        font-size: 32px;
        font-weight: 700;
        color: var(--brand-purple);
        margin-bottom: 10px;
        font-family: 'Montserrat', sans-serif;
      }

      .section-subtitle {
        text-align: center;
        color: #666;
        margin-bottom: 50px;
      }

      .treatments-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 30px;
      }

      .treatment-card {
        background: #fff;
        border-radius: 15px;
        padding: 30px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        transition: all 0.3s ease;
        border: 2px solid transparent;
        display: flex;
        flex-direction: column;
      }

      .treatment-card:hover {
        transform: translateY(-10px);
        border-color: var(--treatment-color, var(--brand-purple));
        box-shadow: 0 15px 40px rgba(125, 0, 141, 0.12);
      }

      .treatment-header {
        display: flex;
        gap: 20px;
        margin-bottom: 25px;
        cursor: pointer;
        padding-bottom: 20px;
        border-bottom: 1px solid #eee;
      }

      .treatment-icon {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 32px;
        color: #fff;
        transition: transform 0.3s ease;
      }

      .treatment-card:hover .treatment-icon {
        transform: scale(1.1);
      }

      .treatment-title {
        font-size: 22px;
        font-weight: 700;
        color: var(--brand-purple);
        margin-bottom: 5px;
      }

      .treatment-subtitle {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 5px;
      }

      .treatment-description {
        font-size: 14px;
        color: #666;
      }

      .treatment-features {
        margin-bottom: 25px;
        flex-grow: 1;
      }

      .treatment-features h4 {
        font-size: 16px;
        margin-bottom: 15px;
      }

      .features-list {
        list-style: none;
        padding: 0;
      }

      .feature-item {
        display: flex;
        gap: 10px;
        margin-bottom: 10px;
        font-size: 14px;
        color: #666;
      }

      .feature-bullet {
        color: var(--treatment-color, var(--brand-orange));
        font-weight: bold;
      }

      .treatment-book-btn {
        background: linear-gradient(135deg, var(--brand-purple) 0%, #62006e 100%);
        color: #fff;
        border: none;
        padding: 14px;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.3s ease;
      }

      .treatment-book-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(125,0,141,0.25);
      }

      @media (max-width: 768px) {
        .treatments-grid {
          grid-template-columns: 1fr;
        }

        .treatment-header {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const treatments = [
    {
      id: 1,
      title: "Weight Loss",
      subtitle: "Gastric balloon & Bariatric Surgery",
      description: "(Scientific proven & advanced techniques)",
      icon: "⚖️",
      color: "#ff6b35",
      features: [
        "Non-invasive procedures",
        "Personalized diet plans",
        "Expert nutritionists",
        "Long-term maintenance"
      ]
    },
    {
      id: 2,
      title: "Vascular",
      subtitle: "Advanced Vascular Treatments",
      description: "A surgical subspecialty that deals with the vascular system.",
      icon: "🩸",
      color: "#1a6fb3",
      features: [
        "Varicose vein treatment",
        "Aneurysm repair",
        "Angioplasty",
        "Vascular screenings"
      ]
    },
    {
      id: 3,
      title: "Aesthetics",
      subtitle: "Cosmetic Excellence",
      description: "Retouching or enhancing natural appearance.",
      icon: "✨",
      color: "#ff8b35",
      features: [
        "Laser treatments",
        "Botox & fillers",
        "Skin rejuvenation",
        "Body contouring"
      ]
    }
  ];

  const handleBookConsultation = () => {
    const formSection = document.querySelector(".consultation");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="weight-loss-section">
      <div className="container">
        <h2 className="section-title">Comprehensive Healthcare Solutions</h2>
        <p className="section-subtitle">
          Specialized treatments across various medical disciplines for complete healthcare
        </p>

        <div className="treatments-grid">
          {treatments.map((treatment) => (
            <div
              key={treatment.id}
              className="treatment-card"
              style={{ "--treatment-color": treatment.color }}
            >
              <div className="treatment-header">
                <div
                  className="treatment-icon"
                  style={{ backgroundColor: treatment.color }}
                >
                  {treatment.icon}
                </div>

                <div>
                  <h3 className="treatment-title">{treatment.title}</h3>
                  <h4 className="treatment-subtitle">{treatment.subtitle}</h4>
                  <p className="treatment-description">{treatment.description}</p>
                </div>
              </div>

              <div className="treatment-features">
                <h4>Key Features:</h4>
                <ul className="features-list">
                  {treatment.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-bullet">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="treatment-book-btn"
                onClick={handleBookConsultation}
              >
                Book Free Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeightLossSection;