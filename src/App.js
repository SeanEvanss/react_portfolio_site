import './index.css';
import React from 'react';
import Navbar from './components/Navbar';
import MainPage from './MainPage';
import Feed from './components/Feed';
import "./App.css"
import { Route, BrowserRouter, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <html>
        <main className="text-gray-400 bg-custom_gray body-font">
          <Navbar />
          <Routes>
            <Route path="/react_portfolio_site/" element={<MainPage />} />
            <Route path="/react_portfolio_site/project_feed/" element={<Feed/>} />
          </Routes>
        </main>
      </html>
    </BrowserRouter>

  );
}
