// import React from "react";
// import { useNavigate } from "react-router-dom";

// const Fissure = () => {

//   const navigate = useNavigate();

//   const handleConsultClick = () => {
//     navigate("/consultation");
//   };

//   return (
//     <>
//       <style>{`

// :root{
//   --brand-purple:#7D008D;
//   --brand-orange:#FF7A00;
//   --brand-white:#FFFFFF;
//   --footer-dark:#002B45;
//   --cyan-accent:#1EC1D1;
// }

// /* HERO SECTION */
// .fissure-hero{
//   background:linear-gradient(135deg, #F3E6F7, #E6FAFC);
//   padding:120px 20px 60px;
//   font-family:'Poppins',sans-serif;
// }

// .fissure-container{
//   max-width:1100px;
//   margin:auto;
// }

// .breadcrumb{
//   color:#666;
//   margin-bottom:20px;
//   font-size:14px;
// }

// .hero-title{
//   font-size:48px;
//   font-weight:700;
//   color:var(--footer-dark);
//   margin-bottom:20px;
// }

// .hero-text{
//   font-size:18px;
//   color:#444;
//   line-height:1.6;
//   max-width:950px;
//   margin-bottom:30px;
// }

// /* ✅ ORANGE CTA BUTTON (same as Proctology) */
// .hero-btn{
//   background:var(--brand-orange);
//   color:var(--brand-white);
//   padding:16px 28px;
//   border:none;
//   border-radius:12px;
//   font-size:18px;
//   font-weight:600;
//   cursor:pointer;
//   transition:0.3s;
// }

// .hero-btn:hover{
//   background:#e66a00;
// }

// /* STATS */
// .stats-box{
//   background:var(--brand-white);
//   border-radius:20px;
//   display:flex;
//   justify-content:space-around;
//   padding:30px;
//   margin-top:60px;
//   box-shadow:0 5px 20px rgba(0,0,0,0.08);
//   flex-wrap:wrap;
// }

// .stat{
//   text-align:center;
// }

// .stat h2{
//   font-size:36px;
//   color:var(--brand-purple);
// }

// .stat p{
//   color:#777;
// }

// /* MOBILE */
// @media(max-width:900px){
//   .hero-title{
//     font-size:30px;
//   }

//   .stats-box{
//     flex-direction:column;
//     gap:20px;
//   }
// }

//       `}</style>

//       <section className="fissure-hero">
//         <div className="fissure-container">

//           <p className="breadcrumb">Home » Home » Fissure</p>

//           <h1 className="hero-title">
//             Advanced Anal Fissure Treatment PainFree Laser Surgery & Quick Recovery
//           </h1>

//           <p className="hero-text">
//             Immediate treatment for anal fissure is essential as it could become a chronic condition.
//             At Drcure, we provide advanced laser treatments with expert anorectal specialists,
//             ensuring faster healing, minimal pain, and complete post-surgery care support.
//           </p>

//           <button className="hero-btn" onClick={handleConsultClick}>
//             Call to Schedule Your Consultation
//           </button>

//           <div className="stats-box">
//             <div className="stat">
//               <h2>70k+</h2>
//               <p>Happy Patients</p>
//             </div>

//             <div className="stat">
//               <h2>50+</h2>
//               <p>Disease</p>
//             </div>

//             <div className="stat">
//               <h2>100+</h2>
//               <p>Hospitals</p>
//             </div>

//             <div className="stat">
//               <h2>10+</h2>
//               <p>Cities</p>
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default Fissure;

import React from "react";
import { useNavigate } from "react-router-dom";

