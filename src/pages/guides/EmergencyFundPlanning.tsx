import GuideLayout from './GuideLayout';

export default function EmergencyFundPlanning() {
  return (
    <GuideLayout
      title="Emergency Fund Planning"
      subtitle="Build buffers that keep your household steady when income drops unexpectedly."
      lastUpdated="October 2025"
    >
      <h2>Introduction</h2>
      <p>
        An <strong>emergency fund</strong> is your financial safety net. It helps you cover essential expenses if you lose your job, face a medical issue, or encounter any unexpected crisis. Here’s how to set up and maintain a robust emergency fund for financial stability.
      </p>

      <h2>Step 1: Calculate Your Ideal Fund Size</h2>
      <ol>
        <li>
          List essential monthly expenses:
          <ul>
            <li>Rent or mortgage</li>
            <li>Utilities & bills</li>
            <li>Food & groceries</li>
            <li>Loan EMIs</li>
            <li>Insurance premiums</li>
            <li>Transport</li>
          </ul>
        </li>
        <li>
          <strong>Rule of Thumb:</strong> Aim for 3–6 months’ worth of expenses.
          <ul>
            <li>Single-income households or unstable jobs: 6 months or more</li>
            <li>Dual-income or steady jobs: at least 3 months</li>
          </ul>
        </li>
        <li>
          <strong>Sample Calculation:</strong> If expenses = ₹30,000/month, target fund = ₹90,000–₹1,80,000.
        </li>
      </ol>

      <h2>Step 2: Set a Realistic Monthly Saving Goal</h2>
      <ul>
        <li>Break the total target into monthly contributions. Example: Fund goal ₹1,20,000 over 12 months → save ₹10,000/month.</li>
        <li>If needed, start smaller but commit to regular saving (even ₹2,000–₹3,000/month adds up!)</li>
      </ul>

      <h2>Step 3: Automate Your Contributions</h2>
      <ul>
        <li>Set up a recurring transfer from your salary account to a dedicated “Emergency Fund” account right after payday.</li>
        <li>Use standing instructions in your bank app or UPI autopay features.</li>
        <li>Increase your contribution when you get a raise or a bonus.</li>
      </ul>
      <div style={{
        background: '#E0F7FA',
        borderLeft: '6px solid #00BCD4',
        padding: '16px',
        margin: '16px 0',
      }}>
        <strong>Tip:</strong> Treat your emergency fund like a “non-negotiable bill”—pay yourself first!
      </div>

      <h2>Step 4: Store Your Fund Safely, with Easy Access</h2>
      <ul>
        <li>Choose liquidity and safety. Good options:
          <ul>
            <li>High-interest savings account with instant access</li>
            <li>Flexi fixed deposits or liquid mutual funds (only if you understand risks)</li>
          </ul>
        </li>
        <li>Avoid locking emergency funds in long-term FDs or market-linked investments.</li>
        <li>Don’t mix it with regular savings—dedicate a separate account or folio.</li>
      </ul>

      <h2>Step 5: Use Only for Genuine Emergencies</h2>
      <ul>
        <li>Examples: job loss, major medical bills, urgent car or home repairs.</li>
        <li>Avoid dipping in for planned purchases, gifts, or vacations.</li>
        <li>If you use the fund, restart your savings to replenish it quickly.</li>
      </ul>

      <h2>Resources & Tools</h2>
      <ul>
        <li>
          <strong>Emergency Fund Calculator:</strong> <a href="#emergency-calculator">Download Excel/Google Sheets template</a>
        </li>
        <li>
          <strong>Recommended Apps:</strong> Bank apps (ICICI, SBI, HDFC), Walnut, ET Money
        </li>
        <li>
          <strong>Further Reading:</strong> “The Psychology of Money” by Morgan Housel, financial planning blogs
        </li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <ul>
        <li><strong>What if I can’t fully fund my emergency buffer right away?</strong><br /> Start small and build up over time. The important thing is consistency!</li>
        <li><strong>Is an emergency fund more important than paying off debt?</strong><br /> Build a basic buffer (1–2 months) before focusing aggressively on debt, so you don’t rack up more borrowing in a crisis.</li>
        <li><strong>Should I invest my emergency fund?</strong><br /> Only in very safe, quick-access instruments. Avoid shares, risky mutual funds, and long lock-ins.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        An emergency fund gives you peace of mind and flexibility in tough times. Review your plan every year, top up after withdrawals, and enjoy the security of knowing you’re prepared for the unexpected!
      </p>
    </GuideLayout>
  );
}
