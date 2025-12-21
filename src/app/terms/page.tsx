import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | AM4M - Accept Me 4 Me",
  description:
    "AM4M Terms and Conditions of Use - Read about the rules and guidelines for using our service.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 sm:pt-24">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 overflow-hidden bg-gray-50">
          <div className="absolute inset-0 hero-mesh" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="badge badge-primary mb-4">Legal</span>
              <h1 className="heading-lg text-4xl sm:text-5xl text-gray-900">
                Terms &amp; Conditions
              </h1>
              <p className="mt-4 text-gray-600">
                Effective Date: June 13, 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-gray max-w-none legal-content">
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to AM4M! These Terms and Conditions of Use (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;you,&quot; &quot;your,&quot; or &quot;user&quot;) and Accept Me 4 Me, Inc., an Illinois limited liability company (&quot;AM4M,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), governing your access to and use of the AM4M mobile application, websites, and any related services, products, or content (collectively, the &quot;Service&quot;).
              </p>
              
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 my-6">
                <p className="text-gray-700 font-medium m-0">
                  By accessing, registering for, or using the Service, you signify that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy, Community Guidelines, and any other policies or guidelines referenced herein or made available to you through the Service. If you do not agree to these Terms, you must not access or use the Service.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Eligibility (Who Can Use AM4M)</h2>
              <p className="text-gray-600">Before you create an account on AM4M, you must be:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>At least 18 years old or the age of majority in your jurisdiction, if greater than 18.</li>
                <li>Legally competent and permitted by the laws of your home country or jurisdiction to enter into a binding agreement with AM4M.</li>
                <li>A resident of the United States or a place where using the Service is legal.</li>
                <li>Not prohibited by law from using the Service.</li>
                <li>You are not required to register as a sex offender with any state, federal or local sex offender registry.</li>
                <li>You do not have more than one account on our Services.</li>
              </ul>
              <p className="text-gray-600 mt-4">By using AM4M, you confirm that you meet these requirements.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Your Account &amp; Security</h2>
              <p className="text-gray-600">When you sign up for AM4M, you&apos;ll need to provide accurate and complete information. You agree to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Keep your login details private.</li>
                <li>Not share your account or password with anyone else.</li>
                <li>Tell us immediately if you suspect unauthorized use or a security breach.</li>
              </ul>
              <p className="text-gray-600 mt-4">We can suspend or close any account that provides false or misleading information.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Respecting Our Community (Acceptable Use &amp; Guidelines)</h2>
              <p className="text-gray-600">AM4M is built on respect, authenticity, and inclusion. Please don&apos;t:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Use the Service for anything illegal, harmful, or exploitative.</li>
                <li>Harass, threaten, stalk, or defame others.</li>
                <li>Post or transmit content that promotes or encourages racism, sexism, hatred, bigotry, violence, or discrimination based on (but not limited to) race, ethnicity, nationality, immigration status, caste, religion, gender, gender identity or expression, sexual orientation, disability, body type, or health status.</li>
                <li>Post or display sexually explicit, pornographic, or otherwise offensive content, including nudity, on your public profile or in any public area of the Service.</li>
                <li>Impersonate any person or entity, falsely state or misrepresent your affiliation with any person or entity, or create a fake account.</li>
                <li>Use bots, scrapers, or other automated tools to access the Service.</li>
                <li>Use the Service for any commercial or promotional purposes, including advertising, sales, competitions, fundraising, promoting social media handles to gain followers, or engaging in any form of sex work, escort services, or compensated relationships. AM4M is for personal connections only.</li>
                <li>Post any content involving minors that is sexually suggestive, exploitative, or abusive, or otherwise endangers children. You must not display photos of unaccompanied or unclothed minors, including photos of your younger self.</li>
                <li>Post content that infringes upon the intellectual property rights or other proprietary rights of others.</li>
              </ul>
              <p className="text-gray-600 mt-4">Breaking these rules may lead to your content being removed, your account suspended, or even legal action.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Your Content &amp; What We Can Do With It</h2>
              <p className="text-gray-600">
                You own the content you post on AM4M (&quot;User Content&quot;). However, you give AM4M a non-exclusive, worldwide, royalty-free license to use, display, reproduce, and share your User Content to provide and promote the Service.
              </p>
              <p className="text-gray-600 mt-4">You are fully responsible for your User Content and confirm that:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>You own the rights to it or have obtained the necessary permissions.</li>
                <li>It doesn&apos;t infringe on anyone else&apos;s rights or violate any laws.</li>
              </ul>
              <p className="text-gray-600 mt-4">We can remove any content that violates these Terms or our community standards.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Your Privacy</h2>
              <p className="text-gray-600">
                Your privacy is critically important to us. Our <Link href="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link> (accessible within the app and on our website) details how we collect, use, store, share, and protect your personal data, including sensitive information you provide for profiling and matching purposes. By using the Service, you consent to the collection and use of your information as described in our Privacy Policy. Please review it carefully.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Subscriptions &amp; Payments</h2>
              <p className="text-gray-600">AM4M may offer both free and paid features. If you purchase a subscription or make in-app purchases:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>You authorize us and our third-party payment processors to charge your selected payment method for all applicable fees and taxes.</li>
                <li>All fees and charges are non-refundable, except where required by applicable law. For instance, residents of certain states, such as California (under California Civil Code §1789.17), may have specific cancellation rights which will be honored.</li>
                <li>We may change pricing, but we&apos;ll notify you in advance of any increases. Your continued use of the Service after a price change constitutes your acceptance of the new price.</li>
                <li>Subscriptions may automatically renew unless you cancel at least 24 hours before your current billing period ends.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Ending Your Account (Termination)</h2>
              <p className="text-gray-600"><strong>By You:</strong> You may terminate your account at any time by accessing the &quot;Settings&quot; page within the app and following the &quot;Delete Account&quot; instructions. Your account will be deleted immediately, though it may take some time for your User Content to be completely removed from the Service&apos;s systems.</p>
              <p className="text-gray-600 mt-4"><strong>By AM4M:</strong> We reserve the right to suspend or terminate your account, or remove any User Content, at our sole discretion, without notice or liability, for any reason, including but not limited to:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Violation of these Terms, our Community Guidelines, or applicable law.</li>
                <li>If we believe your actions may cause legal liability for us or our users.</li>
                <li>If your account has been inactive for an extended period.</li>
                <li>For any other reason we deem appropriate to protect the integrity of the Service or its users.</li>
              </ul>
              <p className="text-gray-600 mt-4"><strong>Effect of Termination:</strong> Upon termination, your right to use the Service will immediately cease. Any active subscriptions will be cancelled, and generally, no refunds will be provided for any unused portion of a subscription period or for any features you have already been charged for, except as expressly required by law. Termination does not relieve you of any obligations under any active subscriptions or liabilities incurred prior to termination.</p>
              <p className="text-gray-600 mt-4"><strong>Appeals:</strong> If you believe we have made a mistake in taking action on your account or User Content (e.g., a ban or content removal), you may have the option to appeal our decision within a specified timeframe of six months through our support channels.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. What We Don&apos;t Promise (Disclaimer of Warranties)</h2>
              <p className="text-gray-600">To the fullest extent allowed by U.S. law:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>The Service is provided &quot;as is&quot; and &quot;as available.&quot;</li>
                <li>We don&apos;t make any warranties, express or implied, including about merchantability, fitness for a particular purpose, or non-infringement.</li>
                <li>We don&apos;t guarantee that the Service will be secure, always available, or error-free.</li>
              </ul>
              <p className="text-gray-600 mt-4">Using the Service is at your own risk.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. How We Limit Our Liability</h2>
              <p className="text-gray-600">To the fullest extent allowed by law, AM4M and its affiliates won&apos;t be liable for:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Any indirect, incidental, special, consequential, or punitive damages.</li>
                <li>Any loss of data, profits, revenue, or business interruption.</li>
                <li>Damages resulting from your use or inability to use the Service.</li>
              </ul>
              <p className="text-gray-600 mt-4">Our total liability under these Terms won&apos;t exceed the greater of $100 or the amount you paid (if any) in the past 12 months for access to the Service. Some states don&apos;t allow certain limitations on warranties or liabilities, so some of these limitations might not apply to you.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Protecting AM4M (Indemnification)</h2>
              <p className="text-gray-600">You agree to protect and hold harmless AM4M, its officers, employees, agents, and affiliates from any claims, liabilities, damages, losses, and expenses arising from:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Your use or misuse of the Service.</li>
                <li>Your violation of these Terms.</li>
                <li>Your infringement of any intellectual property or other rights of any person or entity.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Governing Law &amp; Resolving Disputes</h2>
              <p className="text-gray-600">These Terms are governed by the laws of the State of Illinois, without regard to its conflict of laws rules.</p>
              <p className="text-gray-600 mt-4"><strong>Dispute Resolution:</strong> Any dispute relating to these Terms or the Service will be resolved through binding arbitration in Illinois, following the rules of the American Arbitration Association. You waive your right to a jury trial or to participate in a class action.</p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Third-Party Links and Services</h2>
              <p className="text-gray-600">
                The Service may contain links to third-party websites, applications, or services that are not owned or controlled by AM4M. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that AM4M shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">13. Changes to These Terms</h2>
              <p className="text-gray-600">
                We may update these Terms from time to time. If we make significant changes, we&apos;ll let you know through the app or by email. If you continue to use the Service after these changes, it means you accept the revised Terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">14. Contact Us</h2>
              <p className="text-gray-600">For any notices or legal inquiries, please contact us in writing at:</p>
              <p className="text-gray-900 font-medium mt-2">
                Accept Me 4 Me, Inc. – <a href="mailto:contact@acceptme4me.com" className="text-primary hover:underline">contact@acceptme4me.com</a>
              </p>

              <div className="bg-gray-50 rounded-2xl p-6 mt-10 border border-gray-100">
                <p className="text-gray-700 font-medium text-center m-0">
                  By using AM4M, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
                </p>
              </div>

              {/* Back link */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
