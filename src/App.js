
// import React, { useState } from 'react';
// import './App.css';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import BestDoctors from './components/BestDoctors';
// import Surgeries from './components/Surgeries';
// import WeightLossSection from './components/WeightLossSection';
// import Services from './components/Services';
// import ConsultationForm from './components/ConsultationForm';
// import Footer from './components/Footer';
// import Reviews from "./components/Reviews";
// import About from "./components/About";
// function App() {

//   const [consultations, setConsultations] = useState([]);

//   const handleFormSubmit = (data) => {

//     const newConsultation = {
//       ...data,
//       id: Date.now(),
//       date: new Date().toLocaleString()
//     };

//     setConsultations(prev => [newConsultation, ...prev]);

//     alert(`Thank you ${data.name}! Your consultation has been booked. We'll contact you at ${data.mobile} shortly.`);

//     console.log('Consultation submitted:', newConsultation);
//     console.log('Total consultations:', consultations.length + 1);

//   };

//   return (

//     <div className="App">

//       <Header />

//       <main className="main-content">

//         <Hero />

//         <BestDoctors />

//         <Surgeries />

//         <WeightLossSection />

//         <Services />

//         {/* ⭐ Reviews Section */}
//         <Reviews />
//         <About />

//         <ConsultationForm onSubmit={handleFormSubmit} />

//       </main>

//       <Footer />

//     </div>

//   );

// }

// export default App;
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BestDoctors from './components/BestDoctors';
import Surgeries from './components/Surgeries';
import WeightLossSection from './components/WeightLossSection';
import Services from './components/Services';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import Reviews from "./components/Reviews";
import About from "./components/About";

/* NEW SECTIONS */
import Proctology from "./pages/Proctology";
import Laparoscopy from "./pages/Laparoscopy";
import Urology from "./pages/Urology";
import Gynecology from "./pages/Gynecology";
import WeightLoss from "./pages/WeightLoss";

function App() {

  const [consultations, setConsultations] = useState([]);

  const handleFormSubmit = (data) => {

    const newConsultation = {
      ...data,
      id: Date.now(),
      date: new Date().toLocaleString()
    };

    setConsultations(prev => [newConsultation, ...prev]);

    alert(`Thank you ${data.name}! Your consultation has been booked. We'll contact you at ${data.mobile} shortly.`);

    console.log('Consultation submitted:', newConsultation);
    console.log('Total consultations:', consultations.length + 1);

  };

  return (

    <div className="App">

      <Header />

      <main className="main-content">

        <Hero />

        <BestDoctors />

        <Surgeries />

        <WeightLossSection />

        <Services />

        {/* ⭐ Reviews Section */}
        <Reviews />

        <About />

        {/* ⭐ NEW MEDICAL PAGES */}

        <Proctology />

        <Laparoscopy />

        <Urology />

        <Gynecology />

        <WeightLoss />

        <ConsultationForm onSubmit={handleFormSubmit} />

      </main>

      <Footer />

    </div>

  );

}

export default App;