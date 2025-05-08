import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  category,
  title,
  description,
  link,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg bg-neutral-100">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
          <Link 
            to={link}
            className="btn btn-primary m-4"
          >
            View Details
          </Link>
        </div>
      </div>
      <div className="mt-4">
        <div className="text-sm font-medium text-secondary-600 mb-1">{category}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-neutral-600 line-clamp-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;