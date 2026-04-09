// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Gynecology = () => {
//   const navigate = useNavigate();

//   const handleConsultClick = () => {
//     navigate("/consultation");
//   };

//   return (
//     <>
//       <style>{`
//         :root {
//           --brand-purple: #7D008D;
//           --brand-orange: #FF7A00;
//           --brand-white: #FFFFFF;
//           --footer-dark: #002B45;
//           --soft-peach: #F3E0D4;
//         }

//         .gynecology {
//           background: var(--soft-peach);
//           padding: 120px 20px 60px;
//           font-family: 'Poppins', sans-serif;
//         }

//         .gynecology-container {
//           max-width: 1100px;
//           margin: auto;
//         }

//         .gynecology-title {
//           font-size: 42px;
//           font-weight: 700;
//           color: var(--brand-purple);
//           margin-bottom: 20px;
//         }

//         .gynecology-text {
//           font-size: 18px;
//           line-height: 1.7;
//           max-width: 900px;
//           margin-bottom: 30px;
//           color: #333;
//         }

//         .call-btn {
//           background: var(--brand-orange);
//           color: white;
//           border: none;
//           padding: 16px 28px;
//           border-radius: 12px;
//           font-size: 18px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: 0.3s;
//           margin-bottom: 40px;
//         }

//         .call-btn:hover {
//           background: #e46d00;
//           transform: translateY(-2px);
//         }

//         /* STATS SECTION */
//         .stats-box {
//           background: var(--brand-white);
//           border-radius: 20px;
//           display: flex;
//           justify-content: space-around;
//           padding: 30px;
//           margin-top: 40px;
//           box-shadow: 0 10px 30px rgba(0,0,0,0.08);
//           flex-wrap: wrap;
//         }

//         .stat { text-align: center; flex: 1; min-width: 150px; }
//         .stat h2 { font-size: 36px; color: var(--brand-purple); margin-bottom: 5px; }
//         .stat p { color: #666; font-weight: 500; }

//         /* CONTENT CARDS */
//         .info-section {
//           padding: 60px 20px;
//           background: #fff;
//         }

//         .info-card {
//           background: #fff;
//           border-radius: 20px;
//           padding: 40px;
//           margin-bottom: 30px;
//           box-shadow: 0 4px 20px rgba(0,0,0,0.05);
//           border-left: 6px solid var(--brand-purple);
//         }

//         .card-title {
//           font-size: 28px;
//           color: var(--footer-dark);
//           margin-bottom: 20px;
//           font-weight: 700;
//         }

//         .grid-layout {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 25px;
//         }

//         .list-style {
//           padding-left: 20px;
//         }

//         .list-style li {
//           margin-bottom: 12px;
//           line-height: 1.6;
//           color: #444;
//         }

//         @media(max-width:900px){
//           .gynecology-title { font-size: 32px; }
//           .stats-box { flex-direction: column; gap: 20px; }
//           .info-card { padding: 25px; }
//         }
//       `}</style>

//       {/* Hero Section */}
//       <section className="gynecology">
//         <div className="gynecology-container">
//           <h2 className="gynecology-title">Expert Gynecology & Obstetric Care</h2>
//           <p className="gynecology-text">
//             Gynecology is the specialized branch of medicine dedicated to the health of the 
//             female reproductive system. At <strong>Dr Cure Surgeries</strong>, our expert 
//             OB-GYNs provide sensitive, empathetic, and confidential care for everything 
//             from routine check-ups to advanced surgical procedures.
//           </p>
          
//           <button className="call-btn" onClick={handleConsultClick}>
//             📞 Call Us: +91 94939 94244
//           </button>

//           <div className="stats-box">
//             <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
//             <div className="stat"><h2>50+</h2><p>Specialties</p></div>
//             <div className="stat"><h2>100+</h2><p>Hospitals</p></div>
//             <div className="stat"><h2>10+</h2><p>Cities</p></div>
//           </div>
//         </div>
//       </section>

//       {/* Main Content */}
//       <section className="info-section">
//         <div className="gynecology-container">
          
