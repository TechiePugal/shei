import { StrictMode, useEffect, useState, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import React from 'react';
import Loader from './components/Loader';
import './index.css';

const LazyApp = React.lazy(() => import('./App'));

// Preloading fonts
const PreloadFonts = () => (
  <>
    <link 
      rel="preload" 
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" 
      as="style" 
    />
    <link 
      rel="stylesheet" 
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" 
    />
  </>
);

// Timed loader wrapper
const TimedApp = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  return showLoader ? <Loader /> : (
    <Suspense fallback={<Loader />}>
      <LazyApp />
    </Suspense>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <PreloadFonts />
      <BrowserRouter>
        <TimedApp />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
