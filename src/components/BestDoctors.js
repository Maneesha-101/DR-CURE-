// import React from 'react';
// import doctorImage from "../assets/dr-naveen-kumar.jpg";
// import doctorTejesh from "../assets/dr-tejeswarao.jpg";
// import doctorLokesh from "../assets/dr-lokesh.jpg";
// import doctorVenkat from "../assets/dr-venkat-bhaskar.jpg";
// import doctorSushma from "../assets/dr-sushma.jpg";

// const BestDoctors = () => {

//   const doctors = [
//     {
//       id: 1,
//       name: "Dr A Naveen Kumar",
//       qualifications: "DNB General Surgeon",
//       experience: "14 Years Experience",
//       consultation: "FREE CONSULTATION",
//       rating: "5/5",
//       speciality: "General Surgery & Advanced Laparoscopic Surgeon",
//       location: "Visakhapatnam (Vizag)",
//       phone: "+917989832859",
//       image: doctorImage
//     },

//     {
//       id: 2,
//       name: "Dr B Tejeswarao",
//       qualifications: "MS General Surgeon",
//       experience: "15 Years Experience",
//       consultation: "FREE CONSULTATION",
//       rating: "4.9/5",
//       speciality: "General Surgery & Laparoscopic Surgery",
//       location: "Visakhapatnam (Vizag)",
//       phone: "+917989832859",
//       image: doctorTejesh
//     },

//     {
//       id: 3,
//       name: "Dr B Lokesh",
//       qualifications: "MS, MCH Gastro Surgeon",
//       experience: "12 Years Experience",
//       consultation: "FREE CONSULTATION",
//       rating: "4.9/5",
//       speciality: "Gastrointestinal & Liver Surgery",
//       location: "Visakhapatnam (Vizag)",
//       phone: "+917989832859",
//       image: doctorLokesh
//     },

//     {
//       id: 4,
//       name: "Dr Venkat Bhaskar",
//       qualifications: "MS General Surgeon",
//       experience: "13 Years Experience",
//       consultation: "FREE CONSULTATION",
//       rating: "4.8/5",
//       speciality: "General & Laparoscopic Surgery",
//       location: "Visakhapatnam (Vizag)",
//       phone: "+917989832859",
//       image: doctorVenkat
//     },

//     {
//       id: 5,
//       name: "Dr VJ Sushma",
//       qualifications: "MS, MCH Plastic Surgeon",
//       experience: "10 Years Experience",
//       consultation: "FREE CONSULTATION",
//       rating: "4.9/5",
//       speciality: "Plastic & Reconstructive Surgery",
//       location: "Visakhapatnam (Vizag)",
//       phone: "+917989832859",
//       image: doctorSushma
//     }

//   ];

//   const handleCallDoctor = (phone) => {
//     window.location.href = `tel:${phone}`;
//   };

//   const handleBookDoctor = (doctor) => {
//     const formSection = document.querySelector('.consultation');
//     if (formSection) {
//       formSection.scrollIntoView({ behavior: 'smooth' });
//     } else {
//       alert(`Booking appointment with ${doctor.name}`);
//     }
//   };

//   return (
//     <>
//       <style>
//         {`
//           :root {
//             --brand-purple: #7D008D;
//             --brand-orange: #FF7A00;
//             --brand-white: #FFFFFF;
//             --brand-purple-light: #f9f0fa;
//             --brand-orange-light: #fff5eb;
//           }

//           .best-doctors {
//             background-color: #f8f9fa;
//             padding: 60px 0;
//             font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           }

//           .container {
//             max-width: 1200px;
//             margin: 0 auto;
//             padding: 0 20px;
//           }

//           .section-title {
//             text-align: center;
//             color: var(--brand-purple);
//             font-size: 32px;
//             margin-bottom: 10px;
//           }

//           .section-subtitle {
//             text-align: center;
//             color: #666;
//             font-size: 18px;
//             margin-bottom: 50px;
//             max-width: 600px;
//             margin-left: auto;
//             margin-right: auto;
//           }

