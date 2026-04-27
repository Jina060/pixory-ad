'use client';
import React from 'react';
import ContactHeading from '@/components/contact-us/ContactHeading';
import ContactForm from '@/components/contact-us/ContactForm';
import ContactInfo from '@/components/contact-us/ContactInfo';

interface FormData {
  fullName: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}

const ContactFormSection = () => {
  const handleSubmit = (formData: FormData) => {
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full bg-black py-8 md:py-20 pt-32 px-3 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-11">
        {/* Header */}
        <ContactHeading />

        {/* Form Container */}
        <div className="w-full lg:bg-white lg:rounded-3xl p-4 lg:p-6 flex flex-col lg:flex-row gap-4 overflow-visible">
          {/* Left Side - Contact Information */}
          <ContactInfo />

          {/* Right Side - Form */}
          <ContactForm onSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;