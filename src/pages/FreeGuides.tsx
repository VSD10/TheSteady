import { Link } from 'react-router-dom';
import { Coins, TrendingUp, CreditCard, PiggyBank, Wallet, BookOpen, Target, Shield } from 'lucide-react';

export default function FreeGuides() {
  const guides = [
    {
      title: 'Guide to Budgeting',
      description: 'Budget banana aur follow karna seekhein.',
      englishDescription: 'Learn to create and stick to a budget.',
      icon: Coins,
      color: 'from-orange-200 to-orange-300',
      iconColor: 'text-orange-700',
      slug: 'guide-to-budgeting'
    },
    {
      title: 'Investment Basics',
      description: 'Investment ke mood sadhani samjhein.',
      englishDescription: 'Understand the basics of investing.',
      icon: TrendingUp,
      color: 'from-gray-700 to-gray-900',
      iconColor: 'text-green-400',
      slug: 'investment-basics'
    },
    {
      title: 'Debt Management',
      description: 'Karz ko manage karne ke tarike.',
      englishDescription: 'Learn strategies to manage your debt.',
      icon: CreditCard,
      color: 'from-teal-400 to-teal-600',
      iconColor: 'text-white',
      slug: 'debt-management'
    },
    {
      title: 'Savings Strategies',
      description: 'Paise bachane ke asaan tarike.',
      englishDescription: 'Simple ways to save more money.',
      icon: PiggyBank,
      color: 'from-green-200 to-green-300',
      iconColor: 'text-green-700',
      slug: 'savings-strategies'
    },
    {
      title: 'Understanding Credit Scores',
      description: 'Credit score kya hai aur kaise sudhaare.',
      englishDescription: 'What is a credit score and how to improve it.',
      icon: Target,
      color: 'from-blue-200 to-blue-300',
      iconColor: 'text-blue-700',
      slug: 'understanding-credit-scores'
    },
    {
      title: 'Emergency Fund Planning',
      description: 'Emergency ke liye paise kaise bachaye.',
      englishDescription: 'How to build an emergency fund.',
      icon: Shield,
      color: 'from-purple-200 to-purple-300',
      iconColor: 'text-purple-700',
      slug: 'emergency-fund-planning'
    },
    {
      title: 'Smart Spending Habits',
      description: 'Samajhdari se kharcha karne ke tips.',
      englishDescription: 'Tips for spending money wisely.',
      icon: Wallet,
      color: 'from-yellow-200 to-yellow-300',
      iconColor: 'text-yellow-700',
      slug: 'smart-spending-habits'
    },
    {
      title: 'Financial Goal Setting',
      description: 'Financial goals kaise set karein.',
      englishDescription: 'How to set and achieve financial goals.',
      icon: BookOpen,
      color: 'from-red-200 to-red-300',
      iconColor: 'text-red-700',
      slug: 'financial-goal-setting'
    },
    {
      title: 'Tax Basics',
      description: 'Tax ke bare mein basic jankari.',
      englishDescription: 'Basic information about taxes.',
      icon: BookOpen,
      color: 'from-indigo-200 to-indigo-300',
      iconColor: 'text-indigo-700',
      slug: 'tax-basics'
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Free Guides se Seekhein
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Learn with Free Guides - Complete financial education at no cost
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-2xl p-8 mb-12">
            <div className="flex items-center justify-center gap-3 text-green-700 dark:text-green-300">
              <Shield className="w-6 h-6" />
              <p className="font-medium text-lg">
                All guides are completely free and designed for everyone
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <Link
                  key={index}
                  to={`/free-guides/${guide.slug}`}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className={`bg-gradient-to-br ${guide.color} p-12 h-64 flex items-center justify-center`}>
                    <Icon className={`w-24 h-24 ${guide.iconColor}`} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-200 mb-1">{guide.description}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{guide.englishDescription}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Want personalized guidance?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">
              Chat with our AI financial coach on WhatsApp for free, or upgrade to premium for expert human guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/ais/1149384277137846?s=5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Chat on WhatsApp
              </a>
              <button className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-medium transition-colors border-2 border-gray-200 dark:border-gray-600">
                Learn about Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              How to Use These Guides
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 dark:text-green-300 font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Choose a Topic</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Select the guide that matches your current financial goals or challenges.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 dark:text-green-300 font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Learn at Your Pace</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Read through the guide and take notes on key concepts that apply to you.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 dark:text-green-300 font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Take Action</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Apply what you've learned to your finances and track your progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