//           .doctors-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//             gap: 30px;
//           }

//           .doctor-card {
//             background: white;
//             border-radius: 15px;
//             padding: 25px;
//             box-shadow: 0 10px 30px rgba(125, 0, 141, 0.05);
//             transition: all 0.3s ease;
//             border: 1px solid #eaeaea;
//             display: flex;
//             flex-direction: column;
//           }

//           .doctor-card:hover {
//             transform: translateY(-10px);
//             box-shadow: 0 15px 40px rgba(125, 0, 141, 0.12);
//             border-color: var(--brand-purple);
//           }

//           .doctor-header {
//             display: flex;
//             gap: 20px;
//             margin-bottom: 20px;
//             padding-bottom: 20px;
//             border-bottom: 1px solid #eee;
//           }

//           .doctor-image {
//             width: 80px;
//             height: 80px;
//             border-radius: 50%;
//             overflow: hidden;
//             flex-shrink: 0;
//             background: #f2f2f2;
//           }

//           .doctor-image img {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//           }

//           .doctor-info {
//             flex: 1;
//           }

//           .doctor-name {
//             font-size: 18px;
//             font-weight: 700;
//             color: var(--brand-purple);
//             margin-bottom: 5px;
//           }

//           .doctor-qualifications {
//             color: #666;
//             font-size: 14px;
//             margin-bottom: 10px;
//           }

//           .doctor-experience {
//             display: flex;
//             gap: 10px;
//             margin-bottom: 10px;
//             flex-wrap: wrap;
//           }

//           .exp-badge,
//           .consultation-badge {
//             font-size: 11px;
//             font-weight: 600;
//             padding: 4px 10px;
//             border-radius: 20px;
//             text-transform: uppercase;
//           }

//           .exp-badge {
//             background-color: var(--brand-purple-light);
//             color: var(--brand-purple);
//           }

//           .consultation-badge {
//             background-color: var(--brand-orange-light);
//             color: var(--brand-orange);
//           }

//           .doctor-rating {
//             display: flex;
//             align-items: center;
//             gap: 8px;
//           }

//           .rating-stars {
//             color: #ffb347;
//             font-size: 14px;
//           }

//           .rating-value {
//             font-weight: 600;
//             color: #333;
//             font-size: 14px;
//           }

//           .doctor-speciality,
//           .doctor-location {
//             margin-bottom: 15px;
//           }

//           .doctor-actions {
//             display: flex;
//             flex-direction: column;
//             gap: 10px;
//             margin-top: auto;
//           }

//           .call-btn {
//             background: white;
//             border: 1px solid var(--brand-purple);
//             color: var(--brand-purple);
//             padding: 12px;
//             border-radius: 8px;
//             font-weight: 600;
//             cursor: pointer;
//           }

//           .book-btn {
//             background: var(--brand-orange);
//             color: white;
//             border: none;
//             padding: 12px;
//             border-radius: 8px;
//             font-weight: 600;
//             cursor: pointer;
//           }
//         `}
//       </style>

//       <section className="best-doctors">
//         <div className="container">

//           <h2 className="section-title">Our Best Doctors</h2>

//           <p className="section-subtitle">
//             Expert medical professionals with extensive experience in their fields
//           </p>

//           <div className="doctors-grid">

//             {doctors.map((doctor) => (
//               <div key={doctor.id} className="doctor-card">

//                 <div className="doctor-header">

//                   <div className="doctor-image">
//                     <img src={doctor.image} alt={doctor.name} />
//                   </div>

//                   <div className="doctor-info">

//                     <h3 className="doctor-name">{doctor.name}</h3>

//                     <p className="doctor-qualifications">
//                       {doctor.qualifications}
//                     </p>

//                     <div className="doctor-experience">
//                       <span className="exp-badge">
//                         {doctor.experience}
//                       </span>

//                       <span className="consultation-badge">
//                         {doctor.consultation}
//                       </span>
//                     </div>

//                     <div className="doctor-rating">
//                       <span className="rating-stars">★★★★★</span>
//                       <span className="rating-value">
//                         {doctor.rating}
//                       </span>
//                     </div>

