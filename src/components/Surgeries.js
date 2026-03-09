// src/components/Surgeries.jsx
import React, { useState, useEffect } from "react";

const Surgeries = () => {

  const [showAllSurgeries] = useState(false);
  const [selectedSurgery, setSelectedSurgery] = useState(null);

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

  const visibleSurgeries = showAllSurgeries ? surgeries : surgeries.slice(0,8);

  const handleSurgeryClick = (surgery) => {

    setSelectedSurgery(surgery);

    setTimeout(()=>{

      const section = document.getElementById("surgery-info");

      if(section){
        section.scrollIntoView({behavior:"smooth"});
      }

    },100);

  };



  useEffect(()=>{

    const style = document.createElement("style");

    style.innerHTML = `

    :root{
      --brand-purple:#7D008D;
      --brand-orange:#FF7A00;
    }

    .surgeries{
      padding:80px 20px;
      background:#fff;
    }

    .container{
      max-width:1200px;
      margin:auto;
    }

    .section-title{
      text-align:center;
      font-size:34px;
      color:var(--brand-purple);
      margin-bottom:10px;
      font-weight:700;
    }

    .section-subtitle{
      text-align:center;
      color:#666;
      margin-bottom:40px;
    }

    /* AUTO SCROLL AREA */

    .surgeries-scroll{
      overflow:hidden;
      position:relative;
      margin-bottom:40px;
    }

    .surgeries-track{
      display:flex;
      gap:20px;
      animation:scroll 40s linear infinite;
    }

    .surgeries-track:hover{
      animation-play-state:paused;
    }

    @keyframes scroll{
      0%{transform:translateX(0)}
      100%{transform:translateX(-50%)}
    }

    .surgery-card{
      min-width:220px;
      background:#f8f9fa;
      padding:25px;
      border-radius:12px;
      text-align:center;
      cursor:pointer;
      transition:0.3s;
    }

    .surgery-card:hover{
      transform:translateY(-8px);
      border:2px solid var(--brand-purple);
    }

    .surgery-icon{
      font-size:40px;
      margin-bottom:10px;
    }

    .surgery-name{
      font-weight:600;
      color:var(--brand-purple);
    }

    .surgery-category{
      font-size:12px;
      color:#666;
    }

    .view-more-container{
      text-align:center;
      margin-bottom:70px;
    }

    .view-more-btn{
      border:none;
      background:none;
      color:var(--brand-orange);
      font-size:16px;
      cursor:pointer;
      font-weight:600;
    }

    /* Surgery Info */

    .surgery-info{
      margin-top:80px;
      background:#f8f9fa;
      padding:40px;
      border-radius:15px;
      text-align:center;
    }

    .surgery-info h3{
      color:var(--brand-purple);
      margin-bottom:10px;
    }

    `;

    document.head.appendChild(style);

  },[]);

  return(

    <section className="surgeries">

      <div className="container">

        <h2 className="section-title">
          DR CURE Surgeries
        </h2>

        <p className="section-subtitle">
          Advanced surgical treatments with minimal invasion and faster recovery
        </p>

        {/* AUTO SCROLL SURGERY CARDS */}

        <div className="surgeries-scroll">

          <div className="surgeries-track">

            {[...visibleSurgeries,...visibleSurgeries].map((surgery,index)=>(

              <div
                key={index}
                className="surgery-card"
                onClick={()=>handleSurgeryClick(surgery)}
              >

                <div className="surgery-icon">
                  {surgery.icon}
                </div>

                <h3 className="surgery-name">
                  {surgery.name}
                </h3>

                <span className="surgery-category">
                  {surgery.category}
                </span>

              </div>

            ))}

          </div>

        </div>

        

        {/* SURGERY INFORMATION */}

        {selectedSurgery && (

          <div id="surgery-info" className="surgery-info">

            <h3>
              {selectedSurgery.name} Surgery
            </h3>

            <p>
              {selectedSurgery.name} treatment at Dr Cure Surgeries uses modern
              minimally invasive surgical techniques. Our experienced surgeons
              ensure faster recovery, minimal pain and excellent patient care.
            </p>

            <p>
              Our hospitals are equipped with advanced medical technology
              and highly qualified doctors who provide safe and effective
              treatment for patients.
            </p>

          </div>

        )}

      </div>

    </section>

  );

};

export default Surgeries;