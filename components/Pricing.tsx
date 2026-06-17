"use client";

import { useState } from "react";
import Link from "next/link";

interface Plan {
  title: string;
  subtitle: string;
  badge: string;
  badgeHot?: boolean;
  desc: string;
  features: string[];
  featured?: boolean;
  tagline: string;
}

const PLANS: Plan[] = [
  {
    title: "Starter",
    subtitle: "For Early-Stage Brands",
    badge: "Best Value",
    desc: "Perfect for startups validating ideas and getting foundational design and development support",
    features: [
      "Free Website Audit",
      "UX/UI Quick Review", 
      "SEO Snapshot Report",
      "15-min Strategy Call",
      "Basic design & development consultation",
    ],
    tagline: "Best for startups validating ideas",
  },
  {
    title: "Growth",
    subtitle: "For Scaling Brands",
    badge: "Most Popular",
    badgeHot: true,
    featured: true,
    desc: "For brands ready to grow fast with comprehensive design and development solutions",
    features: [
      "Full Website/App Design",
      "Conversion-Focused UI/UX",
      "SEO Optimization Setup",
      "Performance Optimization",
      "Dedicated Project Manager",
      "Full development implementation",
    ],
    tagline: "For brands ready to grow fast",
  },
  {
    title: "Premium",
    subtitle: "For Industry Leaders",
    badge: "Enterprise",
    desc: "Complete product design, development, and ongoing optimization for category leaders",
    features: [
      "Full Product Design + Development",
      "Branding + Identity System",
      "Advanced SEO + Content Strategy",
      "Automation & Integrations",
      "Ongoing Support & Optimization",
      "Priority development team access",
    ],
    tagline: "For companies building category leaders",
  },
];

function CheckIcon({ featured }: { featured?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
      <circle
        cx="10"
        cy="10"
        r="9"
        stroke="#ffffff"
        strokeWidth="2"
        fill="rgba(255,255,255,0.1)"
      />
      <path
        d="M6 10l3 3 5-5"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlanCard({ plan, showBadge }: { plan: Plan; showBadge: boolean }) {
  return (
    <div
      className="relative flex flex-col p-8 transition-all duration-300 rounded-2xl border bg-zinc-900/50 border-zinc-800 hover:bg-linear-to-b hover:from-[#2201DC] hover:to-[#1a0bb8] hover:border-[#2201DC] hover:shadow-2xl hover:transform hover:scale-105"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-white leading-tight mb-2">
            {plan.title}
          </h3>
          <p className="text-sm text-gray-400 font-medium">
            {plan.subtitle}
          </p>
        </div>
        {showBadge && (
          <span
            className={`ml-3 shrink-0 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
              plan.badgeHot
                ? "bg-[#FE5A7A] text-white"
                : "bg-zinc-800 text-gray-400"
            }`}
          >
            {plan.badge}
          </span>
        )}
      </div>

      <p className="text-base text-gray-300 leading-relaxed mb-8 pb-6 border-b border-zinc-700">
        {plan.desc}
      </p>

      <ul className="flex flex-col gap-4 flex-1 mb-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-3 text-gray-300">
            <CheckIcon featured={plan.featured} />
            <span className="text-sm leading-relaxed">{f}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-zinc-700 pt-6 mb-6">
        <p className="text-xs text-gray-500 italic text-center">
          {plan.tagline}
        </p>
      </div>

      <Link
        href="/contact-us"
        className="w-full py-4 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer uppercase tracking-wide bg-white text-[#2201DC] hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 text-center block"
      >
        Get Started
      </Link>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section className="relative pt-10 pb-10 md:py-20 px-6 bg-[#000000]">
      <div className="relative max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-white font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight md:leading-[48px] uppercase tracking-tight text-center mb-6">
          Choose Your Growth Path
        </h2>
        <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
          From startups to enterprises, we have the perfect solution for you.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PLANS.map((plan: Plan, index: number) => (
          <PlanCard 
            key={plan.title} 
            plan={plan} 
            showBadge={index === 1} 
          />
        ))}
      </div>
      </div>
    </section>
  );
}