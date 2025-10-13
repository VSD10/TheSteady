import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import LearningHub from './pages/LearningHub';
import FreeGuides from './pages/FreeGuides';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactUs from './pages/ContactUs';
import GuideToBudgeting from './pages/guides/GuideToBudgeting';
import InvestmentBasics from './pages/guides/InvestmentBasics';
import DebtManagement from './pages/guides/DebtManagement';
import SavingsStrategies from './pages/guides/SavingsStrategies';
import UnderstandingCreditScores from './pages/guides/UnderstandingCreditScores';
import EmergencyFundPlanning from './pages/guides/EmergencyFundPlanning';
import SmartSpendingHabits from './pages/guides/SmartSpendingHabits';
import FinancialGoalSetting from './pages/guides/FinancialGoalSetting';
import TaxBasics from './pages/guides/TaxBasics';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learning-hub" element={<LearningHub />} />
              <Route path="/free-guides" element={<FreeGuides />} />
              <Route path="/free-guides/guide-to-budgeting" element={<GuideToBudgeting />} />
              <Route path="/free-guides/investment-basics" element={<InvestmentBasics />} />
              <Route path="/free-guides/debt-management" element={<DebtManagement />} />
              <Route path="/free-guides/savings-strategies" element={<SavingsStrategies />} />
              <Route path="/free-guides/understanding-credit-scores" element={<UnderstandingCreditScores />} />
              <Route path="/free-guides/emergency-fund-planning" element={<EmergencyFundPlanning />} />
              <Route path="/free-guides/smart-spending-habits" element={<SmartSpendingHabits />} />
              <Route path="/free-guides/financial-goal-setting" element={<FinancialGoalSetting />} />
              <Route path="/free-guides/tax-basics" element={<TaxBasics />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
