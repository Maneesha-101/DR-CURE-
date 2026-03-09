// // src/components/Hero.jsx
// import React, { useEffect } from "react";

// const Hero = () => {

//   const stats = [
//     { number: "70k+", label: "Happy Patients" },
//     { number: "50+", label: "Diseases" },
//     { number: "100+", label: "Hospitals" },
//     { number: "10+", label: "Cities" }
//   ];

//   const handleCallClick = () => {
//     alert("9493994244");
//   };

//   const handleBookAppointment = () => {
//     const formSection = document.querySelector(".consultation");
//     if (formSection) {
//       formSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   // Inject CSS into page
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = `
    
//     :root {
//       --brand-purple: #7D008D;
//       --brand-orange: #FF7A00;
//       --brand-white: #FFFFFF;
//     }

//     .hero {
//       background: linear-gradient(135deg, #f9f0fb 0%, #ffffff 100%);
//       min-height: 80vh;
//       display: flex;
//       align-items: center;
//       padding: 80px 20px;
//     }

//     .hero-container {
//       display: flex;
//       align-items: center;
//       gap: 60px;
//       max-width: 1200px;
//       margin: auto;
//       width: 100%;
//     }

//     .hero-content {
//       flex: 1;
//     }

//     .breadcrumb {
//       color: #666;
//       font-size: 14px;
//       margin-bottom: 20px;
//       font-weight: 500;
//     }

//     .hero-title {
//       font-family: 'Montserrat', sans-serif;
//       font-size: 48px;
//       font-weight: 700;
//       color: var(--brand-purple);
//       margin-bottom: 15px;
//       line-height: 1.2;
//     }

//     .hero-subtitle {
//       font-family: 'Montserrat', sans-serif;
//       font-size: 28px;
//       color: var(--brand-orange);
//       margin-bottom: 25px;
//       font-weight: 600;
//     }

//     .hero-description {
//       color: #555;
//       font-size: 18px;
//       line-height: 1.8;
//       margin-bottom: 35px;
//       max-width: 600px;
//     }

//     .hero-actions {
//       display: flex;
//       gap: 20px;
//       flex-wrap: wrap;
//     }

//     .btn {
//       padding: 14px 25px;
//       border-radius: 8px;
//       font-weight: 600;
//       cursor: pointer;
//       border: none;
//       transition: 0.3s ease;
//       font-size: 15px;
//     }

//     .btn-primary {
//       background-color: var(--brand-purple);
//       color: white;
//     }

//     .btn-primary:hover {
//       background-color: #5e006b;
//     }

//     .btn-secondary {
//       background-color: var(--brand-orange);
//       color: white;
//     }

//     .btn-secondary:hover {
//       background-color: #e56d00;
//     }

//     .hero-stats {
//       flex: 1;
//     }

//     .stats-grid {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//       gap: 25px;
//     }

//     .stat-card {
//       background: white;
//       border-radius: 15px;
//       padding: 30px 20px;
//       text-align: center;
//       box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
//       transition: all 0.3s ease;
//       border: 1px solid #eaeaea;
//       cursor: pointer;
//     }

//     .stat-card:hover {
//       transform: translateY(-10px);
//       box-shadow: 0 15px 40px rgba(125, 0, 141, 0.12);
//       border-color: var(--brand-purple);
//     }

//     .stat-number {
//       font-family: 'Montserrat', sans-serif;
//       font-size: 40px;
//       font-weight: 700;
//       color: var(--brand-purple);
//       margin-bottom: 8px;
//     }

//     .stat-label {
//       color: #666;
//       font-weight: 600;
//       font-size: 16px;
//       text-transform: uppercase;
//       letter-spacing: 0.5px;
//     }

//     /* Responsive */

//     @media (max-width: 992px) {
//       .hero-container {
//         flex-direction: column;
//         text-align: center;
//         gap: 40px;
//       }

//       .hero-title {
//         font-size: 36px;
//       }

//       .hero-subtitle {
//         font-size: 24px;
//       }

//       .hero-description {
//         font-size: 16px;
//         margin-left: auto;
//         margin-right: auto;
//       }

//       .hero-actions {
//         justify-content: center;
//       }
//     }

//     @media (max-width: 768px) {
//       .hero-title {
//         font-size: 30px;
//       }

//       .hero-subtitle {
//         font-size: 20px;
//       }

//       .hero-actions {
//         flex-direction: column;
//         align-items: center;
//       }

//       .hero-actions .btn {
//         width: 100%;
//         max-width: 300px;
//       }

//       .stats-grid {
//         gap: 15px;
//       }

//       .stat-card {
//         padding: 25px 15px;
//       }

//       .stat-number {
//         font-size: 32px;
//       }

//       .stat-label {
//         font-size: 14px;
//       }
//     }

//     @media (max-width: 480px) {
//       .hero-title {
//         font-size: 24px;
//       }

//       .hero-subtitle {
//         font-size: 18px;
//       }

//       .stats-grid {
//         grid-template-columns: 1fr;
//       }

//       .stat-number {
//         font-size: 28px;
//       }
//     }
//     `;
//     document.head.appendChild(style);
//   }, []);

//   return (
//     <section className="hero">
//       <div className="hero-container">

//         <div className="hero-content">
//           <div className="breadcrumb">Home → Piles</div>

