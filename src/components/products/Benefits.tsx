// components/Benefits.tsx
import React from 'react';
import Image from 'next/image';

interface BenefitCardProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse: boolean;
}

const BenefitCard = ({ title, description, imageSrc, reverse }: BenefitCardProps) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-10 py-16 px-10 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-4 text-md text-gray-600">{description}</p>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

interface Benefit {
  title: string;
  description: string;
  imageSrc: string;
}

interface BenefitsProps {
  benefits: Benefit[];
}

const Benefits = ({ benefits }: BenefitsProps) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-3xl font-extrabold text-center text-gray-900">
        Benefits
      </h2>

      {benefits.map((benefit, index) => (
        <BenefitCard
          key={index}
          title={benefit.title}
          description={benefit.description}
          imageSrc={benefit.imageSrc}
          reverse={index % 2 !== 0}
        />
      ))}
    </div>
  );
};

export default Benefits;
