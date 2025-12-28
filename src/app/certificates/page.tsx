import React from "react";
import Image from "next/image";
import certificate from "../../assets/certificate.jpg";
const page = () => {
  return (
    <>
      <div className="min-h-screen px-4 py-30 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 ">Our Certification</h1>

        <p className="text-gray-600 max-w-2xl text-center mb-10">
          Mendygo Technologies is officially certified and compliant with
          recognized industry standards. Below is our certification document.
        </p>

        <div className="border rounded-lg shadow-lg p-4 bg-white">
          <Image
            src={certificate}
            alt="Company Certificate"
            width={800}
            height={600}
            className="rounded"
          />
        </div>
      </div>
    </>
  );
};

export default page;
