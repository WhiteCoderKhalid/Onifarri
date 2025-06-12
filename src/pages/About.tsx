import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Crown, Heart, Star, Users, Award, Gem } from 'lucide-react';
import Brand from '../Assest/Brand.jpg';
import Logo from '../Assest/Logo.jpg';

export default function About() {
  const [currentFeature, setCurrentFeature] = useState(0);
  
  const features = [
    {
      icon: <Crown className="w-16 h-16 text-primary" />,
      title: "Premium Quality",
      description: "Every piece is crafted with the finest materials, ensuring lasting elegance and comfort. Our commitment to quality is unwavering, as we believe in creating pieces that stand the test of time."
    },
    {
      icon: <Heart className="w-16 h-16 text-primary" />,
      title: "Made with Love",
      description: "Each product is handcrafted with passion and dedication by skilled artisans who pour their hearts into every detail, ensuring your piece carries the warmth of traditional craftsmanship."
    },
    {
      icon: <Star className="w-16 h-16 text-primary" />,
      title: "Authentic Design",
      description: "Our designs celebrate the rich heritage of African culture, blending traditional patterns and motifs with contemporary styling for truly unique pieces."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[60vh] bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${Brand})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60"></div>
        <div className="relative h-full flex items-center justify-center text-white text-center px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Where Culture Meets Class
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl max-w-2xl mx-auto"
            >
              We are storytellers of heritage, bringing the beauty and elegance of African culture to life through timeless fashion pieces.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Heritage</h2>
            <p className="text-gray-600 mb-6 text-lg">
              At African Elegance, we are more than just a fashion brand we are storytellers of heritage. Our journey began with a simple love for native caps and has blossomed into a full expression of style and identity.
            </p>
            <p className="text-gray-600 text-lg">
              Every cap, every piece of Aso Oke, every wedding outfit we offer is carefully selected or handcrafted with quality, tradition, and purpose in mind. We bridge the gap between cultural fashion and modern quality, giving you premium, stylish traditional fashion that fits today's world.
            </p>
          </div>
          <div className="relative">
            <img 
               src={Logo} 
              alt="Traditional craftsmanship"
              className="rounded-lg shadow-xl"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600">Crafting excellence in every detail</p>
          </div>
          
          <div className="relative h-[400px] bg-white rounded-xl shadow-xl overflow-hidden">
            <motion.div 
              className="absolute inset-0 flex items-center justify-center p-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={currentFeature}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center max-w-2xl">
                {features[currentFeature].icon}
                <h3 className="text-3xl font-bold mt-6 mb-4">{features[currentFeature].title}</h3>
                <p className="text-xl text-gray-600">{features[currentFeature].description}</p>
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentFeature ? 'bg-primary' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentFeature(index)}
              />
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To preserve and celebrate African cultural heritage through fashion while empowering local artisans and communities. We create a bridge between traditional craftsmanship and contemporary style, making authentic African fashion accessible to the world.
            </p>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary">Our Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To be the global leader in modern African fashion, recognized for our commitment to quality, authenticity, and innovation. We envision a world where traditional African fashion is celebrated and worn with pride across all cultures and continents.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-center bg-primary text-white p-12 rounded-lg shadow-lg"
        >
          <h2 className="text-4xl font-bold mb-6">Proudly African. Proudly You.</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Whether you're preparing for a wedding, naming ceremony, festival, or just want to wear your roots proudly, we've got you covered. Thank you for supporting a business that celebrates tradition, promotes originality, and empowers cultural pride.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 
