

import React, { useState } from 'react';

const ConsultationForm = ({ onSubmit }) => {

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: 'Select City',
    disease: 'Select Disease'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cities = [
    'Select City',
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas'
  ];

  const diseases = [
    'Select Disease',
    'Piles',
    'Diabetes',
    'Hypertension',
    'Arthritis',
    'Asthma',
    'Migraine',
    'Thyroid',
    'Heart Disease',
    'Kidney Stones'
  ];

  const validateForm = () => {

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.city || formData.city === 'Select City') {
      newErrors.city = 'Please select a city';
    }

    if (!formData.disease || formData.disease === 'Select Disease') {
      newErrors.disease = 'Please select a disease';
    }

    return newErrors;
  };

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {

      await new Promise(resolve => setTimeout(resolve, 1500));

      if (onSubmit) {
        onSubmit(formData);
      }

      setFormData({
        name: '',
        mobile: '',
        city: 'Select City',
        disease: 'Select Disease'
      });

      setErrors({});

    } catch (error) {

      alert('There was an error submitting your form. Please try again.');

    } finally {

      setIsSubmitting(false);

    }

  };

  return (

    <>

      <style>
        {`

:root{
--brand-purple:#7D008D;
--brand-orange:#FF7A00;
--brand-white:#FFFFFF;
}

.consultation{
background:linear-gradient(135deg,#7D008D 0%,#5a0066 100%);
padding:80px 0;
font-family:'Poppins',sans-serif;
}

.container{
max-width:1200px;
margin:0 auto;
padding:0 20px;
}

.form-container{
background:white;
border-radius:20px;
padding:50px;
box-shadow:0 20px 60px rgba(125,0,141,0.15);
max-width:800px;
margin:0 auto;
}

.form-header{
text-align:center;
margin-bottom:40px;
}

.section-title{
color:var(--brand-purple);
font-size:32px;
font-weight:700;
margin-bottom:10px;
}

.form-subtitle{
color:#666;
font-size:16px;
}

.consultation-form{
display:flex;
flex-direction:column;
gap:20px;
}

.form-row{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:25px;
}

.form-group{
display:flex;
flex-direction:column;
}

.form-label{
font-weight:600;
margin-bottom:8px;
}

.form-input,.form-select{
padding:15px;
border:2px solid #e0e0e0;
border-radius:10px;
font-size:16px;
}

.form-input:focus,.form-select:focus{
outline:none;
border-color:var(--brand-purple);
}

.error-message{
color:red;
font-size:12px;
margin-top:5px;
}

.submit-btn{
background:var(--brand-orange);
color:white;
border:none;
border-radius:40px;
padding:18px;
font-size:18px;
font-weight:600;
cursor:pointer;
}

.spinner{
width:20px;
height:20px;
border:3px solid rgba(255,255,255,0.3);
border-top-color:white;
border-radius:50%;
animation:spin 1s linear infinite;
}

@keyframes spin{
to{transform:rotate(360deg)}
}

@media(max-width:768px){
.form-row{
grid-template-columns:1fr;
}
}

`}
      </style>

      {/* IMPORTANT: id="consultation" for header scroll */}
      <section id="consultation" className="consultation">

        <div className="container">

          <div className="form-container">

            <div className="form-header">

              <h2 className="section-title">
                Book Free Consultation
              </h2>

              <p className="form-subtitle">
                Fill the form below and our medical coordinator will contact you
              </p>

            </div>

            <form className="consultation-form" onSubmit={handleSubmit}>

              <div className="form-row">

                <div className="form-group">

                  <label className="form-label">Patient Name</label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your name"
                  />

                  {errors.name && (
                    <span className="error-message">
                      {errors.name}
                    </span>
                  )}

                </div>

                <div className="form-group">

                  <label className="form-label">Mobile Number</label>

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter 10 digit number"
                  />

                  {errors.mobile && (
                    <span className="error-message">
                      {errors.mobile}
                    </span>
                  )}

                </div>

              </div>

              <div className="form-row">

                <div className="form-group">

                  <label className="form-label">Select City</label>

                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-select"
                  >

                    {cities.map((city,index)=>(
                      <option key={index} value={city} disabled={index===0}>
                        {city}
                      </option>
                    ))}

                  </select>

                  {errors.city && (
                    <span className="error-message">
                      {errors.city}
                    </span>
                  )}

                </div>

                <div className="form-group">

                  <label className="form-label">Select Disease</label>

                  <select
                    name="disease"
                    value={formData.disease}
                    onChange={handleChange}
                    className="form-select"
                  >

                    {diseases.map((disease,index)=>(
                      <option key={index} value={disease} disabled={index===0}>
                        {disease}
                      </option>
                    ))}

                  </select>

                  {errors.disease && (
                    <span className="error-message">
                      {errors.disease}
                    </span>
                  )}

                </div>

              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >

                {isSubmitting
                  ? <div className="spinner"></div>
                  : "Book FREE Consultation"}

              </button>

            </form>

          </div>

        </div>

      </section>

    </>
  );

};

export default ConsultationForm;
