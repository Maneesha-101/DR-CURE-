

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Logo from "../assets/Logo.jpg";

// const Header = () => {

//   const navigate = useNavigate();
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);

//   // ✅ SEARCH STATE
//   const [searchQuery, setSearchQuery] = useState("");

//   // ✅ SEARCH FUNCTION
//   const handleSearch = () => {
//     if (searchQuery.trim() !== "") {
//       navigate(`/search?q=${searchQuery}`);
//     }
//   };

//   const navItems = [
//     {
//       label: "Proctology",
//       path: "/proctology",
//       items: ["Piles", "Fistula", "Fissure", "Rectal Treatment"]
//     },
//     {
//       label: "Laparoscopy",
//       path: "/laparoscopy",
//       items: ["Femoral hernia", "Incisional hernia", "Hiatal hernia", "Appendicitis", "Umbilical hernia", "Inguinal hernia", "Hysterectomy"]
//     },
//     {
//       label: "Urology",
//       path: "/urology",
//       items: ["Circumcision", "Stapler Circumcision", "Laser Circumcision", "Phimosis", "Balanoposthitis", "PCNL", "RIRS", "URSL", "Hydrocele", "Enlarged prostate", "Frenuloplasty surgery", "Kidney stones treatment", "Foreskin infection", "Prostatectomy"]
//     },
//     {
//       label: "Gynecology",
//       path: "/gynecology",
//       items: ["MTP", "PCOD-PCOS"]
//     },
//     {
//       label: "Aesthetics",
//       path: "/aesthetics",
//       items: ["Gynecomastia",  "Lipoma"]
//     },
//     {
//       label: "ENT",
//       path: "/ent",
//       items: ["Turbinate Reduction", "Nasal polyps", "Vocal Cord polyps", "Ear Surgery", "Throat Surgery", "Myringotomy", "Stapedectomy", "Tonsillectomy", "Thyroidectomy", "Fess Surgery", "Mastoidectomy", "Septoplasty", "Sinus treatment", "Adenoidectomy"]
//     },
//     {
//       label: "Fertility",
//       path: "/fertility",
//       items: ["IUI treatment", "IVF treatment", "Male fertility", "Female infertility", "Egg freezing"]
//     },
//     {
//       label: "Orthopedics",
//       path: "/orthopedics",
//       items: ["Total knee replacement", "Shoulder arthroscopy", "Knee Arthroscopy", "Arthroscopy surgery", "Rotator cuff repair", "Shoulder replacement",  "Meniscus tear treatment", "ACL tear treatment",  "Carpal tunnel syndrome", "Knee Replacement"]
//     },
//     {
//       label: "Weight Loss",
//       path: "/weightloss",
//       items: ["Bariatric surgery"]
//     }
//   ];

//   const formatPath = (text) => {
//     return "/" + text.toLowerCase().replace(/\s+/g, "-");
//   };

//   return (
//     <header className="header">

// <style>{`
// :root{
// --brand-purple:#7D008D;
// --brand-orange:#FF7A00;
// }

// .header{
// position:fixed;
// top:0;
// width:100%;
// background:white;
// z-index:1000;
// box-shadow:0 2px 10px rgba(0,0,0,0.1);
// }

// .container{
// max-width:1200px;
// margin:auto;
// padding:10px 15px;
// }

// .header-main{
// display:flex;
// align-items:center;
// justify-content:space-between;
// gap:15px;
// }

// .search-box{
//   flex:1;
//   display:flex;
//   align-items:center;
//   background:#f2f2f2;
//   border-radius:25px;       /* 🔽 slightly smaller */
//   padding:4px 8px;          /* 🔽 reduced */
//   max-width:400px;          /* 🔽 reduced width */
//   margin:0 15px;
// }

// .search-box input{
//   border:none;
//   background:transparent;
//   flex:1;
//   outline:none;
//   font-size:14px;           /* 🔽 smaller text */
// }

// .search-box span{
//   cursor:pointer;
//   font-size:12px;           /* 🔽 adjusted icon */
// }

// /* LOGO */
// .logo{
// display:flex;
// align-items:center;
// gap:10px;
// cursor:pointer;
// }

// .logo img{
// width:70px;
// height:70px;
// }

// .logo-title{
// font-size:22px;
// font-weight:700;
// color:var(--brand-orange);
// }

// .logo-sub{
// font-size:12px;
// }

