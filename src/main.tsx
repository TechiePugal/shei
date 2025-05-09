import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import React from 'react';

// Preloading the fonts for faster rendering
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

const LazyApp = React.lazy(() => import('./App'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <PreloadFonts />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyApp />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
