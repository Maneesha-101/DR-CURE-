import React from "react";

const Orthopedics = () => {
  return (
    <section className="ortho-section">
      <style>{`
        :root {
          --primary: #7B008A;     /* Purple */
          --secondary: #FF7A00;   /* Orange */
          --accent: #F3E0D4;      /* Light Beige */
          --card-bg: #ffffff;     /* White */
          --text-dark: #333;
          --text-light: #555;
          --white: #ffffff;
        }

        .ortho-section {
          background: var(--accent);
          padding: 180px 20px 60px;
          font-family: 'Poppins', sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: auto;
        }

        /* Breadcrumb */
        .breadcrumb {
          font-size: 14px;
          color: var(--primary);
          margin-bottom: 15px;
          font-weight: 500;
        }

        /* Title */
        .title {
          font-size: 48px;
          font-weight: 700;
          color: var(--primary);
          line-height: 1.2;
          max-width: 900px;
        }

        /* Description */
        .desc {
          margin-top: 15px;
          font-size: 16px;
          color: var(--text-dark);
          max-width: 850px;
          line-height: 1.6;
        }

        /* Button */
        .cta-btn {
          margin-top: 25px;
          padding: 14px 24px;
          background: var(--secondary);
          color: var(--white);
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .cta-btn:hover {
          background: #e86a00;
        }

        /* Stats Card */
        .stats-container {
          margin-top: 50px;
          background: var(--card-bg);
          border-radius: 14px;
          padding: 35px 20px;
          display: flex;
          justify-content: space-around;
          text-align: center;
          flex-wrap: wrap;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }

        .stat-box {
          flex: 1;
          min-width: 120px;
        }

        .stat-number {
          font-size: 34px;
          font-weight: bold;
          color: var(--primary);
        }

        .stat-text {
          font-size: 14px;
          color: var(--text-light);
          margin-top: 5px;
        }

        /* Content Sections */
        .content-wrap {
          margin-top: 60px;
        }

        .content-wrap h2 {
          color: var(--primary);
          font-size: 32px;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .content-wrap p {
          color: var(--text-dark);
          line-height: 1.8;
          margin-bottom: 25px;
          font-size: 16px;
        }

        .content-wrap ul {
          list-style: none;
          padding: 0;
          margin-bottom: 30px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 10px;
        }

        .content-wrap ul li {
          position: relative;
          padding-left: 25px;
          color: var(--text-dark);
          font-size: 15px;
        }

        .content-wrap ul li::before {
          content: "✔";
          position: absolute;
          left: 0;
          color: var(--secondary);
          font-weight: bold;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .title {
            font-size: 30px;
          }

          .desc {
            font-size: 14px;
          }

          .stats-container {
            flex-direction: column;
            gap: 20px;
          }

          .content-wrap h2 {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">Home » Home » Orthopedics</div>

        {/* Title */}
        <h1 className="title">Best Orthopedic Doctor - Bone Doctor Near Me</h1>

        {/* Description */}
        <p className="desc">
          Our orthopedic doctors in India specialize in minimally invasive
          orthopedic surgeries that allow a much smaller incision, scar and
          recovery time. Our orthopedic surgeons use the best quality of implant
          (prosthesis) and graft for orthopedic surgeries. Book free
          consultation with the best orthopedic doctor near you at Dr Cure
          Surgeries.
        </p>

        {/* Button */}
        <button className="cta-btn">📞 Call Us : +91 9493994244</button>

        {/* Stats */}
        <div className="stats-container">
          <div className="stat-box">
            <h2 className="stat-number">70k+</h2>
            <p className="stat-text">Happy Patients</p>
          </div>
          <div className="stat-box">
            <h2 className="stat-number">50+</h2>
            <p className="stat-text">Disease</p>
          </div>
          <div className="stat-box">
            <h2 className="stat-number">100+</h2>
            <p className="stat-text">Hospitals</p>
          </div>
          <div className="stat-box">
            <h2 className="stat-number">10+</h2>
            <p className="stat-text">Cities</p>
          </div>
        </div>

        {/* New Text Content */}
        <div className="content-wrap">
          <h2>What is Orthopedics?</h2>
          <p>
            Orthopedics is the medical field that focuses on the diagnosis and
            treatment of the human body’s musculoskeletal system. An orthopedic
            doctor treats patients who suffer from diseases and disorders of the
            joints, bones, muscles and associated structures including the
            ligaments, tendons, nerves and bones. Orthopedic surgeons diagnose
            and treat a wide range of problems associated with the bone and
            skeletal. An orthopedic surgeon can perform minor surgeries like
            treating a broken toe to major surgeries like performing a knee or
            hip replacement surgery.
          </p>
          <p>
            Many people delay or avoid their orthopedic condition and live with
            pain and other symptoms like limited range of motion, joint
            stiffness, swelling and problems that can be extremely annoying and
            can affect the individual’s daily life and mental health. Our
            orthopedic doctors can accurately diagnose your condition and come
            up with a suitable treatment plan that will provide relief from the
            pain and other associated symptoms and improve your quality of life.
          </p>

          <h2>What does an Orthopedic Surgeon do?</h2>
          <p>
            Orthopedic surgeons treat different types of acute and chronic
            orthopedic conditions using specialized medical, surgical and
            rehabilitative treatment options. An orthopedic surgeon can treat
            people of all ages and sexes including infants, young children,
            adults and older people. Common orthopedic conditions that require
            treatment by an orthopedic specialist include:
          </p>
          <ul>
            <li>Arthritis</li>
            <li>Dislocated Shoulder</li>
            <li>Spinal disorders and diseases</li>
            <li>Rheumatoid Arthritis</li>
            <li>Osteoarthritis</li>
            <li>Fracture</li>
            <li>Joint dislocation</li>
            <li>Sprain or a strain</li>
            <li>Torn ACL</li>
            <li>Torn or Injured Meniscus</li>
            <li>Carpal Tunnel Syndrome</li>
            <li>Congenital or Degenerative conditions</li>
            <li>Ruptured disc</li>
            <li>Joint instability while walking</li>
            <li>Joint or Bone tumor</li>
            <li>Bursitis</li>
            <li>Sciatica</li>
          </ul>
          <p>
            Our best orthopedic surgeons in India are exceedingly skilled and
            specialize in minimally invasive or MIS orthopedic surgeries such as
            MIS hip replacement, MIS knee replacement, ACL reconstruction,
            meniscus repair and carpal tunnel release.
          </p>

          <h2>What are the common surgeries performed by Orthopedic Surgeons?</h2>
          <p>
            Orthopedic surgeons are trained for both surgical and nonsurgical
            treatment and management of various orthopedic diseases. An
            orthopedic surgeon can perform various surgical procedures to treat
            an orthopedic injury or condition, including:
          </p>
          <ul>
            <li>Joint replacement surgery (Knee, Hip, Shoulder, TKR)</li>
            <li>Joint revision surgery</li>
            <li>Arthroscopy</li>
            <li>Spinal & Disc replacement surgery</li>
            <li>Spinal fusion surgery</li>
            <li>Soft tissue, tendon or ligament repair</li>
            <li>Repair of a bone fracture</li>
            <li>Osteotomy to correct bone deformity</li>
            <li>Debridement or removal of damaged tissue</li>
            <li>Excision of bone and soft tissue tumors</li>
          </ul>
          <p>
            Many individuals suffer from some form of bone or joint problems.
            Delaying the treatment can be harmful and make the condition worse.
            It is thus important to act quickly to manage and treat the
            condition and prevent it from restricting your lifestyle. Our
            orthopedic surgeons will thoroughly diagnose your condition and
            provide you with the full treatment pathway including pre and
            post-surgery scans, surgical procedure, its recovery and outcome.
            All our patients receive specialised treatment and care from leading
            orthopedic surgeons in India. Our board-certified doctors have years
            of experience in performing complex and modern orthopaedic
            procedures. To speak to our expert orthopedic doctors for your
            condition, make your appointment at your nearest clinic today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Orthopedics;