const Fissure = () => {
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
          --cyan-accent: #1EC1D1;
        }

        /* HERO SECTION */
        .fissure-hero {
          background: linear-gradient(135deg, #F3E6F7, #E6FAFC);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .fissure-container {
          max-width: 1100px;
          margin: auto;
        }

        .breadcrumb {
          color: #666;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .hero-title {
          font-size: 48px;
          font-weight: 700;
          color: var(--footer-dark);
          margin-bottom: 20px;
        }

        .hero-text {
          font-size: 18px;
          color: #444;
          line-height: 1.6;
          max-width: 950px;
          margin-bottom: 30px;
        }

        /* ORANGE CTA BUTTON */
        .hero-btn {
          background: var(--brand-orange);
          color: var(--brand-white);
          padding: 16px 28px;
          border: none;
          border-radius: 12px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .hero-btn:hover {
          background: #e66a00;
        }

        /* STATS */
        .stats-box {
          background: var(--brand-white);
          border-radius: 20px;
          display: flex;
          justify-content: space-around;
          padding: 30px;
          margin-top: 60px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          flex-wrap: wrap;
        }

        .stat {
          text-align: center;
        }

        .stat h2 {
          font-size: 36px;
          color: var(--brand-purple);
        }

        .stat p {
          color: #777;
        }

        /* CONTENT STYLING */
        .fissure-content {
          padding: 60px 20px;
          font-family: 'Poppins', sans-serif;
        }

        .info-card {
          background: #fff;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          border-left: 6px solid var(--brand-purple);
        }

        .section-title {
          font-size: 32px;
          color: var(--footer-dark);
          margin-bottom: 25px;
          font-weight: 700;
        }

        .content-text {
          font-size: 16px;
          color: #555;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .content-list {
          padding-left: 20px;
          margin-bottom: 20px;
        }

        .content-list li {
          margin-bottom: 12px;
          color: #555;
          line-height: 1.6;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
          margin-top: 20px;
        }

        .sub-card {
          background: #f8f9fa;
          padding: 25px;
          border-radius: 15px;
          border: 1px solid #eee;
        }

        .sub-card h3 {
          color: var(--brand-purple);
          margin-bottom: 10px;
          font-size: 20px;
        }

        /* MOBILE */
        @media(max-width:900px){
          .hero-title { font-size: 30px; }
          .stats-box { flex-direction: column; gap: 20px; }
          .info-card { padding: 25px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="fissure-hero">
        <div className="fissure-container">
          <p className="breadcrumb">Home » Home » Fissure</p>
          <h1 className="hero-title">
            Advanced Anal Fissure Treatment – Pain-Free Laser Surgery & Quick Recovery
          </h1>
          <p className="hero-text">
            Immediate treatment for anal fissure is essential as it could become a chronic condition.
            At Drcure, we provide advanced laser treatments with expert anorectal specialists,
            ensuring faster healing, minimal pain, and complete post-surgery care support.
          </p>
          <button className="hero-btn" onClick={handleConsultClick}>
            Call to Schedule Your Consultation
          </button>

          <div className="stats-box">
            <div className="stat"><h2>70k+</h2><p>Happy Patients</p></div>
            <div className="stat"><h2>50+</h2><p>Diseases</p></div>
            <div className="stat"><h2>100+</h2><p>Hospitals</p></div>
            <div className="stat"><h2>10+</h2><p>Cities</p></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="fissure-content">
        <div className="fissure-container">
          
          {/* Definition Section */}
          <div className="info-card">
            <h2 className="section-title">What is Anal Fissure?</h2>
            <p className="content-text">
              An anal fissure is a small tear in the lining of the anal canal. It can cause discomfort, pain, and bleeding during bowel movements. There are two primary types:
            </p>
            <div className="grid-2">
              <div className="sub-card">
                <h3>Acute Anal Fissure</h3>
                <p className="content-text">Typically caused by trauma like passing a large bowel movement. Usually heals within a few weeks with conservative treatment.</p>
              </div>
              <div className="sub-card">
                <h3>Chronic Anal Fissure</h3>
                <p className="content-text">Tears that persist for more than six weeks, often associated with underlying conditions. These usually require surgical intervention.</p>
              </div>
            </div>
          </div>

          {/* Diagnosis Section */}
          <div className="info-card">
            <h2 className="section-title">How is Anal Fissure Diagnosed?</h2>
            <p className="content-text">
             To diagnose an anal fissure, your doctor will typically begin by asking you about your symptoms and medical history. They may also perform a physical examination to check for any visible signs of a fissure, such as a small tear or crack in the skin around the anus.

In some cases, your doctor may need to perform a more detailed examination, such as an anoscopy, to get a closer look at the affected area. 

During an anoscopy, a small, flexible tube with a camera on the end is inserted into the rectum to allow the doctor to examine the anus and rectum in more detail. This is an outpatient procedure and is performed in the doctor’s clinic.

In some cases, the doctor may also recommend additional tests, such as a stool sample or blood tests, to check other possible causes of your symptoms. Once the diagnosis of the anal fissure has been confirmed, the doctor may suggest the best suitable treatment plan, which may include medications, lifestyle changes, or in severe cases, surgery.
</p>
          </div>

          {/* Surgery Options */}
          <div className="info-card">
            <h2 className="section-title">Surgical Treatment Approaches</h2>
            <div className="grid-2">
              <div className="sub-card">
                <h3>Open Surgery (LIS)</h3>
                <p className="content-text">Open surgery for anal fissures is the traditional method to treat fissures. The following steps are involved in open surgery for anal fissure.

You will be sedated under general anesthesia to ensure that you do not experience any pain or discomfort during the procedure.
You will be positioned in a way that allows the surgeon to access the affected area easily.
The surgeon will make an incision in the skin around the anus to gain access to the anal fissure.
The surgeon will then analyzes the anal fissure to determine the extent of the damage and to identify any other issues that may be present.
Then the surgeon will remove any damaged tissue around the anal fissure to allow for proper healing.
In last, the surgeon sutures the area to close the incision made during the procedure.
Then you will be monitored closely after the procedure to ensure that there are no complications and to manage any pain or discomfort that they may experience.</p>
              </div>
              <div className="sub-card" style={{borderColor: 'var(--cyan-accent)'}}>
                <h3>Laser Surgery</h3>
                <p className="content-text"> Laser-assisted surgery is the most effective treatment for chronic fissures. 

The following steps are carried out during the procedure:

You will lie on your back with your hips and knees bent and your legs apart. 
The anesthesiologist will sedate you to numb the area or put them to sleep so that you won’t feel any pain or discomfort during the procedure. 
Once you are stable, the surgeon will put a laser through the anus, which is a natural opening in the body.
The surgeon will then move the laser to the spot where the fissure (a small tear) is located.
Using the laser, the surgeon will make a cut in the muscles around the anus. This helps to relax the sphincter muscles.
After the surgery, you will be taken to a recovery room to rest and recover.
Laser anal fissure surgery is usually suggested for individuals in which conservative measures, such as dietary changes, stool softeners, and topical medications, have stopped working.</p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="info-card">
            <h2 className="section-title">Benefits of Laser Anal Fissure Surgery</h2>
            <ul className="content-list">
              <li><strong>Minimally Invasive:</strong> Results in significantly less pain and discomfort compared to traditional surgery.</li>
              <li><strong>Outpatient Procedure:</strong> Allows patients to return home the same day.</li>
              <li><strong>Short Recovery:</strong> Recovery typically takes 1-2 weeks, compared to 4-6 weeks for open surgery.</li>
              <li><strong>High Success Rate:</strong> Offers superior prevention of fissure recurrence.</li>
              <li><strong>Minimal Scarring:</strong> Precise laser incisions leave virtually no visible marks.</li>
            </ul>
          </div>

          {/* Recovery Tips */}
          <div className="info-card">
            <h2 className="section-title">Post-Surgery Recovery & Lifestyle</h2>
            <p className="content-text">To ensure a safe and fast recovery, follow these essential tips:</p>
            <div className="grid-2">
              <div>
                <h3 style={{fontSize: '18px'}}>Immediate Care</h3>
                <ul className="content-list">
                  <li>Take prescribed pain medication on time.</li>
                  <li>Use a <strong>Sitz bath</strong> to soothe the area.</li>
                  <li>Avoid strenuous activity for at least one week.</li>
                </ul>
              </div>
              <div>
                <h3 style={{fontSize: '18px'}}>Diet & Habits</h3>
                <ul className="content-list">
                  <li>Maintain a <strong>high-fiber diet</strong> to avoid straining.</li>
                  <li>Drink plenty of water to keep stools soft.</li>
                  <li>Avoid sitting on hard surfaces for long periods.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Risks Section */}
          <div className="info-card" style={{borderLeftColor: '#dc3545'}}>
            <h2 className="section-title">Risks & Complications</h2>
            <p className="content-text">
              Like any surgery, anal fissure surgery is also associated with some risks and complications, including;

Infection: Any surgical procedure carries the risk of infection. Proper hygiene and post-operative care can help minimize this risk. 
Bleeding: Bleeding is a common complication of anal fissure surgery. The risk of bleeding can be reduced by avoiding blood-thinning medications before the surgery.
Pain: Pain is a common side effect of anal fissure surgery. Take your over-the-counter medications to alleviate the pain and discomfort.
Incontinence: In rare cases, anal fissure surgery can result in incontinence, or the inability to control bowel movements.
Anal Stenosis: Anal fissure surgery can result in anal stenosis in rare cases, a narrowing of the anus that can make bowel movements difficult or painful. 
Abscess: In rare cases, anal fissure surgery can result in an abscess, which may require further treatment.
Allergic Reactions: Some patients may experience an allergic reaction to anesthesia or other medications used during the surgery.
Nerve Damage: In rare cases, anal fissure surgery can result in anal nerve damage, which may cause numbness or tingling in the anal area.
Recurrence: Anal fissure surgery can successfully treat the condition, but there are chances that fissures may recur. Repeat surgery may be necessary.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Fissure;