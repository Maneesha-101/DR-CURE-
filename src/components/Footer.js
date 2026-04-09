
import React, { useState } from 'react';

const Footer = () => {

const [email, setEmail] = useState('');
const [isSubscribed, setIsSubscribed] = useState(false);
const [subscriptionMessage, setSubscriptionMessage] = useState('');
const [currentYear] = useState(new Date().getFullYear());

const scrollToSection = (id) => {

const element = document.getElementById(id);

if (element) {

const headerOffset = 80;
const elementPosition = element.getBoundingClientRect().top;
const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

window.scrollTo({
top: offsetPosition,
behavior: "smooth"
});

}

};

const handleSubscribe = async (e) => {

e.preventDefault();

if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
setSubscriptionMessage("Please enter a valid email");
setTimeout(() => setSubscriptionMessage(""), 3000);
return;
}

setIsSubscribed(true);
setSubscriptionMessage("Subscribing...");

await new Promise(resolve => setTimeout(resolve, 1000));

setSubscriptionMessage(`Subscribed: ${email}`);
setEmail("");

setTimeout(() => {
setSubscriptionMessage("");
setIsSubscribed(false);
}, 4000);

};

const quickLinks = [
{ label: "Home", id: "home" },
{ label: "About Us", id: "about" },
{ label: "Services", id: "services" },
{ label: "Doctors", id: "doctors" }
];

return (

<>

<style>{`

:root{
--brand-purple:#7D008D;
--brand-orange:#FF7A00;
--footer-dark:#3a0041;
}

.footer{
background:linear-gradient(135deg,var(--brand-purple),var(--footer-dark));
color:white;
padding:60px 0 30px;
font-family:'Segoe UI',sans-serif;
}

.footer-container{
max-width:1200px;
margin:auto;
padding:0 20px;
}

.footer-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:30px;
margin-bottom:40px;
}

.footer-heading{
color:var(--brand-orange);
margin-bottom:15px;
font-size:18px;
}

.footer-links{
list-style:none;
padding:0;
}

.footer-links li{
margin-bottom:10px;
}

.footer-link-btn{
background:none;
border:none;
color:#ddd;
cursor:pointer;
text-align:left;
font-size:15px;
}

.footer-link-btn:hover{
color:var(--brand-orange);
padding-left:6px;
}

.contact-item{
display:flex;
gap:10px;
margin-bottom:10px;
}

.newsletter{
display:flex;
margin-top:10px;
}

.newsletter input{
flex:1;
padding:8px;
border:none;
border-radius:4px 0 0 4px;
}

.newsletter button{
background:var(--brand-orange);
border:none;
padding:8px 12px;
color:white;
border-radius:0 4px 4px 0;
cursor:pointer;
}

.footer-bottom{
border-top:1px solid rgba(255,255,255,0.2);
padding-top:20px;
display:flex;
justify-content:space-between;
flex-wrap:wrap;
font-size:14px;
}

.back-top{
background:rgba(255,255,255,0.1);
border:none;
padding:6px 12px;
color:white;
cursor:pointer;
border-radius:4px;
}

.back-top:hover{
background:var(--brand-orange);
}

.subscription-msg{
font-size:12px;
color:var(--brand-orange);
margin-top:5px;
}

`}</style>

<footer className="footer">

<div className="footer-container">

<div className="footer-grid">

{/* Brand */}
<div>

<h2>DR CURE</h2>
<h4>SURGERIES</h4>

<p>
Advanced medical care with compassion and modern technology.
</p>

</div>

{/* Quick Links */}
<div>

<h4 className="footer-heading">Quick Links</h4>

<ul className="footer-links">

{quickLinks.map((link,index)=>(

<li key={index}>

<button
className="footer-link-btn"
onClick={()=>scrollToSection(link.id)}
>

{link.label}

</button>

</li>

))}

</ul>

</div>

{/* Services */}
<div>

<h4 className="footer-heading">Services</h4>

<ul className="footer-links">

<li>
<button className="footer-link-btn" onClick={()=>scrollToSection("proctology")}>
Proctology
</button>
</li>

<li>
<button className="footer-link-btn" onClick={()=>scrollToSection("laparoscopy")}>
Laparoscopy
</button>
</li>

<li>
<button className="footer-link-btn" onClick={()=>scrollToSection("urology")}>
Urology
</button>
</li>

<li>
<button className="footer-link-btn" onClick={()=>scrollToSection("gynecology")}>
Gynecology
</button>
</li>

<li>
<button className="footer-link-btn" onClick={()=>scrollToSection("weightloss")}>
Weight Loss
</button>
</li>

</ul>

</div>

{/* Contact */}
<div>

<h4 className="footer-heading">Contact</h4>

<div className="contact-item">📍 Visakhapatnam, AP</div>
<div className="contact-item">📞 +91 9493994244</div>
<div className="contact-item">✉️ drcuresurgeries@gmail.com</div>

<form className="newsletter" onSubmit={handleSubscribe}>

<input
type="email"
placeholder="Your email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<button type="submit">
{isSubscribed ? "✓" : "→"}
</button>

</form>

{subscriptionMessage && (
<div className="subscription-msg">
{subscriptionMessage}
</div>
)}

</div>

</div>

<div className="footer-bottom">

<div>© {currentYear} DR CURE. All rights reserved.</div>

<button
className="back-top"
onClick={()=>scrollToSection("home")}
>
↑ Back to Top
</button>

</div>

</div>

</footer>

</>

);

};

export default Footer;