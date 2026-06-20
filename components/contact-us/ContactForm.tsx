'use client';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Paperclip } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormData {
  fullName: string;
  email: string;
  service: string;
  budget: string;
  message: string;
  files: File[];
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
    service: '',
    budget: '',
    message: '',
    files: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>({ type: null, message: '' });
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const serviceDropdownRef = React.useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('budget', formData.budget);
      formDataToSend.append('message', formData.message);
      
      // Append files
      formData.files.forEach((file) => {
        formDataToSend.append('files', file);
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
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
          service: '',
          budget: '',
          message: '',
          files: []
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
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

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFormData({
        ...formData,
        files: Array.from(files)
      });
    }
  };

  const handleBudgetSelect = (budget: string) => {
    setFormData({
      ...formData,
      budget
    });
  };

  const handleServiceSelect = (service: string) => {
    setFormData({
      ...formData,
      service
    });
    setIsServiceDropdownOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(event.target as Node)) {
        setIsServiceDropdownOpen(false);
      }
    };

    if (isServiceDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServiceDropdownOpen]);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="w-full max-w-2xl bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {/* Heading */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] mb-4">
            Tell us about your project
          </h2>
        </div>

        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium text-[#1E293B]">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder=""
            required
            className="bg-transparent border-b-2 border-gray-300 px-0 py-3 text-base text-[#1E293B] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2201DC] transition-colors"
          />
        </div>

        {/* Corporate Email */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium text-[#1E293B]">
            Corporate email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=""
            required
            className="bg-transparent border-b-2 border-gray-300 px-0 py-3 text-base text-[#1E293B] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2201DC] transition-colors"
          />
        </div>

        {/* Service Selection */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium text-[#1E293B]">
            What is your inquiry about? <span className="text-red-500">*</span>
          </label>
          <div ref={serviceDropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
              className="w-full text-left bg-transparent border-b-2 border-gray-300 px-0 py-3 text-base text-[#1E293B] focus:outline-none focus:border-[#2201DC] transition-colors flex justify-between items-center"
            >
              <span className={formData.service ? '' : 'text-gray-400'}>
                {formData.service || 'Select a service'}
              </span>
              <svg className={`w-5 h-5 text-gray-400 transition-transform ${isServiceDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isServiceDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
                {[
                  { label: 'General Inquiry', value: 'General Inquiry' },
                  { label: 'UI/UX & Product Design', value: 'UI/UX & Product Design' },
                  { label: 'Frontend Development', value: 'Frontend Development' },
                  { label: 'Backend Development', value: 'Backend Development' },
                  { label: 'No-Code & Low-Code', value: 'No-Code & Low-Code' },
                  { label: 'Graphics Design & Branding', value: 'Graphics Design & Branding' },
                  { label: 'End-To-End Growth', value: 'End-To-End Growth' },
                  { label: 'Search Engine Optimization (SEO)', value: 'Search Engine Optimization (SEO)' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleServiceSelect(option.value)}
                    className={`w-full text-left px-4 py-3 text-base hover:bg-gray-100 transition-colors ${
                      formData.service === option.value ? 'bg-[#2201DC] text-white' : 'text-[#1E293B]'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Budget Selection */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium text-[#1E293B]">
            What is your budget? <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Up to $500', value: 'up-to-500' },
              { label: '$500-$1K', value: '500-1k' },
              { label: '$1K-$5K', value: '1k-5k' },
              { label: '$5K-$10K', value: '5k-10k' },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleBudgetSelect(option.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  formData.budget === option.value
                    ? 'bg-[#2201DC] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* About Project */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium text-[#1E293B]">
            About project <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder=""
            required
            rows={1}
            className="bg-transparent border-b-2 border-gray-300 px-0 py-3 text-base text-[#1E293B] placeholder:text-[#94A3B8] resize-vertical focus:outline-none focus:border-[#2201DC] transition-colors overflow-hidden"
          />
        </div>

        {/* File Upload */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Attach files"
          >
            <Paperclip className="w-6 h-6 text-gray-600" />
          </button>
          <span className="text-gray-600 font-medium">*.doc *.pdf</span>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".doc,.docx,.pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          {formData.files.length > 0 && (
            <div className="ml-4 flex flex-wrap gap-2">
              {formData.files.map((file, idx) => (
                <span key={idx} className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                  {file.name}
                </span>
              ))}
            </div>
          )}
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

       
        {/* Policy Notice */}
        <div className="text-center text-sm text-gray-600">
          By submitting this form you agree to our{' '}
          <a href="/privacy-policy" className="font-semibold text-[#1E293B] hover:underline">
            Privacy Policy
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#2201DC] text-white font-bold text-lg py-4 rounded-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;

