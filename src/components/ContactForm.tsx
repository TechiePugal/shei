import React, { useState } from 'react';
import { database, ref, push } from '../firebase';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  status: string; // New field for status
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    status: 'incomplete', // Default status
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const enquiriesRef = ref(database, 'enquiries');
      await push(enquiriesRef, {
        ...formData,
        timestamp: new Date().toISOString()
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        status: 'incomplete', // Reset to 'incomplete' after submission
      });
      setSubmitStatus('success');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="+91 98765 43210"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Your Company Ltd."
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Please describe your requirements..."
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="status" className="block text-sm font-medium text-neutral-700 mb-1">
            Status *
          </label>
          <select
            id="status"
            name="status"
            required
            value={formData.status}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="incomplete">Incomplete</option>
            <option value="complete">Complete</option>
            <option value="not responding">Not Responding</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn btn-primary"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="mr-2"
              >
                <Send className="h-5 w-5" />
              </motion.div>
              Sending...
            </span>
          ) : (
            <span className="flex items-center justify-center">
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </span>
          )}
        </button>
      </div>

      {submitStatus && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-4 rounded-md ${
            submitStatus === 'success' 
              ? 'bg-success-50 text-success-900' 
              : 'bg-error-50 text-error-900'
          }`}
        >
          <div className="flex items-center">
            {submitStatus === 'success' ? (
              <CheckCircle className="h-5 w-5 mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2" />
            )}
            <p>
              {submitStatus === 'success'
                ? 'Thank you for your message. We will get back to you soon!'
                : 'There was an error sending your message. Please try again.'}
            </p>
          </div>
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
