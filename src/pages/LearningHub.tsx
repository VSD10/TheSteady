import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Video, FileText, Award, Clock, Users, Star, ChevronRight, Play, Download, TrendingUp } from 'lucide-react';

export default function LearningHub() {
  const featuredCourses = [
    {
      title: 'Financial Basics Masterclass',
      description: 'Everything you need to know to start your financial journey',
      duration: '6 weeks',
      lessons: 24,
      students: '12,500+',
      rating: 4.8,
      category: 'Beginner',
      image: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Advanced Investment Strategies',
      description: 'Learn to build a diversified investment portfolio',
      duration: '8 weeks',
      lessons: 32,
      students: '8,200+',
      rating: 4.9,
      category: 'Advanced',
      image: 'from-green-400 to-green-600'
    },
    {
      title: 'Debt Freedom Blueprint',
      description: 'Step-by-step plan to become debt-free',
      duration: '4 weeks',
      lessons: 16,
      students: '15,000+',
      rating: 4.7,
      category: 'Intermediate',
      image: 'from-orange-400 to-orange-600'
    }
  ];

  const categories = [
    { name: 'Budgeting', count: 12, icon: BookOpen },
    { name: 'Investing', count: 18, icon: TrendingUp },
    { name: 'Debt Management', count: 8, icon: FileText },
    { name: 'Savings', count: 10, icon: Award },
    { name: 'Credit Scores', count: 6, icon: Star },
    { name: 'Tax Planning', count: 9, icon: FileText }
  ];

  const recentVideos = [
    {
      title: '10 Money Habits That Changed My Life',
      duration: '12:34',
      views: '45K',
      thumbnail: 'from-red-400 to-red-600'
    },
    {
      title: 'How to Start Investing with $100',
      duration: '15:20',
      views: '89K',
      thumbnail: 'from-teal-400 to-teal-600'
    },
    {
      title: 'Credit Card Mistakes to Avoid',
      duration: '9:15',
      views: '32K',
      thumbnail: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Building Emergency Fund Fast',
      duration: '11:45',
      views: '56K',
      thumbnail: 'from-pink-400 to-pink-600'
    }
  ];

  const learningPaths = [
    {
      title: 'Beginner to Pro',
      steps: 5,
      description: 'Complete journey from financial basics to advanced strategies',
      color: 'from-blue-500 to-blue-700',
      modules: [
        {
          title: 'Module 1 · Build Your Foundation',
          summary: 'Create a realistic budget, map income sources, and track day-to-day spending with easy templates.'
        },
        {
          title: 'Module 2 · Master Cash Flow',
          summary: 'Learn envelope and zero-based budgeting methods to stay on top of irregular earnings.'
        },
        {
          title: 'Module 3 · Crush Debt Wisely',
          summary: 'Compare snowball vs. avalanche approaches and engineer a debt payoff plan that matches your goals.'
        },
        {
          title: 'Module 4 · Grow Savings',
          summary: 'Automate emergency funds, set SMART milestones, and optimize short-term saving instruments.'
        },
        {
          title: 'Module 5 · Invest with Confidence',
          summary: 'Understand mutual funds, index investing, and risk management to build long-term wealth.'
        }
      ]
    },
    {
      title: 'Debt Destroyer',
      steps: 4,
      description: 'Comprehensive debt elimination program',
      color: 'from-red-500 to-red-700',
      modules: [
        {
          title: 'Module 1 · Debt Health Check',
          summary: 'Audit every lender, rate, and fee to see the full picture of what you owe.'
        },
        {
          title: 'Module 2 · Negotiation Toolkit',
          summary: 'Scripts, letters, and strategies to negotiate lower rates and waive penalties.'
        },
        {
          title: 'Module 3 · Repayment Roadmap',
          summary: 'Prioritize debts with smart sequencing and automate payments to stay on schedule.'
        },
        {
          title: 'Module 4 · Stay Debt-Free',
          summary: 'Build emergency buffers and spending guardrails to avoid slipping back.'
        }
      ]
    },
    {
      title: 'Wealth Builder',
      steps: 6,
      description: 'Build long-term wealth through smart investing',
      color: 'from-green-500 to-green-700',
      modules: [
        {
          title: 'Module 1 · Define Your Why',
          summary: 'Clarify wealth goals, investment horizons, and personal risk comfort.'
        },
        {
          title: 'Module 2 · Investment Basics',
          summary: 'Decipher equities, debt instruments, and hybrid products in plain language.'
        },
        {
          title: 'Module 3 · Portfolio Blueprint',
          summary: 'Allocate assets smartly, diversify across instruments, and rebalance with intention.'
        },
        {
          title: 'Module 4 · Automate & Optimise',
          summary: 'Set up SIPs, automate contributions, and reduce hidden fees that eat returns.'
        },
        {
          title: 'Module 5 · Tax-Savvy Investing',
          summary: 'Use tax-advantaged accounts and deductions to keep more of what you earn.'
        },
        {
          title: 'Module 6 · Protect Your Growth',
          summary: 'Plan insurance, contingency funds, and exit strategies for resilient wealth.'
        }
      ]
    }
  ];

  const [activePathIndex, setActivePathIndex] = useState(0);
  const activePath = learningPaths[activePathIndex];

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <section className="bg-gradient-to-br from-green-600 to-teal-700 dark:from-green-800 dark:to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Master Your Financial Future
            </h1>
            <p className="text-xl text-green-50 mb-8">
              Comprehensive courses, expert guidance, and practical tools to transform your relationship with money
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-medium transition-colors">
                Start Learning
              </button>
              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-medium transition-colors border-2 border-green-500">
                Browse Courses
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="bg-blue-100 dark:bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">50+</h3>
              <p className="text-gray-600 dark:text-gray-300">Expert Courses</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="bg-green-100 dark:bg-green-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-green-600 dark:text-green-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">200+</h3>
              <p className="text-gray-600 dark:text-gray-300">Video Lessons</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="bg-orange-100 dark:bg-orange-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600 dark:text-orange-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">50K+</h3>
              <p className="text-gray-600 dark:text-gray-300">Active Learners</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <div className="bg-yellow-100 dark:bg-yellow-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">15K+</h3>
              <p className="text-gray-600 dark:text-gray-300">Certificates Earned</p>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Courses</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12">
            Our signature programs are in final polish. Join the waitlist to be first in when they launch.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredCourses.map((course, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className={`bg-gradient-to-br ${course.image} h-48 flex items-center justify-center`}>
                  <div className="bg-white dark:bg-gray-700 rounded-full p-6 opacity-90">
                    <BookOpen className="w-12 h-12 text-gray-700 dark:text-gray-300" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    Upcoming
                    <span className="text-xs uppercase tracking-wide text-green-700 dark:text-green-300">Launching Soon</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{course.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Track: {course.category} · Launch window opening soon.</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {course.lessons} lessons
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-gray-900 dark:text-white font-medium">{course.rating}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">({course.students})</span>
                    </div>
                    <button
                      disabled
                      className="text-green-600 dark:text-green-400 font-medium flex items-center gap-1 cursor-not-allowed opacity-70"
                    >
                      Waitlist <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Browse by Category</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12">All learning categories are preparing curated lessons—stay tuned for launch details.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  disabled
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all group text-center cursor-not-allowed"
                >
                  <Icon className="w-8 h-8 text-gray-600 dark:text-gray-300 mx-auto mb-3 group-hover:text-green-600 dark:group-hover:text-green-400" />
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Launching soon · {category.count} courses planned</p>
                </button>
              );
            })}
          </div>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Upcoming Video Lessons</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12">Short, bingeable lessons are in production. Preview what drops first.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {recentVideos.map((video, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <div className={`bg-gradient-to-br ${video.thumbnail} h-40 flex items-center justify-center relative`}>
                  <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{video.views} learners waiting · Launching soon</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Learning Paths</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12">Tap a path to preview the curriculum that will unlock at launch.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => {
              const isActive = index === activePathIndex;
              return (
                <button
                  type="button"
                  key={index}
                  onClick={() => setActivePathIndex(index)}
                  className={`text-left bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transition-all ${isActive ? 'ring-2 ring-green-500 shadow-xl' : 'hover:shadow-xl'}`}
                >
                  <div className={`bg-gradient-to-br ${path.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{path.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{path.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <FileText className="w-4 h-4" />
                    {path.steps} steps to complete
                  </div>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${isActive ? 'bg-green-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}>
                    {isActive ? 'Viewing details' : 'Launching soon'}
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>
          {activePath && (
            <div className="mt-10 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What you will unlock in {activePath.title}</h3>
              <div className="space-y-4">
                {activePath.modules.map((module, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-green-500 transition-colors"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{module.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{module.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Download Our Free Resources
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Get instant access to budgeting templates, financial calculators, and comprehensive guides to kickstart your financial journey.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">Monthly Budget Spreadsheet</span>
                </li>
                <li className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">Debt Payoff Calculator</span>
                </li>
                <li className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">Investment Planning Workbook</span>
                </li>
                <li className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-gray-700 dark:text-gray-300">Emergency Fund Tracker</span>
                </li>
              </ul>
              <Link to="/free-guides" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block">
                Access Free Resources
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-teal-100 dark:from-green-900 dark:to-teal-900 rounded-3xl p-12 flex items-center justify-center">
              <FileText className="w-48 h-48 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Finances?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who have taken control of their financial future with our comprehensive courses.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-lg text-lg font-medium transition-colors">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
