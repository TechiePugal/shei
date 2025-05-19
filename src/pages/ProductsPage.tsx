import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from '../firebase';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

interface Product {
  id: string;
  image: string;
  category: string;
  title: string;
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

  // Group products by category
  const groupedProducts: { [category: string]: Product[] } = {};
  products.forEach(product => {
    if (!groupedProducts[product.category]) {
      groupedProducts[product.category] = [];
    }
    groupedProducts[product.category].push(product);
  });

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
          "https://www.sunrise-metal.com/wp-content/uploads/2020/07/1.-Different-type-of-Die-casting-products.jpg",
          "https://came-italy.com/wp-content/uploads/2018/11/Came-still-life.jpg",
          "https://t4.ftcdn.net/jpg/09/65/28/01/360_F_965280117_GotZl16ZRzuLxLYz1da4NgtjavTVeUnb.jpg",
          
        ]}
      />

      <section className="py-20 bg-gray-150">
        <div className="container mx-auto  px-4">
          <SectionTitle 
            title="Our Product Range"
            subtitle="Browse our comprehensive portfolio of precision-engineered components for various industries."
          />

          <div className="space-y-16 mt-12">
            {Object.entries(groupedProducts).map(([category, items]) => (
              <div key={category}>
                <h2 className="text-2xl font-semibold mb-6 border-b-2 pb-2 border-blue-600">{category}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {items.map((product) => (
<div
  key={product.id}
  className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
  style={{ backgroundColor: '#009fd1' }}
>
  <div className="overflow-hidden bg-white">
    <img
      src={product.image}
      alt={product.title}
      className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-300"
    />
  </div>
  <div className="p-4 flex items-center justify-center h-20">
    <h3 className="font-semibold text-base text-white text-center">{product.title}</h3>


  </div>
</div>


                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
