import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-primary text-white">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Our School
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Nurturing minds, building futures, and creating leaders of tomorrow
          </p>
          <div className="space-x-4">
            <button className="btn bg-white text-primary hover:bg-gray-100">
              Learn More
            </button>
            <button className="btn border-2 border-white hover:bg-white hover:text-primary">
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </div>
  );
};

export default Hero; 