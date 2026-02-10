import React from 'react';
import { motion } from 'framer-motion';

const PrincipalSection: React.FC = () => {
  return (
    <section id="principal" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            From the Principal&apos;s Desk
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse of our school and a message from our Principal.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto pb-56">
          {/* Message from Principal - Event 16 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-xl bg-gray-50"
          >
            <div className="min-h-[280px]">
              <img
                src="/images/events/event16.jpeg"
                alt="Message from Principal"
                className="w-full h-full min-h-[280px] object-contain object-top bg-white"
              />
            </div>
            <div className="p-6 text-center border-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Message from Principal</h3>
            </div>
          </motion.div>

          {/* Principal's Picture - bottom right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="absolute bottom-0 right-0 lg:right-4 flex flex-col items-center"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white border-2 border-white w-[160px] shrink-0">
              <div className="aspect-[3/4]">
                <img
                  src="/images/events/event15.jpeg"
                  alt="Principal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="py-2 px-3 text-center bg-gray-50">
                <span className="text-sm font-semibold text-gray-900">Principal</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalSection;
