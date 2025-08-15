import { Metadata } from "next";
import Header from "@/components/Header/Header";
import Container from "@/components/Common/Container";
import Section from "@/components/Common/Section";
import Footer from "@/components/LandingPage/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Rekono",
  description:
    "Learn how Rekono protects your privacy and handles your data when using our statement matching service.",
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Header />
      <Container>
        <Section
          id="privacy-policy"
          title="Privacy Policy"
          description="How we protect your privacy and handle your data"
        >
          <div className="mx-auto max-w-4xl rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-900">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-6 border-b border-gray-200 pb-4 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
                <strong>Last Updated:</strong> July 12 2025
              </div>

              <div className="space-y-8">
                {/* Introduction */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Introduction
                  </h2>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    Rekono ("we," "us," "our," or "Rekono") is committed to
                    protecting your privacy and ensuring the security of your
                    personal and financial information. This Privacy Policy
                    describes how we collect, use, disclose, and safeguard your
                    information when you use our statement matching service,
                    including our website, mobile applications, and related
                    services (collectively, the "Service").
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    By using our Service, you consent to the data practices
                    described in this Privacy Policy. If you do not agree with
                    our policies and practices, please do not use our Service.
                  </p>
                </section>

                {/* Information We Collect */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Information We Collect
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Personal Information
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>Account Information:</strong> Name, email address,
                      phone number, and profile information
                    </li>
                    <li>
                      <strong>Authentication Data:</strong> Login credentials
                      and authentication tokens
                    </li>
                    <li>
                      <strong>Profile Information:</strong> Company name, job
                      title, and professional details
                    </li>
                    <li>
                      <strong>Communication Preferences:</strong> Marketing
                      preferences and notification settings
                    </li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Financial Information
                  </h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    <strong>We do not collect any financial information</strong>
                  </p>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Usage Information
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>Service Usage:</strong> How you interact with our
                      Service, features used, and time spent
                    </li>
                    <li>
                      <strong>Technical Data:</strong> IP address, browser type,
                      device information, and operating system
                    </li>
                    <li>
                      <strong>Log Data:</strong> Server logs
                    </li>
                    <li>
                      <strong>Cookies and Tracking:</strong> Information
                      collected through cookies and similar technologies
                    </li>
                  </ul>
                </section>

                {/* How We Use Your Information */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    How We Use Your Information
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Primary Service Delivery
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Provide and maintain our statement matching service</li>
                    <li>
                      Process and analyze financial documents for reconciliation
                    </li>
                    <li>Generate transaction matching reports and insights</li>
                    <li>
                      Improve accuracy and efficiency of our matching algorithms
                    </li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Account Management
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Create and manage your user account</li>
                    <li>Authenticate your identity and prevent fraud</li>
                    <li>Process payments and manage subscriptions</li>
                    <li>Provide customer support and respond to inquiries</li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Service Improvement
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Analyze usage patterns to improve our Service</li>
                    <li>Develop new features and functionality</li>
                    <li>Conduct research and analytics</li>
                    <li>Ensure Service security and reliability</li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Communication
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Send important Service updates and notifications</li>
                    <li>Provide customer support and respond to requests</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                {/* Data Sharing and Disclosure */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Data Sharing and Disclosure
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    We Do Not Sell Your Data
                  </h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    Rekono does not sell, rent, or trade your personal or
                    financial information to third parties for marketing
                    purposes.
                  </p>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Limited Sharing for Service Delivery
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    We may share your information with:
                  </p>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>Service Providers:</strong> Third-party vendors
                      who help us operate our Service (e.g., cloud hosting,
                      payment processing)
                    </li>
                    <li>
                      <strong>Analytics Partners:</strong> Tools that help us
                      understand Service usage and improve performance
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> When required by law,
                      court order, or government request
                    </li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Business Transfers
                  </h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    In the event of a merger, acquisition, or sale of assets,
                    your information may be transferred as part of the business
                    transaction. We will notify you of any such change in
                    ownership or control.
                  </p>
                </section>

                {/* Data Security */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Data Security
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Security Measures
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    We implement industry-standard security measures to protect
                    your information:
                  </p>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>Encryption:</strong> All data is encrypted in
                      transit and at rest using AES-256 encryption
                    </li>
                    <li>
                      <strong>Access Controls:</strong> Strict access controls
                      and authentication requirements
                    </li>
                    <li>
                      <strong>Regular Audits:</strong> Security assessments and
                      penetration testing
                    </li>
                    <li>
                      <strong>Employee Training:</strong> Regular security
                      awareness training for our team
                    </li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Data Retention
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>Active Accounts:</strong> Data is retained while
                      your account is active
                    </li>
                    <li>
                      <strong>Account Deletion:</strong> Upon account deletion,
                      data is permanently removed within 30 days
                    </li>
                    <li>
                      <strong>Legal Requirements:</strong> Some data may be
                      retained longer if required by law
                    </li>
                  </ul>
                </section>

                {/* Your Rights and Choices */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Your Rights and Choices
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Access and Control
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    You have the right to:
                  </p>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Access and review your personal information</li>
                    <li>Update or correct inaccurate information</li>
                    <li>Request deletion of your account and data</li>
                    <li>Export your data in a portable format</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Data Processing Controls
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>Consent Management:</strong> Control how your data
                      is processed
                    </li>
                    <li>
                      <strong>Data Portability:</strong> Request a copy of your
                      data
                    </li>
                    <li>
                      <strong>Right to Erasure:</strong> Request deletion of
                      your personal data
                    </li>
                    <li>
                      <strong>Processing Restrictions:</strong> Limit how we
                      process your information
                    </li>
                  </ul>
                </section>

                {/* Cookies and Tracking Technologies */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Cookies and Tracking Technologies
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Types of Cookies
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>Essential Cookies:</strong> Required for Service
                      functionality
                    </li>
                    <li>
                      <strong>Performance Cookies:</strong> Help us understand
                      Service usage
                    </li>
                    <li>
                      <strong>Functional Cookies:</strong> Remember your
                      preferences and settings
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Provide insights into
                      Service performance
                    </li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Managing Cookies
                  </h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    You can control cookie settings through your browser
                    preferences. However, disabling certain cookies may affect
                    Service functionality.
                  </p>
                </section>

                {/* Third-Party Services */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Third-Party Services
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Integrated Services
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    Our Service may integrate with:
                  </p>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>Payment Processors:</strong> Stripe, PayPal, or
                      similar services
                    </li>
                    <li>
                      <strong>Authentication Providers:</strong> Google,
                      Microsoft, or other OAuth services
                    </li>
                    <li>
                      <strong>Analytics Tools:</strong> Google Analytics,
                      Mixpanel, or similar services
                    </li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Third-Party Policies
                  </h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    These services have their own privacy policies. We encourage
                    you to review them to understand how they handle your
                    information.
                  </p>
                </section>

                {/* International Data Transfers */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    International Data Transfers
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Data Location
                  </h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    Your information may be processed and stored in countries
                    other than your own. We ensure appropriate safeguards are in
                    place to protect your data during international transfers.
                  </p>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Compliance
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    We comply with applicable data protection laws, including:
                  </p>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>GDPR:</strong> For European Union users
                    </li>
                    <li>
                      <strong>CCPA:</strong> For California residents
                    </li>
                    <li>
                      <strong>Other Local Laws:</strong> As applicable to your
                      jurisdiction
                    </li>
                  </ul>
                </section>

                {/* Children's Privacy */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Children's Privacy
                  </h2>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    Our Service is not intended for children under 13 years of
                    age. We do not knowingly collect personal information from
                    children under 13. If you become aware that a child has
                    provided us with personal information, please contact us
                    immediately.
                  </p>
                </section>

                {/* Changes to This Privacy Policy */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Changes to This Privacy Policy
                  </h2>
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    We may update this Privacy Policy from time to time. We will
                    notify you of any material changes by:
                  </p>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Posting the updated policy on our website</li>
                    <li>Sending an email notification</li>
                    <li>Displaying a prominent notice in our Service</li>
                  </ul>
                  <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    Your continued use of the Service after any changes
                    constitutes acceptance of the updated Privacy Policy.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Contact Information
                  </h2>
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    If you have questions about this Privacy Policy or our data
                    practices, please contact us:
                  </p>

                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Rekono
                    </h3>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p>
                        <strong>Email:</strong> privacy@rekono.app
                      </p>
                    </div>
                  </div>
                </section>

                {/* Footer Note */}
                <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
                  <p className="text-sm text-gray-500 italic dark:text-gray-400">
                    This Privacy Policy is effective as of the date listed above
                    and applies to all users of the Rekono Service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Container>
      <Footer />
    </main>
  );
}
