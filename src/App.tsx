import React from 'react';
import './App.css';
import { Home } from './modules/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route index element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
