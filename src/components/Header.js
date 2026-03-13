

// // import React, { useState, useEffect, useRef } from "react";
// // import Logo from "../assets/Logo.jpg";

// // const Header = () => {

// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [searchResults, setSearchResults] = useState([]);
// //   const [showResults, setShowResults] = useState(false);

// //   const [menuOpen, setMenuOpen] = useState(false);

// //   const searchRef = useRef(null);

// //   const navItems = [
// //     { id: "home", label: "Home" },
// //     { id: "about", label: "About" },
// //     { id: "services", label: "Services" },
// //     { id: "doctors", label: "Doctors" }
// //   ];

// //   const searchData = [
// //     "Hemorrhoids",
// //     "Fissure",
// //     "Fistula",
// //     "Gallstones",
// //     "Hernia",
// //     "Kidney Stones",
// //     "PCOS",
// //     "Obesity"
// //   ];

// //   useEffect(() => {

// //     const handleClickOutside = (e) => {
// //       if (searchRef.current && !searchRef.current.contains(e.target)) {
// //         setShowResults(false);
// //       }
// //     };

// //     document.addEventListener("mousedown", handleClickOutside);

// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };

// //   }, []);

// //   const handleSearch = (e) => {

// //     const value = e.target.value;
// //     setSearchQuery(value);

// //     if (!value) {
// //       setSearchResults([]);
// //       return;
// //     }

// //     const results = searchData.filter((item) =>
// //       item.toLowerCase().includes(value.toLowerCase())
// //     );

// //     setSearchResults(results);
// //     setShowResults(true);

// //   };

// //   const navigate = (id) => {

// //     const section = document.getElementById(id);

// //     if (section) {

// //       const headerHeight = document.querySelector(".header").offsetHeight;

// //       const top = section.offsetTop - headerHeight;

// //       window.scrollTo({
// //         top: top,
// //         behavior: "smooth"
// //       });

// //     }

// //     setMenuOpen(false);

// //   };

// //   const bookAppointment = () => {

// //     const section = document.getElementById("consultation");

// //     if (section) {

// //       const headerHeight = document.querySelector(".header").offsetHeight;

// //       const top = section.offsetTop - headerHeight;

// //       window.scrollTo({
// //         top: top,
// //         behavior: "smooth"
// //       });

// //     }

// //   };

// //   return (

// // <header className="header">

// // <style>{`

// // @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

// // :root{
// // --brand-purple:#7D008D;
// // --brand-orange:#FF7A00;
// // }

// // .header{
// // position:fixed;
// // top:0;
// // width:100%;
// // background:white;
// // z-index:1000;
// // box-shadow:0 2px 10px rgba(0,0,0,0.1);
// // font-family:'Montserrat',sans-serif;
// // }

// // .container{
// // max-width:1200px;
// // margin:auto;
// // padding:0 15px;
// // }

// // .header-main{
// // display:flex;
// // align-items:center;
// // justify-content:space-between;
// // padding:0px 0;
// // }

// // /* LOGO */

// // .logo{
// // display:flex;
// // align-items:center;
// // gap:12px;
// // }

// // .logo img{
// // width:100px;
// // height:100px;
// // object-fit:contain;
// // }

// // /* NEW TEXT STYLE */

// // .logo-text{
// // display:flex;
// // flex-direction:column;
// // line-height:1.1;
// // }

// // .logo-title{
// // font-size:26px;
// // font-weight:700;
// // letter-spacing:1px;
// // color:#000;
// // }

// // .logo-sub{
// // font-size:14px;
// // font-weight:600;
// // color:var(--brand-orange);
// // letter-spacing:2px;
// // margin-top:2px;
// // }

// // /* SEARCH */

// // .search-section{
// // flex:1;
// // max-width:380px;
// // margin:0 20px;
// // position:relative;
// // }

// // .search-input{
// // width:100%;
// // padding:10px;
// // border:1px solid #ddd;
// // border-radius:5px;
// // }

