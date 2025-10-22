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
      <BrowserRouter>
        <div className="app-root">
          <Navbar />
          <main className="main-content">
            <AppRouter />
          </main>
          <Footer />
            <ChatbotWidget />
          {/* Both components handle their own positioning via CSS */}
          <VoiceAssistant />
        
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}