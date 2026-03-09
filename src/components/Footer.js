// import React, { useState } from 'react';

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const [subscriptionMessage, setSubscriptionMessage] = useState('');
//   const [currentYear] = useState(new Date().getFullYear());

//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   };

//   // Scroll to section function
//   const scrollToSection = (sectionClass) => {
//     const element = document.querySelector(`.${sectionClass}`);
//     if (element) {
//       const headerOffset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   // Open modal function
//   const openModal = (title, content = 'This content would be displayed in a modal.') => {
//     const modal = document.createElement('div');
//     modal.className = 'footer-modal';
//     modal.innerHTML = `
//       <div class="modal-content">
//         <div class="modal-header">
//           <h3 style="margin:0; color:#7D008D;">${title}</h3>
//           <button class="modal-close">×</button>
//         </div>
//         <div class="modal-body" style="margin-top:15px; line-height:1.6; color:#333;">
//           <p>${content}</p>
//         </div>
//       </div>
//     `;

//     modal.style.cssText = `
//       position: fixed; top: 0; left: 0; width: 100%; height: 100%;
//       background: rgba(0,0,0,0.7); display: flex; align-items: center;
//       justify-content: center; z-index: 9999; font-family: sans-serif;
//     `;

//     const modalContent = modal.querySelector('.modal-content');
//     modalContent.style.cssText = `
//       background: white; padding: 2rem; border-radius: 12px;
//       max-width: 500px; width: 90%; position: relative;
//     `;

//     const closeBtn = modal.querySelector('.modal-close');
//     closeBtn.style.cssText = `
//       position: absolute; top: 1rem; right: 1rem; background: none;
//       border: none; font-size: 1.8rem; cursor: pointer; color: #666;
//     `;

//     closeBtn.onclick = () => {
//       document.body.removeChild(modal);
//       document.body.style.overflow = 'auto';
//     };

//     modal.onclick = (e) => {
//       if (e.target === modal) {
//         document.body.removeChild(modal);
//         document.body.style.overflow = 'auto';
//       }
//     };

//     document.body.style.overflow = 'hidden';
//     document.body.appendChild(modal);
//   };

//   const handleSubscribe = async (e) => {
//     e.preventDefault();
//     if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
//       setSubscriptionMessage('Please enter a valid email');
//       setTimeout(() => setSubscriptionMessage(''), 3000);
//       return;
//     }
    
//     setIsSubscribed(true);
//     setSubscriptionMessage('Subscribing...');
    
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     setSubscriptionMessage(`Subscribed: ${email}`);
//     setEmail('');
    
//     setTimeout(() => {
//       setSubscriptionMessage('');
//       setIsSubscribed(false);
//     }, 5000);
//   };

//   const quickLinks = [
//     { label: 'Home', action: scrollToTop },
//     { label: 'About Us', action: () => openModal('About Us', 'Cure Surgeries is a leading medical facility dedicated to providing comprehensive healthcare services.') },
//     { label: 'Services', action: () => scrollToSection('services-section') },
//     { label: 'Doctors', action: () => openModal('Our Doctors', 'Our team includes specialists in Proctology, Laparoscopy, and Urology.') },
//     { label: 'Contact', action: () => scrollToSection('contact-section') }
//   ];

//   const services = [
//     { name: 'Proctology', desc: 'Specialized care for colorectal conditions' },
//     { name: 'Laparoscopy', desc: 'Minimally invasive surgical procedures' },
//     { name: 'Urology', desc: 'Comprehensive urological care' },
//     { name: 'Gynecology', desc: 'Women\'s health services' },
//     { name: 'Weight Loss', desc: 'Medical weight management programs' }
//   ];

//   return (
//     <>
//       <style>
//         {`
//           :root {
//             --brand-purple: #7D008D;
//             --brand-orange: #FF7A00;
//             --brand-white: #FFFFFF;
//             --footer-dark: #3a0041;
//           }

//           .footer {
//             background: linear-gradient(135deg, var(--brand-purple) 0%, var(--footer-dark) 100%);
//             color: #e2e8f0;
//             padding: 4rem 0 2rem;
//             border-top: 4px solid var(--brand-orange);
//             font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           }

