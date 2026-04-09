import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";   // ✅ ADD THIS

// ✅ IMPORT IMAGES
import drNaveen from "../assets/dr-naveen-kumar.jpg";
import drTejesh from "../assets/dr-tejeswarao.jpg";

const Doctors = () => {

  const navigate = useNavigate();   // ✅ ADD THIS

  useEffect(() => {
    const style = document.createElement("style");

    style.innerHTML = `
      :root{
        --brand-purple:#7D008D;
        --brand-orange:#FF7A00;
      }

      .doctors-section {
        padding: 40px 15px;
        background: #f8f9fb;
      }

      .doctors-container {
        max-width: 1000px;
        margin: auto;
      }

      .doctors-title {
        text-align: center;
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 30px;
        color: var(--brand-purple);
      }

      .doctor-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
        gap: 20px;
      }

      .doctor-card {
        background: #fff;
        border-radius: 16px;
        padding: 18px;
        border: 2px solid #eee;
        transition: 0.3s;
      }

      .doctor-card:hover{
        border-color: var(--brand-purple);
        transform: translateY(-4px);
      }

      .doctor-top {
        display: flex;
        gap: 15px;
        align-items: center;
      }

      .doctor-img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        object-fit: cover;
      }

      .doctor-name {
        font-size: 18px;
        color: var(--brand-purple);
        font-weight: 700;
      }

      .doctor-degree {
        font-size: 13px;
        color: #555;
      }

      .badge {
        display: inline-block;
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 11px;
        margin-top: 6px;
        margin-right: 6px;
      }

      .exp {
        background: #f3e6f7;
        color: var(--brand-purple);
      }

      .free {
        background: #fff3e6;
        color: var(--brand-orange);
      }

      .rating {
        margin-top: 8px;
        font-size: 13px;
        color: #333;
      }

      .rating span {
        color: #FFA500;
        margin-right: 5px;
      }

      .divider {
        margin: 15px 0;
        border-top: 1px solid #eee;
      }

      .section-label {
        font-weight: 600;
        font-size: 13px;
        color: #0b3c5d;
        margin-bottom: 3px;
      }

      .doctor-buttons {
        margin-top: 15px;
      }

      .call-btn {
        width: 100%;
        padding: 10px;
        border: 2px solid var(--brand-purple);
        color: var(--brand-purple);
        border-radius: 10px;
        background: white;
        margin-bottom: 10px;
        cursor: pointer;
        font-weight: 600;
        font-size: 13px;
      }

      .book-btn {
        width: 100%;
        padding: 10px;
        background: var(--brand-orange);
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 600;
        font-size: 13px;
      }
    `;

    document.head.appendChild(style);
  }, []);

  return (
    <section className="doctors-section">

      <div className="doctors-container">

        <h2 className="doctors-title">Our Best Doctors</h2>

        <div className="doctor-grid">

          {/* Doctor 1 */}
          <div className="doctor-card">

            <div className="doctor-top">
              <img src={drNaveen} alt="doctor" className="doctor-img" />

              <div>
                <div className="doctor-name">Dr A Naveen Kumar</div>
                <div className="doctor-degree">DNB General Surgeon</div>

                <div>
                  <span className="badge exp">14 YEARS EXPERIENCE</span>
                  <span className="badge free">FREE CONSULTATION</span>
                </div>

                <div className="rating">
                  <span>★★★★★</span> 5/5
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div>
              <div className="section-label">Speciality</div>
              <div>General Surgery & Advanced Laparoscopic Surgeon</div>
            </div>

            <br/>

            <div>
              <div className="section-label">Location</div>
              <div>Visakhapatnam (Vizag)</div>
            </div>

            <div className="doctor-buttons">
              <button className="call-btn">📞 Call us 9493994244</button>

              {/* ✅ NAVIGATION ADDED */}
              <button 
                className="book-btn"
                onClick={() => {
                  navigate("/consultation");
                  window.scrollTo(0,0);
                }}
              >
                Book Free Appointment
              </button>

            </div>

          </div>

          {/* Doctor 2 */}
          <div className="doctor-card">

            <div className="doctor-top">
              <img src={drTejesh} alt="doctor" className="doctor-img" />

              <div>
                <div className="doctor-name">Dr B Tejeswarao</div>
                <div className="doctor-degree">MS General Surgeon</div>

                <div>
                  <span className="badge exp">15 YEARS EXPERIENCE</span>
                  <span className="badge free">FREE CONSULTATION</span>
                </div>

                <div className="rating">
                  <span>★★★★★</span> 4.9/5
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div>
              <div className="section-label">Speciality</div>
              <div>General Surgery & Laparoscopic Surgery</div>
            </div>

            <br/>

            <div>
              <div className="section-label">Location</div>
              <div>Visakhapatnam (Vizag)</div>
            </div>

            <div className="doctor-buttons">
              <button className="call-btn">📞 Call us 9493994244</button>

              {/* ✅ NAVIGATION ADDED */}
              <button 
                className="book-btn"
                onClick={() => {
                  navigate("/consultation");
                  window.scrollTo(0,0);
                }}
              >
                Book Free Appointment
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Doctors;