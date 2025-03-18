import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../index.css'; // Assure-toi que ce fichier est correct et accessible
import Navbar from '../components/Navbar';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire ici
    console.log(formData);
  };

  return (
    <div className="contact-container min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-8 pt-16">
        <motion.h1
          className="text-3xl font-semibold text-center mb-6 uppercase tracking-wide pt-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Contactez-moi
        </motion.h1>

        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-gray-700 dark:bg-gray-800 p-6 rounded-md shadow-sm"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nom"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Écrivez-moi un message ..."
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500"
              rows="5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <div className="flex justify-center">
              <motion.button
                type="submit"
                className="text-white p-3 px-6 rounded-md bg-blue-700 hover:bg-blue-500 transition-all"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Envoyer
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