// // .search-btn{
// // position:absolute;
// // right:0;
// // top:0;
// // bottom:0;
// // background:var(--brand-purple);
// // border:none;
// // color:white;
// // padding:0 12px;
// // }

// // .search-results{
// // background:white;
// // border:1px solid #ddd;
// // position:absolute;
// // width:100%;
// // top:42px;
// // }

// // .search-item{
// // padding:5px;
// // cursor:pointer;
// // }

// // .actions{
// // display:flex;
// // gap:10px;
// // }

// // .book-btn{
// // background:var(--brand-purple);
// // color:white;
// // border:none;
// // padding:10px 14px;
// // border-radius:6px;
// // font-weight:600;
// // }

// // /* NAVBAR */

// // .navbar{
// // border-top:1px solid #eee;
// // }

// // .nav-links{
// // display:flex;
// // justify-content:center;
// // gap:30px;
// // list-style:none;
// // padding:10px 0;
// // }

// // .nav-links button{
// // background:none;
// // border:none;
// // cursor:pointer;
// // font-size:15px;
// // font-weight:600;
// // }

// // /* MOBILE MENU */

// // .menu-toggle{
// // display:none;
// // font-size:26px;
// // cursor:pointer;
// // }

// // /* MOBILE RESPONSIVE */

// // @media(max-width:900px){

// // .search-section{
// // display:none;
// // }

// // .actions{
// // display:none;
// // }

// // .menu-toggle{
// // display:block;
// // }

// // .navbar{
// // display:${menuOpen ? "block" : "none"};
// // }

// // .nav-links{
// // flex-direction:column;
// // align-items:center;
// // gap:15px;
// // padding:20px 0;
// // }

// // .logo img{
// // width:70px;
// // height:70px;
// // }

// // .logo-title{
// // font-size:20px;
// // }

// // }

// // `}</style>

// // <div className="container">

// // <div className="header-main">

// // <div className="logo">

// // <img src={Logo} alt="Dr Cure Logo"/>

// // <div className="logo-text">
// // <div className="logo-title">DR CURE</div>
// // <div className="logo-sub">| SURGERIES</div>
// // </div>

// // </div>

// // {/* MOBILE MENU */}
// // <div className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)}>
// // ☰
// // </div>

// // <div className="search-section" ref={searchRef}>

// // <input
// // className="search-input"
// // placeholder="Search diseases..."
// // value={searchQuery}
// // onChange={handleSearch}
// // />

// // <button className="search-btn">🔍</button>

// // {showResults && (
// // <div className="search-results">
// // {searchResults.map((item, index) => (
// // <div key={index} className="search-item">
// // 🩺 {item}
// // </div>
// // ))}
// // </div>
// // )}

// // </div>

// // <div className="actions">

// // <button
// // className="book-btn"
// // onClick={bookAppointment}
// // >
// // 📅 Book free Consultation
// // </button>

// // </div>

// // </div>

// // <nav className="navbar">

// // <ul className="nav-links">

// // {navItems.map((item) => (

// // <li key={item.id}>
// // <button onClick={() => navigate(item.id)}>
// // {item.label}
// // </button>
// // </li>

// // ))}

// // </ul>

// // </nav>

// // </div>

// // </header>

// //   );

// // };

// // export default Header;

// // import React, { useState, useEffect, useRef } from "react";
// // import Logo from "../assets/Logo.jpg";

// // const Header = () => {

// // const [searchQuery, setSearchQuery] = useState("");
// // const [searchResults, setSearchResults] = useState([]);
// // const [showResults, setShowResults] = useState(false);
// // const [menuOpen, setMenuOpen] = useState(false);

// // const searchRef = useRef(null);

// // const navItems = [
// // { id: "proctology", label: "Proctology" },
// // { id: "laparoscopy", label: "Laparoscopy" },
// // { id: "urology", label: "Urology" },
// // { id: "gynecology", label: "Gynecology" },
// // { id: "weightloss", label: "Weight Loss" }
// // ];

// // const searchData = [
// // "Hemorrhoids",
// // "Fissure",
// // "Fistula",
// // "Gallstones",
// // "Hernia",
// // "Kidney Stones",
// // "PCOS",
// // "Obesity"
// // ];

