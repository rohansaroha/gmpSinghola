import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  // Document data for the mandatory disclosure table
  // For local files: use "/docs/filename.pdf"
  // For cloud storage: use full URLs like "https://your-cloud-url.com/docs/filename.pdf"
  const documents = [
    {
      id: 1,
      title: "Copies of Affiliation/Upgradation Letter and Recent Extension of Affiliation, if any",
      fileName: "affiliation_letter.pdf",
      pdfUrl: "/docs/affiliation_letter.pdf"
    },
    {
      id: 2,
      title: "Copies of Societies/Trust/Company Registration/Renewal Certificate, as applicable",
      fileName: "registration_certificate.pdf",
      pdfUrl: "/docs/registration_certificate.pdf"
    },
    {
      id: 3,
      title: "Copy of No Objection Certificate (NOC) issued, if applicable, by the State Govt./UT",
      fileName: "NOC.pdf",
      pdfUrl: "/docs/NOC.pdf"
    },
    {
      id: 4,
      title: "Copies of Recognition Certificate under RTE Act 2009, and its Renewal if applicable",
      fileName: "Recognition_Certificate.pdf",
      pdfUrl: "/docs/Recognition_Certificate.pdf"
    },
    {
      id: 5,
      title: "Copy of Valid Building Safety Certificate as per the National Building Code",
      fileName: "building_safety.pdf",
      pdfUrl: "/docs/building_safety.pdf"
    },
    {
      id: 6,
      title: "Copy of Valid Fire Safety Certificate issued by the Competent Authority",
      fileName: "fire_safety.pdf",
      pdfUrl: "/docs/fire_safety.pdf"
    },
    {
      id: 7,
      title: "Copy of the Certificate submitted by the School for Extension of Affiliation or Self Certificate by School",
      fileName: "extension_certificate.pdf",
      pdfUrl: "/docs/extension_certificate.pdf"
    },
    {
      id: 8,
      title: "Self Certification Proforma",
      fileName: "SELF_CERTIFICATION.pdf",
      pdfUrl: "/docs/SELF_CERTIFICATION.pdf"
    },
    {
      id: 9,
      title: "Copies of Valid Water, Health and Sanitation Certificates",
      fileName: "health_sanitation.pdf",
      pdfUrl: "/docs/health_sanitation.pdf"
    },
    {
      id: 10,
      title: "Mandatory Public Disclosure Details - Complete Information",
      fileName: "mandatory_disclosure_details.pdf",
      pdfUrl: "/docs/mandatory_disclosure_details.pdf"
    }
  ];

  // Results and Academics documents
  const academicDocuments = [
    {
      id: 11,
      title: "Fee Structure of the School",
      fileName: "fee_structure.pdf",
      pdfUrl: "/docs/fee_structure.pdf"
    },
    {
      id: 12,
      title: "Annual Academic Calendar",
      fileName: "academic_calendar.pdf",
      pdfUrl: "/docs/academic_calendar.pdf"
    },
    {
      id: 13,
      title: "List of School Management Committee (SMC)",
      fileName: "smc_list.pdf",
      pdfUrl: "/docs/smc_list.pdf"
    },
    {
      id: 14,
      title: "List of Parents Teachers Association (PTA) Members",
      fileName: "pta_list.pdf",
      pdfUrl: "/docs/pta_list.pdf"
    },
    {
      id: 15,
      title: "Last Three Years Academic Results",
      fileName: "last_three_years.pdf",
      pdfUrl: "/docs/last_three_years.pdf"
    }
  ];

  // Staff information
  const staffInfo = {
    principal: "PRIYANKA MALIK",
    totalTeachers: 21,
    pgt: 0,
    tgt: 9,
    prt: 10,
    teacherStudentRatio: "1:40",
    specialEducator: 1,
    wellness: 1
  };

  // Infrastructure information
  const infrastructureInfo = {
    campusArea: "1890 (in sq mtr)",
    classrooms: 16,
    laboratories: 3,
    library: 1,
    internet: "YES",
    girlsToilets: 6,
    boysToilets: 6,
    youtubeLink: "https://www.youtube.com/watch?v=MGp27k0B-kc"
  };

  const handleDocumentClick = (pdfUrl: string, fileName: string) => {
    // Open PDF in a new tab/window
    window.open(pdfUrl, '_blank');
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About GMP School Singhola</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Empowering students with quality education and fostering a culture of excellence.
          </p>
          <Link
            to="/about/principal"
            className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            Message from Principal
          </Link>
        </div>

        {/* School Ground Showcase */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our School Campus</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A spacious and well-maintained campus providing the perfect environment for learning and growth.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <img
              src="/images/school/ground.png"
              alt="GMP School Singhola Campus Ground"
              className="w-full rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <img
              src="/images/staff/allStaff.jpeg"
              alt="GMP School Singhola Staff"
              className="rounded-lg shadow-xl"
            />
            <img
              src="/images/school/ground.png"
              alt="GMP School Campus Ground"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              At GMP School Singhola, we are committed to providing a nurturing environment where students can develop their full potential. Our mission is to:
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

        {/* Mandatory Public Disclosure Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Mandatory Public Disclosure</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              As per CBSE guidelines, all mandatory documents are made available for public disclosure.
            </p>
          </div>

          {/* School Information Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-3">General Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-gray-700">School Name:</span>
                  <span className="text-gray-900">GMP School</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-gray-700">Complete Address:</span>
                  <span className="text-gray-900">70/5 marbel market singhola, Delhi - 110040</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-gray-700">Principal Name:</span>
                  <span className="text-gray-900">PRIYANKA MALIK (M.A, B.Ed)</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-gray-700">School Email:</span>
                  <span className="text-gray-900">gmpssinghola40@gmail.com</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-medium text-gray-700">Contact Details:</span>
                  <span className="text-gray-900">8745864417 , 9654738271</span>
                </div>
              </div>
            </div>
          </div>

          {/* Documents Table */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4">
              <h4 className="text-xl font-semibold text-white">Documents and Information</h4>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
                      S. No.
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Documents/Information
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-48">
                      Upload Documents
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {documents.map((doc, index) => (
                    <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {index + 1}.
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 leading-relaxed">
                        {doc.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleDocumentClick(doc.pdfUrl, doc.fileName)}
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                          📄 Document {index + 1} ↗
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start">
              <span className="text-blue-600 mt-1 mr-3 text-lg">📄</span>
              <div>
                <h5 className="font-semibold text-blue-900 mb-2">Note:</h5>
                <p className="text-blue-800 text-sm leading-relaxed">
                  All documents are available as per CBSE guidelines for mandatory public disclosure.
                  Click on any document button to view or download the respective document.
                  For any queries regarding these documents, please contact the school administration.
                </p>
              </div>
            </div>
          </div>

          {/* Results and Academics Section */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-6 py-4">
                <h4 className="text-xl font-semibold text-white">C: Results and Academics</h4>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16">
                        S. No.
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Documents/Information
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-48">
                        Upload Documents
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {academicDocuments.map((doc, index) => (
                      <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                          {index + 1}.
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700 leading-relaxed uppercase">
                          {doc.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button
                            onClick={() => handleDocumentClick(doc.pdfUrl, doc.fileName)}
                            className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                          >
                            📄 Document {doc.id} ↗
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Staff Information Section */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-4">
                <h4 className="text-xl font-semibold text-white">D: Staff (Teaching)</h4>
              </div>

              {/* Staff Photo Showcase */}
              <div className="p-6 mb-6">
                <div className="text-center mb-6">
                  <h5 className="text-lg font-semibold text-gray-900 mb-4">Our Dedicated Teaching Staff</h5>
                  <div className="max-w-4xl mx-auto">
                    <img
                      src="/images/staff/allStaff.jpeg"
                      alt="GMP School Teaching Staff"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-700">Principal:</span>
                      <span className="text-gray-900 font-semibold">{staffInfo.principal}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-700">Total No. of Teachers:</span>
                      <span className="text-gray-900 font-semibold">{staffInfo.totalTeachers}</span>
                    </div>
                    <div className="ml-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">PGT:</span>
                        <span className="text-gray-800">{staffInfo.pgt}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">TGT:</span>
                        <span className="text-gray-800">{staffInfo.tgt}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">PRT:</span>
                        <span className="text-gray-800">{staffInfo.prt}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-700">Teacher Section Ratio:</span>
                      <span className="text-gray-900 font-semibold">{staffInfo.teacherStudentRatio}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-700">Details of Special Educator:</span>
                      <span className="text-gray-900 font-semibold">{staffInfo.specialEducator}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-700">Details of Counsellor and Wellness Teacher:</span>
                      <span className="text-gray-900 font-semibold">{staffInfo.wellness}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* School Infrastructure Section */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-6 py-4">
                <h4 className="text-xl font-semibold text-white">E: School Infrastructure</h4>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-700">Total Campus Area:</span>
                      <span className="text-gray-900 font-semibold">{infrastructureInfo.campusArea}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-700">No. and Size of Class Rooms:</span>
                      <button
                        onClick={() => handleDocumentClick("/docs/classroom_details.pdf", "classroom_details.pdf")}
                        className="text-blue-600 hover:text-blue-800 font-semibold underline"
                      >
                        {infrastructureInfo.classrooms}
                      </button>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-700">No. and Size of Laboratories:</span>
                      <button
                        onClick={() => handleDocumentClick("/docs/lab_details.pdf", "lab_details.pdf")}
                        className="text-blue-600 hover:text-blue-800 font-semibold underline"
                      >
                        {infrastructureInfo.laboratories} Labs
                      </button>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-700">Library:</span>
                      <span className="text-gray-900 font-semibold">{infrastructureInfo.library}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-700">Internet Facility:</span>
                      <span className="text-green-600 font-semibold">{infrastructureInfo.internet}</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-700">No. of Girls Toilets:</span>
                      <span className="text-gray-900 font-semibold">{infrastructureInfo.girlsToilets}</span>
                    </div>
                    <div className="flex justify-between border-b pb-2">
                      <span className="font-medium text-gray-700">No. of Boys Toilets:</span>
                      <span className="text-gray-900 font-semibold">{infrastructureInfo.boysToilets}</span>
                    </div>
                    <div className="border-b pb-2">
                      <span className="font-medium text-gray-700 block mb-2">YouTube Video - School Inspection:</span>
                      <a
                        href={infrastructureInfo.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                      >
                        🎥 Watch Video ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* School Events & Activities Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">School Events & Activities</h3>
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
                <div className="bg-white rounded-lg shadow-lg p-6">
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

                <div className="bg-white rounded-lg shadow-lg p-6">
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
      </div>
    </section>
  );
};

export default About;
