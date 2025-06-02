import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Brand from '../Assest/Brand.jpg'

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10"></div>
        <div 
          className="h-[80vh] bg-cover bg-center bg-fixed relative overflow-hidden"
          style={{
            backgroundImage: `url(${Brand})`
          }}
        >
          <motion.div 
            className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 z-20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <Crown size={48} className="mb-4 text-accent" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Crowning Culture in Style:
              <br />
              Premium Nigerian Traditional Caps
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Discover our exquisite collection of handcrafted traditional caps and Aso Oke, 
              where heritage meets contemporary elegance.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/shop"
                className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center gap-2 group"
              >
                Shop Now
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">Native Caps</h2>
            <p className="mb-4 text-secondary">Handcrafted caps that make a statement</p>
            <Link to="/shop?category=caps" className="text-accent hover:text-secondary inline-flex items-center gap-2">
              Explore Caps
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </Link>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">Aso Oke</h2>
            <p className="mb-4 text-secondary">Premium traditional fabrics</p>
            <Link to="/shop?category=asooke" className="text-accent hover:text-secondary inline-flex items-center gap-2">
              View Collection
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}