// // useEffect(() => {

// // const handleClickOutside = (e) => {
// // if (searchRef.current && !searchRef.current.contains(e.target)) {
// // setShowResults(false);
// // }
// // };

// // document.addEventListener("mousedown", handleClickOutside);

// // return () => {
// // document.removeEventListener("mousedown", handleClickOutside);
// // };

// // }, []);

// // const handleSearch = (e) => {

// // const value = e.target.value;
// // setSearchQuery(value);

// // if (!value) {
// // setSearchResults([]);
// // return;
// // }

// // const results = searchData.filter((item) =>
// // item.toLowerCase().includes(value.toLowerCase())
// // );

// // setSearchResults(results);
// // setShowResults(true);

// // };

// // const navigate = (id) => {

// // const section = document.getElementById(id);

// // if (section) {

// // const headerHeight = document.querySelector(".header").offsetHeight;

// // const top = section.offsetTop - headerHeight;

// // window.scrollTo({
// // top: top,
// // behavior: "smooth"
// // });

// // }

// // setMenuOpen(false);

// // };

// // return (

// // <header className="header">

// // <style>{`

// // @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

// // :root{
// // --brand-purple:#7D008D;
// // --brand-orange:#FF7A00;
// // }

// // .header{
// // position:fixed;
// // top:0;
// // width:100%;
// // background:white;
// // z-index:1000;
// // box-shadow:0 2px 10px rgba(0,0,0,0.1);
// // font-family:'Montserrat',sans-serif;
// // }

// // .container{
// // max-width:1200px;
// // margin:auto;
// // padding:0 15px;
// // }

// // .header-main{
// // display:flex;
// // align-items:center;
// // justify-content:space-between;
// // padding:0px 0;
// // }

// // .logo{
// // display:flex;
// // align-items:center;
// // gap:12px;
// // }

// // .logo img{
// // width:100px;
// // height:100px;
// // object-fit:contain;
// // }

// // .logo-text{
// // display:flex;
// // flex-direction:column;
// // line-height:1.1;
// // }

// // .logo-title{
// // font-size:26px;
// // font-weight:700;
// // letter-spacing:1px;
// // color:var(--brand-purple);
// // }

// // .logo-sub{
// // font-size:14px;
// // font-weight:600;
// // color:var(--brand-orange);
// // letter-spacing:2px;
// // margin-top:2px;
// // }

// // .navbar{
// // border-top:1px solid #eee;
// // }

// // .nav-links{
// // display:flex;
// // justify-content:center;
// // gap:30px;
// // list-style:none;
// // padding:10px 0;
// // }

// // .nav-links button{
// // background:none;
// // border:none;
// // cursor:pointer;
// // font-size:15px;
// // font-weight:600;
// // }

// // .menu-toggle{
// // display:none;
// // font-size:26px;
// // cursor:pointer;
// // }

// // @media(max-width:900px){

// // .menu-toggle{
// // display:block;
// // }

// // .navbar{
// // display:${menuOpen ? "block" : "none"};
// // }

// // .nav-links{
// // flex-direction:column;
// // align-items:center;
// // gap:15px;
// // padding:20px 0;
// // }

// // .logo img{
// // width:70px;
// // height:70px;
// // }

// // .logo-title{
// // font-size:20px;
// // }

// // }

// // `}</style>

// // <div className="container">

// // <div className="header-main">

// // <div className="logo">

// // <img src={Logo} alt="Dr Cure Logo"/>

// // <div className="logo-text">
// // <div className="logo-title">DR CURE</div>
// // <div className="logo-sub">| SURGERIES</div>
// // </div>

// // </div>

// // <div className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)}>
// // ☰
// // </div>

// // </div>

// // <nav className="navbar">

// // <ul className="nav-links">

// // {navItems.map((item) => (

// // <li key={item.id}>
// // <button onClick={() => navigate(item.id)}>
// // {item.label}
// // </button>
// // </li>

// // ))}

// // </ul>

