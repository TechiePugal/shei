import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImages: string[];
  showFeatures?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  hideExploreButton?: boolean; // Hide Explore Products button when true
  learnMoreTargetId?: string;  // Scroll target for Learn More button
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImages,
  showFeatures = false,
  seoTitle = 'SHEI – Die Casting & CNC Machining Experts in Coimbatore',
  seoDescription = 'Offering high-quality aluminum casting, CNC machining, and sheet metal fabrication services across India.',
  hideExploreButton = false,
  learnMoreTargetId = 'hero-learn-more', // Default scroll target ID
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 transition-all duration-1000 ease-in-out">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        {backgroundImages.map((img, i) => (
          <link key={i} rel="preload" as="image" href={img} />
        ))}
      </Helmet>

      <div
        className="absolute inset-0 z-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.5), rgba(15, 23, 42, 0.6)), url(${backgroundImages[currentIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div id="hero-container" className="container relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">{title}</h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-l text-neutral-200 mb-8"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              {!hideExploreButton && (
                <Link to="/products" className="btn btn-primary">
                  Explore Products
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              )}
              <Link
                to="/contact"
                className="btn btn-outline text-white border-white hover:bg-white hover:text-primary-950"
              >
                Contact Us
              </Link>
              <button
                onClick={() => {
                  const el = document.getElementById(learnMoreTargetId);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-secondary text-white border-white hover:bg-white hover:text-primary-950"
              >
                Learn More
              </button>
            </motion.div>
          </div>

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
