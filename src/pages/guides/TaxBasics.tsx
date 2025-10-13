import GuideLayout from './GuideLayout';

export default function TaxBasics() {
  return (
    <GuideLayout
      title="Tax Basics"
      subtitle="Understand essential tax concepts to stay compliant and retain more income."
      lastUpdated="October 2025"
    >
      <h2>Introduction</h2>
      <p>
        Taxes help fund government services and infrastructure, but understanding them lets you retain more of your income and avoid penalties. This guide breaks down the essentials for Indian taxpayers—including informal workers and freelancers.
      </p>

      <h2>Step 1: Know Your Taxable Income</h2>
      <ul>
        <li><strong>Taxable income</strong> is your total annual earnings minus eligible exemptions and deductions.</li>
        <li>
          Includes:
          <ul>
            <li>Salaries and wages</li>
            <li>Freelance, consulting, or gig payments</li>
            <li>Interest, rental, or business income</li>
          </ul>
        </li>
        <li>Keep records of all income sources, even cash payments.</li>
      </ul>

      <h2>Step 2: Understand India’s Tax Slabs (FY 2025–26 Example)</h2>
      <ul>
        <li>
          <strong>New Regime Slabs:</strong>
          <ul>
            <li>Up to ₹3 lakh: Nil</li>
            <li>₹3–6 lakh: 5%</li>
            <li>₹6–9 lakh: 10%</li>
            <li>₹9–12 lakh: 15%</li>
            <li>₹12–15 lakh: 20%</li>
            <li>Above ₹15 lakh: 30%</li>
          </ul>
        </li>
        <li>Rates may vary; always check latest portal or government notifications.</li>
      </ul>

      <h2>Step 3: Deductions and Allowances</h2>
      <ul>
        <li>Section 80C: Save up to ₹1.5 lakh on taxable income by investing in PPF, ELSS, LIC, etc.</li>
        <li>Section 80D: Medical insurance deduction up to ₹25,000 (senior citizens ₹50,000).</li>
        <li>Standard deduction for salaried: ₹50,000 automatically.</li>
        <li>Other deductions: Home loan interest (Section 24), education loan, NPS, donations.</li>
      </ul>

      <h2>Step 4: How to File Your Tax Return</h2>
      <ol>
        <li>Gather all documents: Form 16, salary slips, bank statements, investment proofs, and receipts.</li>
        <li>Register/login to the <a href="https://incometax.gov.in">Income Tax Portal</a>.</li>
        <li>Choose correct ITR form (most individuals use ITR-1 or ITR-4).</li>
        <li>Fill in details or upload prefilled JSON if available.</li>
        <li>Submit and verify return—digital verification via Aadhaar OTP is quickest.</li>
        <li>Track refund status and keep acknowledgment for reference.</li>
      </ol>
      <div style={{
        background: '#E3F2FD',
        borderLeft: '6px solid #2979FF',
        padding: '16px',
        margin: '16px 0',
      }}>
        <strong>Tip:</strong> Free portal guides, apps (ClearTax, TaxBuddy), and local CA can help you file easily.
      </div>

      <h2>For Informal Sector/Gig Workers</h2>
      <ul>
        <li>
          <strong>No salary slips? No worries!</strong>
          <ul>
            <li>Keep simple monthly records for all income—diary, Excel sheet, or app.</li>
            <li>File using ITR-4 (Presumptive Income), which simplifies calculation for small businesses, freelancers, auto/drivers, kirana shop owners, etc.</li>
          </ul>
        </li>
        <li>Pay advance tax quarterly if annual tax due exceeds ₹10,000.</li>
        <li>Report even cash or UPI income to avoid notice or penalty.</li>
      </ul>

      <h2>Common Tax Mistakes to Avoid</h2>
      <ul>
        <li>Missing income sources—even small side gigs count!</li>
        <li>Misplacing deduction proofs—scan and upload photos to cloud/apps.</li>
        <li>Ignoring deadlines—returns usually due July 31 every year.</li>
        <li>Not verifying return after filing.</li>
      </ul>

      <h2>Resources & Tools</h2>
      <ul>
        <li>
          <strong>Tax Calculator:</strong> <a href="#tax-calculator-template">Download worksheet</a>
        </li>
        <li>
          <strong>Recommended Apps:</strong> ClearTax, TaxBuddy, ET Money
        </li>
        <li>
          <strong>Further Reading:</strong> Official Income Tax Portal, “Let's Talk Money” by Monika Halan
        </li>
      </ul>

      <h2>Frequently Asked Questions</h2>
      <ul>
        <li><strong>Do I need to file if my income is below the taxable slab?</strong><br /> Not mandatory for most, but recommended to build history and get refunds if TDS deducted.</li>
        <li><strong>I work freelance part-time. Which form do I use?</strong><br /> ITR-4 for presumptive income; ITR-3 for full business accounting.</li>
        <li><strong>Can I file taxes on my phone?</strong><br /> Yes—use the official portal or trusted tax apps.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        Tax compliance is easier when you’re organized. Use digital tools, keep simple records, and learn your deductions—and you’ll save money while staying stress-free. Check official notifications yearly for rate changes or new benefits!
      </p>
    </GuideLayout>
  );
}