// .menu-toggle{
// display:none;
// font-size:22px;
// cursor:pointer;
// border:none;
// background:none;
// }

// .navbar{
// border-top:1px solid #eee;
// }

// .nav-links{
// display:flex;
// justify-content:center;
// flex-wrap:wrap;
// gap:20px;
// padding:10px 0;
// list-style:none;
// }

// .nav-item{
// position:relative;
// }

// .nav-btn{
// background:none;
// border:none;
// cursor:pointer;
// font-size:14px;
// font-weight:600;
// padding:8px 10px;
// border-radius:6px;
// transition:0.3s;
// }

// .nav-btn:hover,
// .nav-btn.active{
// background:var(--brand-purple);
// color:white;
// }

// .dropdown{
// position:absolute;
// top:40px;
// left:0;
// background:#fff;
// border:1px solid #ddd;
// width:230px;
// box-shadow:0 4px 10px rgba(0,0,0,0.1);
// border-radius:8px;
// overflow:hidden;
// }

// .dropdown-item{
// padding:10px;
// cursor:pointer;
// }

// .dropdown-item:hover{
// background:var(--brand-purple);
// color:white;
// }

// .book-btn{
// background:var(--brand-purple);
// color:white;
// border:none;
// padding:8px 12px;
// border-radius:5px;
// cursor:pointer;
// }

// /* MOBILE */
// @media(max-width:768px){

// .menu-toggle{
// display:block;
// }

// .search-box{
// display:none;
// }

// .navbar{
// display:${menuOpen ? "block" : "none"};
// }

// .nav-links{
// flex-direction:column;
// align-items:center;
// }

// .dropdown{
// position:static;
// width:100%;
// }
// }
// `}</style>

// <div className="container">

// <div className="header-main">

// {/* LOGO */}
// <div className="logo" onClick={() => {
//   navigate("/");
//   window.scrollTo(0,0);
// }}>
// <img src={Logo} alt="logo" />
// <div>
// <div className="logo-title">DRCURE</div>
// <div className="logo-sub">SURGERIES</div>
// </div>
// </div>

// {/* ✅ SEARCH BAR ADDED */}
// <div className="search-box">
// <input
//   type="text"
//   placeholder="Search treatments..."
//   value={searchQuery}
//   onChange={(e) => setSearchQuery(e.target.value)}
//   onKeyPress={(e) => e.key === "Enter" && handleSearch()}
// />
// <span onClick={handleSearch}>🔍</span>
// </div>

// <button
// className="menu-toggle"
// onClick={() => setMenuOpen(!menuOpen)}
// >
// {menuOpen ? "✕" : "☰"}
// </button>

// <button className="book-btn" onClick={() => {
//   navigate("/consultation");
//   window.scrollTo(0,0);
//   setMenuOpen(false);
// }}>
// 📅 Book Consultation
// </button>

// </div>

// <nav className="navbar">
// <ul className="nav-links">

// {navItems.map((nav, index) => (
// <li
// key={index}
// className="nav-item"
// onMouseEnter={() => window.innerWidth > 768 && setActiveDropdown(index)}
// onMouseLeave={() => window.innerWidth > 768 && setActiveDropdown(null)}
// >

// <button
// className={`nav-btn ${activeMenu === index ? "active" : ""}`}
// onClick={() => {
//   setActiveMenu(index);
//   navigate(nav.path);
//   window.scrollTo(0,0);

//   if (window.innerWidth <= 768) {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   }
// }}
// >
// {nav.label} ▾
// </button>

// {activeDropdown === index && (
// <div className="dropdown">
// {nav.items.map((item, i) => (
// <div
// key={i}
// className="dropdown-item"
// onClick={() => {
//   navigate(formatPath(item));
//   window.scrollTo(0,0);
//   setMenuOpen(false);
//   setActiveDropdown(null);
// }}
// >
// {item}
// </div>
// ))}
// </div>
// )}

// </li>
// ))}

// </ul>
// </nav>

// </div>

// </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.jpg";

