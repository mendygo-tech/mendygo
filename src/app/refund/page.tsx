export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black px-4 py-16">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Refund Policy
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
            At <strong>Mendygo Technologies Private Limited</strong>, we strive to
            build reliable, user-friendly products that deliver real value. This
            Refund Policy explains how refunds, cancellations, and renewals are
            handled for our services.
          </p>

          {/* Software Subscriptions */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Software Subscriptions
            </h2>

            <p>
              If at any time during your <strong>first month</strong> of using a
              paid Mendygo subscription you are dissatisfied, please contact us.
              We will make reasonable efforts to resolve your concern by:
            </p>

            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Investigating and addressing the issue</li>
              <li>Providing a workaround where possible</li>
              <li>Sharing a reasonable timeline for a fix</li>
            </ul>

            <p className="mt-3">
              If the issue remains unresolved to your satisfaction, we will
              provide a <strong>FULL REFUND</strong> and downgrade your account
              to the applicable free plan.
            </p>
          </div>

          {/* Termination of Services */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Termination of Services or Features
            </h2>

            <p>
              If, during an active subscription, Mendygo removes, discontinues,
              or materially alters a feature that was available at the time of
              purchase, please notify us immediately.
            </p>

            <p className="mt-3">
              If we fail to resolve the issue within a reasonable timeframe and
              to your satisfaction, you will be eligible for a{" "}
              <strong>PRO-RATED REFUND</strong> for the remaining unused portion
              of your subscription.
            </p>
          </div>

          {/* Auto Renewal */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Auto-Renewal
            </h2>

            <p>
              All Mendygo subscriptions automatically renew unless cancelled.
              Prior to renewal, you will receive an email notifying you of the
              amount to be charged.
            </p>

            <p className="mt-3">
              If you forget to cancel a subscription and are charged, you may
              cancel within <strong>five (5) business days</strong> of the
              renewal date to receive a <strong>FULL REFUND</strong>.
            </p>
          </div>

          {/* Chargebacks */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Chargebacks
            </h2>

            <p>
              If you initiate a chargeback through your bank or credit card
              provider, your Mendygo account may be temporarily suspended.
            </p>

            <p className="mt-3">
              To restore access, you must resolve the chargeback and re-purchase
              your subscription via the Mendygo platform.
            </p>
          </div>

          {/* Hardware & Apps */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Hardware & App Sales
            </h2>

            <p>
              All hardware products and standalone applications purchased from
              Mendygo are <strong>non-refundable</strong>.
            </p>

            <p className="mt-3">
              Hardware products are covered under warranty as per the applicable
              Warranty Terms. Please review warranty details before purchasing.
            </p>
          </div>

          {/* Refund Processing */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Refund Processing
            </h2>

            <p>
              Once approved, refunds are initiated within{" "}
              <strong>3 working days</strong> and credited to the original
              payment method.
            </p>

            <p className="mt-3">
              Depending on your bank or payment provider, it may take{" "}
              <strong>3–15 business days</strong> for the amount to reflect in
              your account.
            </p>
          </div>

          {/* Late or Missing Refunds */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Late or Missing Refunds
            </h2>

            <p>
              If you have not received your refund, please check your bank
              statement, contact your credit card provider, and then your bank.
            </p>

            <p className="mt-3">
              If the issue persists, contact us at{" "}
              <a
                href="mailto:billing@mendygo.com"
                className="underline hover:text-[#82bf07]"
              >
                billing@mendygo.com
              </a>.
            </p>
          </div>

          {/* Exceptions */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Exceptions to This Policy
            </h2>

            <p>
              Refunds (FULL or PRO-RATED) will not be issued if your access to
              Mendygo services has been suspended or terminated due to a
              violation of our Terms of Service or compliance requirements.
            </p>
          </div>

          {/* Contact */}
          <div className="pt-6 border-t border-gray-200 dark:border-white/10">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Contact Us
            </h2>

            <p>
              If you have any questions regarding this Refund Policy, please
              contact us:
            </p>

            <ul className="mt-3 space-y-1">
              <li>
                📧 Email:{" "}
                <a
                  href="mailto:billing@mendygo.com"
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
