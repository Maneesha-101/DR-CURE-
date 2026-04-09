import React from "react";
import { useNavigate } from "react-router-dom";

const BariatricSurgery = () => {

  const navigate = useNavigate();

  const handleConsultClick = () => {
    navigate("/consultation");
  };

  return (
    <>
      <style>{`

:root{
  --brand-purple:#7D008D;
  --brand-orange:#FF7A00;
  --brand-white:#FFFFFF;
  --footer-dark:#002B45;
  --cyan-accent:#1EC1D1;
}

/* HERO SECTION */
.bariatric-hero{
  background:linear-gradient(135deg, #F3E6F7, #E6FAFC);
  padding:180px 20px 60px;
  font-family:'Poppins',sans-serif;
}

.bariatric-container{
  max-width:1100px;
  margin:auto;
}

/* BREADCRUMB */
.breadcrumb{
  color:#666;
  margin-bottom:20px;
  font-size:14px;
}

/* TITLE */
.hero-title{
  font-size:48px;
  font-weight:700;
  color:var(--footer-dark);
  margin-bottom:20px;
}

/* DESCRIPTION */
.hero-text{
  font-size:18px;
  color:#444;
  line-height:1.6;
  max-width:950px;
  margin-bottom:30px;
}

/* CTA BUTTON (ORANGE) */
.hero-btn{
  background:var(--brand-orange);
  color:var(--brand-white);
  padding:16px 28px;
  border:none;
  border-radius:12px;
  font-size:18px;
  font-weight:600;
  cursor:pointer;
  transition:0.3s;
}

.hero-btn:hover{
  background:#e66a00;
}

/* STATS BOX (HORIZONTAL CARD STYLE) */
.stats-box{
  background:var(--brand-white);
  border-radius:20px;
  display:flex;
  justify-content:space-around;
  padding:30px;
  margin-top:60px;
  box-shadow:0 5px 20px rgba(0,0,0,0.08);
  flex-wrap:wrap;
}

.stat{
  text-align:center;
}

.stat h2{
  font-size:36px;
  color:var(--brand-purple);
}

.stat p{
  color:#777;
}

/* MOBILE */
@media(max-width:900px){
  .hero-title{
    font-size:30px;
  }

  .stats-box{
    flex-direction:column;
    gap:20px;
  }
}

      `}</style>

      <section className="bariatric-hero">
        <div className="bariatric-container">

          <p className="breadcrumb">
            Home » Home » Bariatric surgery
          </p>

          <h1 className="hero-title">
            Bariatric Surgery - A Weight Loss Treatment
          </h1>

          <p className="hero-text">
            Bariatric surgery is one of the most effective treatments for obesity and weight-related conditions. 
            It helps improve overall health and lifestyle by reducing excess weight. 
            At dr cure Surgeries, our expert surgeons provide advanced and safe bariatric procedures with high success rates.
            Bariatric surgery is a treatment that helps a person lose excess body weight. Some people choose to undergo surgery themselves. For others, the bariatric surgery procedure is generally recommended by a  surgeon to resolve various potential health concerns caused due to overweight.

If you are morbidly obese, your healthcare provider is likely to suggest you lose some weight or choose bariatric surgery to address obesity-related health problems.
          </p>

          <button className="hero-btn" onClick={handleConsultClick}>
            Call to Schedule Your Consultation
          </button>

          {/* STATS */}
          <div className="stats-box">

            <div className="stat">
              <h2>70k+</h2>
              <p>Happy Patients</p>
            </div>

            <div className="stat">
              <h2>50+</h2>
              <p>Disease</p>
            </div>

            <div className="stat">
              <h2>100+</h2>
              <p>Hospitals</p>
            </div>

            <div className="stat">
              <h2>10+</h2>
              <p>Cities</p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
};

export default BariatricSurgery;