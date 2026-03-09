import React, { useEffect } from "react";

const Reviews = () => {

  const reviews = [
    { name: "Ravi Kumar", review: "Excellent treatment and very caring doctors. My piles surgery was painless and recovery was very fast.", rating: 5 },
    { name: "Sneha Reddy", review: "Highly professional team and very supportive staff. The consultation process was smooth.", rating: 5 },
    { name: "Mahesh Sharma", review: "Best hospital experience. The doctors explained everything clearly and treatment was effective.", rating: 4 },
    { name: "Priya Patel", review: "Very good service and advanced technology treatment. I recommend Dr Cure to everyone.", rating: 5 },
    { name: "Arjun Mehta", review: "The doctors are very knowledgeable and the hospital environment is very comfortable.", rating: 5 },
    { name: "Kiran Sharma", review: "Great service and friendly staff. My recovery was quick and painless.", rating: 5 },
    { name: "Anita Desai", review: "Highly recommended hospital. The doctors explain everything clearly.", rating: 4 },
    { name: "Rahul Verma", review: "Modern technology treatment and excellent patient care.", rating: 5 },

    { name: "Suresh Reddy", review: "Very professional doctors and advanced treatment methods.", rating: 5 },
    { name: "Pooja Sharma", review: "Friendly staff and smooth consultation experience.", rating: 5 },
    { name: "Naveen Kumar", review: "The surgery was painless and recovery was very quick.", rating: 5 },
    { name: "Lakshmi Devi", review: "Doctors treated me with great care and explained everything clearly.", rating: 4 },
    { name: "Ramesh Gupta", review: "Very clean hospital and excellent patient service.", rating: 5 },
    { name: "Divya Nair", review: "Highly advanced technology and experienced doctors.", rating: 5 },
    { name: "Karthik Rao", review: "One of the best hospitals I have visited.", rating: 5 },
    { name: "Meera Joshi", review: "My treatment experience was very smooth and stress free.", rating: 5 },
    { name: "Vikas Singh", review: "Professional doctors and excellent care.", rating: 4 },
    { name: "Neha Kapoor", review: "Great hospital with caring medical staff.", rating: 5 },
    { name: "Amit Patel", review: "Very quick diagnosis and effective treatment.", rating: 5 },
    { name: "Shalini Verma", review: "Amazing experience with the doctors and staff.", rating: 5 }
  ];

  useEffect(() => {

    const style = document.createElement("style");

    style.innerHTML = `

    :root{
      --brand-purple:#7D008D;
      --brand-orange:#FF7A00;
    }

    .reviews{
      padding:90px 20px;
      background:linear-gradient(135deg,#f9f6ff,#ffffff);
      overflow:hidden;
      font-family:sans-serif;
    }

    .reviews-container{
      max-width:1200px;
      margin:auto;
      text-align:center;
    }

    .reviews-title{
      font-size:36px;
      font-weight:700;
      color:var(--brand-purple);
      margin-bottom:10px;
    }

    .reviews-subtitle{
      color:#666;
      margin-bottom:25px;
      font-size:16px;
    }

    .google-badge{
      display:inline-flex;
      align-items:center;
      gap:10px;
      padding:12px 20px;
      border-radius:30px;
      background:white;
      box-shadow:0 8px 20px rgba(0,0,0,0.1);
      margin-bottom:30px;
      font-weight:600;
    }

    .google-stars{
      color:#FFA500;
      font-size:18px;
    }

    .rating-bars{
      max-width:400px;
      margin:0 auto 40px auto;
      text-align:left;
    }

    .rating-row{
      display:flex;
      align-items:center;
      gap:10px;
      margin:6px 0;
    }

    .bar{
      flex:1;
      height:8px;
      background:#eee;
      border-radius:10px;
    }

    .fill{
      height:100%;
      background:var(--brand-orange);
      border-radius:10px;
    }

    .reviews-scroll{
      overflow:hidden;
      position:relative;
    }

    .reviews-track{
      display:flex;
      gap:25px;
      animation:scroll 50s linear infinite;
    }

    .review-card{
      min-width:260px;
      backdrop-filter:blur(10px);
      background:rgba(255,255,255,0.65);
      padding:25px;
      border-radius:14px;
      box-shadow:0 10px 30px rgba(0,0,0,0.08);
      transition:0.35s;
      animation:float 6s ease-in-out infinite;
    }

    .review-card:hover{
      transform:translateY(-10px);
    }

    .review-avatar{
      width:55px;
      height:55px;
      border-radius:50%;
      background:var(--brand-purple);
      color:white;
      display:flex;
      align-items:center;
      justify-content:center;
      font-weight:700;
      margin:0 auto 10px auto;
    }

    .review-stars{
      color:var(--brand-orange);
      font-size:18px;
      margin-bottom:10px;
    }

    .review-text{
      color:#555;
      line-height:1.6;
      font-size:14px;
      margin-bottom:15px;
    }

    .review-name{
      font-weight:600;
      color:var(--brand-purple);
    }

    @keyframes scroll{
      0%{transform:translateX(0)}
      100%{transform:translateX(-50%)}
    }

    @keyframes float{
      0%{transform:translateY(0)}
      50%{transform:translateY(-8px)}
      100%{transform:translateY(0)}
    }

    `;

    document.head.appendChild(style);

  }, []);

  return (

    <section id="reviews" className="reviews">

      <div className="reviews-container">

        <h2 className="reviews-title">What Our Patients Say</h2>

        <p className="reviews-subtitle">
          Real experiences from patients treated at DR CURE
        </p>

        <div className="google-badge">
          <span style={{fontWeight:"700"}}>Google Reviews</span>
          <span className="google-stars">★★★★★</span>
          <span>4.9 (1200+ patients)</span>
        </div>

        <div className="rating-bars">

          <div className="rating-row">
            <span>5★</span>
            <div className="bar"><div className="fill" style={{width:"90%"}}></div></div>
          </div>

          <div className="rating-row">
            <span>4★</span>
            <div className="bar"><div className="fill" style={{width:"70%"}}></div></div>
          </div>

          <div className="rating-row">
            <span>3★</span>
            <div className="bar"><div className="fill" style={{width:"35%"}}></div></div>
          </div>

          <div className="rating-row">
            <span>2★</span>
            <div className="bar"><div className="fill" style={{width:"15%"}}></div></div>
          </div>

          <div className="rating-row">
            <span>1★</span>
            <div className="bar"><div className="fill" style={{width:"5%"}}></div></div>
          </div>

        </div>

        <div className="reviews-scroll">

          <div className="reviews-track">

            {[...reviews, ...reviews].map((item,index)=>(
              <div key={index} className="review-card">

                <div className="review-avatar">
                  {item.name.charAt(0)}
                </div>

                <div className="review-stars">
                  {"★".repeat(item.rating)}
                </div>

                <p className="review-text">
                  "{item.review}"
                </p>

                <div className="review-name">
                  — {item.name}
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>

  );
};

export default Reviews;