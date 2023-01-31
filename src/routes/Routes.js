import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Career from '../pages/careers';
import Education from '../pages/education';
import Projects from '../pages/projects';
import Home from '../pages/resume';

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Router>
        <Header />
            <Suspense>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/careers" element={<Career />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </Suspense>
        </Router>
    </Suspense>
  )
}

export default AppRoutes;
