import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Star, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import Brand from '../Assest/Brand.jpg'

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showNotification, setShowNotification] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'caps', name: 'Native Caps' },
    { id: 'asooke', name: 'Aso Oke' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: Product, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    addToCart(product);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
      navigate('/cart');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background py-12">
      {/* Hero Section */}
      <div className="relative h-[40vh] mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${Brand})`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-secondary/70" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="text-white px-4">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Elegance in Every Thread
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl max-w-2xl mx-auto font-medium"
            >
              Discover our collection of premium traditional wear
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Filter className="text-accent" />
            <h2 className="text-xl font-bold text-primary">Categories</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap font-medium ${
                  selectedCategory === category.id
                    ? 'bg-accent text-white'
                    : 'bg-white text-primary hover:bg-neutral/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-[300px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.category === 'caps' && (
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                    Bestseller
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{product.name}</h3>
                {/* <p className="text-sm text-neutral">Size: {product.size}</p> */}
                <p className="text-base text-gray-900 font-semibold">Size: {product.size}</p>

                <div className="flex items-center justify-between mb-4">
                  <p className="text-2xl font-bold text-accent">
                    ₦{product.price.toLocaleString()}
                  </p>
                  <div className="flex items-center text-neutral">
                    <Star className="fill-current" size={20} />
                    <Star className="fill-current" size={20} />
                    <Star className="fill-current" size={20} />
                    <Star className="fill-current" size={20} />
                    <Star className="fill-current" size={20} />
                  </div>
                </div>
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  className="w-full bg-accent text-white py-2 px-4 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedProduct(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-xl shadow-2xl max-w-4xl w-full overflow-hidden max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="sticky top-0 right-0 z-10 bg-white p-4 flex justify-end border-b">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="bg-background rounded-full p-2 hover:bg-neutral/10"
                  >
                    <X className="text-primary" />
                  </button>
                </div>
                <div className="grid md:grid-cols-2">
                  <div className="relative h-[400px]">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h2 className="text-3xl font-bold mb-4 text-primary">{selectedProduct.name}</h2>
                    <p className="text-neutral mb-6 font-medium">{selectedProduct.description}</p>
                    {/* <p className="text-sm text-neutral mb-6">Size: {selectedProduct.size}</p> */}
                    <p className="text-sm text-neutral mb-6 font-bold">Size: {selectedProduct.size}</p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-3xl font-bold text-accent">
                        ₦{selectedProduct.price.toLocaleString()}
                      </div>
                      <div className="flex items-center text-neutral">
                        <Star className="fill-current" size={20} />
                        <Star className="fill-current" size={20} />
                        <Star className="fill-current" size={20} />
                        <Star className="fill-current" size={20} />
                        <Star className="fill-current" size={20} />
                      </div>
                    </div>
                    <button
                      className="w-full bg-accent text-white py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 font-medium"
                      onClick={() => handleAddToCart(selectedProduct)}
                    >
                      <ShoppingCart />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Add to Cart Notification */}
        <AnimatePresence>
          {showNotification && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-8 right-8 bg-accent text-white px-6 py-4 rounded-lg shadow-lg font-medium"
            >
              Item added to cart! Redirecting to cart...
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}