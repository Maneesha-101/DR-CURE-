// import React, { useState } from 'react';
// import Logo from "../assets/Logo.jpg";

// /**
//  * HeaderLogo Component (Internal)
//  * Uses your exact provided CSS and structure.
//  */
// const HeaderLogo = () => {
//   return (
//     <div className="header-logo-container">
//       <div className="header-logo-image">
//         <img 
//           src={Logo} 
//           alt="Cure Logo" 
//           className="clinic-logo"
//         />
//       </div>
//       <div className="clinic-name-container">
//         <div className="clinic-name-main">Dr CURE</div>
//         <div className="clinic-tagline">SURGERIES</div>
//       </div>
//     </div>
//   );
// };

// const Footer = () => {
//   const [email, setEmail] = useState('');
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const [subscriptionMessage, setSubscriptionMessage] = useState('');
//   const [currentYear] = useState(new Date().getFullYear());

//   // Navigation functions
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
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

//   return (
//     <>
//       <style>
//         {`
//           /* Brand CSS Variables */
//           :root {
//             --brand-purple: #7D008D;
//             --brand-orange: #FF7A00;
//             --brand-white: #FFFFFF;
//             --footer-dark: #002B45; /* Deep Navy for professional medical look */
//             --cyan-accent: #1EC1D1; /* Professional teal accent */
//           }

//           /* HeaderLogo Logic Integrated */
//           .header-logo-container { display: flex; align-items: center; gap: 12px; height: 50px; cursor: pointer; }
//           .header-logo-image { display: flex; align-items: center; justify-content: center; width: 50px; height: 50px; flex-shrink: 0; }
//           .clinic-logo { width: 75px; height: 70px; object-fit: contain; border-radius: 6px; transition: transform 0.3s ease; }
//           .clinic-logo:hover { transform: scale(1.05); }
//           .clinic-name-container { display: flex; flex-direction: column; justify-content: center; gap: 2px; }
//           .clinic-name-main { font-size: 18px; font-weight: 800; color: var(--brand-purple); line-height: 1.1; letter-spacing: 0.5px; white-space: nowrap; text-transform: uppercase; }
//           .clinic-tagline { font-size: 11px; font-weight: 600; color: var(--brand-orange); line-height: 1.2; letter-spacing: 0.3px; white-space: nowrap; }

//           /* Footer Layout */
//           .footer { background-color: var(--footer-dark); color: white; padding: 60px 0 30px; font-family: 'Segoe UI', Tahoma, sans-serif; }
//           .footer-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
//           .footer-grid { display: grid; grid-template-columns: 1.2fr 0.8fr 1fr 1.5fr 1.5fr; gap: 40px; margin-bottom: 40px; }
          
//           .footer-logo-box { border: 2px solid white; padding: 5px 12px; font-size: 24px; font-weight: bold; width: fit-content; margin-bottom: 15px; }
//           .footer-heading { color: var(--cyan-accent); font-size: 18px; font-weight: 600; margin-bottom: 25px; }
          
//           .footer-links { list-style: none; padding: 0; margin: 0; }
//           .footer-links li { margin-bottom: 12px; font-size: 14px; color: #cbd5e0; cursor: pointer; transition: 0.3s; }
//           .footer-links li:hover { color: white; padding-left: 5px; }

//           .contact-item { display: flex; gap: 12px; margin-bottom: 15px; font-size: 14px; color: #cbd5e0; line-height: 1.5; }
//           .contact-icon { color: var(--cyan-accent); }

//           .appt-desc { font-size: 14px; color: #cbd5e0; line-height: 1.6; margin-bottom: 20px; }
//           .phone-btn-footer { 
//             background-color: var(--cyan-accent); 
//             color: var(--footer-dark); 
//             border: none; 
//             padding: 12px; 
//             border-radius: 5px; 
//             font-weight: bold; 
//             width: 100%; 
//             cursor: pointer; 
//             display: flex; 
//             align-items: center; 
//             justify-content: center; 
//             gap: 10px; 
//             font-size: 16px; 
//           }

