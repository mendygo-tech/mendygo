import React from 'react'

const page = () => {
 return (
    <main className="min-h-screen bg-gray-50 dark:bg-black px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Disclaimer
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Mendygo Technologies Private Limited
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
            Last updated: December 30, 2025
          </p>
        </header>

        {/* Content */}
        <section className="space-y-8 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          
          <p>
            The information provided on the website of{" "}
            <strong>Mendygo Technologies Private Limited</strong> (the
            &quot;Company&quot;) is for general informational purposes only.
          </p>

          {/* Interpretation */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Interpretation and Definitions
            </h2>

            <p className="mb-3">
              The words whose initial letters are capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Company</strong> refers to Mendygo Technologies Private
                Limited, 3rd Floor, Unit No. 304, Eros Group Corporate Park, Sector
                2, IMT Manesar, Gurugram, Haryana – 122052, India.
              </li>
              <li>
                <strong>Service</strong> refers to the Website.
              </li>
              <li>
                <strong>You</strong> means the individual accessing the Service,
                or the company or legal entity on behalf of which such individual
                is accessing or using the Service.
              </li>
              <li>
                <strong>Website</strong> refers to Mendygo, accessible from{" "}
                <a
                  href="https://www.mendygo.com/"
                  className="underline hover:text-[#82bf07]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.mendygo.com/
                </a>
              </li>
            </ul>
          </div>

          {/* General Disclaimer */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Disclaimer
            </h2>

            <p>
              The Company assumes no responsibility for errors or omissions in
              the contents of the Service. In no event shall the Company be
              liable for any special, direct, indirect, consequential, or
              incidental damages arising out of or in connection with the use
              of the Service.
            </p>

            <p className="mt-3">
              The Company reserves the right to make additions, deletions, or
              modifications to the contents on the Service at any time without
              prior notice. The Company does not warrant that the Service is
              free of viruses or other harmful components.
            </p>
          </div>

          {/* External Links */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              External Links Disclaimer
            </h2>

            <p>
              The Service may contain links to external websites that are not
              provided or maintained by or in any way affiliated with the
              Company. The Company does not guarantee the accuracy, relevance,
              timeliness, or completeness of any information on these external
              websites.
            </p>
          </div>

          {/* Errors and Omissions */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Errors and Omissions Disclaimer
            </h2>

            <p>
              The information provided by the Service is for general guidance
              only. Despite best efforts to ensure accuracy, errors may occur,
              and laws or regulations may change, leading to delays or
              inaccuracies.
            </p>

            <p className="mt-3">
              The Company is not responsible for any errors or omissions, or for
              the results obtained from the use of this information.
            </p>
          </div>

          {/* Fair Use */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Fair Use Disclaimer
            </h2>

            <p>
              The Company may use copyrighted material for purposes such as
              criticism, comment, news reporting, teaching, scholarship, or
              research. This constitutes fair use under applicable copyright
              laws.
            </p>
          </div>

          {/* Views */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Views Expressed Disclaimer
            </h2>

            <p>
              The views and opinions expressed on the Service are those of the
              authors and do not necessarily reflect the official policy or
              position of the Company.
            </p>
          </div>

          {/* No Responsibility */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              No Responsibility Disclaimer
            </h2>

            <p>
              The information provided does not constitute legal, financial,
              accounting, or professional advice and should not be relied upon
              as such.
            </p>
          </div>

          {/* Use at Own Risk */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Use at Your Own Risk
            </h2>

            <p>
              All information is provided &quot;as is&quot; without warranties
              of any kind. The Company shall not be liable for any decisions made
              or actions taken in reliance on the information provided.
            </p>
          </div>

          {/* Contact */}
          <div className="pt-6 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Contact Us
            </h2>

            <p>
              If you have any questions about this Disclaimer, you can contact
              us:
            </p>

            <ul className="mt-3 space-y-1">
              <li>
                📧 Email:{" "}
                <a
                  href="mailto:info@mendygo.com"
                  className="underline hover:text-[#82bf07]"
                >
                  info@mendygo.com
                </a>
              </li>
              <li>
                🌐 Contact page:{" "}
                <a
                  href="https://mendygo.com/contact"
                  className="underline hover:text-[#82bf07]"
                >
                  https://mendygo.com/contact
                </a>
              </li>
            </ul>
          </div>

        </section>
      </div>
    </main>
  );
}

export default page
