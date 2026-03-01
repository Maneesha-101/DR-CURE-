// src/components/Surgeries.js
import React, { useState } from 'react';
import './Surgeries.css';

const Surgeries = () => {
  const [showAllSurgeries, setShowAllSurgeries] = useState(false);

  const surgeries = [
    { id: 1, name: 'Piles', icon: '🩸', category: 'proctology' },
    { id: 2, name: 'Anal Fistula', icon: '🔍', category: 'proctology' },
    { id: 3, name: 'Anal Fissure', icon: '💢', category: 'proctology' },
    { id: 4, name: 'Gallstone', icon: '🪨', category: 'general' },
    { id: 5, name: 'Kidney Stones', icon: '💎', category: 'urology' },
    { id: 6, name: 'Vaginoplasty', icon: '🌸', category: 'gynecology' },
    { id: 7, name: 'Breast Augmentation', icon: '👙', category: 'aesthetics' },
    { id: 8, name: 'Hernia', icon: '🕳️', category: 'general' },
    { id: 9, name: 'Appendix', icon: '📌', category: 'general' },
    { id: 10, name: 'Varicose Veins', icon: '🩹', category: 'vascular' },
    { id: 11, name: 'Cataract', icon: '👁️', category: 'ophthalmology' },
    { id: 12, name: 'Knee Replacement', icon: '🦵', category: 'orthopedics' }
  ];

  const specialities = [
    {
      id: 1,
      title: 'Proctology',
      description: 'You are treated with Specialised & advanced treatment for Anorectal Diseases.',
      icon: '🩺',
      color: '#0d4d8d'
    },
    {
      id: 2,
      title: 'Weight Loss',
      description: 'Gastric balloon & Bariatric Surgery (Scientific proven & advanced techniques).',
      icon: '⚖️',
      color: '#ff6b35'
    },
    {
      id: 3,
      title: 'Vascular',
      description: 'A surgical subspecialty that deals with the vascular system...',
      icon: '🩸',
      color: '#1a6fb3'
    },
    {
      id: 4,
      title: 'Aesthetics',
      description: 'Retouching or enhancing of natural corporeal appearance...',
      icon: '✨',
      color: '#ff8b35'
    },
    {
      id: 5,
      title: 'Orthopedics',
      description: 'Pediatric Orthopedic Hand and Upper Extremity Surgery',
      icon: '🦴',
      color: '#0d4d8d'
    },
    {
      id: 6,
      title: 'ENT',
      description: 'Minimally invasive surgery for ear, nose and throat.',
      icon: '👂',
      color: '#1a6fb3'
    }
  ];

  const visibleSurgeries = showAllSurgeries ? surgeries : surgeries.slice(0, 8);

  const handleSurgeryClick = (surgery) => {
    alert(`Selected: ${surgery.name}\n\nWould you like to learn more about ${surgery.name} surgery?`);
  };

  const handleViewMore = () => {
    setShowAllSurgeries(!showAllSurgeries);
  };

  const handleSpecialityClick = (speciality) => {
    const formSection = document.querySelector('.consultation');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="surgeries section-padding">
      <div className="container">
        {/* Surgeries Section */}
        <div className="surgeries-section">
          <h2 className="section-title">DR CURE surgeries</h2>
          <p className="section-subtitle">Advanced surgical treatments with minimal invasion and faster recovery</p>
          
          <div className="surgeries-grid">
            {visibleSurgeries.map((surgery) => (
              <div 
                key={surgery.id} 
                className="surgery-card"
                onClick={() => handleSurgeryClick(surgery)}
              >
                <div className="surgery-icon">{surgery.icon}</div>
                <h3 className="surgery-name">{surgery.name}</h3>
                <span className="surgery-category">{surgery.category}</span>
              </div>
            ))}
          </div>
          
          <div className="view-more-container">
            <button className="view-more-btn" onClick={handleViewMore}>
              {showAllSurgeries ? 'View Less' : 'View More'} →
            </button>
          </div>
        </div>

        {/* Specialities Section */}
        <div className="specialities-section">
          <h2 className="section-title">Our DR CURE  Specialities</h2>
          <p className="section-subtitle">Comprehensive medical care across various specializations</p>
          
          <div className="specialities-grid">
            {specialities.map((speciality) => (
              <div 
                key={speciality.id} 
                className="speciality-card"
                style={{ '--speciality-color': speciality.color }}
                onClick={() => handleSpecialityClick(speciality)}
              >
                <div className="speciality-header">
                  <div 
                    className="speciality-icon" 
                    style={{ backgroundColor: speciality.color }}
                  >
                    {speciality.icon}
                  </div>
                  <h3 className="speciality-title">{speciality.title}</h3>
                </div>
                <p className="speciality-description">{speciality.description}</p>
                <button className="speciality-btn">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Surgeries;