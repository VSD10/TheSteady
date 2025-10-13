import { Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-sm text-gray-600 dark:text-gray-400">
            <a href="/terms-of-service" className="hover:text-gray-900 dark:hover:text-white">Terms of Service</a>
            <a href="/privacy-policy" className="hover:text-gray-900 dark:hover:text-white">Privacy Policy</a>
            <a href="/contact" className="hover:text-gray-900 dark:hover:text-white">Contact Us</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 TheSteady. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
