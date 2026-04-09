import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from './components/Header';
import Doctors from "./components/Doctors";
import ServicesSection from "./components/ServicesSection";
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
import Fistula from "./pages/Fistula";
import Fissure from "./pages/Fissure";
import Rectal from "./pages/Rectal";
import FemoralHernia from "./pages/FemoralHernia";
import IncisionalHernia from "./pages/IncisionalHernia";
import HiatalHernia from "./pages/HiatalHernia";
import Appendicitis from "./pages/Appendicitis";
import UmbilicalHernia from "./pages/UmbilicalHernia";
import InguinalHernia from "./pages/InguinalHernia";
import Hysterectomy from "./pages/Hysterectomy";
import Circumcision from "./pages/Circumcision";
import StaplerCircumcision from "./pages/StaplerCircumcision";
import LaserCircumcision from "./pages/LaserCircumcision";
import Phimosis from "./pages/Phimosis";
import Balanoposthitis from "./pages/Balanoposthitis";
import PCNL from "./pages/PCNL";
import RIRS from "./pages/RIRS";
import URSL from "./pages/URSL";
import Hydrocele from "./pages/Hydrocele";
import EnlargedProstate from "./pages/EnlargedProstate";
import FrenuloplastySurgery from "./pages/FrenuloplastySurgery";
import KidneyStonesTreatment from "./pages/KidneyStonesTreatment";
import ForeskinInfection from "./pages/ForeskinInfection";
import MTP from "./pages/MTP";
import PCODPCOS from "./pages/PCODPCOS";
import Lipoma from "./pages/Lipoma";
import Gynecomastia from "./pages/Gynecomastia";
import TurbinateReduction from "./pages/TurbinateReduction";
import NasalPolyps from "./pages/NasalPolyps";
import VocalCordPolyps from "./pages/VocalCordPolyps";
import EarSurgery from "./pages/EarSurgery";
import ThroatSurgery from "./pages/ThroatSurgery";
import Myringotomy from "./pages/Myringotomy";
import Stapedectomy from "./pages/Stapedectomy";
import Tonsillectomy from "./pages/Tonsillectomy";
import Thyroidectomy from "./pages/Thyroidectomy";
import FessSurgery from "./pages/FessSurgery";
import Mastoidectomy from "./pages/Mastoidectomy";
import Septoplasty from "./pages/Septoplasty";
import SinusTreatment from "./pages/SinusTreatment";
import IUITreatment from "./pages/IUITreatment";
import IVFTreatment from "./pages/IVFTreatment";
import MaleFertility from "./pages/MaleFertility";
import FemaleInfertility from "./pages/FemaleInfertility";
import EggFreezing from "./pages/EggFreezing";
import TotalKneeReplacement from "./pages/TotalKneeReplacement";
import ShoulderArthroscopy from "./pages/ShoulderArthroscopy";
import KneeArthroscopy from "./pages/KneeArthroscopy";
import ArthroscopySurgery from "./pages/ArthroscopySurgery";
import RotatorCuffRepair from "./pages/RotatorCuffRepair";
import ShoulderReplacement from "./pages/ShoulderReplacement";
import MeniscusTearTreatment from "./pages/MeniscusTearTreatment";
import ACLTearTreatment from "./pages/ACLTearTreatment";
import KneeReplacement from "./pages/KneeReplacement";
import CarpalTunnelSyndrome from "./pages/CarpalTunnelSyndrome";
import BariatricSurgery from "./pages/BariatricSurgery";
import SearchPage from "./SearchPage";
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
            <Route path="/fistula" element={<Fistula />} />
            <Route path="/fissure" element={<Fissure />} />
            <Route path="/rectal-treatment" element={<Rectal />} />