//           <div className="info-card">
//             <h3 className="card-title">What is an OB-GYN?</h3>
//             <p className="gynecology-text" style={{fontSize: '16px'}}>
//               Modern gynecologists often specialize in both the reproductive system and fertility, 
//               known as <strong>Obstetrician Gynecologists (OB-GYN)</strong>. They are trained in 
//               both medicine and surgery to provide solutions for irregular periods, infections, 
//               pregnancy, ovarian cysts, and pelvic health.
//             </p>
//           </div>

//           <div className="grid-layout">
//             <div className="info-card">
//               <h3 className="card-title">When to Visit?</h3>
//               <ul className="list-style">
//                 <li>Irregular or painful menstrual cycles.</li>
//                 <li>Unusual vaginal discharge or itching.</li>
//                 <li>Planning for pregnancy or fertility concerns.</li>
//                 <li>Abdominal bloating or pelvic pain.</li>
//                 <li>Requirement for safe & confidential abortion services.</li>
//               </ul>
//             </div>

//             <div className="info-card">
//               <h3 className="card-title">Common Procedures</h3>
//               <ul className="list-style">
//                 <li><strong>Ovarian Cystectomy:</strong> Removal of cysts.</li>
//                 <li><strong>Hysterectomy:</strong> Uterine surgical solutions.</li>
//                 <li><strong>Vaginoplasty:</strong> For vaginal prolapse/tightening.</li>
//                 <li><strong>Labiaplasty:</strong> For enlarged labia concerns.</li>
//                 <li><strong>Dilation & Curettage:</strong> For miscarriages or ectopic pregnancy.</li>
//               </ul>
//             </div>
//           </div>

//           <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
//             <h3 className="card-title">The Dr Cure Surgeries Safe Space</h3>
//             <p className="gynecology-text" style={{fontSize: '16px'}}>
//               We prioritize absolute <strong>Privacy and Confidentiality</strong>. Our female 
//               OB-GYNs carry 7–10 years of experience and provide an environment free of 
//               moral judgment. Whether you are visiting for a routine exam or surgical 
//               termination of pregnancy, your comfort and consent are our highest standards.
//             </p>
//           </div>

//           <div className="info-card">
//             <h3 className="card-title">Why Choose Us?</h3>
//             <div className="grid-layout">
//               <div>
//                 <strong>End-to-End Assistance:</strong>
//                 <p style={{fontSize: '14px'}}>From the first call to follow-up, we handle hospital admissions and discharge.</p>
//               </div>
//               <div>
//                 <strong>Financial Ease:</strong>
//                 <p style={{fontSize: '14px'}}>We offer No-Cost EMI options and dedicated insurance assistance for medically necessary procedures.</p>
//               </div>
//               <div>
//                 <strong>Free Logistics:</strong>
//                 <p style={{fontSize: '14px'}}>Complimentary pick-up and drop-off on the day of your surgery across the city.</p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default Gynecology;

import React from "react";
import { useNavigate } from "react-router-dom";

