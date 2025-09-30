import React from "react";
// import icon from "@/assets/icon.png";
import Image from "next/image";
import { Check } from "lucide-react";

const Features = ({ systemData, heading}) => {
  return (
    <div>
      <div className="pt-24  bordr-t border-black/10 dark:border-white/10 lg:px-20">
        <h2 className="text-3xl text-center font-bold mb-4 relative">
          {heading}
        </h2>
        <p className="text-center text-black/60 dark:text-white/60 max-w-2xl text-lg  mx-auto mb-16">
          Our modular approach allows you to choose the specific solutions you
          need, creating a customized system that fits your unique requirements.
        </p>
        <div className={`grid grid-cols-1 md:grid-cols-2 ${systemData.modules[0].desc.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-4"}  gap-16`}>
          {systemData.modules.map((module) => (
            <div
              key={module.title}
              className="flex flex-col lg:text-left md:text-left text-center dark:bg-black rounded-xl borde border-neutral-200 dark:border-neutral-800  dark:hover:border-neutral-700  transition-all duration-300"
            >
              {module.image && (
                <div className="relative h-20  ">
                  <Image
                    src={module.image}
                    alt={module.title}
                    layout="fill"
                    className="object-contain lg:object-left lg:pl-10"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
                  {module.title}
                </h3>
                <div className="space-y-2 flex-grow">
                  {module.desc.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {module.desc.length > 1 && (
                        <Check className="w-5 h-5 text-[#28783B] mt-0.5 flex-shrink-0" />
                      )}
                      <p className="text-md text-black/70 dark:text-white/70">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