<Route path="/femoral-hernia" element={<FemoralHernia />} />
<Route path="/incisional-hernia" element={<IncisionalHernia />} />
<Route path="/hiatal-hernia" element={<HiatalHernia />} />
<Route path="/appendicitis" element={<Appendicitis />} />
<Route path="/umbilical-hernia" element={<UmbilicalHernia />} />
<Route path="/inguinal-hernia" element={<InguinalHernia />} />
<Route path="/hysterectomy" element={<Hysterectomy />} />
<Route path="/circumcision" element={<Circumcision />} />
<Route path="/stapler-circumcision" element={<StaplerCircumcision />} />
<Route path="/laser-circumcision" element={<LaserCircumcision />} />
  <Route path="/phimosis" element={<Phimosis />} />
  <Route path="/balanoposthitis" element={<Balanoposthitis />} />
  <Route path="/pcnl" element={<PCNL />} />
  <Route path="/rirs" element={<RIRS />} />
  <Route path="/ursl" element={<URSL />} />
  <Route path="/hydrocele" element={<Hydrocele />} />
  <Route path="/enlarged-prostate" element={<EnlargedProstate />} />
  <Route path="/frenuloplasty-surgery" element={<FrenuloplastySurgery />} />
 <Route path="/kidney-stones-treatment" element={<KidneyStonesTreatment />} />
 <Route path="/foreskin-infection" element={<ForeskinInfection />} />
 <Route path="/mtp" element={<MTP />} />
 <Route path="/pcod-pcos" element={<PCODPCOS />} />
 <Route path="/lipoma" element={<Lipoma />} />
 <Route path="/gynecomastia" element={<Gynecomastia />} />
 <Route path="/turbinate-reduction" element={<TurbinateReduction />} />
 <Route path="/nasal-polyps" element={<NasalPolyps />} />
 <Route path="/vocal-cord-polyps" element={<VocalCordPolyps />} />
 <Route path="/ear-surgery" element={<EarSurgery />} />
 <Route path="/throat-surgery" element={<ThroatSurgery />} />
 <Route path="/myringotomy" element={<Myringotomy />} />
 <Route path="/stapedectomy" element={<Stapedectomy />} />
 <Route path="/tonsillectomy" element={<Tonsillectomy />} />
 <Route path="/thyroidectomy" element={<Thyroidectomy />} />
 <Route path="/fess-surgery" element={<FessSurgery />} />
 <Route path="/mastoidectomy" element={<Mastoidectomy />} />
 <Route path="/septoplasty" element={<Septoplasty />} />
 <Route path="/sinus-treatment" element={<SinusTreatment />} />
 <Route path="/iui-treatment" element={<IUITreatment />} />
 <Route path="/ivf-treatment" element={<IVFTreatment />} />
 <Route path="/male-fertility" element={<MaleFertility />} />
 <Route path="/female-infertility" element={<FemaleInfertility />} />
 <Route path="/egg-freezing" element={<EggFreezing />} />
 <Route path="/total-knee-replacement" element={<TotalKneeReplacement />} />
 <Route path="/shoulder-arthroscopy" element={<ShoulderArthroscopy />} />
 <Route path="/knee-arthroscopy" element={<KneeArthroscopy />} />
 <Route path="/arthroscopy-surgery" element={<ArthroscopySurgery />} />
 <Route path="/rotator-cuff-repair" element={<RotatorCuffRepair />} />
 <Route path="/shoulder-replacement" element={<ShoulderReplacement />} />
  < Route path="/meniscus-tear-treatment" element={<MeniscusTearTreatment />} />
  <Route path="/acl-tear-treatment" element={<ACLTearTreatment />} />
  <Route path="/knee-replacement" element={<KneeReplacement />} />
  <Route path="/carpal-tunnel-syndrome" element={<CarpalTunnelSyndrome />} />
  <Route path="/bariatric-surgery" element={<BariatricSurgery />} />
  <Route path="/search" element={<SearchPage />} />
          </Routes>

        </main>
<Doctors />
<ServicesSection /> 
        <Footer />

      </div>

    </Router>
  );
}

export default App;