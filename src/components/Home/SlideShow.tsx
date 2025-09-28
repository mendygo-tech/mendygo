import React from 'react';
import Image from 'next/image';
import Hero from '../../assets/company_logo/hmc.svg';
import Dayco from '../../assets/company_logo/dayco.png';
import Tata from '../../assets/company_logo/tata.webp';
import Smh from '../../assets/company_logo/smh.webp';
import Maruti from '../../assets/company_logo/maruti.webp';
import Marelli from '../../assets/company_logo/marelli.png';
import jsw from '../../assets/company_logo/jsw.png';

const companies = [
  { name: 'SKH Group', image: Smh },
  { name: 'Hero Moto', image: Hero },
  { name: 'Marelli', image: Marelli },
  { name: 'Tata Motors', image: Tata },
  { name: 'Dayco', image: Dayco },
  { name: 'Maruti', image: Maruti },
  { name: 'JSW Steel', image: jsw },
];

const CompanySlider = () => {
  // Duplicate once to make a seamless 200% width track
  const allLogos = [...companies, ...companies];

  return (
    <div className="relative w-full overflow-hidden py-8  dark:bg-black">
      {/* Edge fade overlays */}
      <div className="pointer-events-none z-10 absolute inset-y-0 left-0 w-1/8 bg-gradient-to-r from-white dark:from-black"></div>
      <div className="pointer-events-none z-10 absolute inset-y-0 right-0 w-1/8 bg-gradient-to-l from-white dark:from-black"></div>

      <div className="scroll-wrapper w-full">
        <div className="animate-scroll flex items-center whitespace-nowrap gap-16 will-change-transform">
          {allLogos.map((company, i) => (
            <div
              key={`${company.name}-${i}`}
              className="flex flex-col items-center min-w-[120px]"
              aria-hidden={i >= companies.length ? true : undefined}
            >
              <div className="relative w-25 h-25 mb-2">
                <Image
                  src={company.image}
                  alt={company.name}
                  fill
                  sizes="100px"
                  className="object-contain"
                />
              </div>
             
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scroll-wrapper {
          overflow: hidden;
        }

        .animate-scroll {
          animation: scroll-left 18s linear infinite;
        }

       

        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Mobile devices */
        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 7s;
          }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation-duration: 0.001s;
            animation-iteration-count: 1;
          }
        }
            `}</style>
        </div>
    
  );
};

export default CompanySlider;
