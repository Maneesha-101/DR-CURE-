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
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      if (onSubmit) {
        onSubmit(formData);
      } else {
        alert('Form Submitted Successfully!');
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
          :root {
            --brand-purple: #7D008D;
            --brand-orange: #FF7A00;
            --brand-white: #FFFFFF;
          }

          .consultation {
            background: linear-gradient(135deg, #7D008D 0%, #5a0066 100%);
            position: relative;
            overflow: hidden;
            padding: 80px 0;
            font-family: 'Poppins', sans-serif;
          }

          .consultation::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
              radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .form-container {
            background: white;
            border-radius: 20px;
            padding: 50px;
            box-shadow: 0 20px 60px rgba(125, 0, 141, 0.15);
            max-width: 800px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
          }

          .form-header {
            text-align: center;
            margin-bottom: 40px;
          }

          .form-header .section-title {
            color: var(--brand-purple);
            font-size: 32px;
            margin-bottom: 10px;
            font-weight: 700;
          }

          .form-subtitle {
            color: #666;
            font-size: 16px;
            max-width: 500px;
            margin: 10px auto 0;
          }

          .consultation-form {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .form-row {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }

          .form-group {
            display: flex;
            flex-direction: column;
          }

          .form-label {
            color: #333;
            font-weight: 600;
            margin-bottom: 8px;
            font-size: 14px;
          }

          .form-label::after {
            content: ' *';
            color: var(--brand-orange);
          }

          .form-input, .form-select {
            padding: 15px 20px;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            font-size: 16px;
            transition: all 0.3s ease;
            background-color: white;
          }

          .form-input:focus, .form-select:focus {
            outline: none;
            border-color: var(--brand-purple);
            box-shadow: 0 0 0 3px rgba(125, 0, 141, 0.1);
          }

          .form-input.error, .form-select.error {
            border-color: #ff3860;
          }

          .form-select {
            appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%237D008D' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 20px center;
            background-size: 16px;
            cursor: pointer;
          }

          .error-message {
            color: #ff3860;
            font-size: 12px;
            margin-top: 5px;
            min-height: 18px;
          }

          .form-actions {
            text-align: center;
            margin-top: 10px;
          }

          .submit-btn {
            background: linear-gradient(135deg, var(--brand-orange) 0%, #ff9535 100%);
            color: white;
            border: none;
            border-radius: 50px;
            padding: 18px 40px;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            max-width: 400px;
            margin-bottom: 20px;
          }

          .submit-btn:hover:not(:disabled) {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(255, 122, 0, 0.3);
            background: linear-gradient(135deg, #e66e00 0%, var(--brand-orange) 100%);
          }

          .submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }

          .spinner {
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          .form-note {
            color: #666;
            font-size: 12px;
            line-height: 1.4;
          }

          @media (max-width: 768px) {
            .form-container { padding: 30px 25px; margin: 0 10px; }
            .form-row { grid-template-columns: 1fr; gap: 10px; }
            .form-header .section-title { font-size: 26px; }
          }
        `}
      </style>

      <section className="consultation">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2 className="section-title">Book Free Consultation</h2>
              <p className="form-subtitle">Fill the form below and our medical coordinator will contact you within 24 hours</p>
            </div>
            
            <form className="consultation-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Patient Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Enter your full name"
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="mobile" className="form-label">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`form-input ${errors.mobile ? 'error' : ''}`}
                    placeholder="Enter 10-digit number"
                    disabled={isSubmitting}
                  />
                  {errors.mobile && <span className="error-message">{errors.mobile}</span>}
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city" className="form-label">Select City</label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`form-select ${errors.city ? 'error' : ''}`}
                    disabled={isSubmitting}
                  >
                    {cities.map((city, index) => (
                      <option key={index} value={city} disabled={index === 0}>
                        {city}
                      </option>
                    ))}
                  </select>
                  {errors.city && <span className="error-message">{errors.city}</span>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="disease" className="form-label">Select Disease</label>
                  <select
                    id="disease"
                    name="disease"
                    value={formData.disease}
                    onChange={handleChange}
                    className={`form-select ${errors.disease ? 'error' : ''}`}
                    disabled={isSubmitting}
                  >
                    {diseases.map((disease, index) => (
                      <option key={index} value={disease} disabled={index === 0}>
                        {disease}
                      </option>
                    ))}
                  </select>
                  {errors.disease && <span className="error-message">{errors.disease}</span>}
                </div>
              </div>
              
              <div className="form-actions">
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="spinner"></div>
                  ) : (
                    <>
                      <span>Book FREE Consultation</span>
                      <span className="btn-icon">→</span>
                    </>
                  )}
                </button>
                <p className="form-note">
                  * By submitting this form, you agree to our terms & conditions and privacy policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConsultationForm;