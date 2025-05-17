import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GroupPage from './pages/GroupPage';
import ProductsPage from './pages/ProductsPage';
import FactoryTourPage from './pages/FactoryTour';
import NotFoundPage from './pages/NotFoundPage';
import ContactPage from './pages/ContactPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="group" element={<GroupPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="FactoryTour" element={<FactoryTourPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;