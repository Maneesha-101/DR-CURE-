

import React, { useEffect, useState } from "react";

// ✅ FIXED IMAGE IMPORT (make sure file exists in src/assets/)
import doctorImg from "../assets/doctor.png";

const Hero = () => {

  const stats = [
    { number: 65, label: "Doctors", suffix: "+" },
    { number: 50, label: "Diseases", suffix: "+" },
    { number: 10, label: "Cities", suffix: "+" }
  ];

  const [counts, setCounts] = useState([0, 0, 0]);

  const handleCallClick = () => {
    window.location.href = "tel:+919493994244";
  };

  const handleBookAppointment = () => {
    const formSection = document.querySelector("#consultation");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🔥 COUNT ANIMATION
  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.number;
      const duration = 1500;
      const incrementTime = 20;

      const timer = setInterval(() => {
        start += Math.ceil(end / (duration / incrementTime));
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }

        setCounts(prev => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });

      }, incrementTime);
    });
  }, []);
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `

    :root{
      --brand-purple:#7D008D;
      --brand-orange:#FF7A00;
    }

    .hero {
      background: #f5f7fa;
      padding: 120px 20px 80px;
    }

    .hero-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      max-width: 1200px;
      margin: auto;
      overflow: hidden;
    }

    .hero-content {
      flex: 1;
    }

    .hero-title {
      font-size: 48px;
      font-weight: 700;
      color: var(--brand-purple);
      margin-bottom: 20px;
      line-height: 1.2;
    }

    .hero-stats {
      display: flex;
      gap: 20px;
      margin-bottom: 30px;
    }

    .stat-item {
      background: white;
      padding: 15px 25px;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 5px 20px rgba(0,0,0,0.08);
      transition: 0.3s;
      cursor: pointer;
    }

    .stat-item:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 10px 30px rgba(125,0,141,0.2);
    }

    .stat-number {
      font-size: 36px;
      font-weight: 800;
      color: var(--brand-purple);
    }

    .stat-label {
      font-size: 14px;
      color: gray;
    }

    .call-btn {
      background: var(--brand-purple);
      color: white;
      padding: 14px 22px;
      border-radius: 10px;
      border: none;
      font-size: 16px;
      cursor: pointer;
      margin-bottom: 20px;
    }

    .call-btn:hover {
      background: #5e006b;
    }

    .hero-description {
      font-size: 18px;
      color: #555;
      margin-bottom: 20px;
      max-width: 500px;
    }

    .features p {
      margin: 8px 0;
      color: #444;
      font-size: 15px;
    }

    .btn-secondary {
      background: var(--brand-orange);
      color: white;
      padding: 14px 26px;
      border-radius: 10px;
      border: none;
      font-weight: 600;
      cursor: pointer;
      font-size: 16px;
    }

    .btn-secondary:hover {
      background: #e66a00;
    }

    .hero-image {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .hero-image img {
      width: 720px;
      animation: floatImage 4s ease-in-out infinite;
    }

    @keyframes floatImage {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
      100% { transform: translateY(0px); }
    }

    @media (max-width: 768px) {
      .hero-container {
        flex-direction: column;
        text-align: center;
      }

      .hero-title {
        font-size: 30px;
      }

      .hero-stats {
        justify-content: center;
        flex-wrap: wrap;
      }

      .hero-image img {
        width: 300px;
        margin-top: 20px;
      }
    }

    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <h1 className="hero-title">
            "care without compromise" — DR CURE
          </h1>

          <div className="hero-stats">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <div className="stat-number">
                  {counts[i]}{stat.suffix}
                </div>
                <div className="stat-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <button className="call-btn" onClick={handleCallClick}>
            📞 +91 9493994244
          </button>

          <p className="hero-description">
            Advanced Laser Surgery & Fast Recovery At DR CURE Surgeries,
            we provide safe, effective and comfortable treatment with modern technology.
          </p>

          <div className="features">
            <p>✔ Access to Highly Experienced Specialists</p>
            <p>✔ Complimentary Consultation with Expert Doctors</p>
            <p>✔ Minimally Invasive Laser Treatments</p>
            <p>✔ Hassle-Free 100% Cashless Insurance Support</p>
          </div>

          <button className="btn-secondary" onClick={handleBookAppointment}>
            Book Free Consultation
          </button>

        </div>

        {/* ✅ IMAGE FIX WITH FALLBACK */}
        <div className="hero-image">
          <img
            src={doctorImg}
            alt="doctor"
            onError={(e) => {
              console.error("Image not found. Check path!");
              e.target.src = "https://via.placeholder.com/500"; // fallback image
            }}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;