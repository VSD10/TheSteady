import { Link } from 'react-router-dom';
import { Leaf, TrendingUp, MessageCircle, Check } from 'lucide-react';
import heroImage from '../images/1.png';
import budgetBeginnerImage from '../images/2 (2).png';
import savingsSuperstarImage from '../images/3.png';
import budgetingTipsImage from '../images/4.png';
import creditLimitImage from '../images/creditlimit.jpg';
import personalizedInsightsImage from '../images/bud.avif';
import gigRidersImage from '../images/GIG.png';
import vendorsImage from '../images/VENDORS.png';
import freelancersImage from '../images/FREELANCER.png';
import olderAdultsImage from '../images/OLDER ADULTS.png';
import personalMentorImage from '../images/PERSONALISEDMENTOR.png';
import debtDestroyerImage from '../images/DEBT.png';
import guideToBudgetImage from '../images/GUIDE TO BUDEGET.png';
import investmentBasicsImage from '../images/INVESTEMENT BASIC.png';
import debtManagementImage from '../images/DEBTMANAGEMENT.png';
import unsteadyImage from '../images/unsteady.png';
import startWithBotImage from '../images/startwithbot.png';
import enterEarningsImage from '../images/downloadedImage (16).png';
import aiSuggestsImage from '../images/AI suggests & guides.png';
import shareImage from '../images/SHARE.png';
import learnImage from '../images/LEARN.png';
import growImage from '../images/GROW.png';

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <section 
        className="relative bg-white dark:bg-gray-800 transition-colors bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-800/90"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Your personal financial coach, in your pocket
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Get personalized financial advice right on WhatsApp - just put in your favorite messaging app. We'll help you take control of your finances and achieve your goals.
              </p>
              <a
                href="https://wa.me/ais/1149384277137846?s=5"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white px-8 py-3 rounded-lg text-base font-medium transition-colors"
              >
                Get started
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img 
                src={heroImage} 
                alt="Your personal financial coach" 
                className="w-full h-full object-cover"
              />
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
              <div className="rounded-xl h-56 md:h-64 mb-6 overflow-hidden">
                <img 
                  src={startWithBotImage} 
                  alt="Start with our bot" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Start with our bot
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Begin your financial journey by chatting with our intelligent bot in your favorite messaging app. It's simple and convenient.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 transition-colors">
              <div className="rounded-xl h-56 md:h-64 mb-6 overflow-hidden">
                <img 
                  src={enterEarningsImage} 
                  alt="Enter your financial data" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Enter earnings & set goals
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Manually input your earnings, spending, and set your financial goals. This helps our AI understand your unique situation.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 transition-colors">
              <div className="rounded-xl h-56 md:h-64 mb-6 overflow-hidden">
                <img 
                  src={aiSuggestsImage} 
                  alt="AI suggests & guides" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                AI suggests & guides
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Boom! Our AI now works for your goals, providing smart suggestions on every earning and spending to keep you on track.
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
              <div className="w-full md:w-80 h-64 rounded-2xl overflow-hidden">
                <img 
                  src={budgetBeginnerImage} 
                  alt="Budget Beginner" 
                  className="w-full h-full object-cover object-top"
                />
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
              <div className="w-full md:w-80 h-48 rounded-2xl overflow-hidden">
                <img 
                  src={debtDestroyerImage} 
                  alt="Debt Destroyer" 
                  className="w-full h-full object-cover"
                />
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
              <div className="w-full md:w-80 h-64 rounded-2xl overflow-hidden">
                <img 
                  src={savingsSuperstarImage} 
                  alt="Savings Superstar" 
                  className="w-full h-full object-cover object-top"
                />
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
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-600 flex items-center justify-center mx-auto">
                <img 
                  src={budgetingTipsImage} 
                  alt="5 Tips for Better Budgeting" 
                  className="w-full h-full object-cover"
                />
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
              <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-600 flex items-center justify-center mx-auto">
                <img 
                  src={creditLimitImage} 
                  alt="Understanding Credit Limits" 
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Kaise Kaam Karta Hai? (How It Works)
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={shareImage} 
                  alt="Share" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">1. Share</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Apna financial share karein.<br />
                Share your finances.
              </p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={learnImage} 
                  alt="Learn" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">2. Learn</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Paisa bachane seekhiye.<br />
                Learn to save money.
              </p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={growImage} 
                  alt="Grow" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">3. Grow</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Apna paisa badhayein.<br />
                Grow your money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Yeh Kiske Liye Hai? (Who It's For)
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm">
              <div className="w-40 h-40 rounded-2xl mx-auto mb-4 overflow-hidden">
                <img 
                  src={gigRidersImage} 
                  alt="Gig Riders" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Gig Riders</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Delivery, ride-sharing, or gig work
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm">
              <div className="w-40 h-40 rounded-2xl mx-auto mb-4 overflow-hidden">
                <img 
                  src={vendorsImage} 
                  alt="Vendors" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Vendors</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Small shop owners, street vendors
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm">
              <div className="w-40 h-40 rounded-2xl mx-auto mb-4 overflow-hidden">
                <img 
                  src={freelancersImage} 
                  alt="Freelancers" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Freelancers</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Irregular income, project work
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center shadow-sm">
              <div className="w-40 h-40 rounded-2xl mx-auto mb-4 overflow-hidden">
                <img 
                  src={olderAdultsImage} 
                  alt="Older Adults" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Older Adults</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Fixed income, retirement planning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Mentor Section */}
      <section className="py-20 bg-green-50 dark:bg-green-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-100 dark:bg-green-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Want a Personal Mentor?
              </h2>
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                ₹70/week
              </div>
              <p className="text-gray-700 dark:text-gray-200 mb-6">
                Get one-on-one guidance from a financial expert to achieve your goals faster.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Start Mentoring
              </button>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-4">
                *Cancel anytime. No long-term commitment required.
              </p>
            </div>
            <div className="w-full md:w-80 h-64 rounded-2xl overflow-hidden">
              <img 
                src={personalMentorImage} 
                alt="Personal Mentor" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Free Guides Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Free Guides se Seekhein (Learn with Free Guides)
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-full h-48 rounded-2xl mb-6 overflow-hidden">
                <img 
                  src={guideToBudgetImage} 
                  alt="Guide to Budgeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Guide to Budgeting
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-left">
                Budget banana aur follow karna seekhein.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-full h-48 rounded-2xl mb-6 overflow-hidden">
                <img 
                  src={investmentBasicsImage} 
                  alt="Investment Basics" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Investment Basics
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-left">
                Investment ke mool siddhant samjhein.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-full h-48 rounded-2xl mb-6 overflow-hidden">
                <img 
                  src={debtManagementImage} 
                  alt="Debt Management" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Debt Management
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-left">
                Karz ko manage karne ke tarike.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unsteady Lives CTA Section */}
      <section 
        className="relative py-32 md:py-40 bg-cover bg-no-repeat rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-20"
        style={{ 
          backgroundImage: `url(${unsteadyImage})`,
          backgroundPosition: 'center 20%'
        }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            Steady money for<br />unsteady lives.
          </h2>
          <a
            href="https://wa.me/ais/1149384277137846?s=5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-medium transition-colors inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Rating Section */}
      <section className="py-12 text-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
              <div className="text-green-600 dark:text-green-400 text-sm">✓</div>
            </div>
            <span className="text-gray-1000 dark:text-gray-300 text-sm">No sales calling, Ever.</span>
          </div>
        </div>
      </section>

      {/* <section className="py-20 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Start your financial journey today
          </h2>
          <Link
            to="/free-guides"
            className="bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white px-12 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Get started
          </Link>
        </div>
      </section> */}
    </div>
  );
}
