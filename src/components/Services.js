// src/components/Services.jsx
import React, { useEffect } from "react";

const Services = () => {

  const medicalServices = [
    { id: 1, name: 'Proctology', icon: '🩺', description: 'Specialized treatment for rectal and anal disorders' },
    { id: 2, name: 'Laparoscopy', icon: '🔬', description: 'Minimally invasive surgical procedures' },
    { id: 3, name: 'Urology', icon: '💧', description: 'Comprehensive urinary tract care' },
    { id: 4, name: 'Vascular', icon: '🩸', description: 'Treatment for blood vessel disorders' },
    { id: 5, name: 'Gynecology', icon: '🌸', description: "Women's reproductive health services" },
    { id: 6, name: 'Aesthetics', icon: '✨', description: 'Cosmetic and beauty treatments' },
    { id: 7, name: 'ENT', icon: '👂', description: 'Ear, nose and throat care' },
    { id: 8, name: 'Fertility', icon: '👶', description: 'Fertility treatments and IVF' },
    { id: 9, name: 'Orthopedics', icon: '🦴', description: 'Bone and joint treatments' },
    { id: 10, name: 'Weight Loss', icon: '⚖️', description: 'Weight management programs' }
  ];

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
    
    :root {
      --brand-purple: #7D008D;
      --brand-orange: #FF7A00;
      --brand-white: #FFFFFF;
    }

    .services {
      background-color: var(--brand-white);
      padding: 80px 20px;
    }

    .container {
      max-width: 1200px;
      margin: auto;
    }

    .section-title {
      text-align: center;
      font-family: 'Montserrat', sans-serif;
      font-size: 40px;
      font-weight: 700;
      color: var(--brand-purple);
      margin-bottom: 20px;
      position: relative;
      display: inline-block;
    }

    .section-title::after {
      content: '';
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background-color: var(--brand-orange);
      border-radius: 2px;
    }

    .services-intro {
      color: #666;
      font-size: 18px;
      max-width: 600px;
      margin: 0 auto 50px;
      line-height: 1.6;
      text-align: center;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 30px;
    }

    .service-card {
      background: #f8f9fa;
      border-radius: 15px;
      padding: 30px 25px;
      text-align: center;
      transition: all 0.4s ease;
      border: 2px solid transparent;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      overflow: hidden;
      cursor: pointer;
    }

    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background: linear-gradient(90deg, var(--brand-purple), #9e00b3);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s ease;
    }

    .service-card:hover::before {
      transform: scaleX(1);
    }

    .service-card:hover {
      transform: translateY(-10px);
      border-color: var(--brand-purple);
      box-shadow: 0 15px 40px rgba(125, 0, 141, 0.1);
      background: var(--brand-white);
    }

    .service-icon {
      font-size: 48px;
      margin-bottom: 20px;
      transition: transform 0.3s ease;
    }

    .service-card:hover .service-icon {
      transform: scale(1.1);
    }

    .service-name {
      font-family: 'Montserrat', sans-serif;
      font-size: 22px;
      font-weight: 600;
      color: var(--brand-purple);
      margin-bottom: 12px;
    }

    .service-description {
      color: #666;
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 20px;
      flex-grow: 1;
    }

    .service-btn {
      background: none;
      border: none;
      color: var(--brand-orange);
      font-weight: 600;
      cursor: pointer;
      padding: 8px 0;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 5px;
      transition: all 0.3s ease;
    }

    .service-btn:hover {
      color: #e66e00;
      gap: 10px;
    }

    @media (max-width: 1200px) {
      .services-grid {
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
      }
    }

    @media (max-width: 768px) {
      .section-title {
        font-size: 32px;
      }

      .services-intro {
        font-size: 16px;
        margin-bottom: 40px;
      }

      .services-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      .service-card {
        padding: 25px 20px;
      }

      .service-icon {
        font-size: 40px;
      }

      .service-name {
        font-size: 20px;
      }
    }

    @media (max-width: 576px) {
      .services-grid {
        grid-template-columns: 1fr;
        max-width: 350px;
        margin-left: auto;
        margin-right: auto;
      }

      .section-title {
        font-size: 28px;
      }

      .services-intro {
        font-size: 14px;
      }
    }

    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">Our Medical Services</h2>

        <p className="services-intro">
          Comprehensive healthcare services with cutting-edge technology and expert care
        </p>

        <div className="services-grid">
          {medicalServices.map((service, index) => (
            <div
              key={service.id}
              className="service-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <button className="service-btn">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;