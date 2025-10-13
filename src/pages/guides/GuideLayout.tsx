import { ReactNode } from 'react';
import { BookOpen } from 'lucide-react';

interface GuideLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  children: ReactNode;
}

export default function GuideLayout({ title, subtitle, lastUpdated, children }: GuideLayoutProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-green-600 dark:text-green-300" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
                {subtitle}
              </p>
            )}
            {lastUpdated && (
              <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 mt-3">
                Last Updated: {lastUpdated}
              </p>
            )}
          </div>

          <div className="bg-white dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 md:p-10 shadow-lg">
            <article className="guide-article prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-strong:text-gray-900 dark:prose-strong:text-white prose-a:text-green-600 dark:prose-a:text-green-400 hover:prose-a:text-green-700 dark:hover:prose-a:text-green-300 prose-li:marker:text-green-500">
              {children}
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
