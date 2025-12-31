import React from 'react'

const page = () => {
 return (
    <main className="min-h-screen bg-gray-50 dark:bg-black px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Cookies Policy
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
            This Cookies Policy explains what Cookies are and how We use them.
            You should read this policy so You can understand what type of
            cookies We use, or the information We collect using Cookies and how
            that information is used.
          </p>

          <p>
            Cookies do not typically contain any information that personally
            identifies a user. However, personal information that We store
            about You may be linked to the information stored in and obtained
            from Cookies. We do not store sensitive personal information such as
            mailing addresses or account passwords in the Cookies We use.
          </p>

          {/* Interpretation */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Interpretation and Definitions
            </h2>

            <p className="mb-3">
              The words whose initial letters are capitalized have meanings
              defined under the following conditions and shall have the same
              meaning regardless of whether they appear in singular or plural.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Company</strong> refers to Mendygo Technologies Private
                Limited, 3rd Floor, Unit No. 304, Eros Group Corporate Park,
                Sector 2, IMT Manesar, Gurugram, Haryana – 122052, India.
              </li>
              <li>
                <strong>Cookies</strong> means small files placed on Your device
                to store browsing-related information.
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
                accessing or using the Website.
              </li>
            </ul>
          </div>

          {/* Use of Cookies */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              The Use of Cookies
            </h2>

            <p>
              Cookies can be either “Session” Cookies or “Persistent” Cookies.
              Session Cookies are deleted when You close your browser, while
              Persistent Cookies remain stored on Your device.
            </p>
          </div>

          {/* Cookie Types */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Types of Cookies We Use
            </h2>

            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Necessary / Essential Cookies</strong>
                <p className="mt-1">
                  Type: Session Cookies <br />
                  Administered by: Us <br />
                  Purpose: These cookies are essential for providing core
                  website functionality, including security and accessibility.
                  Without these cookies, requested services cannot be provided.
                </p>
              </li>

              <li>
                <strong>Functionality Cookies</strong>
                <p className="mt-1">
                  Type: Persistent Cookies <br />
                  Administered by: Us <br />
                  Purpose: These cookies remember choices You make, such as
                  language preferences, to enhance Your experience.
                </p>
              </li>
            </ul>
          </div>

          {/* Choices */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Your Choices Regarding Cookies
            </h2>

            <p>
              If You prefer to avoid the use of Cookies on the Website, You must
              disable Cookies in Your browser settings and delete stored Cookies.
              Please note that disabling Cookies may affect website
              functionality.
            </p>

            <p className="mt-3">
              Instructions for managing Cookies can be found on your browser’s
              official help pages:
            </p>

            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Chrome:{" "}
                <a
                  href="https://support.google.com/accounts/answer/32050"
                  className="underline hover:text-[#82bf07]"
                >
                  https://support.google.com/accounts/answer/32050
                </a>
              </li>
              <li>
                Firefox:{" "}
                <a
                  href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored"
                  className="underline hover:text-[#82bf07]"
                >
                  Mozilla Cookie Help
                </a>
              </li>
              <li>
                Safari:{" "}
                <a
                  href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
                  className="underline hover:text-[#82bf07]"
                >
                  Apple Safari Guide
                </a>
              </li>
            </ul>
          </div>

          {/* More Info */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              More Information About Cookies
            </h2>
            <p>
              You can learn more about cookies at{" "}
              <a
                href="https://www.termsfeed.com/blog/cookies/"
                className="underline hover:text-[#82bf07]"
              >
                TermsFeed Cookies Guide
              </a>.
            </p>
          </div>

          {/* Contact */}
          <div className="pt-6 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Contact Us
            </h2>

            <p>
              If you have any questions about this Cookies Policy, You can
              contact us:
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
