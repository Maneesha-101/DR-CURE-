import React from "react";

const Gynecology = () => {

return (

<>

<style>{`

.gynecology{
background:#F3E0D4;
padding:120px 20px;
font-family:'Poppins',sans-serif;
}

.gynecology-container{
max-width:1100px;
margin:auto;
}

.gynecology-title{
font-size:42px;
font-weight:700;
color:#7B008A;
margin-bottom:20px;
}

.gynecology-text{
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

<section id="gynecology" className="gynecology">

<div className="gynecology-container">

<h2 className="gynecology-title">
Gynecomastia Treatment - Surgery Types, Procedure & Risks
</h2>

<p className="gynecology-text">
Do you feel that your chest is increasing in size and look more like female
breasts? These symptoms may indicate gynecomastia (man boobs) and the
condition can be bothersome for males. If you have enlarged breasts, you
can get in touch with Dr Cure Surgeries and get advanced gynecomastia
treatment from the best plastic surgeons in India. Book a consultation
with our gynecomastia surgeons and plan the treatment.
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

export default Gynecology;