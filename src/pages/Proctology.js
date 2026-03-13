import React from "react";

const Proctology = () => {

return (

<>

<style>{`

.proctology{
background:#F3E0D4;
padding:100px 20px;
font-family:'Poppins',sans-serif;
}

.proctology-container{
max-width:1100px;
margin:auto;
}

.proctology-title{
font-size:42px;
font-weight:700;
color:#7B008A;
margin-bottom:20px;
}

.proctology-text{
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
background:#e86a00;
}

.book-title{
font-size:28px;
font-weight:700;
margin-bottom:30px;
color:#7B008A;
}

.features-box{
background:white;
border-radius:14px;
display:flex;
justify-content:space-between;
padding:30px;
gap:20px;
box-shadow:0 5px 15px rgba(0,0,0,0.08);
}

.feature{
flex:1;
text-align:center;
padding:10px 20px;
}

.feature:not(:last-child){
border-right:1px solid #ddd;
}

.feature-icon{
font-size:40px;
margin-bottom:15px;
color:#7B008A;
}

.feature-text{
font-size:18px;
font-weight:600;
line-height:1.5;
color:#333;
}

@media(max-width:900px){

.features-box{
flex-direction:column;
}

.feature{
border-right:none !important;
border-bottom:1px solid #ccc;
padding-bottom:20px;
}

}

`}</style>

<section id="proctology" className="proctology">

<div className="proctology-container">

<h2 className="proctology-title">
Specialized center for Proctology Treatment
</h2>

<p className="proctology-text">
SurgiKure is a Multispecialty healthcare provider which aims to deliver a
hassle-free surgical experience to all patients by leveraging technology,
and a set of advanced operations and powerful processes. Proctology is
a branch of medicine that deals with the diagnosis and treatment of
diseases and medical conditions related to the anus and the rectum.
</p>

<button className="call-btn">
📞 Call Us : +91 9493994244
</button>

<h3 className="book-title">
Book Appointments With Our Expert Doctors Near You
</h3>

<div className="features-box">

<div className="feature">
<div className="feature-icon">🩺</div>
<p className="feature-text">
Centre of Excellence <br/>
For Colorectal Surgery
</p>
</div>

<div className="feature">
<div className="feature-icon">👨‍⚕️</div>
<p className="feature-text">
Best Proctologists <br/>
With 15+ Years of Experience
</p>
</div>

<div className="feature">
<div className="feature-icon">⚕️</div>
<p className="feature-text">
Advanced Laser Surgery <br/>
for Anorectal Diseases
</p>
</div>

</div>

</div>

</section>

</>

);

};

export default Proctology;