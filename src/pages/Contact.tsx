import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setShowNotification(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="bg-background min-h-screen py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Get in Touch</h1>
          <p className="text-lg text-secondary font-medium">We'd love to hear from you. Please fill out the form below or reach out directly.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-6 text-primary">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="text-secondary" />
                <div>
                  <h3 className="font-bold text-primary">Phone</h3>
                  <p className="text-secondary font-medium">+234 123 456 7890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-secondary" />
                <div>
                  <h3 className="font-bold text-primary">Email</h3>
                  <p className="text-secondary font-medium">info@africanelegance.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-secondary" />
                <div>
                  <h3 className="font-bold text-primary">Location</h3>
                  <p className="text-secondary font-medium">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.4593253775!2d3.2467455414477377!3d6.548056000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1710337897387!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-bold text-primary mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring-secondary focus:border-secondary"
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:ring-secondary focus:border-secondary"
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold text-primary mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:ring-secondary focus:border-secondary"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-bold text-primary mb-1">Phone (optional)</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-md focus:ring-secondary focus:border-secondary"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-bold text-primary mb-1">Message</label>
              <textarea
                className="w-full px-4 py-2 border rounded-md focus:ring-secondary focus:border-secondary h-32"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-white py-3 px-6 rounded-md hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <Send size={20} />
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>

      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-accent text-white px-6 py-4 rounded-lg shadow-lg font-medium"
          >
            Message sent successfully! We'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}