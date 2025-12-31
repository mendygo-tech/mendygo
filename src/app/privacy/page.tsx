export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Terms and Conditions
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
            Please read these Terms and Conditions carefully before using the
            website and services operated by{" "}
            <strong>Mendygo Technologies Private Limited</strong>.
          </p>

          {/* Definitions */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Interpretation and Definitions
            </h2>

            <p className="mb-3">
              Words with capitalized initial letters have meanings defined below.
              These definitions apply regardless of whether the terms appear in
              singular or plural.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Company</strong> refers to Mendygo Technologies Private
                Limited, 3rd Floor, Unit No. 304, Eros Group Corporate Park, Sector
                2, IMT Manesar, Gurugram, Haryana – 122052, India.
              </li>
              <li>
                <strong>Country</strong> refers to India.
              </li>
              <li>
                <strong>Device</strong> means any device capable of accessing
                the Service.
              </li>
              <li>
                <strong>Service</strong> refers to the Website.
              </li>
              <li>
                <strong>Website</strong> refers to Mendygo, accessible at{" "}
                <a
                  href="https://www.mendygo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#82bf07]"
                >
                  https://www.mendygo.com/
                </a>
              </li>
              <li>
                <strong>You</strong> means the individual or legal entity
                accessing or using the Service.
              </li>
            </ul>
          </div>

          {/* Acknowledgment */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Acknowledgment
            </h2>

            <p>
              These Terms and Conditions govern your use of this Service and
              constitute a legally binding agreement between You and the
              Company.
            </p>

            <p className="mt-3">
              By accessing or using the Service, You agree to be bound by these
              Terms. If You do not agree with any part of these Terms, You must
              not use the Service.
            </p>

            <p className="mt-3">
              You confirm that You are at least 18 years of age. The Company does
              not permit individuals under 18 to use the Service.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Links to Other Websites
            </h2>

            <p>
              The Service may contain links to third-party websites that are not
              owned or controlled by the Company. The Company assumes no
              responsibility for the content or practices of any third-party
              websites.
            </p>
          </div>

          {/* Termination */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Termination
            </h2>

            <p>
              The Company may terminate or suspend access to the Service
              immediately, without prior notice, if You breach these Terms or
              misuse the Service.
            </p>
          </div>

          {/* Liability */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Limitation of Liability
            </h2>

            <p>
              To the maximum extent permitted by law, the Company shall not be
              liable for any indirect, incidental, special, or consequential
              damages arising from your use of the Service.
            </p>

            <p className="mt-3">
              The Company’s total liability, if any, shall be limited to the
              amount paid by You (if applicable) for accessing the Service.
            </p>
          </div>

          {/* AS IS */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              “AS IS” and “AS AVAILABLE” Disclaimer
            </h2>

            <p>
              The Service is provided on an “AS IS” and “AS AVAILABLE” basis
              without warranties of any kind. Your use of the Service is at your
              own risk.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Governing Law
            </h2>

            <p>
              These Terms shall be governed by and interpreted in accordance
              with the laws of India, with jurisdiction in Haryana.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Changes to These Terms
            </h2>

            <p>
              The Company reserves the right to modify these Terms at any time.
              Continued use of the Service after changes constitutes acceptance
              of the revised Terms.
            </p>
          </div>

          {/* Contact */}
          <div className="pt-6 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Contact Us
            </h2>

            <p>If you have any questions about these Terms, you can contact us:</p>

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
