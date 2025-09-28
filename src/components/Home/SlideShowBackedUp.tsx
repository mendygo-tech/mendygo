import React from 'react';
import Image from 'next/image';
import MicrosoftSt from '../../assets/company_logo/microsoftForStartups.png';
import MicrosoftStDark from '../../assets/company_logo/microsoftForStartupsdark.png';
import GoogleSt from '../../assets/company_logo/googleForStartups.png';
import GoogleStDark from '../../assets/company_logo/googleForStartupsdark.png';
import cii from '../../assets/company_logo/cii.png';
import ciidark from '../../assets/company_logo/ciidark.png';
import { useTheme } from 'next-themes';


const companies = [
  { name: 'Microsoft for Startups', image: MicrosoftSt,darkImage: MicrosoftStDark },
  { name: 'Google for Startups', image: GoogleSt,darkImage: GoogleStDark },
  { name: 'CII', image: cii , darkImage: ciidark },
];


const BackedUpSlider = () => {
  const allLogos = [...companies];
  
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <div className="relative w-full py-8 ">
      <div className="w-full">
        <div className="grid lg:flex items-center lg:gap-20 gap-10 justify-center">
          {allLogos.map((company, i) => {
            const src = mounted && resolvedTheme === 'dark' && company.darkImage
              ? company.darkImage
              : company.image;
            return (
              <div
                key={`${company.name}-${i}`}
                className="flex flex-col items-center p-4 min-w-[120px]"
                aria-hidden={i >= companies.length ? true : undefined}
              >
                <div className="relative w-60 h-20 mb-2">
                  <Image
                    src={src}
                    alt={company.name}
                    fill
                    sizes="180px"
                    className="object-contain"
                  />
                </div>

              </div>
            );
          })}
        </div>
      </div>

      
    </div>
  );
};

export default BackedUpSlider;
