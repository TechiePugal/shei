import React, { useState } from 'react';
import { database, ref, push } from '../firebase';
import { motion } from 'framer-motion';

const FeedbackForm: React.FC = () => {
  const [quote, setQuote] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!quote || !name || !company) return;

    const feedbackData = {
      quote,
      name,
      company,
      status: 'Not Publish', // Default status is 'Not Publish'
    };

    try {
      await push(ref(database, 'feedbacks'), feedbackData);
      setSuccess(true);
      setQuote('');
      setName('');
      setCompany('');
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full px-4 py-10 sm:px-6 lg:px-8 xl:px-0 max-w-2xl mx-auto"
    >
      <div className="bg-white dark:bg-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">Leave Your Feedback</h3>

        {success && (
          <div className="bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded mb-4 text-center">
            ✅ Thank you for your feedback!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="quote" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Feedback
            </label>
            <textarea
              id="quote"
              rows={4}
              placeholder="Share your thoughts..."
              className="mt-1 w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg p-3 focus:ring-primary-500 focus:border-primary-500 transition-all"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="mt-1 w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg p-3 focus:ring-primary-500 focus:border-primary-500 transition-all"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Company
            </label>
            <input
              type="text"
              id="company"
              placeholder="Acme Corp"
              className="mt-1 w-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg p-3 focus:ring-primary-500 focus:border-primary-500 transition-all"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default FeedbackForm;
