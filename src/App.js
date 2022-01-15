import './index.css';
import React from 'react';
import Navbar from './components/Navbar';
import MainPage from './MainPage';
import Feed from './components/Feed';
import "./App.css"

import {Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function App() {
  
  const location = useLocation();
  return (

    <main className="text-gray-400 bg-custom_gray body-font">
        <Navbar />
        <TransitionGroup>
          <CSSTransition key={location.pathname} classNames="alert" timeout={200}>
            <Routes location={location}>
              <Route path="/react_portfolio_site/" element={<MainPage />} />
              <Route path="/react_portfolio_site/project_feed/" element={<Feed />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
    </main>
  );
}
