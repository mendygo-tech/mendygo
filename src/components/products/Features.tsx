import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const Features = ({ systemData, heading }) => {
  return (
    <div>
      <div className="pt-24  border-black/10 dark:border-white/10 lg:px-20">
        <h2
          className="
            text-3xl
            text-center
            font-bold
            mb-4
            tracking-tight
            bg-gradient-to-b from-gray-950 via-gray-800 to-gray-500
            bg-clip-text text-transparent
            dark:from-gray-200 dark:via-gray-400 dark:to-gray-700
          "
        >
          {heading}
        </h2>

        <p className="text-center text-black/90 dark:text-white/90 max-w-2xl text-lg mx-auto mb-16">
          Our modular approach allows you to choose the specific solutions you
          need, creating a customized system that fits your unique requirements.
        </p>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            systemData.modules[0].desc.length > 2
              ? "lg:grid-cols-3"
              : "lg:grid-cols-4"
          } gap-16`}
        >
          {systemData.modules.map((module) => (
            <div
              key={module.title}
              className="py-4
                group
                flex flex-col
                rounded-2xl
                border border-neutral-200/70 dark:border-neutral-800/70
                bg-white dark:bg-neutral-950
                shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                dark:shadow-[0_8px_30px_rgb(0,0,0,0.6)]
                hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)]
                dark:hover:shadow-[0_12px_40px_rgb(0,0,0,0.8)]
                hover:-translate-y-1
                transition-all duration-300 ease-out
              "
            >
              {module.image && (
                <div className="relative h-20 flex items-center justify-center">
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

                <div className="space-y-3 flex-grow">
                  {module.desc.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {module.desc.length > 1 && (
                        <div className="w-6 h-6 bg-lime-400/20 rounded-full flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-[#28783B] dark:text-[#A0F30B]" />
                        </div>
                      )}

                      <p className="text-sm font-medium text-black/90 dark:text-white/90">
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
