
import React from "react";
import { useNavigate } from "react-router-dom";

const Piles = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate("/consultation"); // ✅ updated route
  };

  return (
    <>
      <style>{`
        :root {
          --brand-purple:#7D008D;
          --brand-orange:#FF7A00;
          --brand-white:#FFFFFF;
          --footer-dark:#002B45;
          --cyan-accent:#1EC1D1;
        }

        .piles-container {
          background: #EAF3F7;
          padding: 180px 20px 80px;
          font-family: 'Poppins', sans-serif;
        }

        .piles-wrapper {
          max-width: 1150px;
          margin: auto;
        }

        .brand-header {
           display: flex;
           justify-content: space-between;
           align-items: center;
           margin-bottom: 20px;
        }

        .logo-text {
           font-size: 24px;
           font-weight: 800;
           color: var(--footer-dark);
        }

        .logo-text span {
           color: var(--cyan-accent);
        }

        .breadcrumb {
          color: #ec14dd;
          font-size: 14px;
          margin-bottom: 25px;
        }

        .piles-title {
          font-size: 50px;
          font-weight: 700;
          color: var(--brand-purple);
          line-height: 1.25;
          margin-bottom: 20px;
        }

        .piles-description {
          font-size: 18px;
          color: #8f4f71;
          max-width: 850px;
          line-height: 1.7;
          margin-bottom: 40px;
        }

        .cta-button {
          background: var(--brand-orange);
          color: var(--brand-white);
          padding: 16px 32px;
          border-radius: 14px;
          border: none;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .cta-button:hover {
          background: var(--footer-dark);
          transform: translateY(-2px);
        }

        /* CONTENT CARDS */
        .content-card {
          background: white;
          padding: 40px;
          border-radius: 22px;
          margin-top: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .section-title {
          font-size: 28px;
          font-weight: 700;
          color: var(--brand-purple);
          margin-bottom: 20px;
          border-bottom: 2px solid #f0f0f0;
          padding-bottom: 10px;
        }

        .sub-section-title {
          font-size: 20px;
          font-weight: 600;
          color: var(--footer-dark);
          margin: 25px 0 15px;
        }

        /* SYMPTOMS GRID */
        .symptoms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }

        .symptom-box {
          text-align: center;
          padding: 20px;
          border: 1px solid #eee;
          border-radius: 15px;
          transition: 0.3s;
        }

        .symptom-box:hover {
          border-color: var(--cyan-accent);
          background: #f0fbfc;
        }

        .symptom-box img {
          width: 70px;
          height: 70px;
          margin-bottom: 10px;
        }

        /* GRADES SECTION */
        .grades-visual {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 15px;
          margin: 30px 0;
          text-align: center;
        }

        .grade-circle-box img {
          width: 140px;
          border-radius: 50%;
          border: 3px solid var(--cyan-accent);
          margin-bottom: 10px;
        }

        .grade-item {
          margin-bottom: 15px;
          padding: 15px 20px;
          background: #f9f9f9;
          border-left: 4px solid var(--brand-orange);
          border-radius: 0 10px 10px 0;
        }

        /* TREATMENT LIST */
        .treatment-item {
          margin-bottom: 25px;
        }

        .treatment-item strong {
          color: var(--brand-purple);
          display: block;
          font-size: 18px;
          margin-bottom: 5px;
        }

        .stats-container {
          margin-top: 70px;
          background: #F3F3F3;
          border-radius: 22px;
          padding: 40px 20px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .stat-box {
          flex: 1;
          min-width: 180px;
          text-align: center;
        }

        .stat-number {
          font-size: 42px;
          font-weight: 700;
          color: var(--footer-dark);
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 16px;
          color: #6B7F90;
        }

        @media (max-width: 768px) {
          .piles-title { font-size: 32px; }
          .stats-container { flex-direction: column; }
        }
      `}</style>

      <div className="piles-container">
        <div className="piles-wrapper">
          
          <div className="brand-header">
            <div className="breadcrumb">
              Home » Home » <strong>Piles</strong>
            </div>
            <div className="logo-text">
              Dr Cure <span>Surgeries</span>
            </div>
          </div>

          <h1 className="piles-title">
            Advanced Piles Treatment <br />
            Laser Surgery & Fast Recovery
          </h1>

          <p className="piles-description">
            Piles (haemorrhoids) are swollen veins in the anus and lower rectum. 
            At <strong>Dr Cure Surgeries</strong>, we provide minimally invasive procedures 
            to ensure you return to your normal life quickly and pain-free.
          </p>

          <button className="cta-button" onClick={handleBooking}>
            Call to Schedule Your Consultation
          </button>

          {/* SYMPTOMS SECTION */}
          <div className="content-card">
            <h2 className="section-title">Common Symptoms</h2>
            <div className="symptoms-grid">
              <div className="symptom-box">
                <img src="https://cdn-icons-png.flaticon.com/512/3048/3048375.png" alt="Pain" />
                <p><strong>Burning & Pain</strong></p>
              </div>
              <div className="symptom-box">
                <img src="https://cdn-icons-png.flaticon.com/512/2864/2864335.png" alt="Itching" />
                <p><strong>Itching</strong></p>
              </div>
              <div className="symptom-box">
                <img src="https://cdn-icons-png.flaticon.com/512/6252/6252119.png" alt="Constipation" />
                <p><strong>Constipation</strong></p>
              </div>
              <div className="symptom-box">
                <img src="https://cdn-icons-png.flaticon.com/512/4006/4006190.png" alt="Bleeding" />
                <p><strong>Bleeding</strong></p>
              </div>
            </div>
          </div>

          {/* GRADES SECTION */}
          <div className="content-card">
            <h2 className="section-title">Internal Hemorrhoid Grades</h2>
            <div className="grades-visual">
                <div className="grade-circle-box">
                    <img src="https://img.freepik.com/premium-vector/stages-hemorrhoids-development-internal-hemorrhoids-flat-vector-illustration_532867-463.jpg" alt="Grades" style={{width: '100%', maxWidth: '600px', borderRadius: '15px', border: 'none'}} />
                </div>
            </div>
            <div className="grade-item">
              <strong>Grade 1:</strong>  represents the mildest form of internal piles. These small swellings stay within the rectal lining and do not protrude from the anus. Most people with Grade 1 piles experience no symptoms. Doctors usually recommend conservative treatments like lifestyle changes, sitz baths, and topical ointments or creams.
            </div>
            <div className="grade-item">
              <strong>Grade 2:</strong>  piles are larger than Grade 1 and may protrude during bowel movements. However, they retract back into the rectum on their own after defecation. Doctors often treat Grade 2 piles using non-surgical methods such as rubber band ligation, infrared coagulation, or sclerotherapy.
            </div>
            <div className="grade-item">
              <strong>Grade 3:</strong>  piles also prolapse during bowel movements but don’t retract automatically. Patients must manually push them back into the rectum. These piles often cause discomfort, pain, itching, bleeding, and hygiene challenges. Treatment options typically include rubber band ligation, infrared coagulation, or sclerotherapy.
            </div>
            <div className="grade-item">
              <strong>Grade 4:</strong>  piles represent the most severe and advanced stage. They remain outside the anus and cannot be manually repositioned. These piles appear large, inflamed, and highly sensitive. Many patients suffer from severe pain, continuous bleeding, and hygiene difficulties. Complications such as thrombosis (blood clots) or strangulation may also occur. In most cases, surgeons recommend procedures like laser surgery or stapled hemorrhoidectomy to treat Grade 4 piles effectively.


            </div>
          </div>

          {/* DIAGNOSIS SECTION */}
          <div className="content-card">
            <h2 className="section-title">How Can Piles Be Diagnosed?</h2>
            <p className="piles-description">A proctologist or an anorectal surgeon can diagnose piles by taking your medical history, performing a physical examination, and conducting diagnostic tests if necessary. Here’s an overview of the diagnostic process:</p>
            <div className="treatment-item">
                <strong>Medical History:</strong>
                <p>Your healthcare provider will begin by asking about your symptoms, including any pain, itching, bleeding, or changes in bowel movements. They will also review your medical history and inquire about any previous episodes of piles.</p>
            </div>
            <div className="treatment-item">
                <strong>Physical Examination:</strong>
                <p>The healthcare provider will examine the anal region to check for external and internal piles. They may visually inspect the area and gently insert a gloved finger into the anus and rectum to feel for abnormalities, swelling, or lumps.</p>
            </div>
            <div className="treatment-item">
                <strong>Anoscopy / Proctoscopy:</strong>
                <p>In certain cases, the provider may perform a digital rectal examination. During this procedure, they insert a lubricated, gloved finger into the rectum to evaluate internal piles and identify any other rectal issues. The examination usually takes only a few moments and causes minimal discomfort.</p>
            </div>
          </div>

          {/* TREATMENT OPTIONS SECTION */}
          <div className="content-card">
            <h2 className="section-title">Treatment Options</h2>
            <h3 className="sub-section-title">Non-Surgical Methods</h3>
            <div className="treatment-item">
              <strong>Rubber Band Ligation:</strong>
              <p>Rubber band ligation is a commonly used non-surgical treatment for internal piles. To perform this procedure, a doctor inserts a viewing scope (anoscope) into the anus. Then, a special instrument called a ligator is used to place a small rubber band at the base of the piles. As a result, the blood supply to the piles is cut off, causing them to shrink and eventually fall off within a few days. Typically, the procedure takes about 30 minutes, and patients can go home afterward. Moreover, the recovery time is short, and most individuals can resume their normal activities within a few days.</p>
            </div>
            <div className="treatment-item">
              <strong>Sclerotherapy:</strong>
              <p>Among the wide range of treatment options for managing piles, a non-surgical modality is sclerotherapy. In this technique, a solution (sclerosant) is injected into the affected vein, causing it to shrink and eventually fade away. It is important to note that sclerotherapy is typically used for internal piles. Furthermore, since it is a non-surgical procedure, it generally offers a faster recovery time compared to surgical interventions.</p>
            </div>
            <div className="treatment-item">
              <strong>Infrared Photocoagulation:</strong>
              <p>Infrared photocoagulation is a medical procedure for treating small and medium-sized piles. Notably, this treatment is only suitable for internal piles. During the procedure, the doctor uses a device that produces an intense beam of infrared light. The heat generated causes scar tissue, which cuts off the blood supply to the piles. Consequently, the piles shrink and eventually fall off. Scar tissue then forms on the wall of the anal canal. This scar tissue helps hold nearby veins in place so they don’t bulge into the anal canal. Additionally, the recovery time is typically short, and most individuals can resume their normal activities immediately after the procedure.</p>
            </div>
            <div className="treatment-item">
              <strong>Electrocoagulation:</strong>
              <p>This procedure uses an electric current to destroy the piles. To begin, a proctoscope is placed in the anus to locate the piles. A probe is then positioned at the base, and an electric current is delivered using a handpiece connected to the probe. The aim is to thicken the blood in vessels and cauterize it at the base. As a result, the piles start to shrink. However, recovery time can vary from person to person, depending on factors such as the size and severity of the piles, as well as individual healing capabilities.</p>
            </div>
             <div className="treatment-item">
              <strong>What is the Recovery Process of Piles Laser Operation?</strong>
              <p> You must also keep in mind the following:

First, ensure that you keep the surgery site clean to avoid infection.
Take sitz bath regularly.
Avoid lifting heavy weights as that adds additional strain to the surgical site.
Eat meals that are nutritious and high in fiber content. Avoid oily and spicy foods.
To ensure you are hydrated, drink at least 8-10 glasses of water every day.
Do not strain yourself during your bowel movement.
If your bowel movements are hard, consider taking stool softeners to alleviate the strain (only after consulting the doctor).
Be diligent about taking medications and applying ointments/creams prescribed by your doctor.</p>
             </div>
          </div>

          {/* STATS SECTION */}
          <div className="stats-container">
            <div className="stat-box">
              <div className="stat-number">70k+</div>
              <div className="stat-label">Happy Patients</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">50+</div>
              <div className="stat-label">Specialist Doctors</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100+</div>
              <div className="stat-label">Partner Hospitals</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">10+</div>
              <div className="stat-label">Cities Covered</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Piles;