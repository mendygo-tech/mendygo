// components/Benefits.js
import React from 'react';
import Image from 'next/image';

const BenefitCard = ({ title, description, imageSrc, reverse }) => {
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

const Benefits = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-3xl font-extrabold text-center text-gray-900">
        Benefits
      </h2>

      <BenefitCard
        title="Visibility into the real-world performance of the Chillers"
        description="Know how your Chillers operate within the right thresholds across various parameters and meet compliance norms."
        imageSrc="/images/benefit1.png" 
        reverse={false}
      />

      <BenefitCard
        title="Get alerted in real-time in case of parameter threshold breach and downtime"
        description="Get real-time alerts if vital operating parameters of your Chillers have breached the thresholds or if a failure has occurred."
        imageSrc="/images/benefit2.png" 
        reverse={true}
      />

      <BenefitCard
        title="Smooth diagnostics and health assessment"
        description="Live data analysis and real-time alerts of critical information for optimal efficiency and zero breakdowns."
        imageSrc="/images/benefit3.png" 
        reverse={false}
      />

      <BenefitCard
        title="Gain critical insights"
        description="Discover and analyze actionable insights, understand the root cause of problems and extract critical information."
        imageSrc="/images/benefit4.png" 
        reverse={true}
      />
    </div>
  );
};

export default Benefits;