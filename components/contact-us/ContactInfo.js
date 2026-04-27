'use client';
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import SocialMediaIcons from './SocialMediaIcons';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ContactInfo = ({ 
  title = "Contact Information",
  description = "Whether you're ready to launch a product, redesign your platform, or scale your idea our team is here to make it happen.",
  phone = "4578886534678",
  email = "info@pixoryflow.agency",
  location = "Online service",
  backgroundImage = "/contact-us.png"
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="flex-1 rounded-3xl p-4 lg:p-6 flex flex-col gap-8 relative overflow-hidden"
    >
      <Image
        src={backgroundImage}
        alt="Contact Background"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="relative z-10">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h3 className="text-white font-semibold text-[36px] md:text-[40px] leading-[1.3] md:leading-15">
          {title}
        </h3>
        <p className="text-white text-base leading-6">
          {description}
        </p>
      </div>

      {/* Contact Details */}
      <div className="flex flex-col gap-4 mt-6">
        {/* Phone - USA */}
        <div className="flex items-center gap-2">
          <Phone className="w-6 h-6 text-white" />
          <div className="flex flex-col">
            <span className="text-white text-sm opacity-80" style={{ fontFamily: 'Poppins, sans-serif' }}>
              USA Office
            </span>
            <span className="text-white text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
              +1 302 316 6755
            </span>
          </div>
        </div>

        {/* Phone - Cameroon */}
        <div className="flex items-center gap-2">
          <Phone className="w-6 h-6 text-white" />
          <div className="flex flex-col">
            <span className="text-white text-sm opacity-80" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Cameroon Office
            </span>
            <span className="text-white text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
              +237 652 370 789
            </span>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-2">
          <Mail className="w-6 h-6 text-white" />
          <span className="text-white text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {email}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2">
          <MapPin className="w-6 h-6 text-white" />
          <span className="text-white text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {location}
          </span>
        </div>

        {/* Social Media Icons */}
        <SocialMediaIcons className="mt-2" />
      </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;