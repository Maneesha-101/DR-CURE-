import React from "react";

const WeightLoss = () => {

return (

<>

<style>{`

.weightloss{
background:#F3E0D4;
padding:120px 20px;
font-family:'Poppins',sans-serif;
}

.weightloss-container{
max-width:1100px;
margin:auto;
}

.weightloss-title{
font-size:42px;
font-weight:700;
color:#7B008A;
margin-bottom:20px;
}

.weightloss-text{
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

.features-box{
background:#FFFFFF;
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
border-bottom:1px solid #ddd;
padding-bottom:20px;
}

}

`}</style>

<section id="weightloss" className="weightloss">

<div className="weightloss-container">

<h2 className="weightloss-title">
Specialized center for Weight Loss Treatment
</h2>

<p className="weightloss-text">
Dr Cure Surgeries is a Multispecialty healthcare provider which aims to deliver a
hassle-free surgical experience to all patients by leveraging technology,
and a set of advanced operations and powerful processes. Our weight loss
programs focus on advanced medical treatments, expert consultation, and
personalized care to help patients achieve sustainable and healthy weight loss.
</p>

<button className="call-btn">
📞 Call Us : +919493994244
</button>

<h3 className="book-title">
Book Appointments With Our Expert Doctors Near You
</h3>

<div className="features-box">

<div className="feature">
<div className="feature-icon">💬</div>
<p className="feature-text">
Get consultation for <br/>
50+ diseases across India
</p>
</div>

<div className="feature">
<div className="feature-icon">👨‍⚕️</div>
<p className="feature-text">
In-person and online consultation with experienced doctors
</p>
</div>

<div className="feature">
<div className="feature-icon">❤️</div>
<p className="feature-text">
Extensive medical assistance throughout your treatment
</p>
</div>

</div>

</div>

</section>

</>

);

};

export default WeightLoss;