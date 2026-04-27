'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';

interface FormData {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

interface SubmitStatus {
  type: 'success' | 'error' | null;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    projectType: 'Brand Guideline services',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: null, message: '' });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if reCAPTCHA is completed
    if (!recaptchaToken) {
      setSubmitStatus({
        type: 'error',
        message: 'Please complete the reCAPTCHA verification.'
      });
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
        });
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          company: '',
          projectType: 'Brand Guideline services',
          message: ''
        });
        setRecaptchaToken(null);
        // Call original onSubmit if provided
        if (onSubmit) {
          onSubmit(formData);
        }
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="flex-1 bg-white rounded-3xl p-4 lg:p-6 shadow-sm border border-gray-200 flex flex-col justify-center gap-10 overflow-visible"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Row 1: Full Name & Email */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-[#1E293B] font-medium text-sm leading-5.5">
              Full name:
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="bg-[#F7F7F7] rounded-[10px] px-4 py-3 text-sm leading-5.5 text-[#1E293B] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2201DC]"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-[#1E293B] font-medium text-sm leading-5.5">
              E-mail:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-[#F7F7F7] rounded-[10px] px-4 py-3 text-sm leading-5.5 text-[#1E293B] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2201DC]"
            />
          </div>
        </div>

        {/* Row 2: Company & Project Type */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Company */}
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-[#1E293B] font-medium text-sm leading-5.5">
              Company/Brand name:
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Enter your company/brand name"
              className="bg-[#F7F7F7] rounded-[10px] px-4 py-3 text-sm leading-5.5 text-[#1E293B] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2201DC]"
            />
          </div>

          {/* Project Type */}
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="text-[#1E293B] font-medium text-sm leading-5.5">
              Project Type:
            </label>
            <div className="relative">
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full bg-[#F7F7F7] rounded-[10px] px-4 py-3 text-sm leading-5.5 text-[#1E293B] appearance-none focus:outline-none focus:ring-2 focus:ring-[#2201DC]"
              >
                <option>Brand Guideline services</option>
                <option>Web Development</option>
                <option>Mobile App Development</option>
                <option>UI/UX Design</option>
                <option>Digital Marketing</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[#1E293B] font-medium text-sm leading-5.5">
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your Message"
            rows={6}
            className="bg-[#F7F7F7] rounded-[10px] px-4 py-3 text-sm leading-5.5 text-[#1E293B] placeholder:text-[#94A3B8] resize-none focus:outline-none focus:ring-2 focus:ring-[#2201DC]"
          />
        </div>

        {/* Status Message */}
        {submitStatus.message && (
          <div
            className={`p-4 rounded-[10px] text-sm ${
              submitStatus.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        {/* reCAPTCHA */}
        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey="6LfDTcwsAAAAAFYe5Bdm5Gy2oaGAj1lnI1BW6tch"
            onChange={(token: string | null) => setRecaptchaToken(token)}
            onExpired={() => setRecaptchaToken(null)}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#2201DC] text-white font-semibold text-base leading-6 uppercase py-4 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Request'}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;