import React from 'react';
import { Link } from 'react-router-dom';
import PrincipalSection from '../components/PrincipalSection';

const PrincipalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 pt-6 pb-4">
        <Link
          to="/about"
          className="inline-flex items-center text-gray-600 hover:text-primary transition-colors"
        >
          <span className="mr-2">←</span> Back to About Us
        </Link>
      </div>
      <PrincipalSection />
    </div>
  );
};

export default PrincipalPage;