//                   </div>
//                 </div>

//                 <div className="doctor-speciality">
//                   <h4>Speciality</h4>
//                   <p>{doctor.speciality}</p>
//                 </div>

//                 <div className="doctor-location">
//                   <h4>Location</h4>
//                   <p>{doctor.location}</p>
//                 </div>

//                 <div className="doctor-actions">

//                   <button
//                     className="call-btn"
//                     onClick={() => handleCallDoctor(doctor.phone)}
//                   >
//                     📞 Call us {doctor.phone}
//                   </button>

//                   <button
//                     className="book-btn"
//                     onClick={() => handleBookDoctor(doctor)}
//                   >
//                     Book Free Appointment
//                   </button>

//                 </div>

//               </div>
//             ))}

//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// export default BestDoctors;



import React from 'react';
import doctorImage from "../assets/dr-naveen-kumar.jpg";
import doctorTejesh from "../assets/dr-tejeswarao.jpg";
import doctorLokesh from "../assets/dr-lokesh.jpg";
import doctorVenkat from "../assets/dr-venkat-bhaskar.jpg";
import doctorSushma from "../assets/dr-sushma.jpg";
import doctorShiva from "../assets/dr-shiva-kumar.jpg";   // NEW DOCTOR IMAGE

const BestDoctors = () => {

  const doctors = [
    {
      id: 1,
      name: "Dr A Naveen Kumar",
      qualifications: "DNB General Surgeon",
      experience: "14 Years Experience",
      consultation: "FREE CONSULTATION",
      rating: "5/5",
      speciality: "General Surgery & Advanced Laparoscopic Surgeon",
      location: "Visakhapatnam (Vizag)",
      phone: "9493994244",
      image: doctorImage
    },

    {
      id: 2,
      name: "Dr B Tejeswarao",
      qualifications: "MS General Surgeon",
      experience: "15 Years Experience",
      consultation: "FREE CONSULTATION",
      rating: "4.9/5",
      speciality: "General Surgery & Laparoscopic Surgery",
      location: "Visakhapatnam (Vizag)",
      phone: "9493994244",
      image: doctorTejesh
    },

    {
      id: 3,
      name: "Dr B Lokesh",
      qualifications: "MS, MCH Gastro Surgeon",
      experience: "12 Years Experience",
      consultation: "FREE CONSULTATION",
      rating: "4.9/5",
      speciality: "Gastrointestinal & Liver Surgery",
      location: "Visakhapatnam (Vizag)",
      phone: "9493994244",
      image: doctorLokesh
    },

    {
      id: 4,
      name: "Dr Venkat Bhaskar",
      qualifications: "MS General Surgeon",
      experience: "13 Years Experience",
      consultation: "FREE CONSULTATION",
      rating: "4.8/5",
      speciality: "General & Laparoscopic Surgery",
      location: "Visakhapatnam (Vizag)",
      phone: "9493994244",
      image: doctorVenkat
    },

    {
      id: 5,
      name: "Dr VJ Sushma",
      qualifications: "MS, MCH Plastic Surgeon",
      experience: "10 Years Experience",
      consultation: "FREE CONSULTATION",
      rating: "4.9/5",
      speciality: "Plastic & Reconstructive Surgery",
      location: "Visakhapatnam (Vizag)",
      phone: "9493994244",
      image: doctorSushma
    },

    // NEW DOCTOR ADDED
    {
      id: 6,
      name: "Dr Shiva Kumar",
      qualifications: "MS General Surgeon",
      experience: "12 Years Experience",
      consultation: "FREE CONSULTATION",
      rating: "4.9/5",
      speciality: "General Surgery",
      location: "Visakhapatnam (Vizag)",
      phone: "9493994244",
      image: doctorShiva
    }

  ];

  const handleCallDoctor = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleBookDoctor = (doctor) => {
    const formSection = document.querySelector('.consultation');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert(`Booking appointment with ${doctor.name}`);
    }
  };

  return (
    <>
      <style>
        {`
          :root {
            --brand-purple: #7D008D;
            --brand-orange: #FF7A00;
            --brand-white: #FFFFFF;
            --brand-purple-light: #f9f0fa;
            --brand-orange-light: #fff5eb;
          }

          .best-doctors {
            background-color: #f8f9fa;
            padding: 60px 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .section-title {
            text-align: center;
            color: var(--brand-purple);
            font-size: 32px;
            margin-bottom: 10px;
          }

          .section-subtitle {
            text-align: center;
            color: #666;
            font-size: 18px;
            margin-bottom: 50px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          .doctors-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 30px;
          }

          .doctor-card {
            background: white;
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(125, 0, 141, 0.05);
            transition: all 0.3s ease;
            border: 1px solid #eaeaea;
            display: flex;
            flex-direction: column;
          }

          .doctor-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(125, 0, 141, 0.12);
            border-color: var(--brand-purple);
          }

          .doctor-header {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
          }

          .doctor-image {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            overflow: hidden;
            flex-shrink: 0;
            background: #f2f2f2;
          }

          .doctor-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .doctor-info {
            flex: 1;
          }

          .doctor-name {
            font-size: 18px;
            font-weight: 700;
            color: var(--brand-purple);
            margin-bottom: 5px;
          }

          .doctor-qualifications {
            color: #666;
            font-size: 14px;
            margin-bottom: 10px;
          }

          .doctor-experience {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
            flex-wrap: wrap;
          }

          .exp-badge,
          .consultation-badge {
            font-size: 11px;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 20px;
            text-transform: uppercase;
          }

          .exp-badge {
            background-color: var(--brand-purple-light);
            color: var(--brand-purple);
          }

          .consultation-badge {
            background-color: var(--brand-orange-light);
            color: var(--brand-orange);
          }

          .doctor-rating {
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .rating-stars {
            color: #ffb347;
            font-size: 14px;
          }

          .rating-value {
            font-weight: 600;
            color: #333;
            font-size: 14px;
          }

          .doctor-speciality,
          .doctor-location {
            margin-bottom: 15px;
          }

          .doctor-actions {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-top: auto;
          }

          .call-btn {
            background: white;
            border: 1px solid var(--brand-purple);
            color: var(--brand-purple);
            padding: 12px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
          }

          .book-btn {
            background: var(--brand-orange);
            color: white;
            border: none;
            padding: 12px;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
          }
        `}
      </style>

      <section className="best-doctors">
        <div className="container">

          <h2 className="section-title">Our Best Doctors</h2>

          <p className="section-subtitle">
            Expert medical professionals with extensive experience in their fields
          </p>

          <div className="doctors-grid">

            {doctors.map((doctor) => (
              <div key={doctor.id} className="doctor-card">

                <div className="doctor-header">

                  <div className="doctor-image">
                    <img src={doctor.image} alt={doctor.name} />
                  </div>

                  <div className="doctor-info">

                    <h3 className="doctor-name">{doctor.name}</h3>

                    <p className="doctor-qualifications">
                      {doctor.qualifications}
                    </p>

                    <div className="doctor-experience">
                      <span className="exp-badge">{doctor.experience}</span>
                      <span className="consultation-badge">{doctor.consultation}</span>
                    </div>

                    <div className="doctor-rating">
                      <span className="rating-stars">★★★★★</span>
                      <span className="rating-value">{doctor.rating}</span>
                    </div>

                  </div>
                </div>

                <div className="doctor-speciality">
                  <h4>Speciality</h4>
                  <p>{doctor.speciality}</p>
                </div>

                <div className="doctor-location">
                  <h4>Location</h4>
                  <p>{doctor.location}</p>
                </div>

                <div className="doctor-actions">

                  <button
                    className="call-btn"
                    onClick={() => handleCallDoctor(doctor.phone)}
                  >
                    📞 Call us {doctor.phone}
                  </button>

                  <button
                    className="book-btn"
                    onClick={() => handleBookDoctor(doctor)}
                  >
                    Book Free Appointment
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>
    </>
  );
};

export default BestDoctors;