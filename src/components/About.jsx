import React, { useEffect } from "react";

const About = () => {

  useEffect(() => {

    const style = document.createElement("style");

    style.innerHTML = `

    :root{
      --brand-purple:#7D008D;
      --brand-orange:#FF7A00;
    }

    .about{
      padding:90px 20px;
      background:white;
    }

    .about-container{
      max-width:1200px;
      margin:auto;
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:50px;
      align-items:center;
    }

    .about-title{
      font-size:36px;
      font-weight:700;
      color:var(--brand-purple);
      margin-bottom:20px;
    }

    .about-text{
      color:#555;
      line-height:1.8;
      font-size:16px;
      margin-bottom:15px;
    }

    .about-highlights{
      margin-top:20px;
    }

    .highlight{
      display:flex;
      align-items:center;
      gap:10px;
      margin-bottom:10px;
      font-weight:500;
      color:#333;
    }

    .highlight-icon{
      color:var(--brand-orange);
      font-size:20px;
    }

    .about-image{
      background:linear-gradient(135deg,#f6e6ff,#fff);
      border-radius:15px;
      padding:40px;
      text-align:center;
      box-shadow:0 10px 30px rgba(0,0,0,0.08);
    }

    .about-image h3{
      color:var(--brand-purple);
      margin-bottom:10px;
    }

    @media(max-width:900px){
      .about-container{
        grid-template-columns:1fr;
      }
    }

    `;

    document.head.appendChild(style);

  },[]);

  return (

    <section id="about" className="about">

      <div className="about-container">

        <div>

          <h2 className="about-title">
            About Dr Cure Surgeries
          </h2>

          <p className="about-text">
            Dr Cure Surgeries is a trusted healthcare center providing advanced
            and painless surgical treatments with modern medical technology.
            Our mission is to deliver safe, effective, and patient-focused
            healthcare solutions.
          </p>

          <p className="about-text">
            Our experienced doctors specialize in minimally invasive laser
            procedures that ensure faster recovery, minimal pain, and better
            outcomes for patients.
          </p>

          <div className="about-highlights">

            <div className="highlight">
              <span className="highlight-icon">✔</span>
              100,000+ Successfully Treated Patients
            </div>

            <div className="highlight">
              <span className="highlight-icon">✔</span>
              Advanced Laser Surgery Technology
            </div>

            <div className="highlight">
              <span className="highlight-icon">✔</span>
              Experienced Specialist Doctors
            </div>

            <div className="highlight">
              <span className="highlight-icon">✔</span>
              50+ Treatments Available
            </div>

            <div className="highlight">
              <span className="highlight-icon">✔</span>
              Trusted Hospitals in 10+ Cities
            </div>

          </div>

        </div>

        <div className="about-image">

          <h3>Why Choose Dr Cure?</h3>

          <p>
            We combine medical expertise with compassionate care to provide
            the best treatment experience for our patients.
          </p>

          <p>
            From consultation to recovery, our team ensures comfort,
            transparency, and high-quality healthcare services.
          </p>

        </div>

      </div>

    </section>

  );
};

export default About;