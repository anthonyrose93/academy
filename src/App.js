import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home';
import HomeContent from './Components/HomeContent';
import MyNavbar from './Components/MyNavbar';
import JiuJitsu from './Components/JiuJitsu';
import MuayThai from './Components/MuayThai';
import Kids from './Components/Kids';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';
import StudentGoals from './Components/StudentGoals';
import WhatsNew from './Components/WhatsNew';
import ScrollToTop from './Components/ScrollToTop';
import JiuJitsuCoaches from './Components/CoachesJJ.js';
import MuayThaiCoaches from './Components/CoachesMT.js';
import KidsCoaches from './Components/CoachesKids.js';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
        <div className="main-content">
        <MyNavbar />
        <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <HomeContent />
            </>
          }
        />
          <Route path="/jiu-jitsu" element={<JiuJitsu />} />
          <Route path="/muay-thai" element={<MuayThai />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/home-modals" element={<HomeContent />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/student-goals" element={<StudentGoals />} />
          <Route path="/whats-new" element={<WhatsNew />} />
          <Route path="/jiujitsu-coaches" element={<JiuJitsuCoaches />} />
          <Route path="/muaythai-coaches" element={<MuayThaiCoaches />} />
          <Route path="/kids-coaches" element={<KidsCoaches />} />
        </Routes>
        </div>
        <Footer />
    </Router>
  );
}

export default App;