// src/components/Footer.js
import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState('');
  const [currentYear] = useState(new Date().getFullYear());

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll to section function
  const scrollToSection = (sectionClass) => {
    const element = document.querySelector(`.${sectionClass}`);
    if (element) {
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Section with class "${sectionClass}" not found`);
    }
  };

  // Open modal function
  const openModal = (title, content = 'This content would be displayed in a modal.') => {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'footer-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>${title}</h3>
          <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <p>${content}</p>
        </div>
      </div>
    `;

    // Add styles
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    `;

    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
      background: white;
      padding: 2rem;
      border-radius: 8px;
      max-width: 500px;
      width: 90%;
      position: relative;
    `;

    // Add close functionality
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.style.cssText = `
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
    `;

    closeBtn.onclick = () => {
      document.body.removeChild(modal);
      document.body.style.overflow = 'auto';
    };

    modal.onclick = (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
      }
    };

    // Add to document
    document.body.style.overflow = 'hidden';
    document.body.appendChild(modal);
  };

  // Open doctors page
  const openDoctorsPage = () => {
    openModal('Our Doctors', 
      'Meet our team of experienced medical professionals:<br><br>' +
      '• Dr. Sarah Johnson - Proctology Specialist<br>' +
      '• Dr. Michael Chen - Laparoscopic Surgeon<br>' +
      '• Dr. Emily Rodriguez - Urology Expert<br>' +
      '• Dr. Robert Kim - Gynecology Specialist<br>' +
      '• Dr. Lisa Thompson - Weight Loss Consultant'
    );
  };

  const quickLinks = [
    { label: 'Home', action: scrollToTop },
    { label: 'About Us', action: () => openModal('About Us', 'Cure  is a leading medical facility dedicated to providing comprehensive healthcare services with state-of-the-art technology and compassionate care.') },
    { label: 'Services', action: () => scrollToSection('services-section') },
    { label: 'Doctors', action: openDoctorsPage },
    { label: 'Contact', action: () => scrollToSection('contact-section') }
  ];

  const services = [
    { name: 'Proctology', desc: 'Specialized care for colorectal conditions' },
    { name: 'Laparoscopy', desc: 'Minimally invasive surgical procedures' },
    { name: 'Urology', desc: 'Comprehensive urological care' },
    { name: 'Gynecology', desc: 'Women\'s health services' },
    { name: 'Weight Loss', desc: 'Medical weight management programs' }
  ];

  const contactInfo = [
    { 
      icon: '📍', 
      text: 'P867+PFP, Krishna Nagar, Maharani Peta, Visakhapatnam, Andhra Pradesh 530002',
      action: () => {
        window.open('https://maps.app.goo.gl/Y7RCAnb5PivBPH1bA?g_st=awb', '_blank');
      }
    },
    { 
      icon: '📞', 
      text: '+91 9353937641',
      action: () => {
        if (window.confirm('Call +91 9353937641?')) {
          window.location.href = 'tel:+91 9353937641';
        }
      }
    },
    { 
      icon: '✉️', 
      text: 'drcuresurgeries@gmail.com',
      action: () => {
        window.location.href = 'mailto:curecaresurgery@gmail.com?subject=Inquiry%20from%20Website&body=Hello%20Heptacare%20Health,';
      }
    }
  ];

  const socialPlatforms = [
    { icon: '📘', label: 'Facebook', url: 'https://facebook.com/heptacarehealth' },
    { icon: '🐦', label: 'Twitter', url: 'https://twitter.com/heptacarehealth' },
    { icon: '📷', label: 'Instagram', url: 'https://instagram.com/heptacarehealth' },
    { icon: '💼', label: 'LinkedIn', url: 'https://linkedin.com/company/heptacarehealth' }
  ];

  const footerLinks = [
    { 
      label: 'Privacy Policy', 
      action: () => openModal('Privacy Policy', 
        'Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information.') 
    },
    { 
      label: 'Terms & Conditions', 
      action: () => openModal('Terms & Conditions',
        'By using our services, you agree to our terms and conditions. Please read them carefully.') 
    },
    { 
      label: 'Sitemap', 
      action: () => openModal('Sitemap',
        'Website Structure:<br><br>' +
        '• Homepage<br>' +
        '• About Us<br>' +
        '• Services<br>' +
        '• Doctors<br>' +
        '• Contact<br>' +
        '• Patient Portal<br>' +
        '• Resources') 
    }
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setSubscriptionMessage('Please enter your email address');
      setTimeout(() => setSubscriptionMessage(''), 3000);
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setSubscriptionMessage('Please enter a valid email address');
      setTimeout(() => setSubscriptionMessage(''), 3000);
      return;
    }
    
    // Simulate API call
    setIsSubscribed(true);
    setSubscriptionMessage('Subscribing...');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store in localStorage to simulate persistence
      const subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions') || '[]');
      subscriptions.push({
        email: email,
        date: new Date().toISOString()
      });
      localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));
      
      setSubscriptionMessage(`Thank you for subscribing with: ${email}`);
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSubscriptionMessage('');
        setIsSubscribed(false);
      }, 5000);
      
    } catch (error) {
      setSubscriptionMessage('Subscription failed. Please try again.');
      setIsSubscribed(false);
      setTimeout(() => setSubscriptionMessage(''), 3000);
    }
  };

  // Copy to clipboard function
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      const originalMessage = subscriptionMessage;
      setSubscriptionMessage('Copied to clipboard!');
      setTimeout(() => setSubscriptionMessage(originalMessage), 2000);
    });
  };

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>CURE CARE</h3>
              <h4>SURGERY</h4>

              <p className="footer-tagline">Healing Hands, Caring Hearts</p>
            </div>
            <p className="footer-description">
              Advanced medical care with compassion and cutting-edge technology. 
              Your health is our priority.
            </p>
            <div className="social-links">
              {socialPlatforms.map((platform, index) => (
                <button 
                  key={index} 
                  className="social-link"
                  onClick={() => window.open(platform.url, '_blank')}
                  aria-label={`Follow us on ${platform.label}`}
                  title={platform.label}
                >
                  {platform.icon}
                </button>
              ))}
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    className="footer-link-btn"
                    onClick={link.action}
                    aria-label={`Navigate to ${link.label}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    className="footer-link-btn"
                    onClick={() => openModal(service.name, service.desc)}
                    aria-label={`Learn more about ${service.name}`}
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <ul className="contact-info">
              {contactInfo.map((contact, index) => (
                <li key={index} className="contact-item">
                  <button 
                    className="contact-link"
                    onClick={contact.action}
                    aria-label={contact.icon === '📍' ? 'Open location in Google Maps' : 
                               contact.icon === '📞' ? 'Call us' : 
                               'Send us an email'}
                  >
                    <span className="contact-icon">{contact.icon}</span>
                    <span>{contact.text}</span>
                  </button>
                  {contact.icon === '📍' && (
                    <button 
                      className="copy-btn"
                      onClick={() => copyToClipboard(contact.text)}
                      aria-label="Copy address to clipboard"
                      title="Copy address"
                    >
                      📋
                    </button>
                  )}
                </li>
              ))}
            </ul>
            
            <div className="newsletter">
              <h5>Subscribe to Newsletter</h5>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email for newsletter subscription"
                  disabled={isSubscribed}
                  className={subscriptionMessage ? 'has-message' : ''}
                />
                <button 
                  type="submit" 
                  aria-label={isSubscribed ? 'Subscribed successfully' : 'Subscribe to newsletter'}
                  disabled={isSubscribed}
                  className={isSubscribed ? 'subscribed' : ''}
                >
                  {isSubscribed ? '✓' : '→'}
                </button>
              </form>
              {subscriptionMessage && (
                <div className="subscription-message">
                  {subscriptionMessage}
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} DR CURE . All rights reserved.
          </p>
          <div className="footer-bottom-links">
            {footerLinks.map((link, index) => (
              <React.Fragment key={index}>
                <button 
                  className="footer-bottom-link"
                  onClick={link.action}
                  aria-label={`Open ${link.label}`}
                >
                  {link.label}
                </button>
                {index < footerLinks.length - 1 && <span className="separator">|</span>}
              </React.Fragment>
            ))}
          </div>
          <button 
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;