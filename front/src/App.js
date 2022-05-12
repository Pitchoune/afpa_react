import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Test from './pages/Test';
import PageClient from './pages/PageClient';
import PageAjout from './pages/PageAjout';
import SuppClient from './components/SuppClient';
import MajClient from "./components/MajClient";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/clients/:id" element={<PageClient />} />
        <Route path="/clients/ajout" element={<PageAjout />} />
        <Route path="/clients/supp/:id" element={<SuppClient />} />
        <Route path="/clients/maj/:id" element={<MajClient />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
