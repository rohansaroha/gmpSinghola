import React from 'react';
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  // Gallery images - easy to add more as you upload them
  const galleryImages = [
    {
      src: '/images/school/ground.png',
      alt: 'School Campus Grounds',
      category: 'Campus',
      title: 'Spacious School Grounds'
    },
    {
      src: '/images/school/outside.jpg',
      alt: 'School Building Exterior',
      category: 'Campus',
      title: 'Modern School Building'
    },
    {
      src: '/images/staff/allStaff.jpeg',
      alt: 'School Staff',
      category: 'Staff',
      title: 'Dedicated Teaching Staff'
    },
    {
      src: '/images/events/event1.png',
      alt: 'School Event',
      category: 'Events',
      title: 'School Activities & Events'
    }
  ];

  const categories = ['All', 'Campus', 'Staff', 'Events', 'Students', 'Facilities'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            School Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our beautiful campus, dedicated staff, vibrant events, and the learning environment at GMP School Singhola.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.src}-${selectedCategory}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 bg-primary rounded-full text-xs font-medium mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-lg font-bold">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add More Photos Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16 bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">More Photos Coming Soon!</h3>
            <p className="text-gray-600 mb-6">
              We're continuously updating our gallery with new photos of school activities, events, and campus life. 
              Stay tuned for more glimpses into the vibrant GMP School community.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="text-primary text-2xl mb-2">📚</div>
                <p className="text-sm font-medium text-gray-700">Classroom Activities</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="text-primary text-2xl mb-2">🎭</div>
                <p className="text-sm font-medium text-gray-700">Cultural Events</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="text-primary text-2xl mb-2">🏃</div>
                <p className="text-sm font-medium text-gray-700">Sports Activities</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <div className="text-primary text-2xl mb-2">🎓</div>
                <p className="text-sm font-medium text-gray-700">Achievement Moments</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