// // </nav>

// // </div>

// // </header>

// // );

// // };

// // export default Header;

// import React, { useState, useEffect, useRef } from "react";
// import Logo from "../assets/Logo.jpg";

// const Header = () => {

// const [searchQuery, setSearchQuery] = useState("");
// const [searchResults, setSearchResults] = useState([]);
// const [showResults, setShowResults] = useState(false);
// const [menuOpen, setMenuOpen] = useState(false);

// const searchRef = useRef(null);

// const navItems = [
// { id: "proctology", label: "Proctology" },
// { id: "laparoscopy", label: "Laparoscopy" },
// { id: "urology", label: "Urology" },
// { id: "gynecology", label: "Gynecology" },
// { id: "weightloss", label: "Weight Loss" }
// ];

// const searchData = [
// "Hemorrhoids",
// "Fissure",
// "Fistula",
// "Gallstones",
// "Hernia",
// "Kidney Stones",
// "PCOS",
// "Obesity"
// ];

// useEffect(() => {

// const handleClickOutside = (e) => {
// if (searchRef.current && !searchRef.current.contains(e.target)) {
// setShowResults(false);
// }
// };

// document.addEventListener("mousedown", handleClickOutside);

// return () => {
// document.removeEventListener("mousedown", handleClickOutside);
// };

// }, []);

// const handleSearch = (e) => {

// const value = e.target.value;
// setSearchQuery(value);

// if (!value) {
// setSearchResults([]);
// return;
// }

// const results = searchData.filter((item) =>
// item.toLowerCase().includes(value.toLowerCase())
// );

// setSearchResults(results);
// setShowResults(true);

// };

// const navigate = (id) => {

// const section = document.getElementById(id);

// if (section) {

// const headerHeight = document.querySelector(".header").offsetHeight;

// const top = section.offsetTop - headerHeight;

// window.scrollTo({
// top: top,
// behavior: "smooth"
// });

// }

// setMenuOpen(false);

// };

// /* BOOK CONSULTATION BUTTON */

// const bookAppointment = () => {

// const section = document.getElementById("consultation");

// if (section) {

// const headerHeight = document.querySelector(".header").offsetHeight;

// const top = section.offsetTop - headerHeight;

// window.scrollTo({
// top: top,
// behavior: "smooth"
// });

// }

// };

// return (

// <header className="header">

// <style>{`

// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

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
// font-family:'Montserrat',sans-serif;
// }

// .container{
// max-width:1200px;
// margin:auto;
// padding:0 15px;
// }

// .header-main{
// display:flex;
// align-items:center;
// justify-content:space-between;
// padding:0px 0;
// }

// /* LOGO */

// .logo{
// display:flex;
// align-items:center;
// gap:12px;
// }

// .logo img{
// width:100px;
// height:100px;
// object-fit:contain;
// }

// .logo-text{
// display:flex;
// flex-direction:column;
// line-height:1.1;
// }

// .logo-title{
// font-size:26px;
// font-weight:700;
// letter-spacing:1px;
// color:var(--brand-purple);
// }

// .logo-sub{
// font-size:14px;
// font-weight:600;
// color:var(--brand-orange);
// letter-spacing:2px;
// margin-top:2px;
// }

// /* SEARCH BAR */

// .search-section{
// flex:1;
// max-width:380px;
// margin:0 20px;
// position:relative;
// }

// .search-input{
// width:100%;
// padding:10px;
// border:1px solid #ddd;
// border-radius:5px;
// }

// .search-btn{
// position:absolute;
// right:0;
// top:0;
// bottom:0;
// background:var(--brand-purple);
// border:none;
// color:white;
// padding:0 12px;
// }

// .search-results{
// background:white;
// border:1px solid #ddd;
// position:absolute;
// width:100%;
// top:42px;
// z-index:10;
// }

// .search-item{
// padding:8px;
// cursor:pointer;
// }

// .search-item:hover{
// background:#f5f5f5;
// }

// /* ACTION BUTTON */

// .actions{
// display:flex;
// gap:10px;
// }