//           .social-tray { display: flex; gap: 15px; margin-top: 20px; }
//           .social-circle { 
//             width: 32px; height: 32px; border-radius: 50%; 
//             background: rgba(255,255,255,0.1); 
//             display: flex; align-items: center; justify-content: center; 
//             font-size: 14px; cursor: pointer; transition: 0.3s; 
//           }
//           .social-circle:hover { background: var(--cyan-accent); }

//           .newsletter-small { display: flex; margin-top: 15px; border-radius: 4px; overflow: hidden; }
//           .newsletter-small input { background: rgba(255,255,255,0.1); border: none; padding: 8px 12px; color: white; flex: 1; outline: none; }
//           .newsletter-small button { background: var(--brand-orange); border: none; padding: 0 15px; color: white; cursor: pointer; }

//           .footer-bottom { border-top: 1px solid rgba(255,255,255,0.1); padding-top: 25px; display: flex; justify-content: space-between; font-size: 13px; color: #cbd5e0; }

//           @media (max-width: 1024px) { .footer-grid { grid-template-columns: 1fr 1fr; } }
//           @media (max-width: 600px) { 
//             .footer-grid { grid-template-columns: 1fr; } 
//             .footer-bottom { flex-direction: column; gap: 15px; text-align: center; } 
//           }
//         `}
//       </style>

//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-grid">
            
//             {/* 1. Branding Section (Logo) */}
//             <div>
//               <div className="footer-logo-box">C</div>
//               <div style={{ color: 'white' }}>
//                 <div style={{ fontSize: '20px', fontWeight: 'bold' }}>Dr CURE</div>
//                 <div style={{ fontSize: '12px', color: 'var(--cyan-accent)', fontWeight: '300' }}>SURGERIES</div>
//               </div>
//               <p style={{ marginTop: '15px', fontSize: '14px', fontWeight: '600' }}>CURE WITH CARE</p>
//             </div>

//             {/* 2. Company Links */}
//             <div>
//               <h4 className="footer-heading">Our Company</h4>
//               <ul className="footer-links">
//                 <li>About Us</li>
//                 <li>Contact Us</li>
//                 <li>Careers</li>
//                 <li>Blog</li>
//               </ul>
//             </div>

//             {/* 3. Patients Links */}
//             <div>
//               <h4 className="footer-heading">For Patients</h4>
//               <ul className="footer-links">
//                 <li>FAQs</li>
//                 <li>Patient Help</li>
//                 <li>No Cost EMI</li>
//                 <li>Doctors Section</li>
//                 <li>Videos</li>
//               </ul>
//             </div>

//             {/* 4. Contact Details */}
//             <div>
//               <h4 className="footer-heading">Contact Info</h4>
//               <div className="contact-item">
//                 <span className="contact-icon">📍</span>
//                 <span>a hub, Andhra University North Campus, Visakhapatnam, AP 530003</span>
//               </div>
//               <div className="contact-item">
//                 <span className="contact-icon">📞</span>
//                 <span>+91 9353937641</span>
//               </div>
//               <div className="contact-item">
//                 <span className="contact-icon">✉️</span>
//                 <span>drcuresurgeries@gmail.com</span>
//               </div>
              
//               <form className="newsletter-small" onSubmit={handleSubscribe}>
//                 <input 
//                   type="email" 
//                   placeholder="Newsletter" 
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <button type="submit">{isSubscribed ? '✓' : '→'}</button>
//               </form>
//               {subscriptionMessage && <div style={{fontSize:'11px', marginTop:'5px', color:'var(--brand-orange)'}}>{subscriptionMessage}</div>}
//             </div>

