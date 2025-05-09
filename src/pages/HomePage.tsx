import React, { Suspense } from 'react';
import { Wrench, FactoryIcon, Settings, Layers, Users, GlobeIcon, BarChart3, Award } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import CallToAction from '../components/CallToAction';
import TestimonialCard from '../components/TestimonialCard';
import StatCard from '../components/StatCard';

// Lazy load sections
const LazyServiceCard = React.lazy(() => import('../components/ServiceCard'));
const LazyTestimonialCard = React.lazy(() => import('../components/TestimonialCard'));
const LazyStatCard = React.lazy(() => import('../components/StatCard'));

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Top Die Casting & CNC Machining Company in India | Sudharsan HEI"
        description="Sudharsan Heavy Engineering Industry is a leading die casting and CNC machining company in Coimbatore, India. Experts in aluminum, magnesium, and zinc casting, precision machining, and industrial fabrication."
        keywords="die casting India, CNC machining Coimbatore, aluminum casting company, magnesium casting, industrial fabrication India"
      />

      <Hero 
        title="India's Leading High-Precision Die Casting & Engineering Solutions Provider"
        subtitle="Delivering excellence in aluminum and magnesium castings, CNC machined components, and custom engineering solutions in Coimbatore, Tamil Nadu."
        backgroundImage="https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg"
        showFeatures={true}
      />

      {/* Services Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <SectionTitle 
            title="Our Core Services"
            subtitle="We provide comprehensive engineering solutions from design to delivery, all under one roof."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyServiceCard 
                icon={<FactoryIcon size={32} />}
                title="High Pressure Die Casting"
                description="Precision HPDC components with tight tolerances and excellent surface finish for automotive and industrial applications."
                link="/products"
                delay={0.1}
              />
              <LazyServiceCard 
                icon={<Wrench size={32} />}
                title="CNC / VMC / HMC Machining"
                description="Advanced multi-axis machining capabilities for complex components with precision and repeatability."
                link="/products"
                delay={0.2}
              />
              <LazyServiceCard 
                icon={<Layers size={32} />}
                title="Sheet Metal Fabrication"
                description="Custom sheet metal components with cutting, bending, welding, and assembly services for various industries."
                link="/products"
                delay={0.3}
              />
              <LazyServiceCard 
                icon={<Settings size={32} />}
                title="Tooling & Surface Finishing"
                description="In-house tool design and fabrication along with comprehensive surface treatment solutions."
                link="/products"
                delay={0.4}
              />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-primary-950 text-white text-justify">
        <div className="container">
          <SectionTitle 
            title="Industries We Serve"
            subtitle="Our engineering solutions power critical components across diverse industry sectors."
            light={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {/* Industry Cards */}
            {['Textile Machinery', 'Automotive', 'Petrochemical', 'Architecture'].map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="w-16 h-16 mx-auto bg-secondary-500/20 rounded-full flex items-center justify-center mb-4">
                  {index === 0 ? <FactoryIcon className="h-8 w-8 text-secondary-500" /> : 
                   index === 1 ? <Settings className="h-8 w-8 text-secondary-500" /> : 
                   index === 2 ? <GlobeIcon className="h-8 w-8 text-secondary-500" /> : 
                   <Layers className="h-8 w-8 text-secondary-500" />}
                </div>
                <h3 className="text-xl font-semibold mb-2">{industry}</h3>
                <p className="text-neutral-300">{`Custom components and solutions for the ${industry.toLowerCase()} industry.`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white text-justify">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<div>Loading Stats...</div>}>
              <LazyStatCard 
                icon={<Award size={32} />}
                value={20}
                label="Years of Experience"
                suffix="+"
                delay={0.1}
              />
              <LazyStatCard 
                icon={<Users size={32} />}
                value={100}
                label="Team Members"
                suffix="+"
                delay={0.2}
              />
              <LazyStatCard 
                icon={<BarChart3 size={32} />}
                value={500}
                label="Projects Completed"
                suffix="+"
                delay={0.3}
              />
              <LazyStatCard 
                icon={<GlobeIcon size={32} />}
                value={15}
                label="Countries Served"
                suffix="+"
                delay={0.4}
              />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-neutral-50 text-justify">
        <div className="container">
          <SectionTitle 
            title="What Our Clients Say"
            subtitle="We take pride in delivering quality products and exceptional service to our clients."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Suspense fallback={<div>Loading Testimonials...</div>}>
              {[
                { quote: "SHEI has been our trusted supplier for precision die cast components for over 5 years.", name: "Rajesh Kumar", company: "Textile Machines Ltd." },
                { quote: "The engineering team helped us optimize our component design for better manufacturability.", name: "Vijay Sharma", company: "AutoParts Industries" },
                { quote: "Their commitment to quality and continuous improvement made them our go-to partner.", name: "Arun Patel", company: "Oil Systems International" }
              ].map((testimonial, index) => (
                <LazyTestimonialCard position={''} key={index} {...testimonial} delay={0.1 + index * 0.1} />
              ))}
            </Suspense>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Ready to Discuss Your Project Requirements?"
        description="Our engineering team is ready to help you with custom solutions for your specific needs."
        primaryButtonText="Request a Quote"
        primaryButtonLink="/contact"
        secondaryButtonText="Download Brochure"
        secondaryButtonLink="/brochure"
        backgroundImage="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
      />
    </>
  );
};

export default HomePage;
