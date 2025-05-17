import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';

interface Product {
  id: string;
  image: string;
  category: string;
  title: string;
  link: string;
}

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    const productsRef = ref(database, 'products');
    const unsubscribe = onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const productArray: Product[] = Object.entries(data).map(([id, item]) => ({
          id,
          image: (item as any).image,
          category: (item as any).category,
          title: (item as any).title,
          link: (item as any).link,
        }));
        setProducts(productArray);
      } else {
        setProducts([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

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
        backgroundImages={[
          "https://t4.ftcdn.net/jpg/09/65/28/01/360_F_965280117_GotZl16ZRzuLxLYz1da4NgtjavTVeUnb.jpg",
          "https://came-italy.com/wp-content/uploads/2018/11/Came-still-life.jpg"
        ]}
        // showFeatures={true}
      />

      <section className="py-20">
        <div className="container">
          <SectionTitle 
            title="Our Product Range"
            subtitle="Browse our comprehensive portfolio of precision-engineered components for various industries."
          />

          {/* Chip-style Category Filter with Mobile Scroll */}
          <div className="mt-8 mb-12 overflow-x-auto">
            <div className="flex gap-3 px-4 sm:justify-center whitespace-nowrap w-max sm:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 shrink-0
                    ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="p-4 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    image={product.image}
                    category={product.category}
                    title={product.title}
                    link={product.link}
                    delay={index * 0.1} description={''}                  />
                ))
              ) : (
                <p className="text-center text-gray-500 col-span-full">No products available in this category.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
