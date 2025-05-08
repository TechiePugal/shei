import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact SHEI | Die Casting & Engineering Solutions in Coimbatore"
        description="Get in touch with Sudharshan Heavy Engineering Industry for die casting, CNC machining, and engineering solutions. Located in Coimbatore, Tamil Nadu."
        keywords="contact SHEI, die casting manufacturer contact, engineering company Coimbatore"
      />
      
      <Hero 
        title="Get in Touch with Our<br />Engineering Experts"
        subtitle="We're here to help you with your manufacturing and engineering needs."
        backgroundImage="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg"
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
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                      <p className="text-neutral-600">
                        123 Industrial Estate<br />
                        Coimbatore, Tamil Nadu<br />
                        India - 641049
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                      <p className="text-neutral-600">
                        <a href="tel:+919876543210" className="hover:text-primary-600 transition-colors">
                          +91 98765 43210
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <p className="text-neutral-600">
                        <a href="mailto:info@shei.com" className="hover:text-primary-600 transition-colors">
                          info@shei.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
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
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2291245042566!2d76.99013931474925!3d11.017897892155344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e4dda8648!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1645548145782!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;