import { Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Lock className="w-8 h-8 text-green-600 dark:text-green-300" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Privacy Policy
            </h1>
            <p className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
              Last Updated: October 2025
            </p>
          </div>

          <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Your privacy is our priority. <span className="font-semibold">THESTEADY</span> only collects minimal data
              needed to provide meaningful financial insights.
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">1. What We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Messages you send to the bot (income, spending notes, or photos of ledgers).</li>
                <li>Optional media files you share (receipts, ledger pages, supporting documents).</li>
                <li>Basic interaction logs used for performance improvement.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">2. How We Use It</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide personalized financial summaries and suggestions.</li>
                <li>Improve accuracy and overall user experience.</li>
                <li>Detect usage patterns that make the bot more helpful.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">3. What We Don’t Do</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We never sell your data.</li>
                <li>We don’t share your personal information with third parties without consent.</li>
                <li>We don’t store financial credentials or UPI/bank passwords.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">4. Data Security</h2>
              <p>
                All communication occurs via secure APIs and encrypted WhatsApp/SMS channels where applicable. We follow
                best practices to safeguard your data against unauthorized access.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">5. Data Deletion</h2>
              <p>
                You can request deletion of your data anytime by messaging <span className="font-semibold">"DELETE MY DATA"</span>.
                We’ll remove your records permanently within 72 hours.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">6. Children’s Privacy</h2>
              <p>
                THESTEADY is designed for adults (18+). We don’t knowingly collect information from minors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
