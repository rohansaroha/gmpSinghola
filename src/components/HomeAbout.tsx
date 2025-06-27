import React from 'react';
import { motion } from 'framer-motion';

const HomeAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* About Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About GMP School Singhola</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At GMP School Singhola, we are committed to providing quality education that nurtures young minds 
            and prepares them for a successful future. Our experienced faculty and modern facilities create 
            an environment where students can thrive academically and personally.
          </p>
        </div>

        {/* Our Beautiful Campus Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Beautiful Campus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience learning in our spacious and well-maintained campus grounds, designed to provide the perfect environment for academic excellence and personal growth.
            </p>
          </div>
          
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
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              To provide comprehensive education that develops critical thinking, creativity, and character 
              in our students, preparing them to be responsible global citizens.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Foster academic excellence and lifelong learning</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Develop moral values and social responsibility</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Encourage innovation and creativity</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img 
              src="/images/staff/allStaff.jpeg" 
              alt="GMP School Staff" 
              className="rounded-2xl shadow-2xl w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-primary bg-opacity-10 rounded-2xl"></div>
          </div>
        </div>

        {/* School Events & Activities Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">School Life & Activities</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our vibrant school community actively engages in various educational and cultural activities throughout the year.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src="/images/events/event1.png" 
                  alt="GMP School Event Activities" 
                  className="w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h4 className="text-xl font-bold mb-2">School Activities</h4>
                  <p className="text-sm opacity-90">Engaging students in meaningful learning experiences</p>
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Educational Activities
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Interactive classroom sessions and group activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Science exhibitions and project presentations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Reading competitions and literary events</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Cultural Programs
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Annual day celebrations and cultural festivals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Sports day and outdoor recreational activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Community service and social awareness programs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
