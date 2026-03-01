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