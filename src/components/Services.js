import React, { useEffect, useState } from "react";

const Services = () => {

  const [selectedService, setSelectedService] = useState(null);

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

  const handleLearnMore = (service) => {

    setSelectedService(service);

    setTimeout(() => {

      const section = document.getElementById("service-info");

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }

    }, 100);

  };

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

    .services-scroll {
      overflow: hidden;
      position: relative;
    }

    .services-track {
      display: flex;
      gap: 30px;
      animation: scrollServices 45s linear infinite;
    }

    .services-track:hover {
      animation-play-state: paused;
    }

    @keyframes scrollServices {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .service-card {
      min-width: 250px;
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
    }

    /* SERVICE INFO SECTION */

    .service-info {
      margin-top: 80px;
      background: #f8f9fa;
      padding: 40px;
      border-radius: 15px;
      text-align: center;
    }

    .service-info h3 {
      color: var(--brand-purple);
      margin-bottom: 10px;
    }

    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section id="services" className="services">
      <div className="container">

        <h2 className="section-title">Our Medical Services</h2>

        <p className="services-intro">
          Comprehensive healthcare services with cutting-edge technology and expert care
        </p>

        <div className="services-scroll">

          <div className="services-track">

            {[...medicalServices, ...medicalServices].map((service, index) => (

              <div key={index} className="service-card">

                <div className="service-icon">{service.icon}</div>

                <h3 className="service-name">{service.name}</h3>

                <p className="service-description">{service.description}</p>

                <button
                  className="service-btn"
                  onClick={() => handleLearnMore(service)}
                >
                  Learn More →
                </button>

              </div>

            ))}

          </div>

        </div>

        {/* SERVICE INFO */}

        {selectedService && (

          <div id="service-info" className="service-info">

            <h3>{selectedService.name}</h3>

            <p>
              {selectedService.name} services at Dr Cure Surgeries are provided
              using advanced medical technology and highly experienced doctors.
              Our goal is to ensure safe treatment, faster recovery, and
              excellent patient care.
            </p>

            <p>
              Our specialists carefully diagnose each patient and recommend
              personalized treatment plans for the best medical outcomes.
            </p>

          </div>

        )}

      </div>
    </section>
  );
};

export default Services;