const Gynecology = () => {
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
          --soft-peach: #F3E0D4;
        }

        /* ✅ FIXED HEADER OVERLAP ISSUE */
        .gynecology {
          background: var(--soft-peach);
          padding: 180px 20px 60px; /* 🔥 increased top space */
          font-family: 'Poppins', sans-serif;
        }

        .gynecology-container {
          max-width: 1100px;
          margin: auto;
        }

        .gynecology-title {
          font-size: 42px;
          font-weight: 700;
          color: var(--brand-purple);
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .gynecology-text {
          font-size: 18px;
          line-height: 1.7;
          max-width: 900px;
          margin-bottom: 30px;
          color: #333;
        }

        .call-btn {
          background: var(--brand-orange);
          color: white;
          border: none;
          padding: 16px 28px;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
          margin-bottom: 40px;
        }

        .call-btn:hover {
          background: #e46d00;
          transform: translateY(-2px);
        }

        /* STATS SECTION */
        .stats-box {
          background: var(--brand-white);
          border-radius: 20px;
          display: flex;
          justify-content: space-around;
          padding: 30px;
          margin-top: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          flex-wrap: wrap;
        }

        .stat { text-align: center; flex: 1; min-width: 150px; }
        .stat h2 { font-size: 36px; color: var(--brand-purple); margin-bottom: 5px; }
        .stat p { color: #666; font-weight: 500; }

        /* CONTENT CARDS */
        .info-section {
          padding: 60px 20px;
          background: #fff;
        }

        .info-card {
          background: #fff;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 30px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          border-left: 6px solid var(--brand-purple);
        }

        .card-title {
          font-size: 28px;
          color: var(--footer-dark);
          margin-bottom: 20px;
          font-weight: 700;
        }

        .grid-layout {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }

        .list-style {
          padding-left: 20px;
        }

        .list-style li {
          margin-bottom: 12px;
          line-height: 1.6;
          color: #444;
        }

        @media(max-width:900px){
          .gynecology {
            padding: 150px 20px 50px; /* responsive fix */
          }
          .gynecology-title { font-size: 32px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="gynecology">
        <div className="gynecology-container">
          <h2 className="gynecology-title">Expert Gynecology & Obstetric Care</h2>

          <p className="gynecology-text">
            Gynecology is the specialized branch of medicine dedicated to the 
            female reproductive system. At <strong>Dr Cure Surgeries</strong>, our expert 
            OB-GYNs provide sensitive, empathetic, and confidential care for everything 
            from routine check-ups to advanced surgical procedures.
          </p>

          <button className="call-btn" onClick={handleConsultClick}>
            📞 Call Us: +91 94939 94244
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Specialties</p></div>
            <div className="stat"><h2>100+</h2><p>Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities</p></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="info-section">
        <div className="gynecology-container">

          <div className="info-card">
            <h3 className="card-title">What is an OB-GYN?</h3>
            <p className="gynecology-text" style={{fontSize: '16px'}}>
              Modern gynecologists often specialize in both the reproductive system and fertility, 
              known as <strong>Obstetrician Gynecologists (OB-GYN)</strong>. They are trained in 
              both medicine and surgery to provide solutions for irregular periods, infections, 
              pregnancy, ovarian cysts, and pelvic health.
            </p>
          </div>

          <div className="grid-layout">
            <div className="info-card">
              <h3 className="card-title">When to Visit?</h3>
              <ul className="list-style">
                <li>Irregular or painful menstrual cycles.</li>
                <li>Unusual vaginal discharge or itching.</li>
                <li>Planning for pregnancy or fertility concerns.</li>
                <li>Abdominal bloating or pelvic pain.</li>
                <li>Requirement for safe & confidential abortion services.</li>
              </ul>
            </div>

            <div className="info-card">
              <h3 className="card-title">Common Procedures</h3>
              <ul className="list-style">
                <li><strong>Ovarian Cystectomy:</strong> Removal of cysts.</li>
                <li><strong>Hysterectomy:</strong> Uterine surgical solutions.</li>
                <li><strong>Vaginoplasty:</strong> For vaginal prolapse/tightening.</li>
                <li><strong>Labiaplasty:</strong> For enlarged labia concerns.</li>
                <li><strong>Dilation & Curettage:</strong> For miscarriages or ectopic pregnancy.</li>
              </ul>
            </div>
          </div>

          <div className="info-card" style={{borderLeftColor: 'var(--brand-orange)'}}>
            <h3 className="card-title">The Dr Cure Surgeries Safe Space</h3>
            <p className="gynecology-text" style={{fontSize: '16px'}}>
              We prioritize absolute <strong>Privacy and Confidentiality</strong>. Our female 
              OB-GYNs carry 7–10 years of experience and provide an environment free of 
              moral judgment. Whether you are visiting for a routine exam or surgical 
              termination of pregnancy, your comfort and consent are our highest standards.
            </p>
          </div>

          <div className="info-card">
            <h3 className="card-title">Why Choose Us?</h3>
            <div className="grid-layout">
              <div>
                <strong>End-to-End Assistance:</strong>
                <p style={{fontSize: '14px'}}>From the first call to follow-up, we handle hospital admissions and discharge.</p>
              </div>
              <div>
                <strong>Financial Ease:</strong>
                <p style={{fontSize: '14px'}}>We offer No-Cost EMI options and dedicated insurance assistance for medically necessary procedures.</p>
              </div>
              <div>
                <strong>Free Logistics:</strong>
                <p style={{fontSize: '14px'}}>Complimentary pick-up and drop-off on the day of your surgery across the city.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Gynecology;