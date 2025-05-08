import React from 'react';
import { CheckCircle2, Users, ShieldCheck, BarChart3, Target, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import CallToAction from '../components/CallToAction';

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="About SHEI – Trusted Metal Casting & Engineering Partner in India"
        description="Discover Sudharasan Heavy Engineering's journey as a top-tier manufacturer of HPDC, CNC machining, and alloy castings in India. Founded by visionary technocrat A. Thankavel."
        keywords="engineering company in Coimbatore, metal casting manufacturers India, R&D-based die casting company"
      />
      
      <Hero 
        title="Pioneering Innovation in Metal<br />Casting and Engineering<br />Since Inception"
        subtitle="Learn about our journey, mission, and commitment to engineering excellence."
        backgroundImage="https://www.supergroupscbe.com/images/super-groups-about.jpg"
      />
      
      {/* Company Overview */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-justify">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-950">Our Story</h2>
              <p className="text-neutral-700 mb-6 text-justify">
                Sudharasan Heavy Engineering Industry (SHEI) was established with a clear vision — to deliver top-quality metal casting and machining solutions for India's growing industrial sectors. As a proud part of the SUPER Group of Companies, we bring together deep industry knowledge, automation capabilities, and precision engineering to meet global manufacturing standards.
              </p>
              <p className="text-neutral-700 mb-6 text-justify">
                Founded by Mr. A. Thankavel, an innovative technocrat with a passion for solving complex engineering challenges, SHEI has grown from a small workshop to a state-of-the-art manufacturing facility with comprehensive capabilities in die casting, CNC machining, and sheet metal fabrication.
              </p>
              <p className="text-neutral-700 text-justify">
                Today, we serve clients across textile, automotive, petrochemical, and construction industries, providing them with precision-engineered components that meet the highest quality standards. Our journey is defined by continuous improvement, technological advancement, and a customer-first approach.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://shei.co.in/images/about.webp" 
                alt="SHEI Facility" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-primary-950 text-white text-justify">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
            >
              <div className="w-16 h-16 bg-secondary-500/20 rounded-full flex items-center justify-center mb-4">
                <Target className="h-8 w-8 text-secondary-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-neutral-200">
                To provide innovative, high-quality engineering solutions that exceed our customers' expectations while maintaining the highest standards of integrity, safety, and environmental responsibility. We aim to be the partner of choice for engineering challenges across industries.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
            >
              <div className="w-16 h-16 bg-secondary-500/20 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-8 w-8 text-secondary-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-neutral-200">
                To become a global leader in die casting and precision engineering solutions, known for our technological innovation, operational excellence, and sustainable manufacturing practices. We strive to contribute meaningfully to India's industrial growth and the global manufacturing ecosystem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-20 bg-white text-justify">
        <div className="container">
          <SectionTitle 
            title="Our Core Values"
            subtitle="These principles guide our decisions, actions, and relationships with all stakeholders."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-neutral-50 p-6 rounded-lg"
            >
              <div className="text-secondary-500 mb-4">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
              <p className="text-neutral-600">
                We are committed to delivering products that meet the highest quality standards, with rigorous testing and continuous improvement at every stage of production.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-neutral-50 p-6 rounded-lg"
            >
              <div className="text-secondary-500 mb-4">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-neutral-600">
                We embrace new technologies, processes, and ideas that enhance our capabilities and provide better solutions for our customers' evolving needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-neutral-50 p-6 rounded-lg"
            >
              <div className="text-secondary-500 mb-4">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-neutral-600">
                We build lasting relationships with our clients through exceptional service, transparent communication, and a deep understanding of their requirements.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-neutral-50 p-6 rounded-lg"
            >
              <div className="text-secondary-500 mb-4">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Operational Excellence</h3>
              <p className="text-neutral-600">
                We strive for efficiency, reliability, and consistency in all our operations, leveraging advanced technologies and best practices.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-neutral-50 p-6 rounded-lg"
            >
              <div className="text-secondary-500 mb-4">
                <Target size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-neutral-600">
                We conduct our business with honesty, transparency, and ethical practices, building trust with all our stakeholders.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-neutral-50 p-6 rounded-lg"
            >
              <div className="text-secondary-500 mb-4">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-neutral-600">
                We are committed to environmentally responsible manufacturing practices and sustainable resource management.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Capabilities */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <SectionTitle 
            title="Our Core Capabilities"
            subtitle="Comprehensive engineering solutions that drive value for our customers."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 border-b border-neutral-200 pb-3">Technical Expertise</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">Aluminum, Magnesium & Zinc Alloy Die Casting</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">Precision CNC, VMC, HMC Machining</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">Sheet Metal Fabrication & Surface Treatments</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">Tool Design & Manufacturing</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">Product Design & Development</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-6 border-b border-neutral-200 pb-3">Quality & Process</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">ISO-Standard Quality Management</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">Advanced Testing & Inspection Equipment</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">In-house CAD/CAM Design</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">Material Selection Expertise</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span className="text-neutral-700">Process Optimization & Automation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Want to Learn More About Our Capabilities?"
        description="Schedule a facility tour or a consultation with our engineering team."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Products"
        secondaryButtonLink="/products"
      />
    </>
  );
};

export default AboutPage;