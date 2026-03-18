import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';

/* HOME COMPONENTS */
import Hero from './components/Hero';
import BestDoctors from './components/BestDoctors';
import Surgeries from './components/Surgeries';
import WeightLossSection from './components/WeightLossSection';
import Services from './components/Services';
import ConsultationForm from './components/ConsultationForm';
import Reviews from "./components/Reviews";
import About from "./components/About";

/* PAGES */
import Proctology from "./pages/Proctology";
import Laparoscopy from "./pages/Laparoscopy";
import Urology from "./pages/Urology";
import Gynecology from "./pages/Gynecology";
import Aesthetics from "./pages/Aesthetics";
import ENT from "./pages/ENT";
import Fertility from "./pages/Fertility";
import Orthopedics from "./pages/Orthopedics";
import WeightLoss from "./pages/WeightLoss";
import Piles from './pages/Piles';

/* ✅ SCROLL TO TOP */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

/* HOME PAGE */
const Home = ({ onSubmit }) => {
  return (
    <>
      <Hero />
      <BestDoctors />
      <Surgeries />
      <WeightLossSection />
      <Services />
      <Reviews />
      <About />
      <ConsultationForm onSubmit={onSubmit} />
    </>
  );
};

/* CONSULTATION PAGE */
const Consultation = ({ onSubmit }) => {
  return (
    <div style={{ padding: "100px 20px" }}>
      <h2>Book Consultation</h2>
      <ConsultationForm onSubmit={onSubmit} />
    </div>
  );
};

function App() {

  /* ✅ FORM HANDLER ONLY (NO STATE NEEDED) */
  const handleFormSubmit = (data) => {
    alert(`Thank you ${data.name}! Your consultation has been booked. We'll contact you at ${data.mobile} shortly.`);
  };

  return (
    <Router>

      <ScrollToTop />

      <div className="App">

        <Header />

        <main className="main-content">

          <Routes>

            {/* HOME */}
            <Route path="/" element={<Home onSubmit={handleFormSubmit} />} />

            {/* CONSULTATION */}
            <Route path="/consultation" element={<Consultation onSubmit={handleFormSubmit} />} />

            {/* PAGES */}
            <Route path="/proctology" element={<Proctology />} />
            <Route path="/laparoscopy" element={<Laparoscopy />} />
            <Route path="/urology" element={<Urology />} />
            <Route path="/gynecology" element={<Gynecology />} />
            <Route path="/aesthetics" element={<Aesthetics />} />
            <Route path="/ent" element={<ENT />} />
            <Route path="/fertility" element={<Fertility />} />
            <Route path="/orthopedics" element={<Orthopedics />} />
            <Route path="/weightloss" element={<WeightLoss />} />
            <Route path="/piles" element={<Piles />} />

          </Routes>

        </main>

        <Footer />

      </div>

    </Router>
  );
}

export default App;