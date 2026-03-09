import React, { useState, useEffect, useRef } from "react";

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [activeNav, setActiveNav] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const searchRef = useRef(null);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "doctors", label: "Doctors" },
    { id: "contact", label: "Contact" }
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

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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

    setActiveNav(id);

    const section = document.getElementById(id);

    if (section) {

      const headerHeight = document.querySelector(".header").offsetHeight;

      const top = section.offsetTop - headerHeight;

      window.scrollTo({
        top: top,
        behavior: "smooth"
      });

    }

  };

  const callNow = () => {
    window.location.href = "tel:+919353937641";
  };

  const bookAppointment = () => {
    alert("Appointment booked! Our team will contact you.");
  };

  return (

    <>
    
    <style>

{`

:root{
--brand-purple:#7D008D;
--brand-orange:#FF7A00;
--brand-white:#ffffff;
}

*{
margin:0;
padding:0;
box-sizing:border-box;
}

.container{
max-width:1200px;
margin:auto;
padding:0 20px;
}

.header{
position:fixed;
top:0;
width:100%;
background:white;
z-index:1000;
box-shadow:0 2px 10px rgba(0,0,0,0.1);
}

.header-main{
display:flex;
align-items:center;
justify-content:space-between;
padding:12px 0;
}

.logo{
font-size:22px;
font-weight:bold;
}

.logo span{
color:var(--brand-orange);
}

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
cursor:pointer;
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
padding:10px;
cursor:pointer;
}

.search-item:hover{
background:#f5f5f5;
}

.actions{
display:flex;
gap:10px;
}

.call-btn{
background:var(--brand-orange);
color:white;
border:none;
padding:10px 14px;
border-radius:6px;
cursor:pointer;
}

.book-btn{
background:var(--brand-purple);
color:white;
border:none;
padding:10px 14px;
border-radius:6px;
cursor:pointer;
}

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
font-size:15px;
cursor:pointer;
}

.active button{
color:var(--brand-purple);
font-weight:bold;
}

.mobile-btn{
display:none;
font-size:22px;
border:none;
background:none;
}

.mobile-menu{
display:flex;
flex-direction:column;
background:white;
}

.mobile-menu button{
padding:15px;
border-bottom:1px solid #eee;
background:none;
border:none;
}

@media(max-width:900px){

.search-section{
display:none;
}

.actions{
display:none;
}

.navbar{
display:none;
}

.mobile-btn{
display:block;
}

}

`}

    </style>

    <header className="header">

      <div className="container">

        <div className="header-main">

          <div className="logo">
            DR CURE <span>SURGERIES</span>
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

                  <div
                    key={index}
                    className="search-item"
                    onClick={() => alert(item + " treatment page")}
                  >
                    🩺 {item}
                  </div>

                ))}

              </div>

            )}

          </div>

          <div className="actions">

            <button
              className="call-btn"
              onClick={callNow}
            >
              🆘 Call
            </button>

            <button
              className="book-btn"
              onClick={bookAppointment}
            >
              📅 Book Appointment
            </button>

          </div>

          <button
            className="mobile-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

        </div>

        <nav className="navbar">

          <ul className="nav-links">

            {navItems.map((item) => (

              <li
                key={item.id}
                className={activeNav === item.id ? "active" : ""}
              >

                <button onClick={() => navigate(item.id)}>
                  {item.label}
                </button>

              </li>

            ))}

          </ul>

        </nav>

      </div>

      {isMenuOpen && (

        <div className="mobile-menu">

          {navItems.map((item) => (

            <button
              key={item.id}
              onClick={() => {
                navigate(item.id);
                setIsMenuOpen(false);
              }}
            >
              {item.label}
            </button>

          ))}

        </div>

      )}

    </header>

    </>
  );

};

export default Header;