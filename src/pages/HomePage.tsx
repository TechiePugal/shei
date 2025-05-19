import React, { useEffect, useState, Suspense } from 'react';
import { Wrench, FactoryIcon, Settings, Layers, Users, GlobeIcon, BarChart3, Award } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import CallToAction from '../components/CallToAction';
import StatCard from '../components/StatCard';
import { database, ref, onValue } from '../firebase'; // Import Firebase functions
import TestimonialCard from '../components/TestimonialCard';

// Define the feedback type with 'id' and 'status' (and any other necessary fields)
type Feedback = {
  id: string;
  status: string;
  quote: string;
  name: string;
  company: string;
  position?: string;
};

const HomePage: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]); // Use the Feedback type here

useEffect(() => {
  const feedbackRef = ref(database, 'feedbacks'); // Firebase path for feedbacks

  // Fetch feedback data from Firebase
  onValue(feedbackRef, (snapshot) => {
    const data = snapshot.val();
    
    // Map the data and filter out null values
    const feedbackArray: Feedback[] = data
      ? Object.entries(data).map(([id, val]) => {
          if (val && typeof val === 'object') {
            return { id, ...val } as Feedback; // Cast to Feedback type
          }
          return null; // Return null for invalid feedback
        }).filter((feedback): feedback is Feedback => feedback !== null) // Type guard to filter null values
      : [];

    const publishedFeedbacks = feedbackArray.filter(
      (feedback) => feedback.status === 'Publish'
    );

    setFeedbacks(publishedFeedbacks.reverse()); // latest first
  });
}, []);


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
  backgroundImages={[
    
    "https://www.mechdaily.com/wp-content/uploads/2025/04/what-is-Aluminum-Casting.webp",
  ]}
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
              <ServiceCard 
                icon={<FactoryIcon size={32} />}
                title="High Pressure Die Casting"
                description="Precision HPDC components with tight tolerances and excellent surface finish for automotive and industrial applications."
                link="/FactoryTour"
                delay={0.1}
              />
              <ServiceCard 
                icon={<Wrench size={32} />}
                title="CNC / VMC / HMC Machining"
                description="Advanced multi-axis machining capabilities for complex components with precision and repeatability."
                link="/FactoryTour"
                delay={0.2}
              />
              <ServiceCard 
                icon={<Layers size={32} />}
                title="Sheet Metal Fabrication"
                description="Custom sheet metal components with cutting, bending, welding, and assembly services for various industries."
                link="/FactoryTour"
                delay={0.3}
              />
              <ServiceCard 
                icon={<Settings size={32} />}
                title="Tooling & Surface Finishing"
                description="In-house tool design and fabrication along with comprehensive surface treatment solutions."
                link="/FactoryTour"
                delay={0.4}
              />
            </Suspense>
          </div>
        </div>
      </section>

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

      {/* Testimonials Section */}
      <section className="py-20 bg-neutral-50 text-justify bg-gray-200 ">
        <div className="container">
          <SectionTitle 
            title="What Our Clients Say"
            subtitle="We take pride in delivering quality products and exceptional service to our clients."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Suspense fallback={<div>Loading Testimonials...</div>}>
              {feedbacks.length > 0 ? (
                feedbacks.map((feedback, index) => (
                  <TestimonialCard 
                    key={feedback.id} 
                    quote={feedback.quote}
                    name={feedback.name}
                    company={feedback.company}
                    delay={0.1 + index * 0.1} 
                    position={feedback.position || ''} 
                  />
                ))
              ) : (
                <p className="text-lg text-neutral-500">No testimonials available at the moment.</p>
              )}
            </Suspense>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white text-justify">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<div>Loading Stats...</div>}>
              <StatCard 
                icon={<Award size={32} />}
                value={20}
                label="Years of Experience"
                suffix="+" 
                delay={0.1}
              />
              <StatCard 
                icon={<Users size={32} />}
                value={100}
                label="Team Members"
                suffix="+" 
                delay={0.2}
              />
              <StatCard 
                icon={<BarChart3 size={32} />}
                value={500}
                label="Projects Completed"
                suffix="+" 
                delay={0.3}
              />
              <StatCard 
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


