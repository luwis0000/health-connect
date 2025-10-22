import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import { AppProvider } from "./utils/AppContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatbotWidget from "./components/ChatbotWidget";
import VoiceAssistant from "./components/VoiceAssistant";

export default function App() {
  return (
    <AppProvider>
      {/* 👇 Add basename for subpath */}
      <BrowserRouter basename="/health-connect">
        <div className="app-root">
          <Navbar />
          <main className="main-content">
            <AppRouter />
          </main>
          <Footer />
          <ChatbotWidget />
          <VoiceAssistant />
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
