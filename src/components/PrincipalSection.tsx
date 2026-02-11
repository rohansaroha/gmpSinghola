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

        <div className="max-w-4xl mx-auto">
          {/* Message from Principal with image at top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-xl bg-gray-50"
          >
            {/* Principal image + heading at top */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 md:p-8 border-b border-gray-200 bg-white">
              <div className="rounded-xl overflow-hidden shadow-lg shrink-0 w-[140px] sm:w-[160px]">
                <div className="aspect-[3/4]">
                  <img
                    src="/images/events/event15.jpeg"
                    alt="Principal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-semibold text-gray-900">Message from Principal</h3>
                <p className="text-sm text-gray-600 mt-1">Priyanka Malik</p>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <div className="prose prose-gray max-w-none text-gray-700 space-y-4 text-base leading-relaxed">
                <p>
                  Our school firmly believes that true education goes beyond academic excellence.
                  &ldquo;Shiksha aur Sanskar&rdquo; reflects our commitment to nurturing knowledgeable,
                  disciplined, and value-driven individuals. We aim to develop students who excel
                  academically while upholding moral values, respect, and responsibility.
                </p>
                <p>
                  Education is not merely the acquisition of knowledge but the development of
                  character, values, and lifelong skills. At our school, we strive to create a
                  nurturing and stimulating environment where every child is encouraged to explore
                  their potential, think creatively, and grow with confidence.
                </p>
                <p>
                  We believe in holistic education that balances academic excellence with moral
                  values, discipline, and co-curricular activities. Our dedicated faculty works
                  tirelessly to guide students toward becoming responsible, compassionate, and
                  confident individuals ready to face future challenges.
                </p>
                <p>
                  We value the partnership between parents, teachers, and students, as together we
                  can shape a brighter tomorrow. I invite you to explore our website and learn more
                  about our vision, achievements, and vibrant school community.
                </p>
                <p className="pt-4">
                  Regards
                  <br />
                  <span className="font-semibold text-gray-900">Priyanka Malik</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalSection;
