import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Surgeries = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const surgeries = [
    { name: "Piles", path: "/piles", img: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png" },
    { name: "Anal Fistula", path: "/fistula", img: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png" },
    { name: "Anal Fissure", path: "/fissure", img: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png" },

    { name: "RIRS", path: "/rirs", img: "https://cdn-icons-png.flaticon.com/512/3774/3774290.png" },
    { name: "Hydrocele", path: "/hydrocele", img: "https://cdn-icons-png.flaticon.com/512/2966/2966488.png" },

    { name: "Vaginoplasty", path: "/gynecology", img: "https://cdn-icons-png.flaticon.com/512/4341/4341139.png" },
    { name: "Breast Augmentation", path: "/aesthetics", img: "https://cdn-icons-png.flaticon.com/512/3774/3774293.png" },

    { name: "Laparoscopy", path: "/laparoscopy", img: "https://cdn-icons-png.flaticon.com/512/4320/4320371.png" },
    { name: "Laser Circumcision", path: "/lasercircumcision", img: "https://cdn-icons-png.flaticon.com/512/2966/2966484.png" },

    { name: "URSL", path: "/ursl", img: "https://cdn-icons-png.flaticon.com/512/3774/3774290.png" },
    { name: "Uterine Fibroid", path: "/gynecology", img: "https://cdn-icons-png.flaticon.com/512/4341/4341152.png" },
    { name: "Hymenoplasty", path: "/gynecology", img: "https://cdn-icons-png.flaticon.com/512/4341/4341139.png" },

    { name: "PCNL", path: "/pcnl", img: "https://cdn-icons-png.flaticon.com/512/2966/2966488.png" },
    { name: "Septoplasty", path: "/septoplasty", img: "https://cdn-icons-png.flaticon.com/512/2966/2966491.png" },
    { name: "Tonsillectomy", path: "/tonsillectomy", img: "https://cdn-icons-png.flaticon.com/512/2966/2966495.png" },
    { name: "Gynecomastia", path: "/gynecomastia", img: "https://cdn-icons-png.flaticon.com/512/3774/3774293.png" },

    { name: "Liposuction", path: "/aesthetics", img: "https://cdn-icons-png.flaticon.com/512/2966/2966486.png" },
    { name: "Lipoma", path: "/lipoma", img: "https://cdn-icons-png.flaticon.com/512/4320/4320375.png" },

    { name: "MTP", path: "/mtp", img: "https://cdn-icons-png.flaticon.com/512/3774/3774300.png" },
    { name: "Spine Surgery", path: "/orthopedics", img: "https://cdn-icons-png.flaticon.com/512/3774/3774303.png" },

    { name: "ENT", path: "/ent", img: "https://cdn-icons-png.flaticon.com/512/2966/2966493.png" },
    { name: "Thyroidectomy", path: "/thyroidectomy", img: "https://cdn-icons-png.flaticon.com/512/2966/2966482.png" },
    { name: "Varicocele", path: "/varicocele", img: "https://cdn-icons-png.flaticon.com/512/4320/4320367.png" },

    { name: "Stapler Circumcision", path: "/staplercircumcision", img: "https://cdn-icons-png.flaticon.com/512/2966/2966484.png" },
    { name: "Adenoidectomy", path: "/adenoidectomy", img: "https://cdn-icons-png.flaticon.com/512/2966/2966497.png" },

    { name: "Knee Replacement", path: "/kneereplacement", img: "https://cdn-icons-png.flaticon.com/512/3774/3774300.png" },
    { name: "Male fertility", path: "/malefertility", img: "https://cdn-icons-png.flaticon.com/512/3774/3774296.png" },

    { name: "Hysterectomy", path: "/hysterectomy", img: "https://cdn-icons-png.flaticon.com/512/4341/4341152.png" },
  ];

  const visible = showAll ? surgeries : surgeries.slice(0, 6);

  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
    .surgeries{
      background:#7D008D;
      padding:60px 20px;
    }

    .container{
      max-width:1200px;
      margin:auto;
    }

    .grid{
      display:grid;
      grid-template-columns:repeat(6,1fr);
      gap:20px;
    }

    .card{
      background:#f4f4f4;
      border-radius:15px;
      padding:15px;
      text-align:center;
      cursor:pointer;
      transition:0.3s;
      overflow:hidden; /* ✅ FIX */
    }

    .card:hover{
      transform:translateY(-5px);
      background:#fff;
    }

    .icon{
      width:60px;
      height:60px;
      margin:auto;
      display:flex;
      align-items:center;
      justify-content:center;
    }

    .icon img{
      max-width:100%;   /* ✅ FIX */
      max-height:100%;  /* ✅ FIX */
      object-fit:contain; /* ✅ FIX */
    }

    .name{
      font-size:13px;
      font-weight:600;
      margin-top:8px;
      color:#0f3b57;
    }

    .btn{
      margin-top:30px;
      padding:10px 25px;
      border:none;
      border-radius:25px;
      background:#FF7A00;
      color:#fff;
      display:block;
      margin-left:auto;
      margin-right:auto;
      cursor:pointer;
    }

    @media(max-width:900px){
      .grid{grid-template-columns:repeat(3,1fr);}
    }

    @media(max-width:500px){
      .grid{grid-template-columns:repeat(2,1fr);}
    }
    `;

    document.head.appendChild(style);
  }, []);

  return (
    <section className="surgeries">
      <div className="container">

        <div className="grid">
          {visible.map((item, i) => (
            <div key={i} className="card" onClick={() => navigate(item.path)}>
              <div className="icon">
                <img src={item.img} alt={item.name} />
              </div>
              <div className="name">{item.name}</div>
            </div>
          ))}
        </div>

        <button className="btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "View Less" : "View More"}
        </button>

      </div>
    </section>
  );
};

export default Surgeries;