import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
      <h2 className="text-2xl font-bold text-primary-950 mb-4">Page Not Found</h2>
      <p className="text-neutral-600 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/" className="btn btn-primary">
          <Home className="mr-2 h-5 w-5" />
          Go to Homepage
        </Link>
        <button 
          onClick={() => window.history.back()} 
          className="btn btn-outline"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;