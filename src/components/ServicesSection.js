

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// // ✅ IMPORT IMAGES
// import femoral from "../assets/femoral.jpg";
// import incisional from "../assets/incisional.jpeg";
// import hiatal from "../assets/hiatal.jpg";
// import appendix from "../assets/appendix.jpg";
// import umbilical from "../assets/umbilical.jpg";
// import inguinal from "../assets/inguinal.jpg";

// const ServicesSection = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const style = document.createElement("style");

//     style.innerHTML = `
//     :root{
//       --brand-purple:#7D008D;
//       --brand-orange:#FF7A00;
//     }

//     .hepta-section{
//       padding:60px 20px;
//       background:#f8f9fb;
//     }

//     .container{
//       max-width:1200px;
//       margin:auto;
//     }

//     .section-title{
//       text-align:center;
//       font-size:32px;
//       font-weight:700;
//       margin-bottom:40px;
//       color:var(--brand-purple);
//     }

//     .speciality-grid{
//       display:grid;
//       grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
//       gap:20px;
//     }

//     .speciality-card{
//       display:flex;
//       gap:15px;
//       background:#fff;
//       padding:15px;
//       border-radius:12px;
//       box-shadow:0 2px 8px rgba(0,0,0,0.05);
//       align-items:center;
//       cursor:pointer;
//       transition:0.3s;
//     }

//     .speciality-card:hover{
//       transform:translateY(-5px);
//     }

//     .speciality-card img{
//       width:80px;
//       height:80px;
//       border-radius:10px;
//       object-fit:cover;
//     }

//     .speciality-title{
//       font-size:20px;
//       font-weight:600;
//       color:#0b3c5d;
//     }

//     .speciality-desc{
//       font-size:13px;
//       color:#555;
//     }
//     `;

//     document.head.appendChild(style);
//   }, []);

//   return (
//     <section className="cure-section">
//       <div className="container">

//         <h2 className="section-title">Our Specialities</h2>

//         <div className="speciality-grid">

//           {/* ✅ EXACT MATCH WITH YOUR PAGES */}

//           <div className="speciality-card" onClick={() => navigate("/FemoralHernia")}>
//             <img src={femoral} alt="Femoral Hernia" />
//             <div>
//               <div className="speciality-title">Femoral Hernia</div>
//               <div className="speciality-desc">Advanced surgical care with faster recovery.</div>
//             </div>
//           </div>

//           <div className="speciality-card" onClick={() => navigate("/IncisionalHernia")}>
//             <img src={incisional} alt="Incisional Hernia" />
//             <div>
//               <div className="speciality-title">Incisional Hernia</div>
//               <div className="speciality-desc">Modern treatment with minimal downtime.</div>
//             </div>
//           </div>

//           <div className="speciality-card" onClick={() => navigate("/HiatalHernia")}>
//             <img src={hiatal} alt="Hiatal Hernia" />
//             <div>
//               <div className="speciality-title">Hiatal Hernia</div>
//               <div className="speciality-desc">Safe laparoscopic procedures.</div>
//             </div>
//           </div>

//           <div className="speciality-card" onClick={() => navigate("/appendicitis")}>
//             <img src={appendix} alt="Appendicitis" />
//             <div>
//               <div className="speciality-title">Appendicitis</div>
//               <div className="speciality-desc">Quick relief with painless surgery.</div>
//             </div>
//           </div>

//           <div className="speciality-card" onClick={() => navigate("/UmbilicalHernia")}>
//             <img src={umbilical} alt="Umbilical Hernia" />
//             <div>
//               <div className="speciality-title">Umbilical Hernia</div>
//               <div className="speciality-desc">Safe procedure with long-term relief.</div>
//             </div>
//           </div>

//           <div className="speciality-card" onClick={() => navigate("/InguinalHernia")}>
//             <img src={inguinal} alt="Inguinal Hernia" />
//             <div>
//               <div className="speciality-title">Inguinal Hernia</div>
//               <div className="speciality-desc">Expert surgeons & advanced care.</div>
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ✅ IMPORT IMAGES
import femoral from "../assets/femoral.jpg";
import incisional from "../assets/incisional.jpeg";
import hiatal from "../assets/hiatal.jpg";
import appendix from "../assets/appendix.jpg";
import umbilical from "../assets/umbilical.jpg";
import inguinal from "../assets/inguinal.jpg";

const ServicesSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
    :root{
      --brand-purple:#7D008D;
      --brand-orange:#FF7A00;
    }

    .cure-section{
      padding:60px 20px;
      background:#f8f9fb;
    }

    .container{
      max-width:1200px;
      margin:auto;
    }

    .section-title{
      text-align:center;
      font-size:32px;
      font-weight:700;
      margin-bottom:40px;
      color:var(--brand-purple);
    }

    .speciality-grid{
      display:grid;
      grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
      gap:20px;
    }

    .speciality-card{
      display:flex;
      gap:15px;
      background:#fff;
      padding:15px;
      border-radius:12px;
      box-shadow:0 2px 8px rgba(0,0,0,0.05);
      align-items:center;
      cursor:pointer;
      transition:0.3s;
    }

    .speciality-card:hover{
      transform:translateY(-5px);
    }

    .speciality-card img{
      width:80px;
      height:80px;
      border-radius:10px;
      object-fit:cover;
    }

    .speciality-title{
      font-size:20px;
      font-weight:600;
      color:#0b3c5d;
    }

    .speciality-desc{
      font-size:13px;
      color:#555;
    }
    `;

    document.head.appendChild(style);
  }, []);

  return (
    <section className="cure-section">
      <div className="container">

        <h2 className="section-title">Our Specialities</h2>

        <div className="speciality-grid">

          <div className="speciality-card" onClick={() => navigate("/femoral-hernia")}>
            <img src={femoral} alt="Femoral Hernia" />
            <div>
              <div className="speciality-title">Femoral Hernia</div>
              <div className="speciality-desc">Advanced surgical care with faster recovery.</div>
            </div>
          </div>

          <div className="speciality-card" onClick={() => navigate("/incisional-hernia")}>
            <img src={incisional} alt="Incisional Hernia" />
            <div>
              <div className="speciality-title">Incisional Hernia</div>
              <div className="speciality-desc">Modern treatment with minimal downtime.</div>
            </div>
          </div>

          <div className="speciality-card" onClick={() => navigate("/hiatal-hernia")}>
            <img src={hiatal} alt="Hiatal Hernia" />
            <div>
              <div className="speciality-title">Hiatal Hernia</div>
              <div className="speciality-desc">Safe laparoscopic procedures.</div>
            </div>
          </div>

          <div className="speciality-card" onClick={() => navigate("/appendicitis")}>
            <img src={appendix} alt="Appendicitis" />
            <div>
              <div className="speciality-title">Appendicitis</div>
              <div className="speciality-desc">Quick relief with painless surgery.</div>
            </div>
          </div>

          <div className="speciality-card" onClick={() => navigate("/umbilical-hernia")}>
            <img src={umbilical} alt="Umbilical Hernia" />
            <div>
              <div className="speciality-title">Umbilical Hernia</div>
              <div className="speciality-desc">Safe procedure with long-term relief.</div>
            </div>
          </div>

          <div className="speciality-card" onClick={() => navigate("/inguinal-hernia")}>
            <img src={inguinal} alt="Inguinal Hernia" />
            <div>
              <div className="speciality-title">Inguinal Hernia</div>
              <div className="speciality-desc">Expert surgeons & advanced care.</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;