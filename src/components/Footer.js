// src/components/Footer.js
import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscriptionMessage, setSubscriptionMessage] = useState("");
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionClass) => {
    const element = document.querySelector(`.${sectionClass}`);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const openModal = (title, content = "Content goes here") => {
    const modal = document.createElement("div");
    modal.className = "footer-modal";
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

    const closeBtn = modal.querySelector(".modal-close");

    closeBtn.onclick = () => {
      document.body.removeChild(modal);
      document.body.style.overflow = "auto";
    };

    modal.onclick = (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
        document.body.style.overflow = "auto";
      }
    };

    document.body.style.overflow = "hidden";
    document.body.appendChild(modal);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setSubscriptionMessage("Please enter your email address");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setSubscriptionMessage("Please enter a valid email address");
      return;
    }

    setIsSubscribed(true);
    setSubscriptionMessage("Subscribing...");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const subscriptions = JSON.parse(
      localStorage.getItem("newsletterSubscriptions") || "[]"
    );

    subscriptions.push({
      email,
      date: new Date().toISOString(),
    });

    localStorage.setItem(
      "newsletterSubscriptions",
      JSON.stringify(subscriptions)
    );

    setSubscriptionMessage(`Thank you for subscribing with: ${email}`);
    setEmail("");

    setTimeout(() => {
      setSubscriptionMessage("");
      setIsSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-bottom">
          <p>© {currentYear} DR CURE. All rights reserved.</p>

          <div className="newsletter">
            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubscribed}
              />
              <button type="submit" disabled={isSubscribed}>
                {isSubscribed ? "✓" : "Subscribe"}
              </button>
            </form>

            {subscriptionMessage && (
              <p className="subscription-message">
                {subscriptionMessage}
              </p>
            )}
          </div>

          <button onClick={scrollToTop}>↑ Back to Top</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;