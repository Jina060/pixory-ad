'use client';

import React from 'react';
import Image from 'next/image';

interface Company {
  name: string;
  logo: string;
}

interface InfiniteScrollRibbonProps {
  companies: Company[];
  fontSize: number;
  gap: number;
  animationClass: string;
}

const InfiniteScrollRibbon = ({ companies, fontSize, gap, animationClass }: InfiniteScrollRibbonProps) => {
  return (
    <div
      className={`${animationClass} flex items-center whitespace-nowrap`}
      style={{ gap: `${gap}px` }}
    >
      {[...Array(4)].map((_, setIndex) => (
        <React.Fragment key={`set-${setIndex}`}>
          {companies.map((company, index) => (
            <div
              key={`${setIndex}-${index}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 32px',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.10)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 1px 4px rgba(0,0,0,0.25)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                flexShrink: 0,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '24px', height: '24px', flexShrink: 0, background: 'rgba(255, 255, 255, 0.87)', borderRadius: '4px' }}>
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={24}
                  height={24}
                  unoptimized
                  style={{ objectFit: 'scale-down' }}
                />
              </div>
              <span
                style={{
                  fontSize: `${fontSize}px`,
                  fontWeight: 500,
                  letterSpacing: '-0.03em',
                  color: 'rgba(255, 255, 255, 0.92)',
                  lineHeight: '1',
                }}
              >
                {company.name}
              </span>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default function CompanyRibbons() {
  const firstRibbonCompanies: Company[] = [
    { name: 'Taxcodes LLC', logo: 'Logos/Taxcodes-logo.png' },
    { name: 'Kapporeth Charity', logo: 'Logos/Kc.webp' },
    { name: 'TAANMU', logo: 'Logos/tamnu.png' },
    { name: 'Veroem Solution', logo: 'Logos/veroem.png' },
    { name: 'Emmanuel Works', logo: 'Logos/em.png' },
  ];

  const secondRibbonCompanies: Company[] = [
    { name: 'TAANMU', logo: 'Logos/tamnu.png' },
    { name: 'JKP', logo: 'Logos/logo.webp' },
    { name: 'Emmanuel Works', logo: 'Logos/logo.webp' },
    { name: 'DHF', logo: 'Logos/logo.webp' },
    { name: 'RapidLogix', logo: 'Logos/logo.webp' },
    { name: 'Paylinx', logo: 'Logos/logo.webp' },
    { name: 'TAANMU', logo: 'Logos/logo.webp' },
    { name: 'JKP', logo: '/images/Logos/logo.webp' },
  ];

  return (
    <>
      <style>{`
        @keyframes slideLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .slide-animation         { animation: slideLeft 30s linear infinite; }
        .slide-animation-reverse { animation: slideLeft 25s linear infinite reverse; }
      `}</style>

      <div className="relative w-full overflow-hidden mt-20 md:mt-32" style={{ fontFamily: 'Inter, sans-serif' }}>

        {/* First Ribbon — solid blue, scrolls forward */}
        <div
          className="w-full overflow-hidden flex items-center"
          style={{ height: '100px', background: '#2201DC' }}
        >
          <InfiniteScrollRibbon
            companies={firstRibbonCompanies}
            fontSize={20}
            gap={20}
            animationClass="slide-animation"
          />
        </div>

        {/* Second Ribbon — dark, scrolls reverse */}
        {/* <div
          className="w-full overflow-hidden flex items-center"
          style={{ height: '100px' }}
        >
          <InfiniteScrollRibbon
            companies={secondRibbonCompanies}
            fontSize={19}
            gap={20}
            animationClass="slide-animation-reverse"
          />
        </div> */}

      </div>
    </>
  );
}