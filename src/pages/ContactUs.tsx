import { Phone } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-green-600 dark:text-green-300" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We’d love to hear from you! Reach out with any questions, feedback, or data-related concerns.
            </p>
          </div>

          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Support Channels</h2>
              <p>Email: <a href="mailto:support@thesteady.ai" className="text-green-600 dark:text-green-400 hover:underline">vsdh2004@gmail.com</a></p>
              <p>WhatsApp: <span className="font-medium">+91-7200700290</span> </p>
              <p>Website: <a href="https://thesteady.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 hover:underline">www.thesteady.ai</a> </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Response Time</h2>
              <p>We aim to respond within <span className="font-medium">2–3 business days</span>.</p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/40 border border-green-100 dark:border-green-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Need to manage your data?</h3>
              <p>
                Message <span className="font-semibold">"DELETE MY DATA"</span> on WhatsApp to request permanent deletion of your records.
                We’ll remove your information within 72 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
