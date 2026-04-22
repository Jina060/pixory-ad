'use client';

import React from 'react';

interface InfiniteScrollRibbonProps {
  companies: string[];
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
              <span
                style={{
                  fontSize: `${fontSize}px`,
                  fontWeight: 500,
                  letterSpacing: '-0.03em',
                  color: 'rgba(255, 255, 255, 0.92)',
                  lineHeight: '1',
                }}
              >
                {company}
              </span>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default function CompanyRibbons() {
  const firstRibbonCompanies = [
    'Digital Studio', 'Emmanuel Works', 'Paylinx',
    'RapidLogix', 'Digital Studio', 'Emmanuel Works',
  ];

  const secondRibbonCompanies = [
    'TAANMU', 'JKP', 'Veroem Solution', 'Emmanuel Works',
    'DHF', 'RapidLogix', 'Paylinx', 'TAANMU', 'JKP',
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
        <div
          className="w-full overflow-hidden flex items-center"
          style={{ height: '100px' }}
        >
          <InfiniteScrollRibbon
            companies={secondRibbonCompanies}
            fontSize={19}
            gap={20}
            animationClass="slide-animation-reverse"
          />
        </div>

      </div>
    </>
  );
}