// .book-btn{
// background:var(--brand-purple);
// color:white;
// border:none;
// padding:10px 14px;
// border-radius:6px;
// font-weight:600;
// cursor:pointer;
// }

// /* NAVBAR */

// .navbar{
// border-top:1px solid #eee;
// }

// .nav-links{
// display:flex;
// justify-content:center;
// gap:30px;
// list-style:none;
// padding:10px 0;
// }

// .nav-links button{
// background:none;
// border:none;
// cursor:pointer;
// font-size:15px;
// font-weight:600;
// }

// /* MOBILE MENU */

// .menu-toggle{
// display:none;
// font-size:26px;
// cursor:pointer;
// }

// /* MOBILE RESPONSIVE */

// @media(max-width:900px){

// .search-section{
// display:none;
// }

// .actions{
// display:none;
// }

// .menu-toggle{
// display:block;
// }

// .navbar{
// display:${menuOpen ? "block" : "none"};
// }

// .nav-links{
// flex-direction:column;
// align-items:center;
// gap:15px;
// padding:20px 0;
// }

// .logo img{
// width:70px;
// height:70px;
// }

// .logo-title{
// font-size:20px;
// }

// }

// `}</style>

// <div className="container">

// <div className="header-main">

// <div className="logo">

// <img src={Logo} alt="Dr Cure Logo"/>

// <div className="logo-text">
// <div className="logo-title">DRCURE</div>
// <div className="logo-sub">| SURGERIES</div>
// </div>

// </div>

// {/* SEARCH */}

// <div className="search-section" ref={searchRef}>

// <input
// className="search-input"
// placeholder="Search diseases..."
// value={searchQuery}
// onChange={handleSearch}
// />

// <button className="search-btn">🔍</button>

// {showResults && (
// <div className="search-results">
// {searchResults.map((item, index) => (
// <div key={index} className="search-item">
// 🩺 {item}
// </div>
// ))}
// </div>
// )}

// </div>

// {/* ACTION BUTTON */}

// <div className="actions">

// <button
// className="book-btn"
// onClick={bookAppointment}
// >
// 📅 Book Free Consultation
// </button>

// </div>

// {/* MOBILE MENU */}

// <div className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)}>
// ☰
// </div>

// </div>

// <nav className="navbar">

// <ul className="nav-links">

// {navItems.map((item) => (

// <li key={item.id}>
// <button onClick={() => navigate(item.id)}>
// {item.label}
// </button>
// </li>

// ))}

// </ul>

// </nav>

// </div>

// </header>

// );

// };

// export default Header;

import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/Logo.jpg";

