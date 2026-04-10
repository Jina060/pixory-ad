'use client';

import React from 'react';


interface InfiniteScrollRibbonProps {
  companies: string[];
  fontSize: number;
  gap: number;
  animationClass: string;
  letterSpacingExceptions?: string[];
  colorExceptions?: Record<string, string>;
  boldExceptions?: string[];
  logoMap?: Record<string, string>;
}

const InfiniteScrollRibbon = ({ companies, fontSize, gap, animationClass, letterSpacingExceptions = [], colorExceptions = {}, boldExceptions = [] }: InfiniteScrollRibbonProps) => {
  return (
    <div className={`${animationClass} flex items-center whitespace-nowrap`} style={{ gap: `${gap}px` }}>
      {[...Array(4)].map((_, setIndex) => (
        <React.Fragment key={`set-${setIndex}`}>
          {companies.map((company, index) => (
            <div
              key={`${setIndex}-${index}`}
              className={`flex items-center gap-2`}
              style={{ gap: '8px' }}
            >
              {/* {logoMap[company] && (
                <div style={{ position: 'relative', width: '70px', height: '40px', flexShrink: 0 }}>
                  <Image
                    src={logoMap[company]}
                    alt={`${company} logo`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              )} */}
              <div
                className={`text-white`}
                style={{
                  fontSize: `${fontSize}px`,
                  lineHeight: '32px',
                  letterSpacing: letterSpacingExceptions.includes(company) ? '0' : '-0.08em',
                  color: colorExceptions[company] || 'white',
                  fontWeight: boldExceptions.includes(company) ? 'bold' : 'normal',
                }}
              >
                {company}
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default function CompanyRibbons() {
  const firstRibbonCompanies = [
    'Digital Studio',
    'Emmanuel Works',
    'Paylinx',
    'RapidLogix',
    'Digital Studio',
    'Emmanuel Works',
  ];

  const secondRibbonCompanies = [
    'TAANMU',
    'JKP',
    'Veroem Solution',
    'Emmanuel Works',
    'DHF',
    'RapidLogix',
    'Paylinx',
    'TAANMU',
    'JKP',
  ];

  const logoMap: Record<string, string> = {
    'Emmanuel Works': '/images/logos/em.png',
    'Paylinx': '/images/logos/logo.png',
    'TAANMU': '/images/logos/Taxcodes-logo.png',
    'Digital Studio': '/images/logos/digital-studio.png',
    'RapidLogix': '/images/logos/rapidlogix.png',
    'JKP': '/images/logos/jkp.png',
    'Veroem Solution': '/images/logos/veroem-solution.png',
    'DHF': '/images/logos/dhf.png',
  };

  return (
    <>
      <style>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .slide-animation {
          animation: slideLeft 30s linear infinite;
        }
        .slide-animation-reverse {
          animation: slideLeft 25s linear infinite reverse;
        }
        .ribbon-transform {
          transform: matrix(1, -0.04, 0.02, 1, 0, 0);
        }
        @media (min-width: 768px) {
          .ribbon-transform {
            transform: matrix(1, -0.04, 0.02, 1, 0, 0);
          }
        }
        @media (max-width: 767px) {
          .ribbon-transform {
            transform: none;
          }
        }
      `}</style>
      <div className="relative w-full overflow-hidden md:h-55 h-35" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="absolute left-0 right-0 md:top-10 top-5" style={{ bottom: '0' }}>
          <div className="relative w-full" style={{ height: '214.01px', minWidth: '1443.01px' }}>
            
            {/* First Ribbon Group - Solid Blue */}
            <div 
              className="absolute w-full ribbon-transform"
              style={{
                height: '99.92px',
                left: '0',
                top: '0px',
              }}
            >
              <div
                className="absolute w-full ribbon-transform"
                style={{
                  height: '99.92px',
                  left: '0px',
                  top: '0px',
                  background: '#2201DC',
                }}
              />

              <div
                className="absolute overflow-hidden ribbon-transform"
                style={{
                  width: '100%',
                  height: '36.81px',
                  left: '0px',
                  top: '42.03px',
                }}
              >
                <InfiniteScrollRibbon
                  companies={firstRibbonCompanies}
                  fontSize={28}
                  gap={48}
                  animationClass="slide-animation"
                  letterSpacingExceptions={['Paylinx', 'RapidLogix']}
                  colorExceptions={{ 'Paylinx': '#DCDCDC' }}
                  logoMap={logoMap}
                />
              </div>
            </div>

            {/* Second Ribbon Group - Semi-transparent with Blur */}
            <div 
              className="absolute w-full hidden md:block"
              style={{
                height: '99.92px',
                left: '0',
                top: '15px',
                transform: 'matrix(1, 0.04, -0.02, 1, 0, 0)',
              }}
            >
              <div
                className="absolute backdrop-blur-md w-full"
                style={{
                  height: '99.92px',
                  left: '0px',
                  top: '0px',
                  background: 'rgba(21, 21, 21, 0.15)',
                  transform: 'matrix(1, 0.04, -0.02, 1, 0, 0)',
                }}
              />

              <div
                className="absolute overflow-hidden"
                style={{
                  width: '100%',
                  height: '36.87px',
                  left: '0px',
                  top: '37.07px',
                  transform: 'matrix(1, 0.04, -0.02, 1, 0, 0)',
                }}
              >
                <InfiniteScrollRibbon
                  companies={secondRibbonCompanies}
                  fontSize={24}
                  gap={40}
                  animationClass="slide-animation-reverse"
                  letterSpacingExceptions={['RapidLogix']}
                  colorExceptions={{ 'Paylinx': '#DCDCDC' }}
                  boldExceptions={['Paylinx']}
                  logoMap={logoMap}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}