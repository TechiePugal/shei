import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Factory, 
  Hammer, 
  Cog, 
  LinkedinIcon, 
  Globe, 
  Briefcase, 
  Lightbulb, 
  UsersIcon,
  BarChart4,
  TrendingUp
} from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import CallToAction from '../components/CallToAction';
import MDImg from './MD.png';
import JMDImg from './JMD.png';
const GroupPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="SUPER Group of Companies | Industrial Manufacturing Network in India"
        description="SHEI is part of the SUPER Group, a diversified industrial engineering network with expertise in die casting, textiles, machining, and system automation."
        keywords="industrial manufacturing group India, engineering group Coimbatore"
      />
      
      <Hero 
        title="The SUPER Group –Building India's Industrial Backbone"
        subtitle="A multi-industry enterprise known for its high-precision manufacturing across sectors."
          backgroundImages={[
    
    "https://png.pngtree.com/thumb_back/fh260/background/20240604/pngtree-cnc-machine-working-with-workpiece-on-smart-factory-image_15739298.jpg"
  ]}
  hideExploreButton
learnMoreTargetId="about-details"
  // showFeatures={true}
             />
      
      {/* Group Overview */}
      <section className="py-20 text-justify" id="about-details">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-950">Group Overview</h2>
              <p className="text-neutral-700 mb-6">
                Sudharsan Heavy Engineering Industry operates under the umbrella of the SUPER Group of Companies — a multi-industry enterprise known for its high-precision manufacturing across diverse industry sectors.
              </p>
              <p className="text-neutral-700 mb-6">
                Founded with a vision to create an integrated manufacturing ecosystem, the SUPER Group has strategically expanded its capabilities across complementary industries, enabling us to offer end-to-end solutions to our clients.
              </p>
              <p className="text-neutral-700 mb-6">
                Each company within the group specializes in specific areas while maintaining the same commitment to quality, innovation, and customer satisfaction. This structure allows us to leverage shared expertise, resources, and technologies to deliver greater value to our customers.
              </p>
              <p className="text-neutral-700">
                Together, we offer vertically integrated, end-to-end manufacturing and engineering solutions, from design to delivery, serving clients across India and international markets.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4 bg-primary-950 text-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 border-b border-white/20 pb-3">Benefits of Our Group Structure</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <Briefcase className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span>Shared Supply Chain Efficiency</span>
                </li>
                <li className="flex">
                  <Lightbulb className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span>Centralized R&D and Innovation</span>
                </li>
                <li className="flex">
                  <Cog className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span>Scalable Multi-Industry Production</span>
                </li>
                <li className="flex">
                  <Globe className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span>Global Export Capabilities</span>
                </li>
                <li className="flex">
                  <UsersIcon className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span>Cross-Functional Expertise</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Group Portfolio */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <SectionTitle 
            title="Group Portfolio"
            subtitle="Our diversified companies work together to provide comprehensive engineering and manufacturing solutions."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="bg-white rounded-lg shadow-md overflow-hidden"
>
  <div className="bg-primary-950 p-6 text-white">
    <div className="flex items-center">
      <Factory className="h-10 w-10 text-secondary-500 mr-4" />
      <h3 className="text-2xl font-semibold">Super Machine Works</h3>
    </div>
    <p className="mt-2">Advanced Textile & Engineering Solutions</p>
  </div>
  <div className="p-6">
    <p className="text-neutral-700 mb-4">
      Founded in 1984 by Mr. A. Thangavel, Super Machine Works is a leading manufacturer of textile and general engineering machinery. With innovations like Open End Spinning Machines (SUPER OS 480) and Auto Leveler Draw Frames, the company is renowned for durable, high-performance machines that meet global standards.
    </p>
    <ul className="space-y-2 text-neutral-700">
      <li className="flex items-start">
        <div className="h-5 w-5 text-secondary-500 mr-2">•</div>
        <span>Open End Spinning Machines (SUPER OS 480)</span>
      </li>
      <li className="flex items-start">
        <div className="h-5 w-5 text-secondary-500 mr-2">•</div>
        <span>Auto Leveler Draw Frames (ASD 1000Z)</span>
      </li>
      <li className="flex items-start">
        <div className="h-5 w-5 text-secondary-500 mr-2">•</div>
        <span>Ring Frames, Combers & Lap Formers</span>
      </li>
      <li className="flex items-start">
        <div className="h-5 w-5 text-secondary-500 mr-2">•</div>
        <span>Complete R&D and Customer Support Infrastructure</span>
      </li>
    </ul>
    <a
      href="https://www.supergroupscbe.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 text-primary-600 font-semibold hover:underline"
    >
      Learn more →
    </a>
  </div>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="bg-white rounded-lg shadow-md overflow-hidden"
