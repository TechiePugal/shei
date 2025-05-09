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
    <section className="relative min-h-screen flex items-center pt-20 bg-slate-900 text-white overflow-hidden">
      {/* Background image as <img> for priority load */}
      <img
        src={backgroundImage}
        alt="Background"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-40 -z-10"
      />

      <div className="container z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              India’s Leading High-Precision<br />
              Die Casting & Engineering<br />
              Solutions Provider
            </h1>

            {subtitle && (
              <p className="text-xl text-neutral-200 mb-8">
                {subtitle}
              </p>
            )}

            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn btn-primary">
                Explore Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-950">
                Contact Us
              </Link>
            </div>
          </div>

          {showFeatures && (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-6 border-b border-white/20 pb-3">
                Why Choose SHEI?
              </h3>
              <ul className="space-y-4">
                {[
                  '20+ Years of Industrial Expertise in HPDC, LPDC, GDC, SDC',
                  'Full-Service Machining (CNC, VMC, HMC) & Sheet Metal Fabrication',
                  'Rapid Prototyping to Bulk Production',
                  'Trusted by OEMs Across Textile, Automotive & Petroleum Sectors',
                ].map((feature, i) => (
                  <li key={i} className="flex">
                    <CheckCircle2 className="h-6 w-6 text-secondary-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
