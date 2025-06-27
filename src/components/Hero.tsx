import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <>
      {/* Main Hero Section */}
      <div className="relative bg-primary text-white overflow-hidden">
        {/* Background Staff Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/staff/allStaff.jpeg" 
            alt="GMP School Staff" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          {/* Reduced content - just visual impact */}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
      </div>

      {/* Campus Showcase Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Beautiful Campus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience learning in our spacious and well-maintained campus grounds, designed to provide the perfect environment for academic excellence and personal growth.
            </p>
          </motion.div>
          
          {/* Campus Images Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/school/ground.png" 
                alt="GMP School Campus Grounds" 
                className="w-full h-[350px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">School Grounds</h3>
                <p className="text-sm opacity-90">Spacious campus for learning and play</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="/images/school/outside.jpg" 
                alt="GMP School Exterior View" 
                className="w-full h-[350px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-bold mb-2">School Building</h3>
                <p className="text-sm opacity-90">Modern architecture for quality education</p>
              </div>
            </motion.div>
          </div>
          
          {/* Campus Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Modern Facilities</h4>
              <p className="text-gray-600">Well-equipped classrooms and learning spaces for comprehensive education</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Green Environment</h4>
              <p className="text-gray-600">Spacious grounds with natural surroundings promoting healthy development</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Safe & Secure</h4>
              <p className="text-gray-600">Protected campus ensuring a safe learning environment for all students</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero; 