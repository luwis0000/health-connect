import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Education from "./pages/Education";
import Chatbot from "./pages/Chatbot";
import Settings from "./pages/Settings";
import Feedback from "./pages/Feedback";
import Dashboard from "./pages/Dashboard";
import Careers from "./pages/Careers";
import Emergency from "./pages/Emergency";
import Policy from "./pages/Policy";
import NotFound from "./pages/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/education" element={<Education />} />
      <Route path="/chatbot" element={<Chatbot />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
