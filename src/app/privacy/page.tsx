import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | AM4M - Accept Me 4 Me",
  description:
    "AM4M Privacy Policy - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
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
                Privacy Policy
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
                Your privacy is paramount at AM4M. This Privacy Policy explains how Accept Me 4 Me, Inc., (&quot;AM4M,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, shares, and protects your personal information when you access and use the AM4M mobile application, websites, and any related services, features, or content (collectively, the &quot;Service&quot;).
              </p>
              <p className="text-gray-600">
                By accessing, registering for, or using our Service, you agree to the collection, use, and sharing of your information as described in this Privacy Policy. If you do not agree with our practices, please do not use our Service.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
              <p className="text-gray-600">We collect information to provide and improve our Service and to help you connect with others.</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">a. Information You Provide Directly</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Account Information:</strong> When you create an account, you provide personal details such as your name, email address, date of birth, gender, and optionally, your sexual orientation.</li>
                <li><strong>Profile Information:</strong> To help you connect with others, you provide information about your personality, values, interests, hobbies, lifestyle, and other preferences. This is core to AM4M&apos;s matching.</li>
                <li><strong>User Content:</strong> This includes messages, photos (if allowed), videos (if allowed), and any other content you upload or share on the Service.</li>
                <li><strong>Communications:</strong> When you communicate with us (e.g., customer support inquiries), we collect the content of those communications.</li>
                <li><strong>Payment Information:</strong> If you purchase a subscription or make in-app purchases, we collect payment details such as your credit card number, billing address, and other transaction information. This information is processed by third-party payment processors (e.g., Apple App Store, Google Play Store), and we do not store your full payment card details.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">b. Information We Collect Automatically</h3>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Usage Data:</strong> We collect information about how you use the Service, including your activity within the app (e.g., features used, interactions with other profiles, time spent on the app), and the pages or content you view.</li>
                <li><strong>Device Information:</strong> We collect information from and about the devices you use to access the Service, such as device ID, device type, operating system, settings, and mobile network information.</li>
                <li><strong>Location Data:</strong> With your permission, we may collect precise location data through GPS, Wi-Fi, or cellular network triangulation to offer features like finding nearby users (though AM4M prioritizes personality, location can be an optional filter). You can disable location services through your device settings.</li>
                <li><strong>Log Data:</strong> Our servers automatically record information when you use our Service, including your IP address, browser type, internet service provider (ISP), referring/exit pages, and date/time stamps.</li>
                <li><strong>Cookies and Similar Technologies:</strong> We use cookies, web beacons, and similar technologies to recognize you, remember your preferences, enhance your experience, and measure the effectiveness of our Service and advertisements. You can manage your cookie preferences through your browser settings.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">c. Information from Third Parties</h3>
              <p className="text-gray-600">
                We may receive information about you from third parties, such as social media services (if you choose to connect your account) or advertising partners, to improve our Service and target our advertisements.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-600">We use the information we collect for various purposes:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>To Provide and Maintain the Service:</strong> This includes creating and managing your account, providing customer support, processing transactions, and enabling communication between users.</li>
                <li><strong>To Personalize Your Experience:</strong> We use your profile information, interests, and usage data to create your personality profile and power our matching algorithms, helping you discover compatible connections.</li>
                <li><strong>To Improve and Develop the Service:</strong> We analyze usage trends, gather feedback, and conduct research to understand how our Service is used, identify areas for improvement, and develop new features.</li>
                <li><strong>For Safety and Security:</strong> We use information to detect and prevent fraud, unauthorized access, and other harmful activities, and to ensure compliance with our Terms and Community Guidelines.</li>
                <li><strong>For Communication:</strong> We use your email address to send you service-related announcements, updates, promotional offers, and newsletters (you can opt-out of promotional emails).</li>
                <li><strong>For Legal Compliance:</strong> To comply with legal obligations, enforce our Terms, and protect our rights, privacy, safety, or property, and that of our users or the public.</li>
                <li><strong>For Marketing and Advertising:</strong> To show you relevant ads on our Service and other platforms, based on your interests and activities.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. How We Share Your Information</h2>
              <p className="text-gray-600">We are committed to keeping your information private but may share it in certain circumstances:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>With Other Users:</strong> Your public profile information (e.g., personality traits, interests, user content you post) is visible to other users of the Service to facilitate connections. Messages and content shared in private chats are only visible to the participants.</li>
                <li><strong>With Our Service Providers:</strong> We work with third-party vendors and service providers who help us operate, provide, and improve the Service (e.g., hosting, analytics, payment processing, customer support, marketing). These providers are obligated to protect your information and only use it for the purposes we specify.</li>
                <li><strong>For Business Transfers:</strong> If AM4M is involved in a merger, acquisition, asset sale, or bankruptcy, your information may be transferred as part of that transaction.</li>
                <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court order or subpoena). We may also disclose information to enforce our Terms, protect our rights, privacy, safety, or property, and that of our users or the public.</li>
                <li><strong>With Your Consent:</strong> We may share your information with third parties when we have your explicit consent to do so.</li>
                <li><strong>Aggregated or Anonymized Data:</strong> We may share aggregated or anonymized information that cannot reasonably be used to identify you. This data may be used for research, industry analysis, demographic profiling, and marketing.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Your Choices and Rights</h2>
              <p className="text-gray-600">You have control over your information:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li><strong>Profile Settings:</strong> You can review and update most of your profile information directly within the app.</li>
                <li><strong>Communication Preferences:</strong> You can opt-out of receiving promotional emails from us by following the unsubscribe instructions in those emails. You may still receive service-related communications.</li>
                <li><strong>Location Services:</strong> You can disable location services for the AM4M app through your device settings at any time.</li>
                <li><strong>Device Permissions:</strong> You can manage permissions (e.g., camera, microphone, photo access) through your device settings.</li>
                <li><strong>Deleting Your Account:</strong> You can delete your account at any time by following the instructions in the app. Once deleted, your profile will be removed from the Service, and your data will be retained for a limited period in accordance with our data retention policy and legal obligations.</li>
                <li><strong>Accessing Your Data:</strong> You may have the right to request access to the personal data we hold about you.</li>
                <li><strong>Correction/Rectification:</strong> You may have the right to request that we correct any inaccurate personal data about you.</li>
                <li><strong>Data Portability:</strong> In some jurisdictions, you may have the right to receive your personal data in a structured, commonly used, and machine-readable format.</li>
              </ul>
              <p className="text-gray-600 mt-4">
                To exercise these rights, please contact us at <a href="mailto:contact@acceptme4me.com" className="text-primary hover:underline font-medium">contact@acceptme4me.com</a>. We will respond to your request in accordance with applicable laws.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Data Security</h2>
              <p className="text-gray-600">
                We implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Data Retention</h2>
              <p className="text-gray-600">
                We retain your personal information for as long as necessary to provide the Service, comply with our legal obligations, resolve disputes, and enforce our agreements. Once your account is deleted, we will remove your public profile information from the Service. However, we may retain certain information for a longer period if required by law or for legitimate business purposes.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Children&apos;s Privacy</h2>
              <p className="text-gray-600">
                Our Service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information and terminate the account.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. International Data Transfers</h2>
              <p className="text-gray-600">
                Currently, AM4M operates within the United States. Your information will be processed and stored in the United States, where data protection laws may differ from those in your country of residence. By using the Service, you consent to the transfer of your information to the United States.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. If we make material changes, we will notify you through the app or by email. Your continued use of the Service after the effective date of the revised Privacy Policy means you accept the updated terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p className="text-gray-900 font-medium mt-2">
                Accept Me 4 Me, Inc. – <a href="mailto:contact@acceptme4me.com" className="text-primary hover:underline">contact@acceptme4me.com</a>
              </p>

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
