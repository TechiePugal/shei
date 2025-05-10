import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';

interface Product {
  id: string;
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const productsRef = ref(database, 'products');
    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productArray: Product[] = Object.entries(data).map(([id, item]) => ({
          id,
          ...(item as Omit<Product, 'id'>),
        }));
        setProducts(productArray);
      } else {
        setProducts([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <SEO 
        title="HPDC, CNC & Alloy Cast Components | SHEI Product Catalog"
        description="View SHEI's product range – precision-engineered HPDC and CNC machined parts for the automotive, textile, petroleum, and construction industries."
        keywords="HPDC components, automotive die-cast parts India, textile machine parts manufacturer"
      />

      <Hero 
        title="Engineered Components Built for Performance & Reliability"
        subtitle="Discover our diverse range of precision-engineered products manufactured using advanced die casting and CNC technologies."
        backgroundImage="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg"
      />

      <section className="py-20">
        <div className="container">
          <SectionTitle 
            title="Our Product Range"
            subtitle="Browse our comprehensive portfolio of precision-engineered components for various industries."
          />

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.length > 0 ? (
                products.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    category={product.category}
                    title={product.title}
                    description={product.description}
                    link={product.link}
                    delay={index * 0.1}
                  />
                ))
              ) : (
                <p>No products available.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
