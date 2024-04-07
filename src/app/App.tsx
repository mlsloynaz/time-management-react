import React from 'react';
import { Home } from '../modules/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AppRoutes } from './AppRoutes';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'*'} element={<AppRoutes />}/>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
