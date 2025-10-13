import GuideLayout from './GuideLayout';

export default function GuideToBudgeting() {
  return (
    <GuideLayout
      title="Guide to Budgeting"
      subtitle="Step-by-step frameworks to plan, track, and optimize every rupee."
      lastUpdated="October 2025"
    >
      <h2>Introduction</h2>
      <p>
        Budgeting is the foundation of financial well-being. This guide provides actionable steps to help you build, maintain, and improve your personal or business budget, so you can maximize every rupee and reach your financial goals.
      </p>

      <h2>Why You Need a Budget</h2>
      <ul>
        <li><strong>Gain Control:</strong> Know exactly where your money goes.</li>
        <li><strong>Achieve Goals:</strong> Plan for savings, investments, and expenditures.</li>
        <li><strong>Reduce Stress:</strong> Prevent surprises and financial emergencies.</li>
      </ul>

      <h2>Step 1: Assess Your Income</h2>
      <ol>
        <li>List all sources of income (salary, freelance, investments, etc.).</li>
        <li>Calculate monthly average amounts for irregular income.</li>
      </ol>

      <h2>Step 2: Track Your Expenses</h2>
      <ul>
        <li>Download and print your bank and card statements for the past three months.</li>
        <li>Use tools like <strong>Excel</strong>, <strong>Google Sheets</strong>, or budgeting apps to categorize expenses:</li>
        <ul>
          <li><em>Fixed Expenses:</em> Rent, EMIs, insurance.</li>
          <li><em>Variable Expenses:</em> Food, travel, entertainment.</li>
          <li><em>Irregular Expenses:</em> Repairs, gifts.</li>
        </ul>
      </ul>

      <h2>Step 3: Set Realistic Financial Goals</h2>
      <ol>
        <li>Write down goals: short-term (monthly savings), medium-term (buying a laptop), long-term (down payment for house).</li>
        <li>Set SMART targets—Specific, Measurable, Achievable, Relevant, Time-bound.</li>
      </ol>

      <h2>Step 4: Build Your Budget</h2>
      <ul>
        <li>
          Use the <strong>50/30/20 Rule:</strong>
          <ul>
            <li>50% Needs (essentials)</li>
            <li>30% Wants (discretionary)</li>
            <li>20% Savings & Investments</li>
          </ul>
        </li>
        <li>Adapt the percentages to fit your lifestyle and goals.</li>
        <li>Automate savings via standing instructions or recurring deposits.</li>
      </ul>

      <h2>Step 5: Optimize & Adjust</h2>
      <ul>
        <li>Review your budget monthly; adjust for overspending or extra income.</li>
        <li>Cut unnecessary expenses.</li>
        <li>Negotiate bills or subscriptions to reduce costs.</li>
      </ul>
      <div style={{
        background: '#F7F8FA',
        borderLeft: '6px solid #59b34d',
        padding: '16px',
        margin: '16px 0',
      }}>
        <strong>Pro Tip:</strong> Use free apps like Walnut, Money Manager, or Google Sheets templates for automatic expense tracking!
      </div>

      <h2>Budgeting Tools & Resources</h2>
      <ul>
        <li>
          <strong>Downloadable Templates:</strong> <a href="#budget-template">Monthly Budget Sheet</a>, <a href="#goal-tracker">Goal Tracker</a>
        </li>
        <li>
          <strong>Recommended Apps:</strong> Walnut, Money Manager, YNAB
        </li>
        <li>
          <strong>Books:</strong> "The Psychology of Money" by Morgan Housel, "Rich Dad Poor Dad" by Robert Kiyosaki
        </li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <ul>
        <li><strong>How often should I review my budget?</strong> <br /> Monthly is ideal—adjust for unexpected changes.</li>
        <li><strong>What if my income is irregular?</strong> <br /> Base your budget on the lowest expected monthly income; save windfalls.</li>
        <li><strong>Can budgeting help me save for big goals?</strong> <br /> Yes! Use goal trackers and automate saving to stay on course.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Budgeting is a continuous journey. Whether you’re starting out or already on track, revisit these frameworks to stay disciplined and optimize your finances. For more downloadable resources and personalized advice, check the links provided or reach out in the comments!
      </p>

    </GuideLayout>
  );
}