const Header = () => {

  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  const navItems = [
    { label: "Proctology", path: "/proctology", items: ["Piles","Fistula","Fissure","Rectal Treatment"] },
    { label: "Laparoscopy", path: "/laparoscopy", items: ["Femoral hernia","Incisional hernia","Hiatal hernia","Appendicitis","Umbilical hernia","Inguinal hernia","Hysterectomy"] },
    { label: "Urology", path: "/urology", items: ["Circumcision","Stapler Circumcision","Laser Circumcision","Phimosis","Balanoposthitis","PCNL","RIRS","URSL","Hydrocele","Enlarged prostate","Frenuloplasty surgery","Kidney stones treatment","Foreskin infection","Prostatectomy"] },
    { label: "Gynecology", path: "/gynecology", items: ["MTP","PCOD-PCOS"] },
    { label: "Aesthetics", path: "/aesthetics", items: ["Gynecomastia","Lipoma"] },
    { label: "ENT", path: "/ent", items: ["Turbinate Reduction","Nasal polyps","Vocal Cord polyps","Ear Surgery","Throat Surgery","Myringotomy","Stapedectomy","Tonsillectomy","Thyroidectomy","Fess Surgery","Mastoidectomy","Septoplasty","Sinus treatment","Adenoidectomy"] },
    { label: "Fertility", path: "/fertility", items: ["IUI treatment","IVF treatment","Male fertility","Female infertility","Egg freezing"] },
    { label: "Orthopedics", path: "/orthopedics", items: ["Total knee replacement","Shoulder arthroscopy","Knee Arthroscopy","Arthroscopy surgery","Rotator cuff repair","Shoulder replacement","Meniscus tear treatment","ACL tear treatment","Carpal tunnel syndrome","Knee Replacement"] },
    { label: "Weight Loss", path: "/weightloss", items: ["Bariatric surgery"] }
  ];

  const formatPath = (text) => "/" + text.toLowerCase().replace(/\s+/g, "-");

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
gap:10px;
}

/* ✅ UPDATED SEARCH BAR (BIGGER) */
.search-box{
flex:1;
display:flex;
align-items:center;
background:#f2f2f2;
border-radius:28px;
padding:7px 14px;
max-width:420px;
margin:0 20px;
}

.search-box input{
border:none;
background:transparent;
flex:1;
outline:none;
font-size:14px;
}

.search-box span{
cursor:pointer;
font-size:16px;
}

/* LOGO */
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
padding:8px 10px;
border-radius:6px;
transition:0.3s;
}

.nav-btn:hover,
.nav-btn.active{
background:var(--brand-purple);
color:white;
}

.dropdown{
position:absolute;
top:40px;
left:0;
background:#fff;
border:1px solid #ddd;
width:230px;
box-shadow:0 4px 10px rgba(0,0,0,0.1);
border-radius:8px;
overflow:hidden;
}

.dropdown-item{
padding:10px;
cursor:pointer;
}

.dropdown-item:hover{
background:var(--brand-purple);
color:white;
}

.book-btn{
  background:var(--brand-purple);
  color:white;
  border:none;
  padding:4px 8px;        
  border-radius:4px;
  cursor:pointer;
  font-size:13px;         
  height:32px;             
  display:flex;
  align-items:center;
  justify-content:center;
  white-space:nowrap;
}

/* MOBILE */
@media(max-width:768px){
.menu-toggle{ display:block; }
.search-box{ display:none; }
.navbar{ display:${menuOpen ? "block" : "none"}; }
.nav-links{ flex-direction:column; align-items:center; }
.dropdown{ position:static; width:100%; }
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

<div className="search-box">
<input
  type="text"
  placeholder="Search treatments..."
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
/>
<span onClick={handleSearch}>🔍</span>
</div>

<button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
{menuOpen ? "✕" : "☰"}
</button>

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
<li key={index} className="nav-item"
onMouseEnter={() => window.innerWidth > 768 && setActiveDropdown(index)}
onMouseLeave={() => window.innerWidth > 768 && setActiveDropdown(null)}
>

<button
className={`nav-btn ${activeMenu === index ? "active" : ""}`}
onClick={() => {
  setActiveMenu(index);
  navigate(nav.path);
  window.scrollTo(0,0);

  if (window.innerWidth <= 768) {
    setActiveDropdown(activeDropdown === index ? null : index);
  }
}}
>
{nav.label} ▾
</button>

{activeDropdown === index && (
<div className="dropdown">
{nav.items.map((item, i) => (
<div key={i} className="dropdown-item"
onClick={() => {
  navigate(formatPath(item));
  window.scrollTo(0,0);
  setMenuOpen(false);
  setActiveDropdown(null);
}}>
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