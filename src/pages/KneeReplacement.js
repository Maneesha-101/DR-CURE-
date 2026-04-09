import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Stethoscope, 
  ClipboardCheck, 
  AlertTriangle, 
  ShieldCheck, 
  Activity, 
  Search, 
  HelpCircle,
  XCircle
} from "lucide-react";

const KneeReplacement = () => {
  const navigate = useNavigate();

  const handleConsultClick = () => {
    navigate("/consultation");
  };

  return (
    <>
      <style>{`
        :root {
          --brand-purple: #7D008D;
          --brand-orange: #FF7A00;
          --brand-white: #FFFFFF;
          --footer-dark: #002B45;
          --light-bg: #F9FAFB;
          --text-main: #333;
        }

        .knee-page {
          font-family: 'Poppins', sans-serif;
          color: var(--text-main);
          line-height: 1.6;
        }

        /* HERO SECTION */
        .knee-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
        }

        .knee-container {
          max-width: 1100px;
          margin: auto;
        }

        .breadcrumb { color: #666; font-size: 14px; margin-bottom: 10px; }
        .hero-title { font-size: 42px; font-weight: 700; color: var(--footer-dark); margin-bottom: 20px; }
        .hero-text { font-size: 18px; margin-bottom: 30px; max-width: 850px; }
        
        .hero-btn {
          background: var(--brand-orange);
          color: white;
          padding: 16px 32px;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }
        .hero-btn:hover { background: #e66a00; transform: translateY(-2px); }

        /* STATS */
        .stats-box {
          background: white;
          border-radius: 20px;
          display: flex;
          justify-content: space-around;
          padding: 30px;
          margin-top: 50px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .stat h2 { color: var(--brand-purple); font-size: 32px; margin: 0; }
        .stat p { color: #666; margin: 5px 0 0; }

        /* CONTENT SECTIONS */
        .section { padding: 60px 20px; }
        .section-white { background: white; }
        .section-gray { background: var(--light-bg); }
        
        .section-title { 
          font-size: 32px; 
          color: var(--footer-dark); 
          margin-bottom: 25px; 
          display: flex; 
          align-items: center; 
          gap: 12px; 
        }
        .section-title svg { color: var(--brand-purple); }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-top: 30px;
        }

        .card {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          border-top: 4px solid var(--brand-purple);
        }

        .info-list { list-style: none; padding: 0; }
        .info-list li { 
          margin-bottom: 12px; 
          padding-left: 25px; 
          position: relative; 
        }
        .info-list li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--brand-orange);
          font-weight: bold;
        }

        .warning-box {
          background: #FFF5F5;
          border-left: 5px solid #F56565;
          padding: 20px;
          margin: 20px 0;
        }

        /* MOBILE */
        @media(max-width: 768px) {
          .hero-title { font-size: 32px; }
          .stats-box { flex-direction: column; gap: 20px; text-align: center; }
          .content-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="knee-page">
        {/* HERO */}
        <section className="knee-hero">
          <div className="knee-container">
            <p className="breadcrumb">Home » Surgeries » Knee Replacement</p>
            <h1 className="hero-title">Knee Replacement Surgery</h1>
            <p className="hero-text">
              Restore mobility of the knee joint by getting rid of the affected one. 
              Undergo advanced and minimally invasive total or partial knee replacement surgery. 
              Book your appointment today with <strong>Dr. Cure Surgeries</strong> to consult highly 
              experienced orthopedic surgeons.
            </p>
            <button className="hero-btn" onClick={handleConsultClick}>
              Call to Schedule Your Consultation
            </button>

            <div className="stats-box">
              <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
              <div className="stat"><h2>50+</h2><p>Diseases Treated</p></div>
              <div className="stat"><h2>100+</h2><p>Hospitals</p></div>
              <div className="stat"><h2>10+</h2><p>Cities</p></div>
            </div>
          </div>
        </section>

        {/* WHAT IS KNEE REPLACEMENT */}
        <section className="section section-white">
          <div className="knee-container">
            <h2 className="section-title"><Stethoscope /> What is Knee Replacement Surgery?</h2>
            <p>
              Knee replacement surgery involves replacing a damaged, worn, or diseased knee with an artificial joint. 
              Also known as <strong>arthroplasty</strong>, metal and plastic parts are used to cap the ends of the bones 
              that form the knee joint. This procedure is typically recommended for patients with severe arthritis or 
              debilitating injury. At <strong>Dr. Cure Surgeries</strong>, we aim for a higher quality of life, 
              better mobility, and significant pain reduction for every patient.
            </p>
            
            <div className="content-grid">
              <div className="card">
                <h3>Total Knee Replacement</h3>
                <p>Involves replacing both sides of the knee joint. Takes 1–3 hours. Restores alignment and function using high-grade implants.</p>
              </div>
              <div className="card">
                <h3>Partial Knee Replacement</h3>
                <p>Replaces only the affected compartment (medial or lateral). Less invasive, smaller incisions, and faster recovery time.</p>
              </div>
            </div>
          </div>
        </section>

        

        {/* PREPARATION & PRECAUTIONS */}
        <section className="section section-gray">
          <div className="knee-container">
            <h2 className="section-title"><ClipboardCheck /> How to Prepare</h2>
            <ul className="info-list">
              <li>Discuss full medical history and current medications with your Dr. Cure specialist.</li>
              <li>Stop blood-thinning medications as advised to prevent surgical bleeding.</li>
              <li>Undergo mandatory blood tests to ensure fitness for the procedure.</li>
              <li>Fast (no food/water) for at least 8 hours prior to surgery.</li>
              <li>Quit smoking and alcohol consumption at least 2 weeks before the date.</li>
              <li>Maintain stable blood sugar levels if you are diabetic.</li>
            </ul>
          </div>
        </section>

        {/* DANGERS OF DELAY */}
        <section className="section section-white">
          <div className="knee-container">
            <h2 className="section-title"><AlertTriangle /> Dangers of Delaying Surgery</h2>
            <div className="warning-box">
              <p>Delaying surgery due to fear can lead to irreversible joint deformation and loss of independence.</p>
            </div>
            <div className="content-grid">
              <div className="card">
                <h4>Physical Impact</h4>
                <p>Increased chronic pain, further joint erosion, and eventual inability to walk or climb stairs.</p>
              </div>
              <div className="card">
                <h4>Surgical Complexity</h4>
                <p>A simple partial replacement may turn into a complex total replacement if the bone continues to scrape "bone on bone."</p>
              </div>
            </div>
          </div>
        </section>

        {/* FINDING THE BEST SURGEON */}
        <section className="section section-gray">
          <div className="knee-container">
            <h2 className="section-title"><Search /> Finding the Best Surgeon in India</h2>
            <p>At <strong>Dr. Cure Surgeries</strong>, we recommend evaluating these 5 pillars:</p>
            <div className="content-grid">
              <div className="card"><strong>1. Experience:</strong> Look for a track record of successful orthopedic outcomes.</div>
              <div className="card"><strong>2. Reviews:</strong> Check patient testimonials for bedside manner and care quality.</div>
              <div className="card"><strong>3. Credentials:</strong> Ensure the surgeon is board-certified and up-to-date with tech.</div>
              <div className="card"><strong>4. Location:</strong> Choose a facility within reasonable distance for follow-ups.</div>
              <div className="card"><strong>5. Hospital Quality:</strong> Investigate the hygiene and staff standards of the facility.</div>
            </div>
          </div>
        </section>

        {/* INSURANCE & COSTS */}
        <section className="section section-white">
          <div className="knee-container">
            <h2 className="section-title"><ShieldCheck /> Insurance Coverage</h2>
            <p>
              Most insurance companies cover knee replacement in India. <strong>Dr. Cure Surgeries</strong> works with leading providers 
              like Aditya Birla and Future Generali to help you navigate claims. Always consult your provider to understand specific 
              waiting periods or sub-limits.
            </p>
          </div>
        </section>

        {/* POST-OP CARE */}
        <section className="section section-gray">
          <div className="knee-container">
            <h2 className="section-title"><Activity /> Post-Surgery Recovery</h2>
            <ul className="info-list">
              <li><strong>Wound Care:</strong> Never remove sutures at home; let your doctor handle them.</li>
              <li><strong>Clot Prevention:</strong> Take prescribed anticoagulants and watch for calf swelling.</li>
              <li><strong>Physical Activity:</strong> Use crutches or a walker; do not twist your legs.</li>
              <li><strong>Diet:</strong> High-protein, iron-rich diet to promote muscle healing.</li>
              <li><strong>Fall Prevention:</strong> Remove rugs and obstacles at home to prevent accidental slips.</li>
            </ul>
          </div>
        </section>

        {/* MISTAKES TO AVOID */}
        <section className="section section-white">
          <div className="knee-container">
            <h2 className="section-title"><XCircle /> Top 5 Post-Surgery Mistakes</h2>
            <div className="content-grid">
              <div className="card">Skipping physical therapy sessions.</div>
              <div className="card">Ignoring activity restrictions or heavy lifting.</div>
              <div className="card">Poor pain management leading to lack of movement.</div>
              <div className="card">Ignoring signs of infection (redness/fever).</div>
              <div className="card">Gaining excessive weight, putting stress on the new joint.</div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="section section-gray" style={{paddingBottom: '100px'}}>
          <div className="knee-container">
            <h2 className="section-title"><HelpCircle /> Questions to Ask Your Surgeon</h2>
            <div className="card">
              <ul className="info-list">
                <li>What type of implant material will be used?</li>
                <li>How long will this specific artificial joint last?</li>
                <li>Is physiotherapy mandatory for my specific case?</li>
                <li>What is the total cost of surgery at Dr. Cure Surgeries?</li>
                <li>When can I resume driving or returning to work?</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default KneeReplacement;