//           .footer-container {
//             max-width: 1200px;
//             margin: 0 auto;
//             padding: 0 1.5rem;
//           }

//           .footer-content {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//             gap: 2rem;
//             margin-bottom: 3rem;
//           }

//           .footer-logo h3 {
//             color: var(--brand-white);
//             font-size: 1.8rem;
//             margin: 0 0 0.2rem 0;
//             font-weight: bold;
//           }

//           .footer-logo h4 {
//             color: var(--brand-white);
//             margin: 0 0 1rem 0;
//             letter-spacing: 2px;
//           }

//           .footer-tagline {
//             color: var(--brand-orange);
//             font-style: italic;
//             margin-bottom: 1rem;
//             font-size: 0.9rem;
//           }

//           .footer-description {
//             line-height: 1.6;
//             margin-bottom: 1.5rem;
//             color: #cbd5e0;
//             font-size: 0.95rem;
//           }

//           .footer-heading {
//             color: var(--brand-orange);
//             font-size: 1.2rem;
//             margin-bottom: 1.5rem;
//             padding-bottom: 0.5rem;
//             border-bottom: 2px solid rgba(255, 122, 0, 0.3);
//             font-weight: 600;
//           }

//           .social-links {
//             display: flex;
//             gap: 0.8rem;
//             margin-top: 1rem;
//           }

//           .social-link {
//             width: 36px; height: 36px; border-radius: 50%;
//             background: rgba(255, 255, 255, 0.1);
//             color: white; border: none; cursor: pointer;
//             display: flex; align-items: center; justify-content: center;
//             transition: all 0.3s ease;
//           }

//           .social-link:hover {
//             background: var(--brand-orange);
//             transform: translateY(-2px);
//           }

//           .footer-links {
//             list-style: none; padding: 0; margin: 0;
//           }

//           .footer-links li { margin-bottom: 0.8rem; }

//           .footer-link-btn {
//             background: none; border: none; color: #cbd5e0;
//             cursor: pointer; padding: 0.2rem 0; text-align: left;
//             width: 100%; font-size: 1rem; transition: all 0.3s ease;
//           }

//           .footer-link-btn:hover {
//             color: var(--brand-orange);
//             padding-left: 8px;
//           }

//           .contact-info {
//             list-style: none; padding: 0; margin: 0;
//           }

//           .contact-item {
//             display: flex; align-items: flex-start;
//             margin-bottom: 1rem; gap: 0.8rem;
//           }

//           .contact-link {
//             background: none; border: none; color: #cbd5e0;
//             cursor: pointer; text-align: left; padding: 0;
//             display: flex; gap: 0.5rem; font-size: 0.9rem;
//             line-height: 1.4; transition: color 0.3s;
//           }

//           .contact-link:hover { color: var(--brand-orange); }

//           .contact-icon { color: var(--brand-orange); font-size: 1.1rem; }

//           .newsletter-form {
//             display: flex; gap: 0.5rem; margin-top: 1rem;
//           }

//           .newsletter-form input {
//             flex: 1; padding: 0.6rem; border-radius: 4px;
//             border: 1px solid rgba(255,255,255,0.2);
//             background: rgba(255,255,255,0.05); color: white;
//           }

//           .newsletter-form button {
//             background: var(--brand-orange); color: white;
//             border: none; padding: 0 1rem; border-radius: 4px; cursor: pointer;
//           }

//           .footer-bottom {
//             padding-top: 2rem; border-top: 1px solid rgba(255, 255, 255, 0.1);
//             display: flex; justify-content: space-between; align-items: center;
//             flex-wrap: wrap; gap: 1rem;
//           }

//           .copyright { color: #a0aec0; font-size: 0.85rem; }

//           .back-to-top {
//             background: rgba(255, 255, 255, 0.1); color: white;
//             border: none; padding: 0.5rem 1rem; border-radius: 4px;
//             cursor: pointer; font-size: 0.85rem; transition: 0.3s;
//           }

//           .back-to-top:hover { background: var(--brand-orange); }

