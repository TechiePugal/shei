import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  showFeatures?: boolean;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage,
  showFeatures = false 
}) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Preload background image to improve LCP */}
      <link rel="preload" as="image" href={backgroundImage} />

      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="container relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Hero Content */}
          <div className="text-white">
            {/* Remove animation on H1 to speed up LCP */}
            <h1
              className="text-2xl md:text-33xl lg:text-4xl font-bold mb-6"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            {/* Subtitle animation retained as it's not part of LCP */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-neutral-200 mb-8"
              >
                {subtitle}
              </motion.p>
            )}

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/products" className="btn btn-primary">
                Explore Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-950"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Optional Feature Card */}
          {showFeatures && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-white"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-6 border-b border-white/20 pb-3">
                Why Choose SHEI?
              </h3>
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span>20+ Years of Industrial Expertise in HPDC, LPDC, GDC, SDC</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span>Full-Service Machining (CNC, VMC, HMC) & Sheet Metal Fabrication</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span>Rapid Prototyping to Bulk Production</span>
                </li>
                <li className="flex">
                  <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                  <span>Trusted by OEMs Across Textile, Automotive & Petroleum Sectors</span>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