>
  <div className="bg-primary-950 p-6 text-white">
    <div className="flex items-center">
      <Hammer className="h-10 w-10 text-secondary-500 mr-4" />
      <h3 className="text-2xl font-semibold">Super Textile Services</h3>
    </div>
    <p className="mt-2">Global Textile Spares & Turnkey Solutions</p>
  </div>
  <div className="p-6">
    <p className="text-neutral-700 mb-4">
      Super Textile Services delivers reliable textile machinery spares and consulting for spinning mills worldwide. Founded by Mr. A. Thangavel, the company offers turnkey solutions, project consultancy, and global sourcing of spare parts for enhanced productivity and mill uptime.
    </p>
    <ul className="space-y-2 text-neutral-700">
      <li className="flex items-start">
        <div className="h-5 w-5 text-secondary-500 mr-2">•</div>
        <span>Textile Machinery Spares & Accessories</span>
      </li>
      <li className="flex items-start">
        <div className="h-5 w-5 text-secondary-500 mr-2">•</div>
        <span>Complete Turnkey Project Services</span>
      </li>
      <li className="flex items-start">
        <div className="h-5 w-5 text-secondary-500 mr-2">•</div>
        <span>Consultancy for Spinning Mill Operations</span>
      </li>
      <li className="flex items-start">
        <div className="h-5 w-5 text-secondary-500 mr-2">•</div>
        <span>Global Sourcing & Indigenous Substitutes</span>
      </li>
    </ul>
    <a
      href="https://www.supergroupscbe.com/Super-textile-works"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-4 text-primary-600 font-semibold hover:underline"
    >
      Explore services →
    </a>
  </div>
</motion.div>


          </div>
        </div>
      </section>
      
      {/* Group Leadership */}
      <section className="py-20 bg-white">
        <div className="container">
          <SectionTitle 
            title="Our Leadership"
            subtitle="The visionaries driving innovation and excellence across the SUPER Group."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <img 
                  src= {MDImg} 
                  alt="A. Thankavel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">A. Thankavel</h3>
              <p className="text-secondary-600 mb-3">Founder & Chairman</p>
              <p className="text-neutral-600 mb-4">
                Visionary leader with over 30 years of experience in manufacturing and engineering.
              </p>
              {/* <a 
                href="https://linkedin.com" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
              >
                <LinkedinIcon className="h-5 w-5 mr-2" />
                LinkedIn Profile
              </a> */}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-4">
                <img 
                  src={JMDImg}
                  alt="Priya Thankavel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">T.S. Sundaram</h3>
              <p className="text-secondary-600 mb-3">Joint Managing Director</p>
              <p className="text-neutral-600 mb-4">
                Strategic leader with expertise in operations management and business development.
              </p>
              {/* <a 
                href="https://linkedin.com" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
              >
                <LinkedinIcon className="h-5 w-5 mr-2" />
                LinkedIn Profile
              </a> */}
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* Growth Strategy */}
      <section className="py-20 bg-primary-950 text-white">
        <div className="container">
          <SectionTitle 
            title="Our Growth Vision"
            subtitle="Strategic initiatives that will shape our future and drive sustainable growth."
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <div className="text-secondary-500 mb-4">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Market Expansion</h3>
              <p className="text-neutral-300">
                Strategic entry into new geographic markets and industry segments to diversify our customer base and revenue streams.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <div className="text-secondary-500 mb-4">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Technological Innovation</h3>
              <p className="text-neutral-300">
                Continuous investment in advanced manufacturing technologies, automation, and digital solutions to enhance our capabilities.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
            >
              <div className="text-secondary-500 mb-4">
                <BarChart4 size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Manufacturing</h3>
              <p className="text-neutral-300">
                Implementing eco-friendly manufacturing processes and resource efficiency measures to reduce environmental impact.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Partner with the SUPER Group"
        description="Leverage our diverse capabilities and integrated solutions for your manufacturing needs."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Products"
        secondaryButtonLink="/products"
      />
    </>
  );
};

export default GroupPage;