const Header = () => {

const [searchQuery, setSearchQuery] = useState("");
const [searchResults, setSearchResults] = useState([]);
const [showResults, setShowResults] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

const searchRef = useRef(null);

const navItems = [
{ id: "proctology", label: "Proctology" },
{ id: "laparoscopy", label: "Laparoscopy" },
{ id: "urology", label: "Urology" },
{ id: "gynecology", label: "Gynecology" },
{ id: "weightloss", label: "Weight Loss" }
];

const searchData = [
"Hemorrhoids",
"Fissure",
"Fistula",
"Gallstones",
"Hernia",
"Kidney Stones",
"PCOS",
"Obesity"
];

useEffect(() => {

const handleClickOutside = (e) => {
if (searchRef.current && !searchRef.current.contains(e.target)) {
setShowResults(false);
}
};

document.addEventListener("mousedown", handleClickOutside);

return () => {
document.removeEventListener("mousedown", handleClickOutside);
};

}, []);

const handleSearch = (e) => {

const value = e.target.value;
setSearchQuery(value);

if (!value) {
setSearchResults([]);
return;
}

const results = searchData.filter((item) =>
item.toLowerCase().includes(value.toLowerCase())
);

setSearchResults(results);
setShowResults(true);

};

const navigate = (id) => {

const section = document.getElementById(id);

if (section) {

const headerHeight = document.querySelector(".header").offsetHeight;

const top = section.offsetTop - headerHeight;

window.scrollTo({
top: top,
behavior: "smooth"
});

}

setMenuOpen(false);

};

const bookAppointment = () => {

const section = document.getElementById("consultation");

if (section) {

const headerHeight = document.querySelector(".header").offsetHeight;

const top = section.offsetTop - headerHeight;

window.scrollTo({
top: top,
behavior: "smooth"
});

}

};

return (

<header className="header">

<style>{`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');

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
font-family:'Montserrat',sans-serif;
}

.container{
max-width:1200px;
margin:auto;
padding:0 15px;
}

.header-main{
display:flex;
align-items:center;
justify-content:space-between;
padding:0px 0;
}

/* LOGO */

.logo{
display:flex;
align-items:center;
gap:12px;
}

.logo img{
width:100px;
height:100px;
object-fit:contain;
}

.logo-text{
display:flex;
flex-direction:column;
line-height:1.1;
}

/* UPDATED TITLE COLOR */

.logo-title{
font-size:26px;
font-weight:700;
letter-spacing:1px;
color:var(--brand-orange);
}

.logo-sub{
font-size:14px;
font-weight:600;
color:var(--brand-orange);
letter-spacing:2px;
margin-top:2px;
}

/* SEARCH BAR */

.search-section{
flex:1;
max-width:380px;
margin:0 20px;
position:relative;
}

.search-input{
width:100%;
padding:10px;
border:1px solid #ddd;
border-radius:5px;
}

.search-btn{
position:absolute;
right:0;
top:0;
bottom:0;
background:var(--brand-purple);
border:none;
color:white;
padding:0 12px;
}

.search-results{
background:white;
border:1px solid #ddd;
position:absolute;
width:100%;
top:42px;
z-index:10;
}

.search-item{
padding:8px;
cursor:pointer;
}

.search-item:hover{
background:#f5f5f5;
}

/* ACTION BUTTON */

.actions{
display:flex;
gap:10px;
}

.book-btn{
background:var(--brand-purple);
color:white;
border:none;
padding:10px 14px;
border-radius:6px;
font-weight:600;
cursor:pointer;
}

/* NAVBAR */

.navbar{
border-top:1px solid #eee;
}

.nav-links{
display:flex;
justify-content:center;
gap:30px;
list-style:none;
padding:10px 0;
}

.nav-links button{
background:none;
border:none;
cursor:pointer;
font-size:15px;
font-weight:600;
}

/* MOBILE MENU */

.menu-toggle{
display:none;
font-size:26px;
cursor:pointer;
}

/* MOBILE RESPONSIVE */

@media(max-width:900px){

.search-section{
display:none;
}

.actions{
display:none;
}

.menu-toggle{
display:block;
}

.navbar{
display:${menuOpen ? "block" : "none"};
}

.nav-links{
flex-direction:column;
align-items:center;
gap:15px;
padding:20px 0;
}

.logo img{
width:70px;
height:70px;
}

.logo-title{
font-size:20px;
}

}

`}</style>

<div className="container">

<div className="header-main">

<div className="logo">

<img src={Logo} alt="Dr Cure Logo"/>

<div className="logo-text">
<div className="logo-title">DRCURE</div>
<div className="logo-sub">SURGERIES</div>
</div>

</div>

<div className="search-section" ref={searchRef}>

<input
className="search-input"
placeholder="Search diseases..."
value={searchQuery}
onChange={handleSearch}
/>

<button className="search-btn">🔍</button>

{showResults && (
<div className="search-results">
{searchResults.map((item, index) => (
<div key={index} className="search-item">
🩺 {item}
</div>
))}
</div>
)}

</div>

<div className="actions">

<button
className="book-btn"
onClick={bookAppointment}
>
📅 Book Free Consultation
</button>

</div>

<div className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)}>
☰
</div>

</div>

<nav className="navbar">

<ul className="nav-links">

{navItems.map((item) => (

<li key={item.id}>
<button onClick={() => navigate(item.id)}>
{item.label}
</button>
</li>

))}

</ul>

</nav>

</div>

</header>

);

};

export default Header;