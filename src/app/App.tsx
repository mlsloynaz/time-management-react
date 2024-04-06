import React from 'react';
import { Home } from '../modules/Home';
import { Dashboard } from '../modules/Dashboard';
import { Reports } from '../modules/Reports';
import { SettingsGeneral } from '../modules/Settings/SettingsGeneral';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route  path='/dashboard' element={<Dashboard />} />
        <Route  path='/reports'element={<Reports />} />
        <Route  path='/settings' element={<SettingsGeneral />} />
      </Routes>
    </BrowserRouter>
  );
}