//             {/* 5. Appointment Section */}
//             <div>
//               <h4 className="footer-heading">Make an Appointment</h4>
//               <p className="appt-desc">
//                 Getting an accurate diagnosis can be one of the most impactful experiences you can have.
//               </p>
//               <button className="phone-btn-footer" onClick={() => window.location.href='tel:+919353937641'}>
//                 <span>📞</span> +91 9353937641
//               </button>
//               <div className="social-tray">
//                 {['f', 'ig', 'in', 'yt'].map(soc => <div key={soc} className="social-circle">{soc}</div>)}
//               </div>
//             </div>

//           </div>

//           <div className="footer-bottom">
//             <div>Copyright © {currentYear} Dr Cure. All rights reserved.</div>
//             <div style={{ display: 'flex', gap: '20px' }}>
//               <span>Privacy Policy</span>
//               <span>Terms of Service</span>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import React, { useState } from 'react';
import Logo from "../assets/Logo.jpg";

/**
 * HeaderLogo Component (Internal)
 * Uses your exact provided CSS and structure.
 */
const HeaderLogo = () => {
  return (
    <div className="header-logo-container">
      <div className="header-logo-image">
        <img
  src={Logo}
  alt="Cure Logo"
  className="clinic-logo"
  style={{ width: "300px", height: "150px", objectFit: "contain" }}
/>
      </div>
      <div className="clinic-name-container">
        <div className="clinic-name-main">Dr CURE</div>
        <div className="clinic-tagline">SURGERIES</div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const [currentYear] = useState(new Date().getFullYear());

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setSubscriptionMessage('Please enter a valid email');
      setTimeout(() => setSubscriptionMessage(''), 3000);
      return;
    }
    setIsSubscribed(true);
    setSubscriptionMessage('Subscribing...');
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubscriptionMessage(`Subscribed: ${email}`);
    setEmail('');
    setTimeout(() => {
      setSubscriptionMessage('');
      setIsSubscribed(false);
    }, 5000);
  };

  return (
    <>
      <style>
        {`
          :root {
            --brand-purple: #7D008D;
            --brand-orange: #FF7A00;
            --brand-white: #FFFFFF;
            --footer-dark: #002B45;
            --cyan-accent: #1EC1D1;
          }

          /* LOGO SECTION */

          .header-logo-container {
            display: flex;
            align-items: center;
            gap: 15px;
            height: 150px;
            cursor: pointer;
          }

          .header-logo-image {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 150px;
            height: 100px;
            flex-shrink: 0;
          }

          /* INCREASED LOGO SIZE */

          .clinic-logo {
            width:1000px;
            height: 500px;
            object-fit: contain;
            border-radius: 6px;
            transition: transform 0.3s ease;
          }

          .clinic-logo:hover {
            transform: scale(1.08);
          }

          .clinic-name-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 2px;
          }

          .clinic-name-main {
            font-size: 22px;
            font-weight: 800;
            color: var(--brand-purple);
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }

          .clinic-tagline {
            font-size: 13px;
            font-weight: 600;
            color: var(--brand-orange);
          }

          /* FOOTER */

          .footer {
            background-color: var(--footer-dark);
            color: white;
            padding: 60px 0 30px;
            font-family: 'Segoe UI', Tahoma, sans-serif;
          }

          .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .footer-grid {
            display: grid;
            grid-template-columns: 1.2fr 0.8fr 1fr 1.5fr 1.5fr;
            gap: 40px;
            margin-bottom: 40px;
          }

          .footer-logo-box {
            border: 2px solid white;
            padding: 5px 12px;
            font-size: 24px;
            font-weight: bold;
            width: fit-content;
            margin-bottom: 15px;
          }

          .footer-heading {
            color: var(--cyan-accent);
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 25px;
          }

          .footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .footer-links li {
            margin-bottom: 12px;
            font-size: 14px;
            color: #cbd5e0;
            cursor: pointer;
            transition: 0.3s;
          }

          .footer-links li:hover {
            color: white;
            padding-left: 5px;
          }

          .contact-item {
            display: flex;
            gap: 12px;
            margin-bottom: 15px;
            font-size: 14px;
            color: #cbd5e0;
            line-height: 1.5;
          }

          .contact-icon {
            color: var(--cyan-accent);
          }

          .appt-desc {
            font-size: 14px;
            color: #cbd5e0;
            line-height: 1.6;
            margin-bottom: 20px;
          }

          .phone-btn-footer {
            background-color: var(--cyan-accent);
            color: var(--footer-dark);
            border: none;
            padding: 12px;
            border-radius: 5px;
            font-weight: bold;
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-size: 16px;
          }

          .social-tray {
            display: flex;
            gap: 15px;
            margin-top: 20px;
          }

          .social-circle {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background: rgba(255,255,255,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            cursor: pointer;
            transition: 0.3s;
          }

          .social-circle:hover {
            background: var(--cyan-accent);
          }

          .newsletter-small {
            display: flex;
            margin-top: 15px;
            border-radius: 4px;
            overflow: hidden;
          }

          .newsletter-small input {
            background: rgba(255,255,255,0.1);
            border: none;
            padding: 8px 12px;
            color: white;
            flex: 1;
            outline: none;
          }

          .newsletter-small button {
            background: var(--brand-orange);
            border: none;
            padding: 0 15px;
            color: white;
            cursor: pointer;
          }

          .footer-bottom {
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 25px;
            display: flex;
            justify-content: space-between;
            font-size: 13px;
            color: #cbd5e0;
          }

          @media (max-width: 1024px) {
            .footer-grid {
              grid-template-columns: 1fr 1fr;
            }
          }

          @media (max-width: 600px) {
            .footer-grid {
              grid-template-columns: 1fr;
            }

            .footer-bottom {
              flex-direction: column;
              gap: 15px;
              text-align: center;
            }
          }
        `}
      </style>

      <footer className="footer">
        <div className="footer-container">

          <div className="footer-grid">

            {/* Branding */}
            <div>
              <HeaderLogo />
              <p style={{ marginTop: '15px', fontSize: '14px', fontWeight: '600' }}>
                CURE WITH CARE
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 className="footer-heading">Our Company</h4>
              <ul className="footer-links">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>

            {/* Patients */}
            <div>
              <h4 className="footer-heading">For Patients</h4>
              <ul className="footer-links">
                <li>FAQs</li>
                <li>Patient Help</li>
                <li>No Cost EMI</li>
                <li>Doctors Section</li>
                <li>Videos</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="footer-heading">Contact Info</h4>

              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>a hub, Andhra University North Campus, Visakhapatnam, AP 530003</span>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+91 9353937641</span>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>drcuresurgeries@gmail.com</span>
              </div>

              <form className="newsletter-small" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Newsletter"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">{isSubscribed ? '✓' : '→'}</button>
              </form>

              {subscriptionMessage && (
                <div style={{ fontSize: '11px', marginTop: '5px', color: 'var(--brand-orange)' }}>
                  {subscriptionMessage}
                </div>
              )}

            </div>

            {/* Appointment */}
            <div>
              <h4 className="footer-heading">Make an Appointment</h4>

              <p className="appt-desc">
                Getting an accurate diagnosis can be one of the most impactful experiences you can have.
              </p>

              <button
                className="phone-btn-footer"
                onClick={() => window.location.href = 'tel:+919353937641'}
              >
                📞 +91 9353937641
              </button>

              <div className="social-tray">
                {['f', 'ig', 'in', 'yt'].map(soc => (
                  <div key={soc} className="social-circle">{soc}</div>
                ))}
              </div>

            </div>

          </div>

          <div className="footer-bottom">
            <div>Copyright © {currentYear} Dr Cure. All rights reserved.</div>
            <div style={{ display: 'flex', gap: '20px' }}>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;