

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.jpg";

const Header = () => {

  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Proctology",
      path: "/proctology",
      items: ["Piles", "Fistula", "Fissure", "Rectal Treatment", "Pilonidal sinus treatment"]
    },
    {
      label: "Laparoscopy",
      path: "/laparoscopy",
      items: ["Femoral hernia", "Incisional hernia", "Hiatal hernia", "Appendicitis", "Umbilical hernia", "Inguinal hernia", "Hysterectomy", "GallStone treatment"]
    },
    {
      label: "Urology",
      path: "/urology",
      items: ["Circumcision", "Stapler Circumcision", "Laser Circumcision", "Phimosis", "Balanoposthitis", "PCNL", "RIRS", "URSL", "Hydrocele", "Enlarged prostate", "Frenuloplasty surgery", "Kidney stones treatment", "Foreskin infection", "Prostatectomy"]
    },
    {
      label: "Gynecology",
      path: "/gynecology",
      items: ["Abortion/MTP", "PCOD/PCOS"]
    },
    {
      label: "Aesthetics",
      path: "/aesthetics",
      items: ["Skin treatment", "Hair treatment", "Laser treatment"]
    },
    {
      label: "ENT",
      path: "/ent",
      items: ["Turbinate Reduction", "Nasal polyps", "Vocal Cord polyps", "Ear Surgery", "Throat Surgery", "Myringotomy", "Stapedectomy", "Tonsillectomy", "Thyroidectomy", "Fess Surgery", "Mastoidectomy", "Septoplasty", "Sinus treatment", "Adenoidectomy"]
    },
    {
      label: "Fertility",
      path: "/fertility",
      items: ["IUI treatment", "IVF treatment", "Male fertility", "Female infertility", "Egg freezing"]
    },
    {
      label: "Orthopedics",
      path: "/orthopedics",
      items: ["Total knee replacement", "Shoulder arthroscopy", "Knee Arthroscopy", "Arthroscopy surgery", "Rotator cuff repair", "Shoulder replacement", "Hip replacement surgery", "Meniscus tear treatment", "ACL tear treatment", "Spine surgery", "Carpal tunnel syndrome", "Knee Replacement"]
    },
    {
      label: "Weight Loss",
      path: "/weightloss", // ✅ FIXED PATH
      items: ["Bariatric surgery"]
    }
  ];

  const formatPath = (text) => {
    return "/" + text.toLowerCase().trim().replace(/\s+/g, "-");
  };

  return (
    <header className="header">

<style>{`
:root{
--brand-purple:#7D008D;
--brand-orange:#FF7A00;
}

.header{
position:fixed;
top:0;
width:100%;
background:white;
z-index:1000;
box-shadow:0 2px 10px rgba(0,0,0,0.1);
}

.container{
max-width:1200px;
margin:auto;
padding:10px 15px;
}

.header-main{
display:flex;
align-items:center;
justify-content:space-between;
}

.logo{
display:flex;
align-items:center;
gap:10px;
cursor:pointer;
}

.logo img{
width:70px;
height:70px;
}

.logo-title{
font-size:22px;
font-weight:700;
color:var(--brand-orange);
}

.logo-sub{
font-size:12px;
color:var(--brand-orange);
}

.menu-toggle{
display:none;
font-size:22px;
cursor:pointer;
border:none;
background:none;
}

.navbar{
border-top:1px solid #eee;
}

.nav-links{
display:flex;
justify-content:center;
flex-wrap:wrap;
gap:20px;
padding:10px 0;
list-style:none;
}

.nav-item{
position:relative;
}

.nav-btn{
background:none;
border:none;
cursor:pointer;
font-size:14px;
font-weight:600;
}

.dropdown{
position:absolute;
top:40px;
left:0;
background:#fff;
border:1px solid #ddd;
width:230px;
box-shadow:0 4px 10px rgba(0,0,0,0.1);
z-index:100;
}

.dropdown-item{
padding:10px;
cursor:pointer;
}

.dropdown-item:hover{
background:#f5f5f5;
}

.book-btn{
background:var(--brand-purple);
color:white;
border:none;
padding:8px 12px;
border-radius:5px;
cursor:pointer;
}

/* MOBILE */
@media(max-width:768px){

.menu-toggle{
display:block;
}

.navbar{
display: ${menuOpen ? "block" : "none"};
}

.nav-links{
flex-direction:column;
align-items:center;
}

.dropdown{
position:static;
width:100%;
}
}
`}</style>

<div className="container">

<div className="header-main">

<div className="logo" onClick={() => {
  navigate("/");
  window.scrollTo(0,0);
}}>
<img src={Logo} alt="logo" />
<div>
<div className="logo-title">DRCURE</div>
<div className="logo-sub">SURGERIES</div>
</div>
</div>

<button
className="menu-toggle"
onClick={() => setMenuOpen(!menuOpen)}
>
{menuOpen ? "✕" : "☰"}
</button>

{/* ✅ FIXED BOOK BUTTON */}
<button className="book-btn" onClick={() => {
  navigate("/consultation");
  window.scrollTo(0,0);
  setMenuOpen(false);
}}>
📅 Book Consultation
</button>

</div>

<nav className="navbar">
<ul className="nav-links">

{navItems.map((nav, index) => (
<li
key={index}
className="nav-item"
onMouseEnter={() => {
  if (window.innerWidth > 768) {
    setActiveDropdown(index);
  }
}}
onMouseLeave={() => {
  if (window.innerWidth > 768) {
    setActiveDropdown(null);
  }
}}
>

<button
className="nav-btn"
onClick={() => {
  if (window.innerWidth <= 768) {
    setActiveDropdown(activeDropdown === index ? null : index);
  } else {
    navigate(nav.path);
    window.scrollTo(0,0);
  }
}}
>
{nav.label} ▾
</button>

{activeDropdown === index && (
<div className="dropdown">
{nav.items.map((item, i) => (
<div
key={i}
className="dropdown-item"
onClick={() => {
  navigate(formatPath(item));
  window.scrollTo(0,0);
  setMenuOpen(false);
  setActiveDropdown(null);
}}
>
{item}
</div>
))}
</div>
)}

</li>
))}

</ul>
</nav>

</div>

</header>
  );
};

export default Header;