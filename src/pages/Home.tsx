import { Link } from 'react-router-dom';
import { Leaf, TrendingUp, MessageCircle, Check, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Your personal financial coach, in your pocket
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Get personalized financial advice right on WhatsApp - just put in your favorite messaging app. We'll help you take control of your finances and achieve your goals.
              </p>
              <button className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white px-8 py-3 rounded-lg text-base font-medium transition-colors">
                Get started
              </button>
            </div>
            <div className="bg-gradient-to-br from-orange-200 to-orange-300 dark:from-orange-700 dark:to-orange-900 rounded-3xl p-12 flex items-center justify-center aspect-square">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 w-48 h-80 flex items-center justify-center">
                <MessageCircle className="w-16 h-16 text-gray-400 dark:text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 transition-colors">
              <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-xl h-48 mb-6 flex items-center justify-center">
                <Leaf className="w-16 h-16 text-green-700 dark:text-green-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Connect your accounts
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Securely link your bank accounts and credit cards to give your coach a complete picture of your finances.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 transition-colors">
              <div className="bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900 dark:to-teal-800 rounded-xl h-48 mb-6 flex items-center justify-center">
                <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
                  <TrendingUp className="w-12 h-12 text-teal-700 dark:text-teal-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Get personalized insights
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your coach analyzes your spending, income, and goals to provide tailored advice and identify areas for improvement.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 transition-colors">
              <div className="bg-gradient-to-br from-orange-200 to-orange-300 dark:from-orange-700 dark:to-orange-900 rounded-xl h-48 mb-6 flex items-center justify-center">
                <MessageCircle className="w-16 h-16 text-orange-700 dark:text-orange-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Receive empathetic nudges
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get timely reminders and encouragement to stay on track. Delivered in a friendly, conversational style.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Who it's for
          </h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  The Budget Beginner
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Just starting out with budgeting? We'll guide you through the basics and help you build a solid financial foundation.
                </p>
              </div>
              <div className="w-full md:w-80 h-48 bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl flex items-center justify-center">
                <div className="bg-teal-800 rounded-full p-8">
                  <div className="w-24 h-24 bg-orange-300 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  The Debt Destroyer
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Ready to tackle your debt. We'll help you create a repayment plan and stay motivated along the way.
                </p>
              </div>
              <div className="w-full md:w-80 h-48 bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">💼</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  The Savings Superstar
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Want to boost your savings game. We'll help you set goals, track your progress, and find new ways to save more.
                </p>
              </div>
              <div className="w-full md:w-80 h-48 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">💰</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Premium Tier (Optional)
          </h2>
          <div className="max-w-md mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-3xl p-8">
              <div className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-4 py-2 rounded-lg inline-block mb-4 text-sm font-medium">
                Premium
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">$9.99</span>
                <span className="text-gray-600 dark:text-gray-300">/month</span>
              </div>
              <button className="w-full bg-green-200 hover:bg-green-300 dark:bg-green-700 dark:hover:bg-green-600 text-gray-900 dark:text-white py-3 rounded-lg font-medium mb-6 transition-colors">
                Upgrade
              </button>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-200">Unlimited coaching</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-200">Advanced insights</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-200">Priority support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Learning Hub Preview
          </h2>
          <div className="space-y-6">
            <Link to="/learning-hub" className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 hover:shadow-lg transition-all group">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400">
                  5 Tips for Better Budgeting
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learn simple strategies to track and stick to a budget that works for you.
                </p>
              </div>
              <div className="w-full md:w-64 h-40 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-xl flex items-center justify-center">
                <Leaf className="w-12 h-12 text-green-700 dark:text-green-300" />
              </div>
            </Link>

            <Link to="/learning-hub" className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 hover:shadow-lg transition-all group">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400">
                  Understanding Credit Scores
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Demystify credit scores and learn what you can do today for better financial opportunities.
                </p>
              </div>
              <div className="w-full md:w-64 h-40 bg-gradient-to-br from-orange-200 to-orange-300 dark:from-orange-700 dark:to-orange-900 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-12 h-12 text-orange-700 dark:text-orange-300" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Trusted by thousands
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 flex items-center justify-center aspect-square">
              <div className="text-yellow-500 text-4xl">🌿</div>
            </div>
            <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 flex items-center justify-center aspect-square">
              <Leaf className="w-16 h-16 text-gray-700 dark:text-gray-300" />
            </div>
            <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-2xl p-8 flex items-center justify-center aspect-square">
              <div className="text-6xl">💼</div>
            </div>
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8 flex items-center justify-center aspect-square">
              <div className="bg-teal-700 rounded-full p-6">
                <div className="w-16 h-16 bg-orange-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Start your financial journey today
          </h2>
          <button className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white px-12 py-4 rounded-lg text-lg font-medium transition-colors">
            Get started
          </button>
        </div>
      </section>
    </div>
  );
}
