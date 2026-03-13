import React from "react";

const Laparoscopy = () => {

return (

<>

<style>{`

.laparoscopy{
background:#F3E0D4;
padding:120px 20px;
font-family:'Poppins',sans-serif;
}

.laparoscopy-container{
max-width:1100px;
margin:auto;
}

.laparoscopy-title{
font-size:40px;
font-weight:700;
color:#7B008A;
margin-bottom:20px;
}

.laparoscopy-text{
font-size:18px;
line-height:1.7;
max-width:900px;
margin-bottom:30px;
color:#333;
}

.call-btn{
background:#FF7A00;
color:white;
border:none;
padding:14px 24px;
border-radius:6px;
font-size:18px;
font-weight:600;
cursor:pointer;
margin-bottom:40px;
}

.call-btn:hover{
background:#e46d00;
}

.book-title{
font-size:28px;
font-weight:700;
margin-bottom:30px;
color:#000;
}

.stats-box{
background:#FFFFFF;
border-radius:14px;
display:flex;
justify-content:space-between;
padding:30px;
gap:20px;
box-shadow:0 5px 15px rgba(0,0,0,0.08);
}

.stat{
flex:1;
text-align:center;
}

.stat:not(:last-child){
border-right:1px solid #ddd;
}

.stat-number{
font-size:40px;
font-weight:700;
color:#1f4d7a;
margin-bottom:10px;
}

.stat-text{
font-size:18px;
font-weight:600;
}

@media(max-width:900px){

.stats-box{
flex-direction:column;
}

.stat{
border-right:none !important;
border-bottom:1px solid #ddd;
padding-bottom:20px;
}

}

`}</style>

<section id="laparoscopy" className="laparoscopy">

<div className="laparoscopy-container">

<h2 className="laparoscopy-title">
Inguinal Hernia Laparoscopic Surgery by Elite Surgeons
</h2>

<p className="laparoscopy-text">
Diagnosed with an inguinal hernia and looking for the best possible surgery?
Our advanced treatments ensure a swift recovery, allowing you to return to
life without discomfort. Trust Dr Cure Surgeries for effective solutions and
personalized care on your journey to hernia recovery.
</p>

<button className="call-btn">
📞 Call Us : +919493994244
</button>

<h3 className="book-title">
Book Appointments With Our Expert Doctors Near You
</h3>

<div className="stats-box">

<div className="stat">
<div className="stat-number">2K+</div>
<div className="stat-text">Happy Patients</div>
</div>

<div className="stat">
<div className="stat-number">30+</div>
<div className="stat-text">Diseases</div>
</div>

<div className="stat">
<div className="stat-number">100+</div>
<div className="stat-text">Hospitals</div>
</div>

<div className="stat">
<div className="stat-number">10+</div>
<div className="stat-text">Cities</div>
</div>

</div>

</div>

</section>

</>

);

};

export default Laparoscopy;