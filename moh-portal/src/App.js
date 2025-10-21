import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";
import { AppProvider } from "./utils/AppContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatbotWidget from "./components/ChatbotWidget";
import "./styles/App.css"; // Make sure you have your CSS file

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
        </div>
      </BrowserRouter>
    </AppProvider>
  );
}
