import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import FeedbackForm from '../components/FeedbackForm';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact SHEI | Die Casting & Engineering Solutions in Coimbatore"
        description="Get in touch with Sudharsan Heavy Engineering Industry for die casting, CNC machining, and engineering solutions. Located in Coimbatore, Tamil Nadu."
        keywords="contact SHEI, die casting manufacturer contact, engineering company Coimbatore"
      />
      
      <Hero 
        title="Get in Touch with Our Engineering Experts"
        subtitle="We're here to help you with your manufacturing and engineering needs."
        backgroundImages={[
    
    "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg"
  ]}
  // showFeatures={true}
      />
      
      
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-primary-950">Contact Information</h2>
                <p className="text-neutral-600 mb-8 text-justify">
                  Whether you need information about our products, custom engineering solutions, or want to discuss your specific requirements, our team is ready to assist you.
                </p>
                
                <div className="space-y-6">
                  {/* Office Address */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Office Address</h3>
                      <p className="text-neutral-600">
                        Sudharsan Heavy Engineering Industry<br />
                        100/A, Athipalayam Road, Chinnavedempatti<br />
                        Coimbatore - 641006
                      </p>
                    </div>
                  </div>

                  {/* Factory Address */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Factory Address</h3>
                      <p className="text-neutral-600">
                        S.F.No: 581/1, Athipalayam Road<br />
                        Chinnavedempatti, Coimbatore - 641049
                      </p>
                    </div>
                  </div>

                  {/* Phone Numbers */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Phone Numbers</h3>
                      <p className="text-neutral-600 space-y-1">
                        <a href="tel:+919942909631" className="block hover:text-primary-600 transition-colors">
                          +91 99429 09631
                        </a>
                        <a href="tel:+919942909632" className="block hover:text-primary-600 transition-colors">
                          +91 99429 09632
                        </a>
                        <a href="tel:+918248278107" className="block hover:text-primary-600 transition-colors">
                          +91 82482 78107
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <p className="text-neutral-600">
                        <a href="mailto:mailboxshei@gmail.com" className="hover:text-primary-600 transition-colors">
                          mailboxshei@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                      <p className="text-neutral-600">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-primary-950">Send Us a Message</h2>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-primary-950">Our Location</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-justify">
              Located in the industrial hub of Coimbatore, our facility is easily accessible and equipped with modern manufacturing infrastructure.
            </p>
          </motion.div>
          
<div className="flex flex-col md:flex-row w-full gap-12">
  {/* Head Office */}
  <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
    <h2 className="text-center text-xl font-semibold mb-4">Head Office</h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31326.079044839957!2d76.982782!3d11.056621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85875f5da5219%3A0xf0d8694e6c43d621!2sSUPER%20MACHINE%20WORKS%20(P)%20LTD!5e0!3m2!1sen!2sin!4v1714193586373!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    />
  </div>

  {/* Factory */}
  <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
    <h2 className="text-center text-xl font-semibold mb-4">Factory</h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d41390.93808299245!2d76.99051202603763!3d11.083542323806503!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f7c7714c088d%3A0x21795fb9232cb7c8!2s3XJM%2B28J%2C%20Ramani&#39;s%20Sri%20Mayuri%20Layout%2C%20Saravanampatti%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1747040410608!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    />
  </div>
</div>


        </div>
      </section>
      <section className="py-20 bg-white">
  <div className="container">
    <FeedbackForm />
  </div>
</section>
    </>
  );
};

export default ContactPage;
