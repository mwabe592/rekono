import { Metadata } from "next";
import Header from "@/components/Header/Header";
import Container from "@/components/Common/Container";
import Section from "@/components/Common/Section";
import Footer from "@/components/LandingPage/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - Rekono",
  description:
    "Read Rekono's terms of service for using our statement matching service.",
};

export default function TermsOfServicePage() {
  return (
    <main>
      <Header />
      <Container>
        <Section
          id="terms-of-service"
          title="Terms of Service"
          description="Legal terms and conditions for using Rekono"
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
                    Welcome to Rekono. These Terms of Service ("Terms") govern
                    your use of Rekono's statement matching service, including
                    our website, mobile applications, and related services
                    (collectively, the "Service").
                  </p>
                  <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    By accessing or using our Service, you agree to be bound by
                    these Terms. If you disagree with any part of these terms,
                    then you may not access the Service.
                  </p>
                </section>

                {/* Definitions */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Definitions
                  </h2>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>"Service"</strong> refers to Rekono's statement
                      matching platform and related services
                    </li>
                    <li>
                      <strong>"User," "you," and "your"</strong> refers to you,
                      as the user of the Service
                    </li>
                    <li>
                      <strong>"Company," "we," "us," and "our"</strong> refers
                      to Rekono
                    </li>
                    <li>
                      <strong>"Content"</strong> refers to text, images, or
                      other information you submit to the Service
                    </li>
                    <li>
                      <strong>"Account"</strong> refers to your registered user
                      account on the Service
                    </li>
                  </ul>
                </section>

                {/* Acceptance of Terms */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Acceptance of Terms
                  </h2>
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    By creating an account or using our Service, you confirm
                    that you:
                  </p>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Are at least 18 years old</li>
                    <li>Have the legal capacity to enter into these Terms</li>
                    <li>
                      Will comply with all applicable laws and regulations
                    </li>
                    <li>Accept these Terms in their entirety</li>
                  </ul>
                </section>

                {/* Description of Service */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Description of Service
                  </h2>
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    Rekono provides a statement matching service that helps
                    users:
                  </p>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Upload and process financial documents</li>
                    <li>
                      Match transactions between different financial statements
                    </li>
                    <li>Generate reconciliation reports and insights</li>
                    <li>Streamline financial reconciliation processes</li>
                  </ul>
                </section>

                {/* User Accounts */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    User Accounts
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Account Creation
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      You must provide accurate, current, and complete
                      information during registration
                    </li>
                    <li>
                      You are responsible for maintaining the security of your
                      account credentials
                    </li>
                    <li>
                      You may not share your account with others or allow others
                      to use your account
                    </li>
                    <li>
                      You must notify us immediately of any unauthorized use of
                      your account
                    </li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Account Responsibilities
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      You are responsible for all activities that occur under
                      your account
                    </li>
                    <li>You must keep your account information up to date</li>
                    <li>
                      You may not use the Service for any illegal or
                      unauthorized purpose
                    </li>
                    <li>
                      You may not violate any laws in your jurisdiction through
                      your use of the Service
                    </li>
                  </ul>
                </section>

                {/* Acceptable Use */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Acceptable Use
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Permitted Uses
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    You may use the Service to:
                  </p>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Process your own financial documents and statements</li>
                    <li>
                      Generate reconciliation reports for legitimate business
                      purposes
                    </li>
                    <li>Access and manage your account information</li>
                    <li>Use features and tools provided by the Service</li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Prohibited Uses
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    You may not:
                  </p>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Use the Service for any illegal or fraudulent activities
                    </li>
                    <li>
                      Attempt to gain unauthorized access to the Service or
                      other users' accounts
                    </li>
                    <li>Interfere with or disrupt the Service or servers</li>
                    <li>Upload malicious code, viruses, or harmful content</li>
                    <li>
                      Reverse engineer, decompile, or disassemble the Service
                    </li>
                    <li>
                      Use the Service to process others' financial information
                      without authorization
                    </li>
                    <li>Violate any applicable laws or regulations</li>
                  </ul>
                </section>

                {/* Financial Data and Privacy */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Financial Data and Privacy
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Data Handling
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      We do not collect or store your financial information
                    </li>
                    <li>
                      All processing is done securely and in accordance with our
                      Privacy Policy
                    </li>
                    <li>You retain ownership of your data and content</li>
                    <li>
                      We implement appropriate security measures to protect your
                      information
                    </li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Your Responsibilities
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      You are responsible for the accuracy of data you upload
                    </li>
                    <li>
                      You must have the right to process any financial documents
                      you upload
                    </li>
                    <li>
                      You must comply with applicable financial regulations and
                      laws
                    </li>
                    <li>
                      You should not upload sensitive financial information
                      unless necessary
                    </li>
                  </ul>
                </section>

                {/* Service Availability and Modifications */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Service Availability and Modifications
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Service Availability
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      We strive to maintain high service availability but do not
                      guarantee 100% uptime
                    </li>
                    <li>
                      The Service may be temporarily unavailable for maintenance
                      or updates
                    </li>
                    <li>We are not liable for any interruptions in service</li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Service Modifications
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      We may modify, suspend, or discontinue the Service at any
                      time
                    </li>
                    <li>
                      We will provide reasonable notice of significant changes
                      when possible
                    </li>
                    <li>
                      Your continued use of the Service after changes
                      constitutes acceptance
                    </li>
                  </ul>
                </section>

                {/* Payment Terms */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Payment Terms
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Subscription Plans
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      We offer various subscription plans with different
                      features and pricing
                    </li>
                    <li>
                      All prices are listed in USD unless otherwise specified
                    </li>
                    <li>Prices may change with 30 days' notice</li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Billing and Payment
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      Subscriptions are billed in advance on a recurring basis
                    </li>
                    <li>
                      You authorize us to charge your payment method for all
                      fees
                    </li>
                    <li>Failed payments may result in service suspension</li>
                    <li>Refunds are handled according to our refund policy</li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Cancellation
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>You may cancel your subscription at any time</li>
                    <li>
                      Cancellation takes effect at the end of your current
                      billing period
                    </li>
                    <li>No refunds are provided for partial billing periods</li>
                  </ul>
                </section>

                {/* Intellectual Property */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Intellectual Property
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Our Rights
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      The Service and its original content, features, and
                      functionality are owned by Rekono
                    </li>
                    <li>
                      Our trademarks, service marks, and logos are protected by
                      intellectual property laws
                    </li>
                    <li>
                      You may not use our intellectual property without written
                      permission
                    </li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Your Rights
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      You retain ownership of content you submit to the Service
                    </li>
                    <li>
                      By using the Service, you grant us a limited license to
                      process your content
                    </li>
                    <li>
                      This license is necessary to provide the Service and
                      terminates when you delete your account
                    </li>
                  </ul>
                </section>

                {/* Limitation of Liability */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Limitation of Liability
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Disclaimer of Warranties
                  </h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                    WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING
                    BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Limitation of Damages
                  </h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    IN NO EVENT SHALL REKONO BE LIABLE FOR ANY INDIRECT,
                    INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                    INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE,
                    GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR
                    USE OF THE SERVICE.
                  </p>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Maximum Liability
                  </h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM THESE
                    TERMS OR YOUR USE OF THE SERVICE SHALL NOT EXCEED THE AMOUNT
                    YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE
                    CLAIM.
                  </p>
                </section>

                {/* Indemnification */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Indemnification
                  </h2>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    You agree to defend, indemnify, and hold harmless Rekono and
                    its officers, directors, employees, and agents from and
                    against any claims, damages, obligations, losses,
                    liabilities, costs, or debt arising from:
                  </p>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Your use of the Service</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of any third-party rights</li>
                    <li>Any content you submit to the Service</li>
                  </ul>
                </section>

                {/* Termination */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Termination
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Termination by You
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>You may terminate your account at any time</li>
                    <li>
                      Termination is effective immediately upon account deletion
                    </li>
                    <li>
                      We will delete your data within 30 days of termination
                    </li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Termination by Us
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    We may terminate or suspend your account immediately if:
                  </p>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>You violate these Terms</li>
                    <li>You engage in fraudulent or illegal activities</li>
                    <li>You fail to pay subscription fees</li>
                    <li>We discontinue the Service</li>
                  </ul>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Effect of Termination
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    Upon termination:
                  </p>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Your right to use the Service ceases immediately</li>
                    <li>We will delete your account and data</li>
                    <li>
                      Any provisions that should survive termination will remain
                      in effect
                    </li>
                  </ul>
                </section>

                {/* Governing Law and Disputes */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Governing Law and Disputes
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Governing Law
                  </h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    These Terms are governed by and construed in accordance with
                    the laws of [Your Jurisdiction], without regard to conflict
                    of law principles.
                  </p>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Dispute Resolution
                  </h3>
                  <ul className="ml-4 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>
                      We encourage resolving disputes through good faith
                      communication
                    </li>
                    <li>
                      Any disputes shall be resolved through binding arbitration
                    </li>
                    <li>
                      Arbitration shall be conducted in [Your Jurisdiction]
                      under [Arbitration Rules]
                    </li>
                    <li>
                      You waive any right to a jury trial or class action
                      lawsuit
                    </li>
                  </ul>
                </section>

                {/* Miscellaneous */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Miscellaneous
                  </h2>

                  <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Entire Agreement
                  </h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    These Terms constitute the entire agreement between you and
                    Rekono regarding the Service and supersede all prior
                    agreements.
                  </p>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Severability
                  </h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    If any provision of these Terms is found to be
                    unenforceable, the remaining provisions will remain in full
                    force and effect.
                  </p>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Waiver
                  </h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    Our failure to enforce any right or provision of these Terms
                    will not be considered a waiver of those rights.
                  </p>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Assignment
                  </h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    You may not assign or transfer your rights under these
                    Terms. We may assign our rights and obligations to any party
                    at any time.
                  </p>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Notices
                  </h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    We may provide notices to you through the Service, email, or
                    other reasonable means. Notices are effective upon delivery.
                  </p>

                  <h3 className="mt-6 mb-3 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Force Majeure
                  </h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    We are not liable for any failure to perform due to
                    circumstances beyond our reasonable control, including
                    natural disasters, government actions, or technical
                    failures.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    Contact Information
                  </h2>
                  <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
                    If you have questions about these Terms of Service, please
                    contact us:
                  </p>

                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                      Rekono
                    </h3>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p>
                        <strong>Email:</strong> help@rekono.app
                      </p>
                      <p>
                        <strong>Address:</strong> []
                      </p>
                      <p>
                        <strong>Phone:</strong> []
                      </p>
                    </div>
                  </div>
                </section>

                {/* Footer Note */}
                <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-700">
                  <p className="text-sm text-gray-500 italic dark:text-gray-400">
                    These Terms of Service are effective as of the date listed
                    above and apply to all users of the Rekono Service.
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
