import { Scale } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Scale className="w-8 h-8 text-green-600 dark:text-green-300" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Terms of Service
            </h1>
            <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Last Updated: October 2025
            </p>
          </div>

          <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Welcome to <span className="font-semibold">THESTEADY</span>, your personal financial coach available via
              WhatsApp and SMS. By using our service, you agree to the following terms:
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">1. Purpose</h2>
              <p>
                THESTEADY provides general financial awareness, spending insights, and saving suggestions. It is not a
                bank, financial institution, or investment advisor.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">2. User Responsibility</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the service respectfully and for lawful purposes.</li>
                <li>Provide accurate information when interacting with the bot.</li>
                <li>Understand that all suggestions are educational, not financial advice.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">3. Data &amp; Communication</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You consent to receive messages via WhatsApp or SMS for reminders, summaries, and insights.</li>
                <li>Message frequency may vary based on your activity.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">4. Limitation of Liability</h2>
              <p>
                We strive to offer reliable insights, but THESTEADY is provided “as is.” We are not liable for any
                financial loss or decision made based on its recommendations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">5. Modification or Termination</h2>
              <p>
                We may modify or suspend features at any time to improve the service experience. Continued use after
                updates means you accept the new terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
