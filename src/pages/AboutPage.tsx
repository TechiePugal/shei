import React from 'react';
import { CheckCircle2, Users, ShieldCheck, BarChart3, Target, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import CallToAction from '../components/CallToAction';
import logoSHEI from '../pages/about.png'; // Adjust the path if needed

// Reusable Motion Card Component
const MotionCard: React.FC<{ direction: string; delay: number; children: React.ReactNode }> = ({ direction, delay, children }) => (
  <motion.div
    initial={{ opacity: 0, [direction]: 20 }}
    whileInView={{ opacity: 1, [direction]: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="rounded-lg overflow-hidden shadow-xl"
  >
    {children}
  </motion.div>
);

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="About SHEI – Trusted Metal Casting & Engineering Partner in India"
        description="Discover Sudharsan Heavy Engineering's journey as a top-tier manufacturer of HPDC, CNC machining, and alloy castings in India. Founded by visionary technocrat A. Thankavel."
        keywords="engineering company in Coimbatore, metal casting manufacturers India, R&D-based die casting company"
      />
      
      <Hero 
        title="Pioneering Innovation in Metal Casting and Engineering Since Inception"
        subtitle="Learn about our journey, mission, and commitment to engineering excellence."
         backgroundImages={[
    
    "https://www.supergroupscbe.com/images/super-groups-about.jpg"
  ]}
  // showFeatures={true}
        // backgroundImage="https://www.supergroupscbe.com/images/super-groups-about.jpg"
      />
      
      {/* Company Overview */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-justify">
            <MotionCard direction="x" delay={0}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-950">Our Story</h2>
              <p className="text-neutral-700 mb-6">
                Sudharsan Heavy Engineering Industry (SHEI) was established with a clear vision — to deliver top-quality metal casting and machining solutions for India's growing industrial sectors. As a proud part of the SUPER Group of Companies, we bring together deep industry knowledge, automation capabilities, and precision engineering to meet global manufacturing standards.
              </p>
              <p className="text-neutral-700 mb-6">
                Founded by Mr. A. Thankavel, an innovative technocrat with a passion for solving complex engineering challenges, SHEI has grown from a small workshop to a state-of-the-art manufacturing facility with comprehensive capabilities in die casting, CNC machining, and sheet metal fabrication.
              </p>
              <p className="text-neutral-700">
                Today, we serve clients across textile, automotive, petrochemical, and construction industries, providing them with precision-engineered components that meet the highest quality standards. Our journey is defined by continuous improvement, technological advancement, and a customer-first approach.
              </p>
            </MotionCard>
            
            <MotionCard direction="x" delay={0.2}>
              <img 
                src={logoSHEI}
                alt="SHEI Facility" 
                className="w-full h-full object-cover"
              />
            </MotionCard>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-primary-950 text-white text-justify">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MotionCard direction="y" delay={0}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <div className="w-16 h-16 bg-secondary-500/20 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-secondary-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-neutral-200">
                  To provide innovative, high-quality engineering solutions that exceed our customers' expectations while maintaining the highest standards of integrity, safety, and environmental responsibility.
                </p>
              </div>
            </MotionCard>
            
            <MotionCard direction="y" delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                <div className="w-16 h-16 bg-secondary-500/20 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-secondary-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-neutral-200">
                  To become a global leader in die casting and precision engineering solutions, known for our technological innovation, operational excellence, and sustainable manufacturing practices.
                </p>
              </div>
            </MotionCard>
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
            {[
              { icon: <ShieldCheck size={32} />, title: 'Quality Excellence', description: 'We are committed to delivering products that meet the highest quality standards, with rigorous testing and continuous improvement at every stage of production.' },
              { icon: <Lightbulb size={32} />, title: 'Innovation', description: 'We embrace new technologies, processes, and ideas that enhance our capabilities and provide better solutions for our customers\' evolving needs.' },
              { icon: <Users size={32} />, title: 'Customer Focus', description: 'We build lasting relationships with our clients through exceptional service, transparent communication, and a deep understanding of their requirements.' },
              { icon: <BarChart3 size={32} />, title: 'Operational Excellence', description: 'We strive for efficiency, reliability, and consistency in all our operations, leveraging advanced technologies and best practices.' },
              { icon: <Target size={32} />, title: 'Integrity', description: 'We conduct our business with honesty, transparency, and ethical practices, building trust with all our stakeholders.' },
              { icon: <ShieldCheck size={32} />, title: 'Sustainability', description: 'We are committed to environmentally responsible manufacturing practices and sustainable resource management.' },
            ].map((value, index) => (
              <MotionCard key={index} direction="y" delay={index * 0.2}>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <div className="text-secondary-500 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-neutral-600">{value.description}</p>
                </div>
              </MotionCard>
            ))}
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
            {[
              { title: 'Technical Expertise', list: ['Aluminum, Magnesium & Zinc Alloy Die Casting', 'Precision CNC, VMC, HMC Machining', 'Sheet Metal Fabrication & Surface Treatments', 'Tool Design & Manufacturing', 'Product Design & Development'] },
              { title: 'Quality & Process', list: ['ISO-Standard Quality Management', 'Advanced Testing & Inspection Equipment', 'In-house CAD/CAM Design', 'Material Selection Expertise'] },
            ].map((capability, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6 border-b border-neutral-200 pb-3">{capability.title}</h3>
                <ul className="space-y-4">
                  {capability.list.map((item, i) => (
                    <li key={i} className="flex">
                      <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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