//           .subscription-message {
//             font-size: 0.8rem; margin-top: 5px; color: var(--brand-orange);
//           }

//           @media (max-width: 768px) {
//             .footer-content { grid-template-columns: 1fr; }
//             .footer-bottom { flex-direction: column; text-align: center; }
//           }
//         `}
//       </style>

//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-content">
//             {/* Branding Section */}
//             <div className="footer-section">
//               <div className="footer-logo">
//                 <h3>DR CURE</h3>
//                 <h4>SURGERIES</h4>
//                 <p className="footer-tagline">Healing Hands, Caring Hearts</p>
//               </div>
//               <p className="footer-description">
//                 Advanced medical care with compassion and cutting-edge technology. 
//                 Your health is our priority.
//               </p>
//               <div className="social-links">
//                 {['📘', '🐦', '📷', '💼'].map((icon, i) => (
//                   <button key={i} className="social-link" onClick={() => window.open('#', '_blank')}>
//                     {icon}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Links Section */}
//             <div className="footer-section">
//               <h4 className="footer-heading">Quick Links</h4>
//               <ul className="footer-links">
//                 {quickLinks.map((link, index) => (
//                   <li key={index}>
//                     <button className="footer-link-btn" onClick={link.action}>
//                       {link.label}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Services Section */}
//             <div className="footer-section">
//               <h4 className="footer-heading">Our Services</h4>
//               <ul className="footer-links">
//                 {services.map((service, index) => (
//                   <li key={index}>
//                     <button className="footer-link-btn" onClick={() => openModal(service.name, service.desc)}>
//                       {service.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Contact Section */}
//             <div className="footer-section">
//               <h4 className="footer-heading">Contact Info</h4>
//               <ul className="contact-info">
//                 <li className="contact-item">
//                   <button className="contact-link" onClick={() => window.open('https://maps.google.com', '_blank')}>
//                     <span className="contact-icon">📍</span>
//                     <span>Krishna Nagar, Maharani Peta, Visakhapatnam, AP 530002</span>
//                   </button>
//                 </li>
//                 <li className="contact-item">
//                   <button className="contact-link" onClick={() => window.location.href = 'tel:+919353937641'}>
//                     <span className="contact-icon">📞</span>
//                     <span>+91 9353937641</span>
//                   </button>
//                 </li>
//                 <li className="contact-item">
//                   <button className="contact-link" onClick={() => window.location.href = 'mailto:drcuresurgeries@gmail.com'}>
//                     <span className="contact-icon">✉️</span>
//                     <span>drcuresurgeries@gmail.com</span>
//                   </button>
//                 </li>
//               </ul>
              
//               <form className="newsletter-form" onSubmit={handleSubscribe}>
//                 <input 
//                   type="email" 
//                   placeholder="Your email" 
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   disabled={isSubscribed}
//                 />
//                 <button type="submit" disabled={isSubscribed}>
//                   {isSubscribed ? '✓' : '→'}
//                 </button>
//               </form>
//               {subscriptionMessage && <div className="subscription-message">{subscriptionMessage}</div>}
//             </div>
//           </div>

//           <div className="footer-bottom">
//             <p className="copyright">
//               © {currentYear} DR CURE. All rights reserved.
//             </p>
//             <div style={{display:'flex', gap:'15px'}}>
//                <button className="footer-link-btn" style={{fontSize:'0.85rem'}} onClick={() => openModal('Privacy Policy', 'Details about your privacy...')}>Privacy</button>
//                <button className="footer-link-btn" style={{fontSize:'0.85rem'}} onClick={() => openModal('Terms', 'Our terms and conditions...')}>Terms</button>
//             </div>
//             <button className="back-to-top" onClick={scrollToTop}>
//               ↑ Back to Top
//             </button>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;


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

<li>Proctology</li>
<li>Laparoscopy</li>
<li>Urology</li>
<li>Gynecology</li>
<li>Weight Loss</li>

</ul>

</div>

{/* Contact */}
<div>

<h4 className="footer-heading">Contact</h4>

<div className="contact-item">📍 Visakhapatnam, AP</div>
<div className="contact-item">📞 +91 9353937641</div>
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