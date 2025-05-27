import React, { useEffect, useState, Suspense } from 'react';
import {
  Wrench,
  FactoryIcon,
  Settings,
  Layers,
  Users,
  GlobeIcon,
  BarChart3,
  Award,
} from 'lucide-react';
import Slider from 'react-slick';

import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import CallToAction from '../components/CallToAction';
import StatCard from '../components/StatCard';
import TestimonialCard from '../components/TestimonialCard';

import { database, ref, onValue } from '../firebase';

import HomeImg from './home.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type Feedback = {
  id: string;
  status: string;
  quote: string;
  name: string;
  company: string;
  position?: string;
};

const testimonialSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const HomePage: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const feedbackRef = ref(database, 'feedbacks');

    const unsubscribe = onValue(feedbackRef, (snapshot) => {
      const data = snapshot.val();
      const feedbackArray: Feedback[] = data
        ? Object.entries(data)
            .map(([id, val]) => (val && typeof val === 'object' ? { id, ...val } as Feedback : null))
            .filter((item): item is Feedback => item !== null)
        : [];

      const publishedFeedbacks = feedbackArray.filter((f) => f.status === 'Publish');
      setFeedbacks(publishedFeedbacks.reverse());
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  return (
    <>
      <SEO
        title="Top Die Casting & CNC Machining Company in India | Sudharsan HEI"
        description="Sudharsan Heavy Engineering Industry is a leading die casting and CNC machining company in Coimbatore, India."
        keywords="die casting India, CNC machining Coimbatore, aluminum casting company, magnesium casting, industrial fabrication India"
      />

      <Hero
        title="High-Precision Die Casting & Engineering Solutions Provider"
        subtitle="Delivering excellence in aluminum and magnesium castings, CNC machined components, and custom engineering solutions in Coimbatore, Tamil Nadu."
        backgroundImages={[HomeImg]}
        learnMoreTargetId="about-details"
        showFeatures={true}
      />

      {/* Services */}
      <section id="about-details" className="py-20 bg-neutral-50">
        <div className="container">
          <SectionTitle
            title="Our Core Services"
            subtitle="We provide comprehensive engineering solutions from design to delivery, all under one roof."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Suspense fallback={<div>Loading Services...</div>}>
              <ServiceCard
                icon={<FactoryIcon size={32} />}
                title="High Pressure Die Casting"
                description="Precision HPDC components with tight tolerances and excellent surface finish."
                link="/FactoryTour"
                delay={0.1}
              />
              <ServiceCard
                icon={<Wrench size={32} />}
                title="CNC / VMC / HMC Machining"
                description="Multi-axis machining for complex components with precision and repeatability."
                link="/FactoryTour"
                delay={0.2}
              />
              <ServiceCard
                icon={<Layers size={32} />}
                title="Sheet Metal Fabrication"
                description="Custom sheet metal components with cutting, bending, welding, and assembly services."
                link="/FactoryTour"
                delay={0.3}
              />
              <ServiceCard
                icon={<Settings size={32} />}
                title="Tooling & Surface Finishing"
                description="In-house tool design with comprehensive surface treatment solutions."
                link="/FactoryTour"
                delay={0.4}
              />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-primary-950 text-white">
        <div className="container">
          <SectionTitle
            title="Industries We Serve"
            subtitle="Our engineering solutions power critical components across diverse industry sectors."
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { name: 'Textile Machinery', icon: <FactoryIcon className="h-8 w-8 text-secondary-500" /> },
              { name: 'Automotive', icon: <Settings className="h-8 w-8 text-secondary-500" /> },
              { name: 'Petrochemical', icon: <GlobeIcon className="h-8 w-8 text-secondary-500" /> },
              { name: 'Architecture', icon: <Layers className="h-8 w-8 text-secondary-500" /> },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="w-16 h-16 mx-auto bg-secondary-500/20 rounded-full flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-neutral-300">
                  Custom components and solutions for the {item.name.toLowerCase()} industry.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-200">
        <div className="container">
          <SectionTitle
            title="What Our Clients Say"
            subtitle="We take pride in delivering quality products and exceptional service to our clients."
          />
          <Suspense fallback={<div>Loading Testimonials...</div>}>
            {feedbacks.length > 0 ? (
              <Slider {...testimonialSettings}>
                {feedbacks.map((feedback, index) => (
                  <div key={feedback.id} className="px-2">
                    <TestimonialCard
                      quote={feedback.quote}
                      name={feedback.name}
                      company={feedback.company}
                      position={feedback.position || ''}
                      delay={0.1 + index * 0.1}
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <p className="text-lg text-neutral-500">No testimonials available at the moment.</p>
            )}
          </Suspense>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <Suspense fallback={<div>Loading Stats...</div>}>
              <StatCard icon={<Award size={32} />} value={20} label="Years of Experience" suffix="+" delay={0.1} />
              <StatCard icon={<Users size={32} />} value={100} label="Team Members" suffix="+" delay={0.2} />
              <StatCard icon={<BarChart3 size={32} />} value={500} label="Projects Completed" suffix="+" delay={0.3} />
              <StatCard icon={<GlobeIcon size={32} />} value={15} label="Countries Served" suffix="+" delay={0.4} />
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
        secondaryButtonLink="https://drive.google.com/file/d/1zCY3s4YnABDA9aEBU6pBzf7JWXYV6Wlj/view?usp=sharing"
        backgroundImage="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
      />
    </>
  );
};

export default HomePage;