//           <h1 className="hero-title">
//             Piles Treatment at DR CURE
//           </h1>

//           <h2 className="hero-subtitle">
//             Advanced Laser Surgery & Fast Recovery
//           </h2>

//           <p className="hero-description">
//             These are a common yet often overlooked condition caused by swollen
//             rectal tissues and veins. At DR Cure, we offer advanced, painless
//             treatment with cutting-edge technology. Get expert care and lasting
//             relief - book your consultation today.
//           </p>

//           <div className="hero-actions">
//             <button className="btn btn-primary" onClick={handleCallClick}>
//               Call to Schedule Your Consultation
//             </button>

//             <button className="btn btn-secondary" onClick={handleBookAppointment}>
//               Book Free Appointment
//             </button>
//           </div>
//         </div>

//         <div className="hero-stats">
//           <div className="stats-grid">
//             {stats.map((stat, index) => (
//               <div key={index} className="stat-card">
//                 <div className="stat-number">{stat.number}</div>
//                 <div className="stat-label">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;


// src/components/Hero.jsx

// src/components/Hero.jsx
import React, { useEffect } from "react";

const Hero = () => {

  const stats = [
    { number: "70k+", label: "Happy Patients" },
    { number: "50+", label: "Diseases" },
    { number: "100+", label: "Hospitals" },
    { number: "10+", label: "Cities" }
  ];

  const handleCallClick = () => {
    alert("9493994244");
  };

  const handleBookAppointment = () => {
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

    .hero {
      background: linear-gradient(135deg, #f9f0fb 0%, #ffffff 100%);
      min-height: 80vh;
      display: flex;
      align-items: center;
      padding: 80px 20px;
    }

    .hero-container {
      display: flex;
      align-items: center;
      gap: 60px;
      max-width: 1200px;
      margin: auto;
      width: 100%;
    }

    .hero-content {
      flex: 1;
    }

    .breadcrumb {
      color: #666;
      font-size: 14px;
      margin-bottom: 50px;
      font-weight: 500;
    }

    .hero-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 48px;
      font-weight: 700;
      color: var(--brand-purple);
      margin-bottom: 15px;
      line-height: 1.2;
    }

    .hero-subtitle {
      font-family: 'Montserrat', sans-serif;
      font-size: 28px;
      color: var(--brand-orange);
      margin-bottom: 25px;
      font-weight: 600;
    }

    .hero-description {
      color: #555;
      font-size: 18px;
      line-height: 1.8;
      margin-bottom: 35px;
      max-width: 600px;
    }

    .hero-actions {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .btn {
      padding: 14px 25px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      transition: 0.3s ease;
      font-size: 15px;
    }

    .btn-primary {
      background-color: var(--brand-purple);
      color: white;
    }

    .btn-primary:hover {
      background-color: #5e006b;
    }

    .btn-secondary {
      background-color: var(--brand-orange);
      color: white;
    }

    .btn-secondary:hover {
      background-color: #e56d00;
    }

    .hero-stats {
      flex: 1;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
    }

    .stat-card {
      background: white;
      border-radius: 15px;
      padding: 30px 20px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      border: 1px solid #eaeaea;
      cursor: pointer;
    }

    .stat-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 40px rgba(125, 0, 141, 0.12);
      border-color: var(--brand-purple);
    }

    .stat-number {
      font-family: 'Montserrat', sans-serif;
      font-size: 40px;
      font-weight: 700;
      color: var(--brand-purple);
      margin-bottom: 8px;
    }

    .stat-label {
      color: #666;
      font-weight: 600;
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    @media (max-width: 992px) {
      .hero-container {
        flex-direction: column;
        text-align: center;
        gap: 40px;
      }

      .hero-title {
        font-size: 36px;
      }

      .hero-subtitle {
        font-size: 24px;
      }

      .hero-description {
        font-size: 16px;
        margin-left: auto;
        margin-right: auto;
      }

      .hero-actions {
        justify-content: center;
      }
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 30px;
      }

      .hero-subtitle {
        font-size: 20px;
      }

      .hero-actions {
        flex-direction: column;
        align-items: center;
      }

      .hero-actions .btn {
        width: 100%;
        max-width: 300px;
      }

      .stats-grid {
        gap: 15px;
      }

      .stat-card {
        padding: 25px 15px;
      }

      .stat-number {
        font-size: 32px;
      }

      .stat-label {
        font-size: 14px;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 24px;
      }

      .hero-subtitle {
        font-size: 18px;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .stat-number {
        font-size: 28px;
      }
    }

    `;
    document.head.appendChild(style);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <div className="breadcrumb">Home → Piles</div>

          <h1 className="hero-title">
            Piles Treatment at DR CURE
          </h1>

          <h2 className="hero-subtitle">
            Advanced Laser Surgery & Fast Recovery
          </h2>

          <p className="hero-description">
            These are a common yet often overlooked condition caused by swollen
            rectal tissues and veins. At DR Cure, we offer advanced, painless
            treatment with cutting-edge technology. Get expert care and lasting
            relief - book your consultation today.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={handleCallClick}>
              Call to Schedule Your Consultation
            </button>

            <button className="btn btn-secondary" onClick={handleBookAppointment}>
              Book Free Appointment
            </button>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;