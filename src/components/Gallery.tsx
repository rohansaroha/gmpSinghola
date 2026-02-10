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
    },
    // Newly added photos
    {
      src: '/images/events/event2.jpeg',
      alt: 'Students enjoying classroom activity',
      category: 'Students',
      title: 'Classroom Activity'
    },
    {
      src: '/images/events/event3.jpeg',
      alt: 'Students having lunch together',
      category: 'Students',
      title: 'Midday Meal Time'
    },
    {
      src: '/images/events/event4.jpeg',
      alt: 'Students celebrating Raksha Bandhan',
      category: 'Events',
      title: 'Raksha Bandhan Celebration'
    },
    {
      src: '/images/events/event5.jpeg',
      alt: 'Teachers group photograph',
      category: 'Staff',
      title: 'Teachers Team'
    },
    {
      src: '/images/events/event6.jpeg',
      alt: 'Students eating lunch in class',
      category: 'Students',
      title: 'Lunch Break Moments'
    },
    {
      src: '/images/events/event7.jpeg',
      alt: 'School event',
      category: 'Events',
      title: 'School Event'
    },
    {
      src: '/images/events/event8.jpeg',
      alt: 'School event',
      category: 'Events',
      title: 'School Event'
    },
    {
      src: '/images/events/event9.jpeg',
      alt: 'School event',
      category: 'Events',
      title: 'School Event'
    },
    {
      src: '/images/events/event10.jpeg',
      alt: 'School event',
      category: 'Events',
      title: 'School Event'
    },
    {
      src: '/images/events/event11.jpeg',
      alt: 'School event',
      category: 'Events',
      title: 'School Event'
    },
    {
      src: '/images/events/event12.jpeg',
      alt: 'School event',
      category: 'Events',
      title: 'School Event'
    },
    {
      src: '/images/events/event13.jpeg',
      alt: 'School event',
      category: 'Events',
      title: 'School Event'
    },
    {
      src: '/images/events/event14.jpeg',
      alt: 'School event',
      category: 'Events',
      title: 'School Event'
    },
    {
      src: '/images/events/event17.jpeg',
      alt: 'School event',
      category: 'Events',
      title: 'School Event'
    },
    {
      src: '/images/events/event18.jpeg',
      alt: 'School event',
      category: 'Events',
      title: 'School Event'
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
      </div>
    </section>
  );
};

export default Gallery;
