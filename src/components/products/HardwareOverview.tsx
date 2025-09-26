import React from 'react'
import Image from "next/image";
// import { Check } from "lucide-react";

const HardwareOverview = ({ systemData }) => {
  return (
    <div>
        <div className="pt-20 mt-20  border-black/10 dark:border-white/10 px-10">
          <h2 className="text-3xl text-center font-bold pb-10 relative">
            {systemData.title || "Hardware Overview"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {systemData.modules.map((spec) => (
              <div
                key={systemData.title}
                className="flex flex-col bg-white dark:bg-[#141416] rounded-xl border border-neutral-200 dark:border-neutral-800 "
              >
                {spec.image && (
                    <div className="relative w-full h-40 dark:bg-black rounded-xl">
                        <Image
                            src={spec.image}
                            alt={spec.title}
                            layout="fill"
                            className="object-contain p-10 rounded-t-xl dark:hidden"
                        />
                        <Image
                            src={spec.darkImage}
                            alt={spec.title}
                            layout="fill"
                            className="object-contain p-10 rounded-t-xl hidden dark:block"
                        />
                    </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg text-center font-semibold mb-4 text-black dark:text-white">{spec.title}</h3>
                  <div className="space-y-2 flex-grow">
                    {spec.desc.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <p className="text-sm text-black/70 dark:text-white/70 text-center ">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default HardwareOverview