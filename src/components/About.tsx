import React from 'react';
import { FaGraduationCap, FaUsers, FaBook, FaAward } from 'react-icons/fa';

const About: React.FC = () => {
  const stats: Array<{
    icon: React.ComponentType<{ className?: string }>; // Explicitly define the type for the icon
    number: string;
    label: string;
  }> = [
    {
      icon: FaGraduationCap,
      number: '1000+',
      label: 'Students',
    },
    {
      icon: FaUsers,
      number: '100+',
      label: 'Teachers',
    },
    {
      icon: FaBook,
      number: '50+',
      label: 'Courses',
    },
    {
      icon: FaAward,
      number: '25+',
      label: 'Years',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About GMP Singhola</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering students with quality education and fostering a culture of excellence since 1998.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="text-primary mb-4 flex justify-center">
                  <IconComponent className="w-8 h-8" /> {/* Pass className explicitly */}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="School Building"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              At GMP Singhola, we are committed to providing a nurturing environment where students can develop their full potential. Our mission is to:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Foster academic excellence and critical thinking</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Develop leadership and character</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Promote cultural awareness and global citizenship</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Encourage innovation and creativity</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;