import Image from "next/image";
import certificate from "@/assets/certificate.jpg";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black px-4 py-20">
      <div className="mx-auto max-w-4xl flex flex-col items-center text-center">
        
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
          Our Certification
        </h1>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-12">
          Mendygo Technologies is officially certified and compliant with
          recognized industry standards. Below is our certification document.
        </p>

        <div className="w-full max-w-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 rounded-xl shadow-md p-4">
          <Image
            src={certificate}
            alt="Mendygo Technologies Certification"
            width={1200}
            height={900}
            className="w-full h-auto rounded-lg object-contain"
            priority
          />
        </div>
      </div>
    </main>
  );
}
