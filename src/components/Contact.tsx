import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const contactInfo: Array<{
    title: string;
    content: string;
  }> = [
    {
      title: 'Address',
      content: 'GMP School Singhola\n70/5 marbel market singhola\nDelhi - 110040',
    },
    {
      title: 'Phone',
      content: '8745864417 , 9654738271',
    },
    {
      title: 'Email',
      content: 'gmpssinghola40@gmail.com',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contact GMP School Singhola
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">
                    {info.content}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <iframe
              src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
              width="100%"
              height="600"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Contact Form"
            >
              Loading…
            </iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;