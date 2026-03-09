// src/components/LogoImage.jsx
import React, { useEffect } from "react";

const LogoImage = () => {

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
    
    :root {
      --brand-purple: #7D008D;
      --brand-orange: #FF7A00;
      --brand-white: #FFFFFF;
    }

    .logo-image-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--brand-white);
    }

    .logo-image {
      display: flex;
      flex-direction: column;
      line-height: 1.1;
      margin-bottom: 8px;
    }

    .logo-line {
      display: flex;
      align-items: center;
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
    }

    .logo-letter-c,
    .logo-letter-s {
      font-size: 32px;
      color: var(--brand-white);
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    }

    .logo-letter-s {
      color: var(--brand-orange);
    }

    .logo-divider {
      font-size: 28px;
      color: var(--brand-purple);
      margin: 0 5px;
      font-weight: 300;
    }

    .logo-text-ure {
      font-size: 28px;
      color: var(--brand-orange);
      letter-spacing: 1px;
    }

    .logo-text-are {
      font-size: 28px;
      color: var(--brand-white);
      letter-spacing: 1px;
    }

    .logo-text-surgery {
      font-size: 28px;
      color: var(--brand-purple);
      letter-spacing: 1px;
    }

    .logo-tagline {
      font-size: 14px;
      font-style: italic;
      color: var(--brand-white);
      text-align: center;
      margin-top: 5px;
      letter-spacing: 0.5px;
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      .logo-letter-c,
      .logo-letter-s {
        font-size: 24px;
      }

      .logo-divider {
        font-size: 22px;
      }

      .logo-text-ure,
      .logo-text-are,
      .logo-text-surgery {
        font-size: 22px;
      }

      .logo-tagline {
        font-size: 12px;
      }
    }

    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className="logo-image-container">
      <div className="logo-image">

        {/* First line: C | URE */}
        <div className="logo-line">
          <span className="logo-letter-c">C</span>
          <span className="logo-divider">|</span>
          <span className="logo-text-ure">URE</span>
        </div>

        {/* Second line: C | ARE */}
        <div className="logo-line">
          <span className="logo-letter-c">C</span>
          <span className="logo-divider">|</span>
          <span className="logo-text-are">ARE</span>
        </div>

        {/* Third line: S | URGERY */}
        <div className="logo-line">
          <span className="logo-letter-s">S</span>
          <span className="logo-divider">|</span>
          <span className="logo-text-surgery">URGERY</span>
        </div>

      </div>

      <div className="logo-tagline">
        Healing Hands, Caring Hearts
      </div>
    </div>
  );
};

export default LogoImage;